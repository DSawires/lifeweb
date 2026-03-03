/**
 * Life Style - Hospitality Page
 *
 * PROJECT DATA
 * ------------
 * To add a new project, simply add an object to the PROJECTS array below.
 * Projects are automatically sorted by year (newest first).
 *
 * Required fields:
 *   - id: Unique identifier
 *   - year: Year completed (number)
 *   - title: Project name
 *   - location: City, Country
 *   - image: Path to image
 *
 * Optional fields:
 *   - description: Short description
 *   - scope: Array of tags (e.g., ['Lobby', 'Rooms', 'Restaurant'])
 *   - featured: Set to true to show in featured section (max 4)
 */

const PROJECTS = [
    {
        id: 1,
        year: 2025,
        title: "Sifawy Boutique Hotel",
        location: "Jebel Sifah Marina, Oman",
        description: "Italian-designed boutique retreat blending contemporary European aesthetics with authentic Omani heritage, set within a world-class marina resort.",
        image: "public/images/projects/sifawy-boutique-hotel/hero.jpg",
        scope: ["Rooms", "Restaurant"],
        featured: true
    },
    {
        id: 2,
        year: 2025,
        title: "One Almaza Bay",
        location: "North Coast, Egypt",
        description: "Egypt's premier Mediterranean destination spanning 6.5 million sqm, featuring pristine beaches and refined coastal living.",
        image: "public/images/projects/one-almaza-bay/hero.jpg",
        scope: ["Rooms", "Wardrobes"],
        featured: true
    },
    {
        id: 3,
        year: 2025,
        title: "JAZ Elite Asteria",
        location: "Sahl Hasheesh, Egypt",
        description: "Ultra-modern Red Sea resort with 633 rooms, aquapark, private jetty, and six signature dining venues along Sahl Hasheesh's crystal waters.",
        image: "public/images/projects/jaz-elite-asteria/hero.jpg",
        scope: ["Reception", "Restaurants", "Bar"]
    },
    {
        id: 4,
        year: 2024,
        title: "JAZ Elite Riviera",
        location: "Marsa Alam, Egypt",
        description: "Luxury coastal haven on Marsa Mares Bay, renowned for green sea turtle sightings and rare dugong encounters just steps from shore.",
        image: "public/images/projects/jaz-elite-riviera/hero.jpg",
        scope: ["Reception", "Restaurants", "Lounge"]
    },
    {
        id: 5,
        year: 2024,
        title: "Sakhra Hotel & Spa",
        location: "Almaza Bay, Egypt",
        description: "Modern ode to Mediterranean elegance sculpted from stone, featuring rooftop pools, hammam spa rituals, and direct beachfront access.",
        image: "public/images/projects/sakhra-hotel-spa/hero.jpg",
        scope: ["Hotel", "Spa"]
    },
    {
        id: 7,
        year: 2023,
        title: "Giza Palace",
        location: "Sheikh Zayed, Egypt",
        description: "Leading Hotels of the World member featuring a 1,900 sqm luxury spa, diverse international cuisine, and proximity to the Great Pyramids.",
        image: "public/images/projects/giza-palace/hero.jpg",
        scope: ["Rooms", "Restaurants", "Meeting Rooms", "Ballroom"],
        featured: true
    },
    {
        id: 8,
        year: 2023,
        title: "JAZ Elite Amara",
        location: "Marsa Alam, Egypt",
        description: "Five-star beachfront escape on the southern Red Sea, offering world-class diving and pristine coral reef access.",
        image: "public/images/projects/jaz-elite-amara/hero.jpg",
        scope: ["Doors", "Reception", "Restaurants"]
    },
    {
        id: 9,
        year: 2022,
        title: "Cleopatra Luxury Resort",
        location: "Sharm El Sheikh, Egypt",
        description: "All-inclusive resort nestled along Sharm's coastline with panoramic Red Sea views and diverse dining experiences.",
        image: "public/images/projects/cleopatra-luxury-resort/hero.jpg",
        scope: ["Reception", "Restaurant", "Bar"]
    },
    {
        id: 10,
        year: 2022,
        title: "Mazeej White Hotel",
        location: "Hacienda, Egypt",
        description: "Exclusive North Coast residence within the renowned Hacienda development, offering refined Mediterranean living.",
        image: "public/images/projects/mazeej-white-hotel/hero.jpg",
        scope: ["Bedroom", "Outdoor"]
    },
    {
        id: 11,
        year: 2021,
        title: "The Chedi",
        location: "El Gouna, Egypt",
        description: "Egypt's first Leading Hotel of the World — an GHM-managed sanctuary blending Asian-inspired wellness with Red Sea sophistication.",
        image: "public/images/projects/the-chedi/hero.jpg",
        scope: ["Villas", "Spa", "Restaurant"]
    },
    {
        id: 12,
        year: 2021,
        title: "The Cove Rotana Resort",
        location: "Ras Al Khaimah, UAE",
        description: "Five-star Arabian Gulf retreat with 349 rooms, 40 villas, and 600 meters of private sandy beach on an idyllic water inlet.",
        image: "public/images/projects/the-cove-rotana/hero.jpg",
        scope: ["Rooms", "Furniture"]
    },
    {
        id: 13,
        year: 2021,
        title: "Steigenberger Resort",
        location: "Ras Soma, Egypt",
        description: "Red Sea gem featuring Olympic pools, five signature restaurants, and a diving center along Egypt's golden eastern coast.",
        image: "public/images/projects/steigenberger-resort-ras-soma/hero.jpg",
        scope: ["Doors", "Suites", "Public Area"]
    },
    {
        id: 14,
        year: 2020,
        title: "The Grand Hotel",
        location: "Hurghada, Egypt",
        description: "Landmark Hurghada property offering classic Red Sea hospitality with expansive facilities and beach access.",
        image: "public/images/projects/the-grand-hotel-hurghada/hero.jpg",
        scope: ["Doors", "Reception", "Restaurant"]
    },
    {
        id: 15,
        year: 2020,
        title: "Cleopatra Sidi Henish",
        location: "North Coast, Egypt",
        description: "Mediterranean escape along Egypt's stunning North Coast, known for turquoise waters and white sandy beaches.",
        image: "public/images/projects/cleopatra-sidi-henish/hero.jpg",
        scope: ["Furniture", "Custom"]
    },
    {
        id: 16,
        year: 2019,
        title: "Sheraton Miramar Resort",
        location: "El Gouna, Egypt",
        description: "Award-winning Michael Graves architecture spanning nine islands connected by wooden bridges, with ancient Egyptian-inspired design.",
        image: "public/images/projects/sheraton-miramar-resort/hero.jpg",
        scope: ["Rooms", "Villas", "Restaurant"]
    },
    {
        id: 17,
        year: 2019,
        title: "Ali Pasha",
        location: "El Gouna, Egypt",
        description: "Charming boutique hotel in El Gouna's vibrant downtown, steps from Abu Tig Marina's restaurants and nightlife.",
        image: "public/images/projects/ali-pasha/hero.jpg",
        scope: ["Rooms", "Reception", "Restaurant"]
    },
    {
        id: 29,
        year: 2019,
        title: "Cook's Club Resort",
        location: "El Gouna, Egypt",
        description: "Adults-only lagoon retreat with 144 minimalist rooms, private beach, rooftop DJ sessions, and direct paddleboard access to El Gouna's saltwater lagoon.",
        image: "public/images/projects/cooks-club/hero.jpg",
        scope: ["Rooms", "Public Area"]
    },
    {
        id: 18,
        year: 2018,
        title: "El Fanar Hotel & Residences",
        location: "Oman",
        description: "Five-star Hawana Salalah property overlooking the Arabian Sea, offering luxury residences and world-class amenities.",
        image: "public/images/projects/el-fanar-hotel/hero.jpg",
        scope: ["Public Area", "Restaurant"]
    },
    {
        id: 19,
        year: 2018,
        title: "Steigenberger Resort Alaya",
        location: "Marsa Alam, Egypt",
        description: "Tranquil Red Sea sanctuary surrounded by pristine reefs, ideal for diving enthusiasts and beach seekers alike.",
        image: "public/images/projects/steigenberger-resort-alaya/hero.jpg",
        scope: ["Reception", "Restaurants", "Beach"]
    },
    {
        id: 20,
        year: 2017,
        title: "Casa Cook",
        location: "El Gouna, Egypt",
        description: "Award-winning adults-only boutique hotel inspired by Bedouin aesthetics, blending earthy textures with minimalist architecture.",
        image: "public/images/projects/casa-cook/hero.jpg",
        scope: ["Rooms", "Public Area"]
    },
    {
        id: 21,
        year: 2017,
        title: "Steigenberger Alcazar",
        location: "Sharm El Sheikh, Egypt",
        description: "Nabq Bay landmark with 30,000 sqm private beach, heated pools, and five specialty restaurants overlooking pristine coral reefs.",
        image: "public/images/projects/steigenberger-alcazar/hero.jpg",
        scope: ["Doors", "Spa", "Restaurants"]
    },
    {
        id: 22,
        year: 2015,
        title: "JAZ Aquaviva",
        location: "Makadi, Egypt",
        description: "Family resort featuring Makadi Water World with 50 water slides, 18-hole championship golf, and direct beach access.",
        image: "public/images/projects/jaz-aquaviva/hero.jpg",
        scope: ["Doors", "Spa", "Restaurants"]
    },
    {
        id: 23,
        year: 2014,
        title: "Miramar Al Aqah Beach Resort",
        location: "Fujairah, UAE",
        description: "Beachfront retreat on Fujairah's eastern coast, offering dramatic Hajar Mountain backdrops and Arabian Gulf waters.",
        image: "public/images/projects/miramar-al-aqah/hero.jpg",
        scope: ["Suites", "Furniture"]
    },
    {
        id: 24,
        year: 2012,
        title: "JAZ Mirabel Beach Resort",
        location: "Sharm El Sheikh, Egypt",
        description: "Established Sharm resort known for its house reef, vibrant marine life, and family-friendly atmosphere.",
        image: "public/images/projects/jaz-mirabel-beach/hero.jpg",
        scope: ["Public Area"]
    },
    {
        id: 25,
        year: 2011,
        title: "JAZ Belvedere",
        location: "Sharm El Sheikh, Egypt",
        description: "Five-star clifftop resort with panoramic Red Sea views and direct access to world-renowned diving sites.",
        image: "public/images/projects/jaz-belvedere/hero.jpg",
        scope: ["Public Area"]
    },
    {
        id: 26,
        year: 2009,
        title: "JAZ Aquamarine Resort",
        location: "Hurghada, Egypt",
        description: "Sprawling Hurghada resort with extensive pools, diverse dining, and a prime beachfront location on the Red Sea.",
        image: "public/images/projects/jaz-aquamarine/hero.jpg",
        scope: ["Doors", "Reception", "Restaurants"]
    },
    {
        id: 27,
        year: 2005,
        title: "The Grand Hotel",
        location: "Sharm El Sheikh, Egypt",
        description: "Classic Sharm El Sheikh property offering timeless Red Sea hospitality in the heart of Egypt's premier diving destination.",
        image: "public/images/projects/the-grand-hotel-sharm/hero.jpg",
        scope: ["Rooms", "Restaurant", "Bar"]
    },
    {
        id: 28,
        year: 2023,
        title: "Marassi",
        location: "North Coast, Egypt",
        description: "Emaar's flagship Mediterranean destination spanning 6.5 million sqm with nine international hotels, an 18-hole golf course, and the largest marina in the Middle East.",
        image: "public/images/projects/marassi/hero.jpg",
        scope: ["Doors", "Cladding", "Wardrobes", "Kitchens", "Outdoor"]
    }
];

