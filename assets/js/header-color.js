// header animation
// change color of the navbar for white areas
const blueLogo = document.querySelector('.bluelogo');
const whiteLogo = document.querySelector('.whitelogo');
const navBarColorMobileWhite = document.querySelector('.navBar-color-mobile-white');
const navBarColorMobile = document.querySelector('.navBar-color-mobile');
const navBarColor = document.querySelectorAll('nav.navbar.navbar-expand-lg li.nav-item a');
const makeItSimpleElement = document.querySelector('#makeitsimple-anit');
const downloadTotal = document.querySelector('.download-total');
const ourClient = document.querySelector('.our-clients');
const faqSec = document.querySelector('.faq-sec');
const controlSec = document.querySelector('.control-sec');
const productReviewSec = document.querySelector('.product-review-sec');
const aboutSec = document.querySelector('#abt-productid');
const termsSec = document.querySelector('.terms-sec-2');
const shippingSec = document.querySelector('.shipping-sec-2');

function setNavBarColor(color, borderColor) {
    navBarColor.forEach(e => {
        e.style.color = color;
        e.style.borderColor = borderColor;
    });
}

function showBlueLogo() {
    if (window.matchMedia("(max-width: 1024px)").matches) { //mobile
        navBarColorMobile.style.display = 'block';
        navBarColorMobileWhite.style.display = 'none';
        blueLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
    } else { //desktop
        blueLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
    }

    setNavBarColor('#000', '#000');
}

function showWhiteLogo() {
    if (window.matchMedia("(max-width: 1024px)").matches) { //mobile
        navBarColorMobile.style.display = 'none';
        navBarColorMobileWhite.style.display = 'block';
        blueLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
    } else { //desktop
        blueLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
    }
    
    setNavBarColor('#FFF', '#FFF');
}

//home sections
if (makeItSimpleElement) {
    gsap.to(navBarColor, { 
        scrollTrigger: { 
            trigger: makeItSimpleElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

if (downloadTotal) {
    gsap.to(navBarColor, { 
        scrollTrigger: { 
            trigger: downloadTotal,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

if (ourClient) {
    gsap.to(navBarColor, { 
        scrollTrigger: { 
            trigger: ourClient,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showWhiteLogo,
            onLeaveBack: showBlueLogo
        }
    });
}

if (faqSec) {
    gsap.to(navBarColor, { 
        scrollTrigger: { 
            trigger: faqSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

if (controlSec) {
    gsap.to(navBarColor, { 
        scrollTrigger: { 
            trigger: controlSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showWhiteLogo,
            onLeaveBack: showBlueLogo
        }
    });
}

//cook book and app sections
if (productReviewSec) {
    gsap.to(navBarColor, {
        scrollTrigger: { 
            trigger: productReviewSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

//about section
if (aboutSec) {
    gsap.to(navBarColor, {
        scrollTrigger: { 
            trigger: aboutSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

//terms and conditions section
if (termsSec) {
    gsap.to(navBarColor, {
        scrollTrigger: { 
            trigger: termsSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}

//shipping information section
if (shippingSec) {
    gsap.to(navBarColor, {
        scrollTrigger: { 
            trigger: shippingSec,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: showBlueLogo,
            onLeaveBack: showWhiteLogo
        }
    });
}