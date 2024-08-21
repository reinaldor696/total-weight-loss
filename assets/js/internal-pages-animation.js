const body = document.querySelector('body');

// Animation for the shop page
function showPagesAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });

    tl.from('.shop-column', { yPercent: 50, stagger: 0.1 }, '<');
}
showPagesAnimation();

// Animation for the cookbook page
function cookBookAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });
    
    // Title product
    tl.from('h6.product-title', { xPercent: 10, opacity: 0 });

    // star rating, price, and product lists
    tl.from('.star-rating, .prd-price, .prd-sing-lists', { y: 100 }, '<');

    // add to cart button
    tl.from('.add-to-button', { y: 100, opacity: 0 }, '-=1.8');

    // Download app image
    tl.from('.detail-stores li', { y: 100, opacity: 0, stagger: 0.2 }, '-=2');
}
cookBookAnimation();

function termOfServiceAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });

    // right terms
    tl.from('.right-terms', { xPercent: 20, opacity: 0 });

    //bottom terms
    tl.from('.counting-list-container', { yPercent: 70, opacity: 0 }, '<');
}
termOfServiceAnimation();

function shippingInformationAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });

    // right shipping
    tl.from('.shipping-heading-cont', { xPercent: -60, opacity: 0 });

    // bottom shipping
    tl.from('.shipping-par-cont', { xPercent: 60, opacity: 0 }, '<');
}
shippingInformationAnimation();

function contactUsAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });

    // left contact
    tl.fromTo('.contact-form, .fontact-field', { width: '50%' }, { width: '100%' });
}
contactUsAnimation();

function aboutUsAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });

    // left about
    tl.from('.par-about-us', { xPercent: 20, opacity: 0 });

    // right about
    tl.from('.subtitle-about-us', { xPercent: 20, opacity: 0 }, '<');

    tl.from('.abt-ceo', { scale: 0.7, transformOrigin: 'bottom' }, '<');

    tl.from('.ceo-name-animation', { yPercent: 50, opacity: 0 }, '<');
}
aboutUsAnimation();