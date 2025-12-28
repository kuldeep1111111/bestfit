document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("mobile-breadcrumb");
  if (!el) return;

  const path = window.location.pathname
    .split("/")
    .filter(Boolean);

  let breadcrumb = "Home";

  if (path.length > 0) {
    breadcrumb += " / " + path
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(" / ");
  }

  el.innerText = breadcrumb;
});
