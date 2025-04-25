document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Toggle between menu and close icons
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Sticky header effect
    function updateHeaderOnScroll() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                header.style.background = '#2d8b55';// Lighter green when at top  
                header.style.opacity = '0.95';
            } else {
                header.style.boxShadow = 'none';
                header.style.background = '#247246';  // Solid color when scrolled
                header.style.opacity = '1';
            }
        }
    }
    
    window.addEventListener('scroll', updateHeaderOnScroll);
    updateHeaderOnScroll(); // Initialize on page load

    // Reveal Animations
    function revealElements() {
        const elements = document.querySelectorAll(".fade-in, .slide-in, .bounce-in, .fade-in-up, .slide-in-left, .slide-in-right");
        const windowHeight = window.innerHeight;

        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            if (position < windowHeight - 100) el.classList.add("reveal");
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Initialize on page load
    
    // Page transition effect
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.style.opacity = '1';
        setTimeout(() => {
            pageTransition.style.opacity = '0';
        }, 200);
    }
});

