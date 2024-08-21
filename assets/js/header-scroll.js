const headerContainer = document.querySelector('header');

// function to toggle header on scroll
(function(){
    let doc = document.documentElement;
    let prevDirection = 0;
    let prevScroll = window.scrollY || doc.scrollTop;
    let curDirection = 0;

    ScrollTrigger.create({
        trigger: 'body',
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

    function toggleHeader(direction) {
        if (direction === 2) {
            gsap.to(headerContainer, { duration: 1, y: '-200%'});
        } else {
            gsap.to(headerContainer, { duration: 1, y: '0', delay: 1.5 });
        }
    }
})();