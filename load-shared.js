document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active-page");
    }
  });
});