/**
 * Initialize the hospitality page
 */
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProjects();
    renderTimeline();
    initTimelineAnimations();
});

/**
 * Render featured projects
 */
function renderFeaturedProjects() {
    const container = document.getElementById('featured-grid');
    if (!container) return;

    const featuredProjects = PROJECTS
        .filter(p => p.featured)
        .sort((a, b) => b.year - a.year)
        .slice(0, 4);

    const html = featuredProjects.map((project, index) => `
        <article class="featured-card ${index === 0 ? 'large' : ''}">
            <div class="featured-card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="featured-card-overlay">
                <div class="featured-card-meta">
                    <span class="featured-card-year">${project.year}</span>
                    <span class="featured-card-location">${project.location}</span>
                </div>
                <h3 class="featured-card-title">${project.title}</h3>
                <p class="featured-card-description">${project.description || ''}</p>
            </div>
        </article>
    `).join('');

    container.innerHTML = html;
}

/**
 * Render timeline — Angular grid layout
 */
function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    const sortedProjects = [...PROJECTS].sort((a, b) => b.year - a.year);

    const html = sortedProjects.map(project => `
        <article class="timeline-item" data-year="${project.year}">
            <div class="timeline-year">${project.year}</div>
            <div class="timeline-content">
                <span class="timeline-location">${project.location}</span>
                <h3 class="timeline-title">${project.title}</h3>
                <p class="timeline-description">${project.description || ''}</p>
                ${project.scope ? `
                    <div class="timeline-scope">
                        ${project.scope.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="timeline-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
        </article>
    `).join('');

    container.innerHTML = html;
}

/**
 * Initialize timeline scroll animations
 */
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => observer.observe(item));
}
