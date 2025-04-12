const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("overlay");
const themeToggle = document.querySelector(".theme-toggle");
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

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});