gsap.registerPlugin(ScrollTrigger);

gsap.from(".row1", {
    duration: 3,
    x: '40',
    ease: 'bounce',
    scrollTrigger: {
        trigger:".row1",
        
        start: "top 100%",
        end:"bottom 10%",
        toggleActions:"restart pause restart reset"
    }
})

gsap.from(".row2", {
    duration: 1,
    x: '50',
    ease: 'linear',
    scrollTrigger: {
        trigger:".row2",
        
        start: "top 100%",
        end:"bottom 10%",
        toggleActions:"restart pause restart reset"
    }
    
})



gsap.from(".row3", {
    duration: 2,
    x: '-50',
    ease: 'circ',
    scrollTrigger: {
        trigger:".row3",
        
        start: "top 100%",
        end:"bottom 10%",
        toggleActions:"restart pause restart reset"
    }
    
})

gsap.from(".row4", {
    duration: 1,
    x: '-100',
    ease: 'sine',
    scrollTrigger: {
        trigger:".row4",
        
        start: "top 100%",
        end:"bottom 100%",
    }
    
})