/////////////////////////////////////////////////////////////////
/////////////// testimonial image function///////////////////////
/////////////////////////////////////////////////////////////////
const testimonialName = document.getElementById("testimonial-name");
const testimonialText = document.getElementById("testimonial-text");
const datDaysAnimat = document.getElementById("dat-days-animat");
const testWeight = document.getElementById("test-weight");
const testMonths = document.getElementById("test-months");
const testimonialImage = document.getElementById("testimonial-image");
const prevImgTestimonial = document.getElementById("prev-img-testimonial");
const prevImgTestimonial2 = document.getElementById("prev-img-testimonial2");
const nextImgBtn = document.getElementById("next-img-btn");
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

function updateImg() {
    // Update the image and text
    testimonialName.textContent = testimonialImg[currentIndex].name;
    testimonialImage.src = testimonialImg[0].img;
    testimonialText.textContent = testimonialImg[currentIndex].testimonial;
    datDaysAnimat.textContent = testimonialImg[currentIndex].day;
    testWeight.textContent = testimonialImg[currentIndex].lbs;
    testMonths.textContent = testimonialImg[currentIndex].time;

    // Update the prev image
    let prevIndex = (currentIndex + 1) % testimonialImg.length;
    prevImgTestimonial.src = testimonialImg[1].img;

    let prevIndex2 = (currentIndex + 2) % testimonialImg.length;
    prevImgTestimonial2.src = testimonialImg[2].img;
}

function animateTransitionBefore() {
    
}

let currentX = 0;

// Event Listeners Btn After
nextImgBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialImg.length;

    currentX += 270;

    testImgContainer.forEach((imgCont) => {
        imgCont.style.transform = `translateX(calc(${currentX}/ 1920 * 100vw))`;
        imgCont.style.transition = '1s';
    });

    const newImg = document.createElement('img');

    let prevIndex = (currentIndex - 1) % testimonialImg.length;
    if (prevIndex < 0) {
        prevIndex = testimonialImg.length - 1;
    }

    newImg.src = testimonialImg[prevIndex].img;

    //newImg.classList.add('test-img-container');

    testImg2.appendChild(newImg);

    updateImg();
});

// Event Listeners Btn After From Image
prevImgTestimonial.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialImg.length;

    updateImg();
});

updateImg();

//GSDevTools.create({animation:tl})