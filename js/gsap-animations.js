window.addEventListener('load', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Initial Load Animations
    const nav = document.querySelector('.navbar');
    if(nav) {
        gsap.from(nav, { y: -80, opacity: 0, duration: 0.8, delay: 0, ease: "power2.out" });
        gsap.from(".logo", { scale: 0.9, opacity: 0, duration: 0.8, delay: 0, ease: "power2.out" });
        gsap.from(".nav-links li", { y: -10, opacity: 0, duration: 0.5, delay: 0, stagger: 0.1, ease: "power2.out" });
        gsap.from(".nav-icons a", { y: -10, opacity: 0, duration: 0.5, delay: 0, stagger: 0.1, ease: "power2.out" });
    }

    // 1. Preloader Animation
    const preloader = document.getElementById('premium-preloader');
    if (preloader) {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => preloader.style.display = 'none'
        });
    }

    // 2. Home Hero & Hero Text (Sequential fade-up + Background Parallax)
    if (document.querySelector('.hero')) {
        gsap.fromTo('.hero-bg', 
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power2.out", delay: 0 }
        );
        
        gsap.from(".hero-anim.title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
        gsap.from(".hero-anim.description", { y: 50, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
        gsap.from(".hero-anim a.btn", { y: 50, scale: 0.9, opacity: 0, duration: 1, delay: 0.5, ease: "back.out(1.5)" });

        gsap.from(".hero-anim-img", { y: 50, scale: 0.9, opacity: 0, duration: 1, delay: 0, ease: "back.out(1.5)" });
        
        gsap.to(".hero-bg", {
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
            y: 100, scale: 1.05 
        });
    }

    // ====================================================================================
    // SCROLL REVEAL ANIMATIONS HIERARCHY
    // ====================================================================================

    // A. Section headings, Paragraphs, Buttons → fade-up
    // Note: We skip elements already animated in hero (.hero-anim)
    const fadeUpElements = gsap.utils.toArray('h2:not(.hero-anim), h3:not(.hero-anim), h4:not(.hero-anim), .section-header, p:not(.hero-anim), .btn:not(.hero-anim):not(.navbar .btn)');
    fadeUpElements.forEach(el => {
        // Prevent double animating things inside containers that stagger
        if(el.closest('.product-card') || el.closest('.srv-item') || el.closest('.blog-card') || el.closest('.navbar') || el.closest('.hero')) return;
        
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
            y: 40, opacity: 0, duration: 0.7, ease: "power2.out"
        });
    });

    // B. Cards & Product grids → staggered reveal
    // Grouped by containers so they stagger gracefully
    const staggerContainers = gsap.utils.toArray('.product-grid, .service-grid-4, .services-marquee-wrap, .news-grid, .trainer-grid, .branches-section, .plan-grid, .blog-grid');
    staggerContainers.forEach(container => {
        const cards = container.querySelectorAll('.product-card, .srv-item, .news-card, .trainer-card, .branch-card, .plan-card, .blog-card');
        if(cards.length > 0) {
            gsap.from(cards, {
                scrollTrigger: { trigger: container, start: "top 85%", toggleActions: "play none none none" },
                y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
            });
        }
    });
    
    // Standalone cards that might not be in a grid
    const standaloneCards = gsap.utils.toArray('.dashboard-container .chart-container, .dashboard-container .recent-orders');
    standaloneCards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
            y: 50, opacity: 0, duration: 0.6, ease: "power2.out"
        });
    });

    // C. Images → fade-right / fade-left
    // Images appearing from left (fade-right)
    const fadeRightImages = gsap.utils.toArray('.about-text, .contact-img, .cat-box:nth-child(1)');
    fadeRightImages.forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            x: -80, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    // Images appearing from right (fade-left)
    const fadeLeftImages = gsap.utils.toArray('.about-images, .about-img, .story-video, .cat-box:nth-child(3)');
    fadeLeftImages.forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            x: 80, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    // Center elements like the middle category box
    const fadeCenter = gsap.utils.toArray('.cat-box:nth-child(2)');
    fadeCenter.forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            scale: 0.9, opacity: 0, duration: 1, delay: 0.2, ease: "power2.out"
        });
    });

    // D. Statistics → zoom-in
    const zoomElements = gsap.utils.toArray('.stat-item, .counter, .dashboard-container .stat-card');
    zoomElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            scale: 0.7, opacity: 0, duration: 0.6, ease: "back.out(1.5)"
        });
    });

    // ====================================================================================

    // Add hover interactivity for images
    gsap.utils.toArray('.product-img-wrap img').forEach(img => {
        img.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.05, duration: 0.3 }));
        img.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.3 }));
    });
    
    gsap.utils.toArray('.trainer-card').forEach(card => {
        const img = card.querySelector('img');
        if(img) {
            card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.1, duration: 0.5 }));
            card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.5 }));
        }
    });
});
