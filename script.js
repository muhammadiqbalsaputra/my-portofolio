/**
 * Muhammad Iqbal Saputra - Portfolio Website
 * Minimalist & Performance Focused
 */

document.addEventListener('DOMContentLoaded', () => {
    // initMobileMenu() is handled by navbar.js
    initSmoothScroll();
    initScrollAnimations();
});


// Smooth Scrolling for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Simple Scroll Reveal Animation
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to sections and major elements
    const elementsToAnimate = document.querySelectorAll('section > div, .group');

    elementsToAnimate.forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
}

// Console Easter Egg
console.log(`
%c Designed & Developed by Muhammad Iqbal Saputra 
%c https://github.com/muhammadiqbalsaputra
%c New Projects: Rempah Tour & Jagamata Added
`, 'font-weight: bold; font-size: 14px; color: #111827;', 'color: #6b7280;', 'color: #059669;');