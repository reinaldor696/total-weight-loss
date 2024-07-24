// Header Animation

function initAnimation() {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "expo.out" } });

    // Navbar Logo
    tl.from('#img-logo-header', { yPercent: -200 });

    tl.fromTo('#text-logo-header', { yPercent: -400 }, { yPercent: 0, xPercent: 40 }, "<");

    // Navbar Header
    tl.from('#navbar-header li', { yPercent: -200, stagger: 0.05 }, "<");
}

window.onload = initAnimation;