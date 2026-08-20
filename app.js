(() => {
  const config = window.GONGMAI_SITE_CONFIG || {};
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("is-open", !open);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });

  const localPreview = location.protocol === "file:" || location.hostname === "127.0.0.1" || location.hostname === "localhost";
  if (!localPreview) {
    document.querySelectorAll('[data-download="android"]').forEach((link) => {
      if (config.android?.url) link.href = config.android.url;
    });
    document.querySelectorAll('[data-download="windows"]').forEach((link) => {
      if (config.windows?.url) link.href = config.windows.url;
    });
  }

  const setText = (selector, value, fallback) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || fallback;
  };
  setText('[data-meta="version"]', config.version, "1.3.2");
  setText('[data-meta="date"]', config.releaseDate, "2026-08-20");
  setText('[data-meta="android-size"]', config.android?.size, "38.27 MB");
  setText('[data-meta="windows-size"]', config.windows?.size, "0.10 MB");
  setText('[data-meta="android-sha"]', config.android?.sha256, "B62E9A28197E257DF5087A91078D87B0B24C248F8F500D70BEC3A54E0BC909D9");
  setText('[data-meta="windows-sha"]', config.windows?.sha256, "142DFE6E1C4CC18EDB9064CB70236BC48799CBA862A9301225B4BFE547E42F77");

  const qr = document.querySelector("#download-qr");
  if (qr && config.qrImage) qr.src = config.qrImage;
  document.querySelector("#year").textContent = String(new Date().getFullYear());
})();
