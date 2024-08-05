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
    tl.from('#navbarTogglerDemo03 li, .navbar-toggler', { yPercent: -200, stagger: 0.05 }, "<");

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
            start: 'top 750',
            end: '3000 750',
            scrub: 2,
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
            "100%":{ rotation: 20, transformOrigin:"80% 80%" },
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
            "0%":{ yPercent: -250, xPercent: 190, rotation: 25, visibility: "visible" },
            "30%": { opacity: 0 },
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
            scrub: 2,
            pin: true,
        }
    });

    // Our Clients Container
    tl.to(".our-clients-bag", {
        keyframes:{
            "0%":{ scale: 0.2, yPercent: 300 },
            "50%":{ yPercent: 0, scale: 0.2 },
            "90%":{ borderRadius: '50%' },
            "100%":{ opacity: 1, yPercent: 0, scale: 1, borderRadius: '0%' },
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
    tl.to(".clinets-center", { scale: 1.7, ease: "power2.inOut"});
}
ourClientGetResultAnimation();

// Testimonials Animation
function testimonialsAnimation() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.testimonial-sec',
            start: 'top 300',
            end: 'top 300',
        },
        ease: "expo"
    });

    // Testimonial Image
    tl.fromTo('#testimonial-image',
    { 
        scale: 0.7, 
        transformOrigin: "bottom right" 
    }, 
    { 
        scale: 1,
        transformOrigin: "bottom right" 
    });

    tl.from('#dat-days-animat', { yPercent: 400  }, "<");

    tl.from('#text-review-animat', { yPercent: 300 }, "<");
}
testimonialsAnimation();

// Ceo Section Animation
function ceoSectionAnimation() {
    
    // CEO Image
    gsap.from('.ceo-img', {
        scrollTrigger: {
            trigger: '.ceo-sec',
            start: 'top 40%',
            end: 'top 40%'
        },
        transformOrigin: "bottom",  
        scale: 0.7,
        duration: 1, 
    });

    // CEO Img and Text Timeline
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.ceo-sec',
            start: 'center 40%',
            end: 'bottom 40%',
            scrub: true
        }
    });

    // CEO Testimonial Text And image
    tl.to('.ceo-text, .ceo-img', {
        y: -200, 
        opacity: 0,
        duration: 1
    });
    
    // CEO Johnny Name Text
    tl.to('.ceojohnny', {
        y: -400,
        delay: 1.5, 
        duration: 2,
    }, "-=1.8");

    // Clients Logos Section
    tl.to('#clientes-sec-logos', {
        y: -400,
        duration: 1.5,
    }, "-=2");
}
ceoSectionAnimation();

//FAQ Section Animation
function faqSectionAnimation() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.faq-sec',
            start: '0 center',
            end: '0 center',
        },
        ease: "back"
    });

    // FAQ Section Title
    tl.from('.faq-title, .accordion-item', { yPercent: 300, stagger: 0.05 });

    // Control Section
    tl.from(".control-sec", { yPercent: 70 }, "-=0.5");
}
faqSectionAnimation();

// Control Section Animation
function controlSectionAnimation() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: '.control-sec',
            start: '0 bottom',
            end: 'bottom bottom',
            scrub: true
        },
        ease: "expo"
    });

    // Control Section Title
    tl.from('.cover-book1-ctrl-sec', {
        keyframes:{
            "0%":{ xPercent: -50, yPercent: 50  },
            "50%":{ xPercent: 0, yPercent: 0 },
            "100%":{ scale: 1.1, transformOrigin: "top right", xPercent: -20, yPercent: 20 },
        },
        duration: 2 
    });

    tl.to('.cover-book2-ctrl-sec', {
        keyframes:{
            "0%":{ rotation: 30, transformOrigin: "0 50%" },
            "50%":{ rotation: 0 },
            "100%":{ rotation: 60 },
        },
        duration: 2 
    }, "-=2");

    tl.to('.cover-book3-ctrl-sec', {
        keyframes:{
            "0%":{ rotation: -10 },
            "50%":{ rotation: 10, transformOrigin: "50% 50%", scale: 1, yPercent: 0, xPercent: 0 },
            "100%":{ rotation: 20, yPercent: -5, xPercent: 10 },
        },
        duration: 2 
    }, "-=2");

    tl.to('.cover-book4-ctrl-sec', {
        keyframes:{
            "0%":{ yPercent: 0, xPercent: 0 },
            "50%":{ yPercent: -10, xPercent: 50 },
            "100%":{ yPercent: 0, xPercent: 0},
        },
        duration: 2 
    }, "-=2");

    tl.to('.cover-book5-ctrl-sec', {
        keyframes:{
            "0%":{ rotation: -30 },
            "50%":{ rotation: 10, transformOrigin: "50% 50%", scale: 1, yPercent: 0, xPercent: 0 },
            "100%":{ rotation: 20, yPercent: -5, xPercent: 10, scale: 0.8 },
        },
        duration: 2 
    }, "-=2");

    tl.to('.cover-book6-ctrl-sec', {
        keyframes:{
            "0%":{ rotation: -10 },
            "50%":{ rotation: 10, transformOrigin: "50% 50%", scale: 1, yPercent: 0, xPercent: 0 },
            "100%":{ rotation: 20, yPercent: -15, xPercent: 15 },
        },
        duration: 2 
    }, "-=2");
}
controlSectionAnimation();

// Footer Animation
function footerAnimation() {
    const tl = gsap.timeline({ 
        scrollTrigger: { 
            trigger: 'footer',
            start: 'center bottom',
            end: 'center bottom'
        },
        ease: "expo"
    });

    // img-footer-logo and col-footer-text
    tl.from('.img-footer-logo, .col-footer-text', { y: 200, duration: 1 });

    // par-footer-logo
    tl.from('.par-footer-logo', { y: 200, duration: 1 }, "-=0.8");

    // bot-footer-animation
    tl.from('.bot-footer-animation', { y: 100, duration: 1 }, "-=0.8");
}
footerAnimation();