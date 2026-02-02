
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
});

function injectNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    const navbarHTML = `
    <nav class="fixed top-0 w-full glass-nav z-50 border-b border-gray-100 transition-all duration-300">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" data-link class="text-xl font-semibold tracking-tight hover:text-gray-600 transition-colors z-50 relative">
                    Iqbal<span class="text-gray-400">.</span>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-12">
                    <a href="/" class="nav-link text-sm font-medium text-gray-500 hover:text-black transition-colors" data-link data-page="/">Home</a>
                    <a href="/about" class="nav-link text-sm font-medium text-gray-500 hover:text-black transition-colors" data-link data-page="/about">About</a>
                    <a href="/projects" class="nav-link text-sm font-medium text-gray-500 hover:text-black transition-colors" data-link data-page="/projects">Work</a>
                    <a href="/contact" class="nav-link text-sm font-medium text-gray-500 hover:text-black transition-colors" data-link data-page="/contact">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden z-50">
                    <button id="mobile-menu-btn" class="text-gray-900 focus:outline-none p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-white/90 backdrop-blur-xl z-40 hidden flex-col justify-center items-center space-y-8 opacity-0 transition-opacity duration-300">
            <a href="/" data-link class="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors transform translate-y-4 opacity-0 transition-all duration-500 delay-100">Home</a>
            <a href="/about" data-link class="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors transform translate-y-4 opacity-0 transition-all duration-500 delay-200">About</a>
            <a href="/projects" data-link class="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors transform translate-y-4 opacity-0 transition-all duration-500 delay-300">Work</a>
            <a href="/contact" data-link class="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors transform translate-y-4 opacity-0 transition-all duration-500 delay-400">Contact</a>
        </div>
    </nav>
    `;

    navbarPlaceholder.innerHTML = navbarHTML;

    // setActiveLink(); // Handled by router.js
    initMobileMenu();
}

// setActiveLink function removed as it is handled by the Router class


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

    if (btn) btn.addEventListener('click', toggleMenu);

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
