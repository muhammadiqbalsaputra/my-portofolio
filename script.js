/**
 * Muhammad Iqbal Saputra - Portfolio Website
 * Interactive Portfolio with Carousel and Modern Animations
 */

// ===========================================
// DOM ELEMENTS & INITIALIZATION
// ===========================================

// Core DOM elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('nav a');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.querySelector('form');

// Carousel elements
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.carousel-indicator');

// ===========================================
// CAROUSEL FUNCTIONALITY
// ===========================================

class InteractiveCarousel {
    constructor() {
        this.currentIndex = 0;
        this.totalSlides = 5; // Number of project cards
        this.slidesPerView = this.getSlidesPerView();
        this.maxIndex = this.totalSlides - this.slidesPerView;
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }

    getSlidesPerView() {
        if (window.innerWidth >= 1024) return 3; // lg: 3 slides
        if (window.innerWidth >= 768) return 2;  // md: 2 slides
        return 1; // sm: 1 slide
    }

    init() {
        this.setupEventListeners();
        this.updateCarousel();
        this.updateIndicators();
        this.setupTouchGestures();
        this.setupKeyboardNavigation();
    }

    setupEventListeners() {
        // Navigation buttons
        prevBtn?.addEventListener('click', () => this.previousSlide());
        nextBtn?.addEventListener('click', () => this.nextSlide());

        // Indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.slidesPerView = this.getSlidesPerView();
            this.maxIndex = this.totalSlides - this.slidesPerView;
            this.updateCarousel();
        });

        // Auto-play (optional)
        this.startAutoPlay();
    }

    setupTouchGestures() {
        if (!carousel) return;

        carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
        }, { passive: true });

        // Mouse drag support
        let isDragging = false;
        let startX = 0;
        let currentX = 0;

        carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            carousel.style.cursor = 'grabbing';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX;
        });

        carousel.addEventListener('mouseup', () => {
            if (isDragging) {
                const diff = startX - currentX;
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.previousSlide();
                    }
                }
                isDragging = false;
                carousel.style.cursor = 'grab';
            }
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.style.cursor = 'grab';
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    nextSlide() {
        if (this.isAnimating) return;
        
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
            this.updateIndicators();
        }
    }

    previousSlide() {
        if (this.isAnimating) return;
        
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
            this.updateIndicators();
        }
    }

    goToSlide(index) {
        if (this.isAnimating) return;
        
        this.currentIndex = Math.min(index, this.maxIndex);
        this.updateCarousel();
        this.updateIndicators();
    }

    updateCarousel() {
        if (!carousel) return;
        
        this.isAnimating = true;
        const translateX = -(this.currentIndex * (100 / this.slidesPerView));
        carousel.style.transform = `translateX(${translateX}%)`;
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('bg-gray-900');
                indicator.classList.remove('bg-gray-300');
            } else {
                indicator.classList.remove('bg-gray-900');
                indicator.classList.add('bg-gray-300');
            }
        });
    }

    startAutoPlay() {
        setInterval(() => {
            if (this.currentIndex < this.maxIndex) {
                this.nextSlide();
            } else {
                this.currentIndex = 0;
                this.updateCarousel();
                this.updateIndicators();
            }
        }, 5000); // Auto-advance every 5 seconds
    }
}

// ===========================================
// NAVIGATION FUNCTIONALITY
// ===========================================

class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupNavbarScrollEffect();
    }

    setupMobileMenu() {
        mobileMenuButton?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('rotate-90');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    setupSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavigation() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('text-gray-900', 'font-bold');
                        link.classList.add('text-gray-600');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.remove('text-gray-600');
                            link.classList.add('text-gray-900', 'font-bold');
                        }
                    });
                }
            });
        });
    }

    setupNavbarScrollEffect() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/98', 'shadow-lg');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.remove('bg-white/98', 'shadow-lg');
                navbar.classList.add('bg-white/95');
            }
        });
    }
}

// ===========================================
// SCROLL TO TOP FUNCTIONALITY
// ===========================================

class ScrollToTopManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollListener();
        this.setupClickHandler();
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });
    }

    setupClickHandler() {
        scrollToTopBtn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===========================================
// ANIMATION SYSTEM
// ===========================================

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupSkillHoverEffects();
        this.setupProjectCardEffects();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.bg-white, .bg-gray-50, .bg-gray-900');
            animatedElements.forEach(el => {
                observer.observe(el);
            });
        });
    }

    setupSkillHoverEffects() {
        document.querySelectorAll('.group').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05) translateY(-5px)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) translateY(0)';
            });
        });
    }

    setupProjectCardEffects() {
        document.querySelectorAll('.group').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
}

// ===========================================
// CONTACT FORM HANDLING
// ===========================================

class ContactFormManager {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            this.setupFormSubmission();
        }
    }

    setupFormSubmission() {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                this.showNotification('Message sent successfully!', 'success');
                
                // Reset form
                contactForm.reset();
            }, 2000);
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

class UtilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupDebouncedScroll();
        this.setupEasterEggs();
        this.setupConsoleWelcome();
    }

    setupDebouncedScroll() {
        const debouncedScrollHandler = this.debounce(() => {
            // Scroll-based animations and effects
        }, 10);

        window.addEventListener('scroll', debouncedScrollHandler);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    setupEasterEggs() {
        // Click counter easter egg
        let clickCount = 0;
        document.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 10) {
                this.showNotification('You clicked 10 times! 🎉', 'success');
                clickCount = 0;
            }
        });

        // Konami code easter egg
        this.setupKonamiCode();
    }

    setupKonamiCode() {
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join('') === konamiSequence.join('')) {
                this.showNotification('Konami Code activated! 🎮', 'success');
                document.body.style.animation = 'rainbow 2s infinite';
                
                setTimeout(() => {
                    document.body.style.animation = 'none';
                }, 5000);
                
                konamiCode = [];
            }
        });
    }

    setupConsoleWelcome() {
        console.log(`
🚀 Muhammad Iqbal Saputra's Portfolio Loaded Successfully!
✨ Network & Web Programming Specialist
🎓 SMK N 3 Tegal → Universitas Harkat Negeri
🎨 Built with Tailwind CSS
📱 Fully responsive design
🌐 Specializing in Network Administration & Web Development
        `);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ===========================================
// INITIALIZATION
// ===========================================

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    new InteractiveCarousel();
    
    // Initialize navigation
    new NavigationManager();
    
    // Initialize scroll to top
    new ScrollToTopManager();
    
    // Initialize animations
    new AnimationManager();
    
    // Initialize contact form
    new ContactFormManager();
    
    // Initialize utilities
    new UtilityManager();
});

// Add rainbow animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);