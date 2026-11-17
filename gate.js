(async () => {
  const form = document.querySelector("form"), input = document.querySelector("input"), button = document.querySelector("button"), status = document.querySelector("[role=status]");
  const root = new URL(document.documentElement.dataset.scope, location.origin);
  const next = new URLSearchParams(location.search).get("next");
  function destination() {
    const candidate = next ? new URL(next, root) : location.pathname.endsWith("unlock.html") ? root : new URL(location.href);
    if (candidate.origin !== root.origin || !candidate.pathname.startsWith(root.pathname) || candidate.pathname.endsWith("unlock.html")) return root.href;
    if (!candidate.hash && location.hash) candidate.hash = location.hash;
    return candidate.href;
  }
  function message(worker, data) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      const timer = setTimeout(() => reject(new Error("Worker unavailable")), 12000);
      channel.port1.onmessage = (event) => { clearTimeout(timer); channel.port1.close(); resolve(event.data); };
      worker.postMessage(data, [channel.port2]);
    });
  }
  let config, worker;
  try {
    if (!crypto.subtle || !("serviceWorker" in navigator)) throw new Error("Unsupported browser");
    config = await fetch(new URL("config.json", root), { cache: "no-store" }).then((response) => { if (!response.ok) throw new Error(); return response.json(); });
    const registration = await navigator.serviceWorker.register(new URL("sw.js", root), { scope: root.pathname, updateViaCache: "none" });
    await registration.update(); await navigator.serviceWorker.ready;
    const deadline = Date.now() + 15000;
    while (Date.now() < deadline) {
      worker = navigator.serviceWorker.controller || registration.active;
      if (worker) {
        const state = await message(worker, { kind: "status" });
        if (state.version === config.version) {
          if (state.unlocked) { location.replace(destination()); return; }
          break;
        }
      }
      worker = null; await new Promise((resolve) => setTimeout(resolve, 250));
    }
    if (!worker) throw new Error("Update pending");
    button.disabled = false; status.textContent = ""; input.focus();
  } catch {
    status.textContent = "暂时无法初始化访问验证，请使用最新版浏览器并刷新。";
    return;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); if (!input.value || button.disabled) return;
    button.disabled = true; status.textContent = "正在验证…";
    try {
      const key = await PortfolioCore.derive(input.value, config);
      const encrypted = await fetch(new URL(config.manifest, root), { cache: "no-store" }).then((response) => { if (!response.ok) throw new Error(); return response.arrayBuffer(); });
      await PortfolioCore.decrypt(encrypted, key, "manifest:" + config.version);
      const reply = await message(worker, { kind: "unlock", version: config.version, key });
      if (!reply.ok || !reply.unlocked) throw new Error("Unlock failed");
      input.value = ""; status.textContent = "验证成功，正在打开…"; location.replace(destination());
    } catch {
      status.textContent = "密码不正确，或访问文件暂时无法加载。请重试。"; button.disabled = false; input.focus();
    }
  });
})();
