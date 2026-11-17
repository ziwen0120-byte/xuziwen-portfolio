/* CONFIG is supplied by the private build, and contains no password or key. */
importScripts("./core.js");
const CONFIG = {"format":1,"version":"3310c514a9fec863e355d6be","iterations":600000,"salt":"YDvZrSsvOgpy74RHbppccW3LP9P8OtmnUqHbrlnMPio=","manifest":"vault/224d255114cc4e9f075b7bf48fd78733.bin","chunkSize":1048576,"scope":"/xuziwen-portfolio/","sessionTtlMs":7200000};
const cache = new Map();
let session = null, loading;
function database() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("portfolio-session:" + CONFIG.scope, 1);
    request.onupgradeneeded = () => request.result.createObjectStore("session");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function stored(action, value) {
  const db = await database();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = db.transaction("session", action === "get" ? "readonly" : "readwrite");
      const store = transaction.objectStore("session");
      const request = action === "get" ? store.get("current") : action === "put" ? store.put(value, "current") : store.delete("current");
      let result;
      request.onsuccess = () => { result = request.result; };
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally { db.close(); }
}
async function current() {
  if (!loading && !session) loading = stored("get").then((value) => { session = value || null; }).catch(() => {}).finally(() => { loading = null; });
  if (loading) await loading;
  if (session && (session.version !== CONFIG.version || session.expires <= Date.now())) {
    session = null; cache.clear(); await stored("delete").catch(() => {});
  }
  return session;
}
self.addEventListener("install", (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("message", (event) => {
  const source = event.source?.url && new URL(event.source.url);
  if (!source || source.origin !== self.location.origin || !source.pathname.startsWith(CONFIG.scope)) return;
  event.waitUntil((async () => {
    const reply = event.ports[0];
    try {
      if (event.data?.kind === "unlock") {
        if (event.data.version !== CONFIG.version || event.data.key?.type !== "secret") throw new Error("Version mismatch");
        // Verify the key here as well; never trust a manifest supplied by a page.
        const response = await fetch(CONFIG.scope + CONFIG.manifest, { cache: "no-store" });
        if (!response.ok) throw new Error("Manifest unavailable");
        const bytes = await PortfolioCore.decrypt(await response.arrayBuffer(), event.data.key, "manifest:" + CONFIG.version);
        const manifest = JSON.parse(new TextDecoder().decode(bytes));
        if (!manifest.files || !manifest.files["/index.html"]) throw new Error("Invalid manifest");
        session = { key: event.data.key, manifest, version: CONFIG.version, expires: Date.now() + CONFIG.sessionTtlMs };
        cache.clear(); await stored("put", session);
      } else if (event.data?.kind === "lock") {
        session = null; cache.clear(); await stored("delete");
        const windows = await self.clients.matchAll({ type: "window" });
        await Promise.all(windows.filter((client) => new URL(client.url).pathname.startsWith(CONFIG.scope)).map((client) => client.navigate(CONFIG.scope + "unlock.html")));
      }
      const active = await current();
      reply?.postMessage({ ok: true, version: CONFIG.version, unlocked: Boolean(active), expires: active?.expires || 0 });
    } catch { reply?.postMessage({ ok: false, version: CONFIG.version }); }
  })());
});
async function respond(request) {
  const url = new URL(request.url);
  const relative = url.pathname.slice(CONFIG.scope.length);
  const publicFiles = new Set(["unlock.html", "gate.js", "core.js", "sw.js", "config.json", "session.js"]);
  if (publicFiles.has(relative) || relative.startsWith("vault/")) return fetch(request);
  if (!["GET", "HEAD"].includes(request.method)) return new Response("Method not allowed", { status: 405 });
  const active = await current();
  if (!active) {
    if (request.mode === "navigate") {
      const gate = new URL(CONFIG.scope + "unlock.html", url);
      gate.searchParams.set("next", url.pathname + url.search);
      return Response.redirect(gate.href, 302);
    }
    return new Response("Locked", { status: 401, headers: { "Cache-Control": "no-store" } });
  }
  let path;
  try { path = "/" + decodeURIComponent(relative || "index.html"); } catch { return new Response("Invalid path", { status: 400 }); }
  if (path.endsWith("/")) path += "index.html";
  if (!Object.hasOwn(active.manifest.files, path)) return new Response("Not found", { status: 404 });
  return PortfolioCore.assetResponse(request, path, active.manifest.files[path], active, CONFIG, fetch, cache);
}
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(CONFIG.scope)) return;
  event.respondWith(respond(event.request).catch(() => new Response("Unable to unlock resource", { status: 503, headers: { "Cache-Control": "no-store" } })));
});
