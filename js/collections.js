/**
 * Life Style - Collections Page
 *
 * GALLERY DATA
 * ------------
 * To add images to a gallery, add them to the appropriate category array.
 * Images are displayed in the order they appear in the array.
 *
 * Required fields:
 *   - src: Path to image
 *   - alt: Alt text for accessibility
 */

const GALLERIES = {
    bedroom: [
        { src: '/assets/images/collections/bedroom/1.jpg', alt: 'Bedroom furniture collection' },
        { src: '/assets/images/collections/bedroom/2.jpg', alt: 'Bedroom furniture collection' },
        { src: '/assets/images/collections/bedroom/3.jpg', alt: 'Bedroom furniture collection' },
        { src: '/assets/images/collections/bedroom/4.jpg', alt: 'Bedroom furniture collection' }
    ],
    dining: [
        { src: '/assets/images/collections/dining/1.jpg', alt: 'Dining furniture collection' },
        { src: '/assets/images/collections/dining/2.jpg', alt: 'Dining furniture collection' },
        { src: '/assets/images/collections/dining/3.jpg', alt: 'Dining furniture collection' },
        { src: '/assets/images/collections/dining/4.jpg', alt: 'Dining furniture collection' }
    ],
    living: [
        { src: '/assets/images/collections/living/1.jpg', alt: 'Living room furniture collection' }
    ]
};

// Gallery modal state
let currentGalleryImages = [];
let currentGalleryIndex = 0;

/**
 * Initialize the collections page
 */
document.addEventListener('DOMContentLoaded', () => {
    renderGalleries();
    initCategoryTabs();
    initGalleryModal();
});

/**
 * Render all gallery grids
 */
function renderGalleries() {
    Object.keys(GALLERIES).forEach(category => {
        const gallery = document.getElementById(`${category}-gallery`);
        if (!gallery) return;

        const images = GALLERIES[category];
        const html = images.map((image, index) => createGalleryItem(image, category, index)).join('');
        gallery.innerHTML = html;
    });
}

/**
 * Create gallery item HTML
 */
function createGalleryItem(image, category, index) {
    return `
        <div class="gallery-item" data-category="${category}" data-index="${index}">
            <img src="${image.src}" alt="${image.alt}">
            <div class="gallery-item-overlay">
                <span class="gallery-item-zoom">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                        <path d="M11 8v6M8 11h6"/>
                    </svg>
                </span>
            </div>
        </div>
    `;
}

/**
 * Initialize category tab filtering
 */
function initCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const sections = document.querySelectorAll('.category-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter sections
            if (category === 'all') {
                sections.forEach(section => {
                    section.classList.remove('hidden');
                });
            } else {
                sections.forEach(section => {
                    if (section.dataset.category === category) {
                        section.classList.remove('hidden');
                    } else {
                        section.classList.add('hidden');
                    }
                });

                // Scroll to section
                const targetSection = document.getElementById(`${category}-section`);
                if (targetSection) {
                    const navHeight = document.querySelector('.category-nav').offsetHeight;
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const offset = navHeight + headerHeight + 20;

                    window.scrollTo({
                        top: targetSection.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active tab on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            if (section.classList.contains('hidden')) return;

            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                const category = section.dataset.category;
                tabs.forEach(t => {
                    if (t.dataset.category === category) {
                        t.classList.add('active');
                    } else if (t.dataset.category !== 'all') {
                        t.classList.remove('active');
                    }
                });
            }
        });
    }, { passive: true });
}

/**
 * Initialize gallery modal
 */
function initGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const closeBtn = document.getElementById('gallery-close');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    // Click handlers for gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            const index = parseInt(item.dataset.index);
            openGalleryModal(category, index);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeGalleryModal);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateGallery(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateGallery(1));
    }

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('gallery-backdrop')) {
                closeGalleryModal();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'Escape') closeGalleryModal();
        if (e.key === 'ArrowLeft') navigateGallery(-1);
        if (e.key === 'ArrowRight') navigateGallery(1);
    });
}

/**
 * Open gallery modal
 */
function openGalleryModal(category, startIndex) {
    const modal = document.getElementById('gallery-modal');
    const image = document.getElementById('gallery-image');
    const counter = document.getElementById('gallery-counter');

    currentGalleryImages = GALLERIES[category];
    currentGalleryIndex = startIndex;

    if (image) image.src = currentGalleryImages[currentGalleryIndex].src;
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;

    // Show/hide navigation
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    if (prevBtn) prevBtn.style.display = currentGalleryImages.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentGalleryImages.length > 1 ? 'flex' : 'none';
    if (counter) counter.style.display = currentGalleryImages.length > 1 ? 'block' : 'none';

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Navigate gallery
 */
function navigateGallery(direction) {
    currentGalleryIndex = (currentGalleryIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;

    const image = document.getElementById('gallery-image');
    const counter = document.getElementById('gallery-counter');

    if (image) image.src = currentGalleryImages[currentGalleryIndex].src;
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
}

/**
 * Close gallery modal
 */
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
