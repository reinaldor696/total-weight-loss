/////////////////////////////////////////////////////////////////
/////////////// testimonial image function///////////////////////
/////////////////////////////////////////////////////////////////
const testimonialName = document.getElementById("testimonial-name");
const testimonialText = document.getElementById("testimonial-text");
const datDaysAnimat = document.getElementById("dat-days-animat");
const datDaysAnimat2 = document.getElementById("dat-days-animat2");
const testWeight = document.getElementById("test-weight");
const testMonths = document.getElementById("test-months");
const testimonialImage = document.getElementById("testimonial-image");
const prevImgTestimonial = document.getElementById("prev-img-testimonial");
const prevImgTestimonial2 = document.getElementById("prev-img-testimonial2");
const nextTestBtn = document.getElementById("next-img-btn");
const testImgContainer = document.querySelectorAll(".test-img-container");
const imgTestCont = document.querySelector(".img-test-cont");
const testImg2 = document.getElementById("testimonial-image2");

// Testimonial Content Array
const testimonialImg = [
    {   
        name: "Emily Bonnevelle",
        img: "assets/images/test-big-1.webp",
        testimonial: "“In only 3 weeks I have lost 10 pounds. I purchased the E-book and would highly recommend to everyone who asks.”",
        day: "01",
        lbs: "-76lbs",
        time: "8 months"
    },
    {
        name: "David Pennington",
        img: "assets/images/test-big-2.webp",
        testimonial: "“I know its only been a week...but i wanted to share that i see a visible difference already in how I look and feel!”",
        day: "02",
        lbs: "-35lbs",
        time: "4 months"
    },
    {
        name: "John Birdwhistle",
        img: "assets/images/test-big-3.webp",
        testimonial: "“Easiest diet I have ever been on and believe me, I’ve tried them all. So glad it’s good for me!”",
        day: "03",
        lbs: "-50lbs",
        time: "5 months"
    }
];

let currentIndex = 0;

// Update the image and text with animations
function updateTestImgText() {
    gsap.to(testimonialName, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            testimonialName.textContent = testimonialImg[currentIndex].name;
            gsap.to(testimonialName, { opacity: 1, duration: 0.5 });
    }});

    gsap.to(testimonialImage, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            testimonialImage.src = testimonialImg[currentIndex].img;
            gsap.to(testimonialImage, { opacity: 1, duration: 0.5 });
        }
    });

    gsap.to(testimonialText, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            testimonialText.textContent = testimonialImg[currentIndex].testimonial;
            gsap.to(testimonialText, { opacity: 1, duration: 0.5 });
        }
    });

    /*
    reparar
    gsap.to(".dat-days-cont2", {
        ease: "power2.in",
        onComplete: () => {
            datDaysAnimat.textContent = testimonialImg[currentIndex].day;
            gsap.to(datDaysAnimat, datDaysAnimat2, {y: -21});
        },
        duration: 0.5
    })*/

    gsap.to(testWeight, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            testWeight.textContent = testimonialImg[currentIndex].lbs;
            gsap.to(testWeight, { opacity: 1, duration: 0.5 });
        }
    });

    gsap.to(testMonths, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            testMonths.textContent = testimonialImg[currentIndex].time;
            gsap.to(testMonths, { opacity: 1, duration: 0.5 });
        }
    });

    // Update the prev images with animations
    let prevIndex = (currentIndex + 1) % testimonialImg.length;

    gsap.to(prevImgTestimonial, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            prevImgTestimonial.src = testimonialImg[prevIndex].img;
            gsap.to(prevImgTestimonial, { opacity: 1, duration: 0.5 });
    }});

    let prevIndex2 = (currentIndex + 2) % testimonialImg.length;

    gsap.to(prevImgTestimonial2, { 
        opacity: 0, 
        duration: 0.5, 
        onComplete: () => {
            prevImgTestimonial2.src = testimonialImg[prevIndex2].img;
            gsap.to(prevImgTestimonial2, { opacity: 1, duration: 0.5 });
    }});

    // Update the current index
    currentIndex = (currentIndex + 1) % testimonialImg.length;
}

// Event Listeners Btn After
nextTestBtn.addEventListener('click', updateTestImgText);

//GSDevTools.create({animation:tl})