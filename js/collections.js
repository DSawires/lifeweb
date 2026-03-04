/**
 * Life Style - Collections Page
 *
 * COLLECTION DATA
 * ---------------
 * To add a new subcategory, add an object to the appropriate category array.
 *
 * Required fields:
 *   - id: Unique identifier
 *   - name: Subcategory name
 *   - tagline: Short description
 *   - image: Path to image
 *   - itemCount: Number of items in subcategory
 */

const COLLECTIONS = {
    living: [
        {
            id: 'sofas',
            name: 'Sofas',
            tagline: 'Statement pieces for every living space',
            image: '/assets/images/living-room.jpg',
            itemCount: 24
        },
        {
            id: 'armchairs',
            name: 'Armchairs',
            tagline: 'Comfort refined to perfection',
            image: '/assets/images/project-1.jpg',
            itemCount: 18
        },
        {
            id: 'coffee-tables',
            name: 'Coffee Tables',
            tagline: 'The heart of your living room',
            image: '/assets/images/project-2.jpg',
            itemCount: 15
        },
        {
            id: 'tv-units',
            name: 'TV Units',
            tagline: 'Modern entertainment solutions',
            image: '/assets/images/project-3.jpg',
            itemCount: 12
        },
        {
            id: 'bookcases',
            name: 'Bookcases & Shelving',
            tagline: 'Display and organize in style',
            image: '/assets/images/project-4.jpg',
            itemCount: 10
        },
        {
            id: 'accent-furniture',
            name: 'Accent Furniture',
            tagline: 'Finishing touches that define',
            image: '/assets/images/about-image.jpg',
            itemCount: 20
        }
    ],
    dining: [
        {
            id: 'dining-tables',
            name: 'Dining Tables',
            tagline: 'Where memories are made',
            image: '/assets/images/dining-room.jpg',
            itemCount: 16
        },
        {
            id: 'dining-chairs',
            name: 'Dining Chairs',
            tagline: 'Elegance at every seat',
            image: '/assets/images/project-1.jpg',
            itemCount: 22
        },
        {
            id: 'sideboards',
            name: 'Sideboards & Buffets',
            tagline: 'Storage meets sophistication',
            image: '/assets/images/project-2.jpg',
            itemCount: 14
        },
        {
            id: 'bar-furniture',
            name: 'Bar & Wine Storage',
            tagline: 'Entertain with distinction',
            image: '/assets/images/project-3.jpg',
            itemCount: 8
        },
        {
            id: 'dining-benches',
            name: 'Benches',
            tagline: 'Versatile seating solutions',
            image: '/assets/images/project-4.jpg',
            itemCount: 10
        }
    ],
    bedroom: [
        {
            id: 'beds',
            name: 'Beds',
            tagline: 'The foundation of restful nights',
            image: '/assets/images/bedroom.jpg',
            itemCount: 20
        },
        {
            id: 'nightstands',
            name: 'Nightstands',
            tagline: 'Bedside essentials',
            image: '/assets/images/project-1.jpg',
            itemCount: 16
        },
        {
            id: 'dressers',
            name: 'Dressers & Chests',
            tagline: 'Organized elegance',
            image: '/assets/images/project-2.jpg',
            itemCount: 14
        },
        {
            id: 'wardrobes',
            name: 'Wardrobes',
            tagline: 'Space for your finest',
            image: '/assets/images/project-3.jpg',
            itemCount: 12
        },
        {
            id: 'vanities',
            name: 'Vanities',
            tagline: 'Beauty in preparation',
            image: '/assets/images/project-4.jpg',
            itemCount: 8
        },
        {
            id: 'bedroom-seating',
            name: 'Bedroom Seating',
            tagline: 'Benches, ottomans & chairs',
            image: '/assets/images/about-image.jpg',
            itemCount: 10
        }
    ]
};

/**
 * Initialize the collections page
 */
document.addEventListener('DOMContentLoaded', () => {
    renderCollections();
    initCategoryTabs();
});

/**
 * Render all collection grids
 */
function renderCollections() {
    Object.keys(COLLECTIONS).forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (!grid) return;

        const items = COLLECTIONS[category];
        const html = items.map(item => createSubcategoryCard(item)).join('');
        grid.innerHTML = html;
    });
}

/**
 * Create subcategory card HTML
 */
function createSubcategoryCard(item) {
    return `
        <article class="subcategory-card" data-id="${item.id}">
            <div class="subcategory-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="subcategory-overlay">
                    <span class="subcategory-count">${item.itemCount} Items</span>
                    <span class="subcategory-cta">
                        Explore
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="subcategory-content">
                <h3 class="subcategory-name">${item.name}</h3>
                <p class="subcategory-tagline">${item.tagline}</p>
            </div>
        </article>
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
