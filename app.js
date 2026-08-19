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
  setText('[data-meta="version"]', config.version, "1.3.0");
  setText('[data-meta="date"]', config.releaseDate, "2026-08-19");
  setText('[data-meta="android-size"]', config.android?.size, "37.99 MB");
  setText('[data-meta="windows-size"]', config.windows?.size, "0.10 MB");
  setText('[data-meta="android-sha"]', config.android?.sha256, "8B0BC546E7A7ACA15E64E77AED3C27C0770FE03313D8C590007BB4511A1C2338");
  setText('[data-meta="windows-sha"]', config.windows?.sha256, "9042C75755268E9339FE0379033218E8A55CD98D9D22CD2CE19FF1E0547CB37F");

  const qr = document.querySelector("#download-qr");
  if (qr && config.qrImage) qr.src = config.qrImage;
  document.querySelector("#year").textContent = String(new Date().getFullYear());
})();
