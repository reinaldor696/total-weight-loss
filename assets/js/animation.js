//
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
