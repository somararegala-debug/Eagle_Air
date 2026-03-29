// ==========================
// NAVBAR (Hamburger)
// ==========================
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (toggle && navbar) {
    toggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggle.classList.toggle("active");    // transforme ☰ en ✖

    });
}

// Fermer le menu si on clique sur un lien (mobile)
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        document.querySelectorAll(".page").forEach(section => {
            section.classList.remove("active");
        });

        const target = document.querySelector(targetId);
        if (target) target.classList.add("active");

        navbar.classList.remove("active");
        toggle.classList.remove("active"); // remet le ☰
    });
});

// ==========================
// BUTTON HERO
// ==========================
const reviewBtn = document.querySelector(".review-btn");

if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
        alert("Thanks for choosing Eagle Air ✈️");
    });
}

// ==========================
// CONTACT FORM
// ==========================
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully ✈️");
        this.reset();
    });
}

// ==========================
// FOOTER YEAR
// ==========================
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ==========================
// Navigation without scroll
// ==========================
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        // Cacher toutes les sections
        document.querySelectorAll(".page").forEach(section => {
            section.classList.remove("active");
        });

        // Afficher la bonne section
        const target = document.querySelector(targetId);
        if (target) {
            target.classList.add("active");
        }

        // Fermer menu mobile
        navbar.classList.remove("active");
    });
});