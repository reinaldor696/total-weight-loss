// Mobile Animation
if (window.matchMedia("(max-width: 480px)").matches) {
    // Init Animation On Load
    function initAnimation() {
        const body = document.querySelector('body');

        // Timeline
        const tl = gsap.timeline({ 
            defaults: { duration: 2, ease: "expo.out" }, 
            onComplete: () => {
                body.style.overflow = 'auto'; // Enable Scroll
            }
        });
        
        // h1 Title
        tl.from('h1', { xPercent: -40, opacity: 0 });
        
        // h2 Title
        tl.from('h2.banner-heading', { xPercent: 40, opacity: 0 }, "<");

        // Navbar Logo
        tl.from('#img-logo-header', { yPercent: -200 }, "<");
        tl.from('#text-logo-header', { yPercent: -400, xPercent: -40 }, "<");

        // Navbar Header
        tl.from('#navbar-id button', { yPercent: -200 }, "<");

        // Banner Text
        tl.from('.banner-text', { xPercent: -50, opacity: 0 }, "<");

        // Mobile Image
        tl.fromTo('#mobile', { yPercent: 40, scale: 0.7, xPercent:15, rotation: -30 }, { yPercent: 0, scale: 1, xPercent: 0, rotation: 0 }, "<");
        
        // Book Cover Image
        tl.fromTo('#book-cover', { yPercent: 70, opacity: 0, rotation: -50 }, { yPercent: 0, opacity: 1, rotation: 0 }, "<");

        // Scroll Down
        tl.from('.scroll-down', { opacity: 0, yPercent: 100 }, "<");
    }

    window.onload = function() {
        initAnimation();
    };

    // Init Scroll Animation
    function initScroll() {
        //Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#book-cover',
                start: 'bottom bottom',
                end: '1300 bottom',
                scrub: 1,
                pin: true
            }
        });

        //Main Book Cover Animation
        tl.to("#book-cover", {
            keyframes: {
            '0%': { yPercent: 0, xPercent: 0, scale: 1, rotation: 0, transformOrigin: '80% 80%' },
            '90%': { yPercent: 10, xPercent: 5, scale: 0.7, rotation: 0 },
            '100%': { rotation: 20, transformOrigin: "80% 80%" }
            },
            duration: 3,
            overwrite: 'auto'
        });

        //Main mobile Animation
        tl.to("#mobile", { yPercent: 100, xPercent: -70, scale: 0.7, duration: 1, autoAlpha: 0 }, 0);

        //Scroll Down Text Animation
        tl.to('.scroll-down', {
            yPercent: 1000,
            duration: 2, 
            keyframes: {
                '50%': { opacity: 1 },
                '60%': { opacity: 0 },
                '100%': { opacity: 0 }
            }
        }, 0);

        //Secundary Mobile Animation
        gsap.from('.mobile-img', {
            duration: 1,
            keyframes: {
                '0%': { yPercent: -135, xPercent: 30, rotation: 25, autoAlpha: 0, scale: 0.5 },
                '20%': { autoAlpha: 1 },
                '95%': { yPercent: 0, xPercent: 0, rotation: 0, scale: 1 },
                '100%': { rotation: -15 }
            }, 
            scrollTrigger: {
                trigger: '.mobile-img',
                start: 'top 35%',
                end: '1430 35%',
                scrub: 2, 
                markers: true
            }
        });

        //This is out of the timeline//

        //Book List Animation
        gsap.from('#book-list-container', {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '#book-list-container',
                start: 'top center',
                end: 'center center',
                scrub: true
            }
        });

        //Mobile List Animation
        gsap.from('.lists-mobile li', {
            yPercent: 50,
            opacity: 0,
            stagger: 0.1, 
            delay: 0.5,
            scrollTrigger: {
                trigger: '.mobile-right',
                start: 'top 38%',
                end: 'center 38%',
                scrub: true
            }
        });

        //GSDevTools.create({animation:tl})
    }
    initScroll();

    // Our Clients Get Result Animation
    function ourClientGetResultAnimation() {
        //Timeline Our Client Scrolltrigger
        const tl = gsap.timeline({ 
            scrollTrigger: { 
                trigger: '.our-clients',
                start: 'top 85%',
                end: 'bottom 85%',
                scrub: 2
            },
            ease: "power2.sOut"
        });

        // Our Clients Container
        tl.from(".our-clients-bag", {
            keyframes:{
                "0%":{ yPercent: 100, scale: 0.15  },
                "40%":{ yPercent: 0 },
                "75%":{ scale: 0.15 },
                "100%":{ opacity: 1, yPercent: 0, scale: 1.2, borderRadius: '50%' },
            },
            duration: 2.5
        });

        // wrapped Container
        tl.from(".clinets-center", {
            keyframes:{
                "0%":{ yPercent: 180, scale: 1, autoAlpha: 1 },
                "40%":{ yPercent: 0 },
                "45%":{ scale: 0.5 },
                "100%":{ scale: 1.2 },
            },
            duration: 1
        }, "-=1.5");

        // Text Our Clients
        tl.from(".get-clients", {
            keyframes:{
                "0%":{ yPercent: 180, scale: 1, autoAlpha: 1 },
                "40%":{ yPercent: 0 },
                "45%":{ scale: 0.5 },
                "100%":{ scale: 1.2 },
            },
            duration: 1
        }, "<");

        // wrapped Container circle animation
        tl.to(".clinets-center", { scale: 2.5, ease: "power2.inOut"});

    }
    //ourClientGetResultAnimation();

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
            transformOrigin: "bottom right",
            ease: "power.out2",
            duration: 1 
        });
        
        // Prev Imgs Testimonial
        tl.fromTo('#prev-img-testimonial, #prev-img-testimonial2', 
            { xPercent: 80 }, 
            {  xPercent: 0, ease: "power.out2", duration: 1 }, 0);

        tl.from('#dat-days-animat', { yPercent: 400  }, "<");

        tl.from('#text-review-animat', { yPercent: 300 }, "<");
    }
    testimonialsAnimation();

    // Ceo Section Animation
    function ceoSectionAnimation() {
        
        // CEO Image Initial Animation
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
        let tl2 = gsap.timeline({
            scrollTrigger : {
                trigger: '.ceo-sec',
                start: '60% 40%',
                end: 'bottom 40%',
                onEnter: () => {
                    tl2.play(); // if the timeline is reversed, play it
                },
                onLeaveBack: () => {
                    tl2.reverse();
                } // if the timeline is not reversed (i.e. playing forward), reverse it
            }
        });

        // CEO Text and Image Animation 
        tl2.to('.ceo-text, .ceo-img', { y: -200, opacity: 0, duration: 1, overwrite: 'auto' });
        // CEO Johnny Track Animation
        tl2.to('.ceojohnny', { y: -600, duration: 1, overwrite: 'auto' }, 0);
        // CEO Clientes Logos Animation
        tl2.to('#clientes-sec-logos', { y: -400, duration: 1, overwrite: 'auto' }, 0);

        tl2.timeScale(1.5);
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
                scrub: 4
            },
            ease: "expo"
        });

        // Control Section Title
        tl.to('.cover-book1-ctrl-sec', {
            keyframes:{
                "0%":{ xPercent: 0, yPercent: 0, transformOrigin: "top right", scale: 1 },
                "50%":{ xPercent: -50, yPercent: 50 },
                "100%":{ xPercent: -20, yPercent: 20, scale: 1.1 }
            },
            duration: 2 
        });

        tl.to('.cover-book2-ctrl-sec', {
            keyframes:{
                "0%":{ rotation: 0, transformOrigin: "0 50%" },
                "100%":{ rotation: 30 }
            },
            duration: 2 
        }, "-=2");

        tl.to('.cover-book3-ctrl-sec', {
            keyframes:{
                "0%":{ rotation: 0, transformOrigin: "50% 50%", scale: 0.8 },
                "50%":{ rotation: 20, yPercent: 0, xPercent: 0, scale: 1 },
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
                "0%":{ rotation: 0, transformOrigin: "50% 50%" },
                "50%":{ rotation: 40, scale: 1, yPercent: 0, xPercent: 0 },
                "100%":{ rotation: 20, yPercent: -5, xPercent: 10, scale: 0.8 },
            },
            duration: 2 
        }, "-=2");

        tl.to('.cover-book6-ctrl-sec', {
            keyframes:{
                "0%":{ rotation: 0, transformOrigin: "50% 50%" },
                "50%":{ rotation: 20, scale: 1, yPercent: 0, xPercent: 0 },
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
}