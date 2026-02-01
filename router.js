export class Router {
    constructor(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
        window.addEventListener('popstate', this.handleLocation.bind(this));

        // Intercept all clicks
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            } else if (e.target.closest('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.closest('[data-link]').href);
            }
        });
    }

    navigateTo(url) {
        window.history.pushState(null, null, url);
        this.handleLocation();
    }

    async handleLocation() {
        // Simple path handling, removing protocol and domain
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes[404] || this.routes['/'];

        // Render content
        if (typeof route.view === 'function') {
            const html = route.view();
            this.rootElem.innerHTML = html;

            // Re-initialize animations and scripts if needed
            if (route.afterMount) {
                route.afterMount();
            }

            // Update active state in navbar
            this.updateActiveNav(path);

            // Scroll to top
            window.scrollTo(0, 0);
        }
    }

    updateActiveNav(path) {
        document.querySelectorAll('.nav-link').forEach(link => {
            // Check if href matches current path (considering relative/absolute)
            const href = link.getAttribute('href');
            // Clean href to be just pathname if possible, simple check:
            const linkPath = href.startsWith('http') ? new URL(href).pathname : href;

            if (linkPath === path || (path === '/' && (linkPath === 'index.html' || linkPath === '/'))) {
                link.classList.remove('text-gray-500');
                link.classList.add('text-black');
            } else {
                link.classList.add('text-gray-500');
                link.classList.remove('text-black');
            }
        });
    }
}
