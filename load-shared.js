  document.addEventListener("DOMContentLoaded", () => {
    const isGerman = window.location.pathname.includes("-de.html");
  
    const includes = [
      { id: "header", file: "header.html" },
      { id: "nav", file: isGerman ? "nav-de.html" : "nav.html" }
    ];
  
    includes.forEach(({ id, file }) => {
      const target = document.getElementById(id);
      if (target) {
        fetch(file)
          .then(res => res.text())
          .then(data => {
            target.innerHTML = data;
  
            // Highlight active nav item
            if (id === "nav") {
              const path = window.location.pathname.split("/").pop();
              const links = target.querySelectorAll("a");
              links.forEach(link => {
                if (link.getAttribute("href") === path) {
                  link.classList.add("active-page");
                }
              });
            }
          })
          .catch(err => console.error(`Error loading ${file}:`, err));
      }
    });
  });