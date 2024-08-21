const body = document.querySelector('body');

function showPagesAnimation() {
    const tl = gsap.timeline({
        defaults: { ease: 'expo', duration: 2 }, 
        onComplete: () => {
            body.style.overflow = 'auto';
        } 
    });
    
    tl.from('.shop-heading', { xPercent: -10, opacity: 0 });

    tl.from('.shop-column', { yPercent: 50, stagger: 0.1 }, '<');
}

window.onload = function() {
    showPagesAnimation();
};
