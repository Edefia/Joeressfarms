// Sidemenu Handling 
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars");
var closeMenuBtn = document.querySelector(".fa-xmark");
var menuLinks = document.querySelectorAll("#sidemenu a");

function openmenu() {
    if (window.innerWidth <= 768) {
        sidemen.style.right = "0";
        sidemen.style.display = "block";
        menuToggle.style.display = "none";
        closeMenuBtn.style.display = "block";
        document.body.style.overflow = "hidden";
        sidemen.classList.add("active");
    }
}

function closemenu() {
    if (window.innerWidth <= 768) {
        sidemen.style.right = "-100%";
        document.body.style.overflow = "";
        sidemen.classList.remove("active");
        menuToggle.style.display = "block";
        closeMenuBtn.style.display = "none";
    }
}

menuLinks.forEach(link => link.addEventListener("click", closemenu));
document.addEventListener("click", function (event) {
    if (!sidemen.contains(event.target) && !menuToggle.contains(event.target)) closemenu();
});
if (menuToggle) menuToggle.addEventListener("click", openmenu);
if (closeMenuBtn) closeMenuBtn.addEventListener("click", closemenu);

// Scroll Effects
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Reveal Animations
document.addEventListener("DOMContentLoaded", function () {
    function revealElements() {
        const elements = document.querySelectorAll(".fade-in, .slide-in, .bounce-in, .fade-in-up, .slide-in-left, .slide-in-right");
        const windowHeight = window.innerHeight;

        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < windowHeight - 100) el.classList.add("reveal");
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();
});