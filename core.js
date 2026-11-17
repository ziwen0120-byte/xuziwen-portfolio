/* Shared, dependency-free browser crypto and byte-range implementation. */
globalThis.PortfolioCore = (() => {
  const encoder = new TextEncoder();
  const decode = (value) => Uint8Array.from(atob(value), (c) => c.charCodeAt(0));
  async function derive(password, config) {
    const material = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt: decode(config.salt), iterations: config.iterations }, material, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  }
  async function decrypt(bytes, key, aad) {
    const envelope = new Uint8Array(bytes);
    if (envelope.length < 28) throw new Error("Invalid encrypted resource");
    return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: envelope.slice(0, 12), additionalData: encoder.encode(aad), tagLength: 128 }, key, envelope.slice(12)));
  }
  function range(header, size) {
    if (!header) return { start: 0, end: size - 1, partial: false };
    const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
    if (!match || (!match[1] && !match[2]) || size === 0) return null;
    let start, end;
    if (!match[1]) {
      const suffix = Number(match[2]);
      if (!Number.isSafeInteger(suffix) || suffix < 1) return null;
      start = Math.max(0, size - suffix); end = size - 1;
    } else {
      start = Number(match[1]); end = match[2] ? Number(match[2]) : size - 1;
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || start > end) return null;
      end = Math.min(end, size - 1);
    }
    return { start, end, partial: true };
  }
  async function assetResponse(request, path, entry, session, config, fetcher = fetch, cache = new Map()) {
    const selected = range(request.headers.get("Range"), entry.size);
    if (!selected) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${entry.size}`, "Cache-Control": "no-store" } });
    const length = Math.max(0, selected.end - selected.start + 1);
    const headers = { "Content-Type": entry.type, "Content-Length": String(length), "Accept-Ranges": "bytes", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
    if (selected.partial) headers["Content-Range"] = `bytes ${selected.start}-${selected.end}/${entry.size}`;
    const status = selected.partial ? 206 : 200;
    if (request.method === "HEAD" || !length) return new Response(null, { status, headers });
    const first = Math.floor(selected.start / config.chunkSize), last = Math.floor(selected.end / config.chunkSize);
    let index = first, cancelled = false;
    const stream = new ReadableStream({
      async pull(controller) {
        if (cancelled) return;
        try {
          if (index > last) { controller.close(); return; }
          const chunkIndex = index++;
          const name = entry.chunks[chunkIndex];
          if (!/^vault\/[a-f0-9]{32}\.bin$/.test(name)) throw new Error("Invalid asset mapping");
          let plain = cache.get(name);
          if (!plain) {
            const url = new URL(config.scope + name, request.url);
            const response = await fetcher(url.href, { cache: "no-store", credentials: "same-origin" });
            if (!response.ok) throw new Error("Encrypted resource unavailable");
            plain = await decrypt(await response.arrayBuffer(), session.key, `${config.version}:${path}:${chunkIndex}`);
            const expected = Math.min(config.chunkSize, entry.size - chunkIndex * config.chunkSize);
            if (plain.length !== expected) throw new Error("Invalid resource length");
            while (cache.size >= 12) cache.delete(cache.keys().next().value);
            cache.set(name, plain);
          } else { cache.delete(name); cache.set(name, plain); }
          if (cancelled) return;
          const from = chunkIndex === first ? selected.start % config.chunkSize : 0;
          const to = chunkIndex === last ? selected.end % config.chunkSize + 1 : plain.length;
          controller.enqueue(plain.slice(from, to));
          if (index > last) controller.close();
        } catch (error) { if (!cancelled) controller.error(error); }
      },
      cancel() { cancelled = true; },
    });
    return new Response(stream, { status, headers });
  }
  return { derive, decrypt, range, assetResponse };
})();
