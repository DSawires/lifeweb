// Load shared components (header and footer)
(function() {
    async function loadComponent(elementId, componentPath) {
        const element = document.getElementById(elementId);
        if (!element) return;

        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
            const html = await response.text();
            element.innerHTML = html;

            // Dispatch event when component is loaded
            element.dispatchEvent(new CustomEvent('component-loaded', { bubbles: true }));
        } catch (error) {
            console.error(`Error loading component: ${error.message}`);
        }
    }

    async function loadComponents() {
        await Promise.all([
            loadComponent('header-placeholder', '/components/header.html'),
            loadComponent('footer-placeholder', '/components/footer.html')
        ]);

        // Re-initialize navbar functionality after header loads
        initNavbar();
    }

    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (!navbar || !menuToggle || !navMenu) return;

        // Set active state based on current path
        const currentPath = window.location.pathname;
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            // Skip CTA buttons - they don't need active state
            if (link.classList.contains('nav-link-cta')) return;

            const href = link.getAttribute('href');
            if (href && href !== '/#contact') {
                if (currentPath.startsWith(href) && href !== '/') {
                    link.classList.add('active');
                } else if (href === '/' && currentPath === '/') {
                    link.classList.add('active');
                }
            }
        });

        // Add scrolled class if not on homepage or already scrolled
        if (window.location.pathname !== '/' || window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }

        // Scroll handler
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else if (window.location.pathname === '/') {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Load components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }
})();
