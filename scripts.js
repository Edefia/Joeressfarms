// script to handle sidemenu
var sidemen = document.getElementById("sidemenu");
var menuToggle = document.querySelector(".fa-bars"); // Open button
var closeMenuBtn = document.querySelector(".fa-xmark"); // Close button
var menuLinks = document.querySelectorAll("#sidemenu a"); // All links inside the menu

// Function to open the menu
function openmenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "0";
        sidemen.style.display = "block";
        menuToggle.style.display = "none"; // Hide menu button
        closeMenuBtn.style.display = "block"; // Show close button
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        sidemen.classList.add("active");
    }
}

// Function to close the menu
function closemenu() {
    if (window.innerWidth <= 767) { // Ensure it only runs on mobile
        sidemen.style.right = "-100%"; // Fully hide the menu
        document.body.style.overflow = ""; // Restore scrolling
        sidemen.classList.remove("active");
        menuToggle.style.display = "block"; // Show menu button
        closeMenuBtn.style.display = "none"; // Hide close button
    }
}

// Close menu when clicking a link inside it
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closemenu(); // Close menu
    });
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!sidemen.contains(event.target) && !menuToggle.contains(event.target)) {
        closemenu();
    }
});

// Add event listeners to menu buttons
if (menuToggle) {
    menuToggle.addEventListener("click", openmenu);
}
if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closemenu);
}

// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     function revealElements() {
//         let elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
//         let windowHeight = window.innerHeight;

//         elements.forEach((el) => {
//             let position = el.getBoundingClientRect().top;
//             if (position < windowHeight - 100) {
//                 el.classList.add("reveal");
//             }
//         });
//     }

//     window.addEventListener("scroll", revealElements);
//     revealElements(); // Trigger when page loads
// });
document.addEventListener("DOMContentLoaded", function () {
    function revealElements() {
        let elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
        let windowHeight = window.innerHeight;

        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let positionBottom = el.getBoundingClientRect().bottom;

            // Play animation when entering viewport
            if (position < windowHeight - 100 && positionBottom > 100) {
                el.classList.add("reveal");
            } else {
                el.classList.remove("reveal"); // Reset when leaving viewport
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Trigger when page loads
});





