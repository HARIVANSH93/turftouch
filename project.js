gsap.to(".nav",{
   backgroundColor : "#000",
   height : "90",
   duration : 1,
   
   scrollTrigger:{
    trigger :".nav",
    scroller : "body",
   // markers : true,
    start: "top -10vh",
    end :"top -11vh",
    scrub : 1
   }
})
gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger : {
        trigger : ".main",
        scroller : "body",
       // markers : true,
       start : "top -30%",
       end : "top -80%",
       scrub : 2,
    }
   
    }

)

gsap.from(".services,.card,.card-content",{
    x:20,
    opacity: 0,
    duration : 1,
    stagger : 1,
    scrollTrigger : {
        trigger : ".services,.card,.card-content",
        scroller: "body",
       // markers:true,
        start : "top 60%",
       end : "top 55%",
       scrub: 4,

    }
})

gsap.from("#colon1", {
    y: -50,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 50,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  }
);
