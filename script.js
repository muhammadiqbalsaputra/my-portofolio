/**
 * Muhammad Iqbal Saputra - Portfolio Website
 * Minimalist & Performance Focused
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu.querySelectorAll('a');

    // Icons
    const hamburgerIcon = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;
    const closeIcon = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    `;

    function toggleMenu() {
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
            // Open Menu
            menu.classList.remove('hidden');
            btn.innerHTML = closeIcon;

            // Small delay for transition
            setTimeout(() => {
                menu.classList.remove('opacity-0');
                menu.classList.add('flex', 'opacity-100');

                // Staggered animation for links
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.remove('opacity-0', 'translate-y-4');
                    }, 100 + (index * 100));
                });
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            // Close Menu
            links.forEach(link => {
                link.classList.add('opacity-0', 'translate-y-4');
            });

            menu.classList.remove('opacity-100');
            menu.classList.add('opacity-0');
            btn.innerHTML = hamburgerIcon;

            setTimeout(() => {
                menu.classList.remove('flex');
                menu.classList.add('hidden');
            }, 300);
            document.body.style.overflow = '';
        }
    }

    btn.addEventListener('click', toggleMenu);

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Close explicitly
            links.forEach(l => l.classList.add('opacity-0', 'translate-y-4'));
            menu.classList.remove('opacity-100');
            menu.classList.add('opacity-0');
            btn.innerHTML = hamburgerIcon;
            setTimeout(() => {
                menu.classList.remove('flex');
                menu.classList.add('hidden');
            }, 300);
            document.body.style.overflow = '';
        });
    });
}

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