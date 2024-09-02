const headerContainer = document.querySelector('header');

// function to toggle header on scroll
(function(){
    let doc = document.documentElement;
    let prevDirection = 0;
    let prevScroll = window.scrollY || doc.scrollTop;
    let curDirection = 0;

    ScrollTrigger.create({
        trigger: "body",
        start: "5% top",
        end: "bottom top",
        onUpdate: (self) => {
            let curScroll = self.scroll();
            if (curScroll > prevScroll) { 
                curDirection = 2; // down
            } else { 
                curDirection = 1; // up
            }

            if (curDirection !== prevDirection) {
                toggleHeader(curDirection);
            }

            prevDirection = curDirection;
            prevScroll = curScroll;
        }
    });

    let hideHeaderTimeout;

    function toggleHeader(direction) {
        if (direction === 2) {
            if (hideHeaderTimeout) { // if scrolling down, clear the timeout
                clearTimeout(hideHeaderTimeout);
            }
            hideHeaderTimeout = setTimeout(() => { // hide the header after 1000ms
                gsap.to(headerContainer, { duration: 1, y: '-200%' });
            }, 1000); // 1000ms delay
        } else {
            if (hideHeaderTimeout) { // if scrolling up, clear the timeout
                clearTimeout(hideHeaderTimeout);
            }
            hideHeaderTimeout = setTimeout(() => { // show the header after 1500ms
                gsap.to(headerContainer, { duration: 1, y: '0' });
            }, 100); //100ms delay
        }
    }
})();