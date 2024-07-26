// Init Animation On Load
function initAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "expo.out" } });
    
    // h1 Title
    tl.fromTo('h1', { xPercent: -40, opacity: 0 }, { xPercent: 0, opacity: 1 });
    
    // h2 Title
    tl.fromTo('h2.banner-heading', { xPercent: 40, opacity: 0 }, { xPercent: 0, opacity: 1 }, "<");

    // Navbar Logo
    tl.from('#img-logo-header', { yPercent: -200 }, "<");
    tl.fromTo('#text-logo-header', { yPercent: -400 }, { yPercent: 0, xPercent: 40 }, "<");

    // Navbar Header
    tl.from('#navbarTogglerDemo03 li', { yPercent: -200, stagger: 0.05 }, "<");

    // Banner Text
    tl.fromTo('.banner-text p', { xPercent: -40, opacity: 0 }, { xPercent: 0, opacity: 1, }, "<");
    
    // Banner Button
    tl.fromTo('.banner-btn', { xPercent: -40, opacity: 0 }, { xPercent: 0, opacity: 1, }, "<");

    // Mobile Image
    tl.fromTo('#mobile', { yPercent: 40, scale: 0.7, xPercent:15, rotation: -30 }, { yPercent: 0, scale: 1, xPercent:0, rotation: 0 }, "");
    
    // Book Cover Image
    tl.fromTo('#book-cover', { yPercent: 70, opacity: 0, rotation: -50 }, { yPercent: 0, opacity: 1, rotation: 0 }, "<");

    // Scroll Down
    tl.fromTo('.scroll-down svg', { opacity: 0, yPercent: 40 }, { opacity: 1, yPercent: 0 }, "<");
    tl.fromTo('.scroll-down h6', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 }, "<");
}

window.onload = function() {
    initAnimation();
};

// Init Scroll Animation
function initScroll() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.scroll-down',
            start: 'top 350',
            end: '3000 350',
            scrub: true,
            pin: true
        }
    });

     // Scroll Down Book Cover Image
    tl.to('.scroll-down', {
        keyframes:{
            "0%":{ opacity: 1 },
            "30%":{ opacity: 1 },
            "50%":{ opacity: 0 },
            "100%":{ opacity: 0 },
        },
        duration: 5 
    });

    // Scroll Down Book Cover Image
    tl.to('#book-cover', {
        keyframes:{
            "0%":{ yPercent:0, xPercent:0, scale: 1, rotation: 0, },
            "90%":{ yPercent: 140, xPercent: 25, scale: 0.8, rotation: 0, },
            "100%":{ rotation: 35, transformOrigin:"80% 80%" },
        },
        duration: 5 
    }, 0);

    // Scroll Down Mobile Image
    tl.to('#mobile', { 
        keyframes:{
            "0%":{ yPercent: 0, xPercent: 0, scale: 1 },
            "40%":{ yPercent: 60, xPercent: -70, scale: 0.7 },
            "50%":{ opacity: 0 },
            "100%":{ yPercent: 210,  opacity: 0 },
        },
        duration: 4 
    }, 0);

    // Scroll Down Book List Container
    tl.to('#book-list-container', { 
        keyframes:{
            "0%":{ yPercent: 100, opacity: 0 },
            "85%":{ opacity: 0 },
            "100%":{ yPercent: -20,  opacity: 1 },
        },
        duration: 5 
    }, 0);

    // A mobile keyfame with different direction
    tl.from('.mobile-img', { 
        keyframes:{
            "0%":{ yPercent: -250, xPercent: 190, opacity: 0, rotation: 25, visibility: "visible" },
            "50%":{ opacity: 1, rotation: 25 },
            "100%":{ yPercent: 0, xPercent: 0, rotation: 0 , opacity: 1 },
        },
        duration: 5 
    });

    // Scroll Down list mobile content
    tl.fromTo('.lists-mobile li', { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.1, delay: 0.5 });

    //  Mobile Rotation
    tl.fromTo('.mobile-img', { rotation: 0 }, { rotation: 35, duration: 1, delay: 0.5 });
}
initScroll();

// Our Clients Get Result Animation
function ourClientGetResultAnimation() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.our-clients',
            start: 'center center',
            end: 'bottom center',
            scrub: true,
            pin: true,
        }
    });

    // Our Clients Container
    tl.to(".our-clients", {
        keyframes:{
            "0%":{ scale: 0.2, yPorcent: 300 },
            "50%":{ yPorcent: 0, scale: 0.2 },
            "90%":{ borderRadius: '50%' },
            "100%":{ opacity: 1, yPorcent: 0, scale: 1, borderRadius: '0%' },
        },
        duration: 2
    });

    // wrapped Container
    tl.to(".clinets-center", {
        keyframes:{
            "0%":{ yPercent: 135, visibility: "visible" },
            "50%":{ yPercent: 0 },
            "60%":{ scale: 0.5 },
            "100%":{ scale: 1 },
        },
        duration: 2
    }, "-=1.5");

    // Text Our Clients
    tl.to(".get-clients", {
        keyframes:{
            "0%":{ yPercent: 135, visibility: "visible" },
            "50%":{ yPercent: 0 },
            "60%":{ scale: 0.5 },
            "100%":{ scale: 1 },
        },
        duration: 2
    }, "<");

    // wrapped Container circle animation
    tl.to(".clinets-center", { scale: 1.5, ease: "power2.inOut"});
}
ourClientGetResultAnimation();