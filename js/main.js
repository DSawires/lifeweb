/**
 * Life Style - Luxury Furniture
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading screen
    initLoadingScreen();

    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSlideshow();
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScroll();
    initContactForm();
});

/**
 * Loading screen
 */
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    // Hide loading screen after animation completes
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1600); // Wait for progress bar animation + small delay
    });
}

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');

    if (!navbar) return;

    // If no hero section (internal pages), keep navbar always scrolled
    if (!hero) {
        navbar.classList.add('scrolled');
        return;
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
}

/**
 * Hero Slideshow
 */
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const hero = document.querySelector('.hero');

    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 5000; // 5 seconds per slide

    const goToSlide = (index) => {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    };

    const prevSlide = () => {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prev);
    };

    const startAutoPlay = () => {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    const resetAutoPlay = () => {
        clearInterval(slideInterval);
        startAutoPlay();
    };

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Click navigation - left half = prev, right half = next
    hero.addEventListener('click', (e) => {
        // Ignore clicks on dots or other controls
        if (e.target.closest('.slideshow-nav') || e.target.closest('.scroll-indicator')) {
            return;
        }

        const rect = hero.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const halfWidth = rect.width / 2;

        if (clickX < halfWidth) {
            prevSlide();
        } else {
            nextSlide();
        }
        resetAutoPlay();
    });

    // Initialize first slide and start autoplay
    goToSlide(0);
    startAutoPlay();
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!menuToggle || !navMenu) return;

    const navLinks = navMenu.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Counter animation for statistics
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');

    const observerOptions = {
        threshold: 0.5
    };

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact form handling - submits to Formspree
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        // Show loading state
        button.textContent = 'Sending...';
        button.disabled = true;

        try {
            const response = await fetch('https://formspree.io/f/xojrzrjw', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormSuccess(form, button, originalText);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showFormError(form, button, originalText);
        }
    });
}

/**
 * Show form success message
 */
function showFormSuccess(form, button, originalText) {
    // Update button state
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';

    // Reset form
    form.reset();

    // Reset button after delay
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 3000);
}

/**
 * Show form error message
 */
function showFormError(form, button, originalText) {
    // Update button state
    button.textContent = 'Error - Try Again';
    button.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';

    // Reset button after delay
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 3000);
}

