import { Router } from './router.js';
import home from './pages/home.js';
import about from './pages/about.js';
// Projects is fetched from HTML
import contact from './pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    // Defines the routes
    const routes = {
        '/': { view: home, afterMount: initScrollAnimations },
        '/index.html': { view: home, afterMount: initScrollAnimations }, // Fallback for some servers
        '/about': { view: about, afterMount: initScrollAnimations },
        '/projects': {
            view: async () => {
                const response = await fetch('./projects.html');
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const content = doc.querySelector('#projects');
                return content ? content.outerHTML : '<h1>Error loading content</h1>';
            },
            afterMount: initScrollAnimations
        },
        '/contact': { view: contact, afterMount: initScrollAnimations },
    };

    // Initialize Router
    const router = new Router(routes);

    // Initial load
    router.handleLocation();

    // initMobileMenu is in navbar.js, which is loaded separately and runs on DOMContentLoaded
    // Since we are adding navbar via JS, we might need to be careful about timing, 
    // but navbar.js listens for DOMContentLoaded and injects navbar immediate.y
});

// Simple Scroll Reveal Animation (Re-used for each page load)
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
    // We select elements that might be in the new view
    const elementsToAnimate = document.querySelectorAll('section > div, .animate-fade-in-up, .group');

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
