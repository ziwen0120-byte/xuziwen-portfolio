(() => {
  const worker = navigator.serviceWorker?.controller;
  if (!worker) return;
  function lock() { worker.postMessage({ kind: "lock" }); }
  function attach() {
    const footer = document.querySelector(".editorial-footer > div, .career-contact > div, .dc-page-footer");
    if (!footer || document.querySelector("[data-lock-portfolio]")) return;
    const button = document.createElement("button");
    button.type = "button"; button.textContent = "退出访问"; button.dataset.lockPortfolio = "";
    button.style.cssText = "display:inline-flex;align-items:center;min-height:44px;width:max-content;padding:6px 0;border:0;background:transparent;color:inherit;font:inherit;font-size:12px;text-decoration:underline;cursor:pointer";
    button.addEventListener("click", lock); footer.append(button); observer.disconnect();
  }
  const observer = new MutationObserver(attach);
  observer.observe(document.documentElement, { childList: true, subtree: true }); attach();
  const channel = new MessageChannel();
  channel.port1.onmessage = (event) => {
    channel.port1.close();
    if (event.data.expires) setTimeout(lock, Math.max(0, event.data.expires - Date.now()));
  };
  worker.postMessage({ kind: "status" }, [channel.port2]);
})();
