const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("overlay");
const themeToggle = document.querySelector(".theme-toggle");
const prefersDark = localStorage.getItem("theme") === "dark";
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
});

if (prefersDark) {
    document.body.classList.add("dark-mode")
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => {
        const projectGrid = document.getElementById("project-grid");

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            if (project.image) {
                const imageLink = document.createElement("a");
                imageLink.href = project.link;
                imageLink.target = "_blank";
                imageLink.rel = "noopener";

                const img = document.createElement("img");
                img.src = project.image;
                img.alt = project.alt;

                imageLink.appendChild(img);
                card.appendChild(imageLink);
            }

            const title = document.createElement("h4");
            title.textContent = project.title;
            card.appendChild(title);

            const desc = document.createElement("p");
            desc.textContent = project.description;
            card.appendChild(desc);

            if (project.tags.length > 0) {
                const tagList = document.createElement("p");
                tagList.className = "tags";
                tagList.textContent = project.tags.join(" • ");
                card.appendChild(tagList);
            }

            if (project.link) {
                const link = document.createElement("a");
                link.href = project.link;
                link.target = "_blank";
                link.rel = "noopener";
                link.className = "project-link";
                link.textContent = "View Project";
                card.appendChild(link);
            }

            projectGrid.appendChild(card);
        })
    })
    .catch(err => console.error("Failed to load projects:", err));