document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the document is loaded
    const navLinks = document.querySelectorAll('nav a');
    const heroButton = document.querySelector('#hero button');
    const contactForm = document.querySelector('#contact form');

    // Active Nav Links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Scroll to Section
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hide Contact Form on Page Load
    contactForm.style.display = 'none';

    // Show Contact Form on Hero Button Click
    heroButton.addEventListener('click', function() {
        contactForm.style.display = 'block';
    });
});