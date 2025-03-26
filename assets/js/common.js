$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});



gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

let mm = gsap.matchMedia();

let smoother = ScrollSmoother.create({ 
	wrapper: '#smooth-wrapper', 
	content: '#smooth-content', 
	smooth: 5,
	smoothTouch: 0.1,
	effects: true,
	normalizeScroll: true,
	ignoreMobileResize: true,
	preventDefault: true
});


var tl_loding = gsap.timeline();



tl_loding.to('.video-container video',{
  scale:1,
  duration:2
})


tl_loding.to('.fill_logo',{
  "opacity":"1",
  delay:5,
  duration:1,
  onComplete:function(){
      jQuery('.trans_logo').css('opacity',"0");
   
      
  }
})


tl_loding.to('.fill_logo',{
  "width":"12vw"
})
tl_loding.to('.trans_logo',{
  "width":"12vw"
},"<")
tl_loding.to('.big_logo',{
  top: "7.2%",
  left: "10.1%",
  duration:2
},"<")

// .to('.video-container video',{
//   opacity:0
// },"<")

.to('.video-container video',{

 x:"52.5vw",
 y:"-6.8vw",
 width:"1.823vw",
 height:"1.823vw",
 
 duration:2
},"<")

.to('#spinner',{
  opacity:0
},"<-=0.1")




//  .to('.slide_count',{
//    "display":"flex",
//    "width":" 14.323vw",
  
//    duration:2

//  }
 
//  )

 .to('.video-container video',{

  opacity:0.8,
  onStart:function(){
    jQuery('slider1').css("z-index","9999999999");
      setTimeout(() => {
        
    
        gsap.set(".text_wrapper .txt1", { x: "0", y: "670px", "-webkit-text-fill-color": "#452b14" });
    gsap.to(".text_wrapper .txt1", { x: "0", y: "0", duration: 1 });
    
    gsap.set(".text_wrapper .txt2", { x: "500px", y: "670px", "-webkit-text-fill-color": "#452b14" });
    gsap.to(".text_wrapper .txt2", { x: "200px", y: "0", duration: 1 });
    
    gsap.set(".text_wrapper .txt3", { x: "100px", y: "670px", "-webkit-text-fill-color": "#452b14" });
    gsap.to(".text_wrapper .txt3", { x: "100px", y: "0", delay: 0.1, duration: 1 });
    
    // Reset text styles after initial animation
    gsap.set(".text_wrapper .txt2", {
      delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "200px", clearProps: "transform"
    });
    gsap.set(".text_wrapper .txt1", {
      delay: 1.2, "-webkit-text-fill-color": "", clearProps: "transform"
    });
    gsap.set(".text_wrapper .txt3", {
      delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "100px", clearProps: "transform"
    })

    // gsap.to(".light_bg", { "--target": "100%", ease: "linear", delay:2

    // })
    
   
   gsap.to(".light_bg", { "--target": "0%", ease: "linear", delay:0.5,duration:1,

    onComplete:function(){
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    }


 
   })
   
  
      }, 1200);



  }
 
   },"-=1.2")
   .to('.video-container video',{

    opacity:0,
    duration:1
     },"<")
.to('.header_logo',{
  opacity:1,
  rotate:"90deg",
  duration:0.5,

  onComplete:function(){
    gsap.to(".header_logo", {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }
},"-=0.9")
// .to('.header_main',{
//   opacity:1,
 
//   duration:0.5
// },"<")

.to('.video-container video',{

  opacity:0,




 
   },"<")

.to('.loading',{
  "background-color":"transparent",
  
})




gsap.to('.slide_count',{
  "display":"flex",
  "width":" 14.323vw",
  delay:1,
  duration:2,
  delay:9

}

)

// var tl = gsap.timeline();

// tl.pause()

// let isSnapping = false;
// let targetLabel = null;
// let lastDirection = 0;

// ScrollTrigger.create({
//   trigger: ".wrapper",
//   start: "top top",
//   end: "+=40000",
//   scrub: 1.5,
//   pin: true,
//   animation: tl,
//   id: "mainScroller",
//   snap: {
//     snapTo: (progress, self) => {
//       if (isSnapping) return progress;
//       const labels = Object.values(tl.labels),
//             totalDuration = tl.duration(),
//             snapPoints = labels.map(e => e / totalDuration),
//             direction = self.direction,
//             velocity = self.getVelocity();
//       isSnapping = true;
//       document.body.style.overflow = "hidden";
//       const currentSnap = snapPoints.reduce((prev, curr) =>
//         Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
//       );
//       const nextSnap = direction === 1
//         ? snapPoints.find(e => e > progress) || snapPoints[snapPoints.length - 1]
//         : snapPoints.slice().reverse().find(e => e < progress) || snapPoints[0];
//       return Math.abs(velocity) > 200 ? currentSnap : nextSnap;
//     },
//     duration: 2,
//     ease: "power2.inOut",
//     delay: 0,
//     inertia: false,
//     invalidateOnRefresh: true,
//     onComplete: () => {
//       gsap.to(tl, { time: tl.time(), duration: 0 });
//       setTimeout(() => {
//         isSnapping = false;
//         document.body.style.overflow = "auto";
//       }, 600);
//     }
//   }
// });

// Text animations


let isSnapping = false; // Flag to prevent rapid snapping
let lastDirection = 1; // Store last known scroll direction
let lastSnapTime = 0; // Prevent frequent snapping
let canMove = true; // Control snapping only after 1 sec pause
var docHeight = 45000;
const tl = gsap.timeline({
  scrollTrigger: {
    id: "s1",  // Ensure the ID is set correctly
    trigger: "#s1",
    start: "top top",
    end: "+=" + docHeight,
    scrub: 3,
    pin: "#wrapper",
    pinSpacing: true,
    onUpdate: (self) => {
      lastDirection = self.getVelocity() < 0 ? -1 : 1; // Store direction dynamically
    }
  }
});

// Adjust snapping behavior **only when scrolling ends**
ScrollTrigger.addEventListener("scrollEnd", () => {
  if (isSnapping || Date.now() - lastSnapTime < 1000 || !canMove) return; // Prevent excessive snapping

  const triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    const animation = trigger.animation;
    if (!animation?.scrollTrigger) return;

    const progress = animation.scrollTrigger.progress;
    const labels = Object.keys(animation.labels).map(label => ({
      label,
      time: animation.labels[label] / animation.duration(),
    }));

    let direction = lastDirection;

    // **Find the closest previous and next labels**
    let currentIndex = labels.findIndex(label => label.time > progress);
    let nextLabel = labels[currentIndex] || labels[labels.length - 1];
    let prevLabel = labels[currentIndex - 1] || labels[0];

    let targetTime;

    // ðŸ”¹ **Fix: Prevent Reverse Cycling & Apply 1-sec Pause**
    if (direction === 1) {
      // Moving forward: Snap to the next closest label
      targetTime = nextLabel.time > progress ? nextLabel.time : labels[labels.length - 1].time;
    } else if (direction === -1) {
      // Moving backward: Only snap ONE step back, not to the first label
      if (currentIndex > 0) {
        targetTime = labels[currentIndex - 1].time; // Move back only ONE step
      } else {
        targetTime = labels[0].time; // Stay on the first label if already at the beginning
      }
    } else {
      targetTime = progress; // No snapping
    }

    // **Prevent skipping multiple steps at once**
    if (Math.abs(progress - targetTime) > 0.15) return; // Increased threshold for stability

    // **Perform the snap with smooth transition**
    isSnapping = true;
    lastSnapTime = Date.now();
    canMove = false; // Disable further movement for 1 sec

    gsap.to(window, {
      duration: 0.5, // Smooth snapping duration
      ease: "power1.inOut",
      scrollTo: {
        y: animation.scrollTrigger.start +
          (animation.scrollTrigger.end - animation.scrollTrigger.start) * targetTime,
        autoKill: false,
      },
      onComplete: () => {
        setTimeout(() => {
          canMove = true; // Allow movement after 1 sec
          isSnapping = false; // Reset snap flag
        }, 1000);
      }
    });
  });
});


// const topValue = (window.innerWidth <= 1366) ? "50vw" : "60vw";

// Main timeline
tl.set(".slider1", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })


// .set(".text_wrapper .txt1", { x: "0", y: "670px", "-webkit-text-fill-color": "#452b14" })
//    .to(".text_wrapper .txt1", { x: "0", y: "0", duration: 1 })
   
//    .set(".text_wrapper .txt2", { x: "500px", y: "670px", "-webkit-text-fill-color": "#452b14" })
//    .to(".text_wrapper .txt2", { x: "200px", y: "0", duration: 1 },"<")
   
//    .set(".text_wrapper .txt3", { x: "100px", y: "670px", "-webkit-text-fill-color": "#452b14" })
//    .to(".text_wrapper .txt3", { x: "100px", y: "0", delay: 0.1, duration: 1 },"<")
   
//    // Reset text styles after initial animation
//    .set(".text_wrapper .txt2", {
//      delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "200px", clearProps: "transform"
//    })
//    .set(".text_wrapper .txt1", {
//      delay: 1.2, "-webkit-text-fill-color": "", clearProps: "transform"
//    })
//    .set(".text_wrapper .txt3", {
//      delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "100px", clearProps: "transform"
//    })
  
  .to(".slider1", { "clip-path": "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)",scale:0.8, duration: 1,
   
   })
  .to(".slider1", {left: "-60%", opacity: 0,duration:2,
 
    onStart() { $(".countNumber").html("02");
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     },
    onReverseComplete() { $(".countNumber").html("01");
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     }
  })
  .to(".slider2", { top: "0%",

   

    onStart:function(){

      gsap.set(".text_wrapper2 .txt1", { x: "0", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper2 .txt1", { x: "0", y: "0", duration: 1 });
      
      gsap.set(".text_wrapper2 .txt2", { x: "500px", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper2 .txt2", { x: "200px", y: "0", duration: 1 });
      
      gsap.set(".text_wrapper2 .txt3", { x: "100px", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper2 .txt3", { x: "100px", y: "0", delay: 0.1, duration: 1 });
      
      // Reset text styles after initial animation
      // gsap.set(".text_wrapper2 .txt2", {
      //   delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "200px", clearProps: "transform"
      // });
      // gsap.set(".text_wrapper2 .txt1", {
      //   delay: 1.2, "-webkit-text-fill-color": "", clearProps: "transform"
      // });
      // gsap.set(".text_wrapper2 .txt3", {
      //   delay: 1.2, "-webkit-text-fill-color": "", "padding-left": "100px", clearProps: "transform"
      // })

    }


    
   })
  .to(".slider2 .imgHolder", { right: "-15%", duration:1 })
  .to(".slider2 .light_bg2", { "--target2": "0%", ease: "linear" }, "<")
  .to(".slider2 .text_wrapper2 div", { "-webkit-text-fill-color": "#fff"}, "<")
  .to(".slider2 .imgHolder", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", right: "0%",
    onStart:function(){
      
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    },

    onReverseComplete() { 
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     }
   })
  
  .addLabel("slide-3")
  
  .to(".slider2 .imgHolder", { "clip-path": "polygon(20% 15%, 80% 15%, 80% 80%, 20% 80%)",
    onStart:function(){
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     }
  })
  .to('.slider2',{
    scale:0.8
  },"<")
  .to(".slider2", {left: "-60%", opacity: 0,duration:2,

  })
 
  .to(".slider3", {top: "0%",
    onStart() { $(".countNumber").html("03");

      gsap.set(".text_wrapper3 .tw3-1", { x: "0", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper3 .tw3-1", { x: "0", y: "0", duration: 1 });
      
      gsap.set(".text_wrapper3 .tw3-2", { x: "500px", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper3 .tw3-2", { x: "200px", y: "0", duration: 1 });
      
      gsap.set(".text_wrapper3 .tw3-3", { x: "100px", y: "670px", "-webkit-text-fill-color": "#452b14" });
      gsap.to(".text_wrapper3 .tw3-3", { x: "100px", y: "0", delay: 0.1, duration: 1 });

     },
    onReverseComplete() { $(".countNumber").html("02"); }
  })
  .to(".slider3 .imgHolder", { right: "-15%" })
  .to(".slider3 .light_bg2", { "--target2": "0%", ease: "linear" }, "<")
  .to(".slider3 .text_wrapper2 div", { "-webkit-text-fill-color": "#fff" }, "<")
  .to(".slider3 .imgHolder", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", right: "0%",
    onStart:function(){
      
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     }
   })
  .addLabel("slide-4")
  .to(".slider3 .imgHolder", { "clip-path": "polygon(20% 15%, 80% 15%, 80% 80%, 20% 80%)",
    onStart:function(){
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
   })
  .to('.slider3',{
    scale:0.9
  },"<")

  // .addLabel("slide-4-1")

  .to('.slider3',{
    "top":"-76%",
    duration:1
  })
  .to(".slider3 .imgHolder", { "clip-path": "polygon(20% 30%, 80% 30%, 80% 41%, 20% 41%)",duration:1 },"<")
  .to('.text_wrapper3',{
    top:"20%",
    delay:0.2,
    duration:1
  },"<")
  .to(".blankQuote", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    top: "0%", duration: 2
  },"<=-0.5")
  .to(".slide_count", { "opacity": "0" }, "<")
  .to(".author_name", { opacity: 1, top: "0" }, "<=+1")
  .to(".border", { display: "block" }, "<")
  .to(".border", { width: "75px" }, "<")
  .to(".author_designation", { opacity: 1, top: "0" }, "<=+0.5")
  .to(".quotes_box", { opacity: 1, top: "8%" }, "<")
  .to(".quote_open", { left: "29%", opacity: 1 }, "<")
  .to(".quote_close", { right: "8%", opacity: 1,
    // onStart:function(){
    //   jQuery('.loading').hide();
    // },
    // onCompleteRevers:function(){
    //   jQuery('.loading').show();
    // }
   }, "<")
   .addLabel("slide-5-1")

   .to('.para1',{
    "margin-top":"-48%",
    duration:5
   })
  .addLabel("slide-5")



  .to('.quote_section',{
    top:'-115%',
    duration:3
  })
.to('.author_details',{
  opacity:0,
  duration:0.2
},"<")

.to('.quote_open',{
  left:"20%",
  opacity:0,
  duration:1
},"<")

.to('.quote_close',{
  right:"0%",
  opacity:0,
  duration:1
},"<")
  // Pioneering section
  .to(".blankPioneering", { top: "0%", duration: 1 },"<")
  .to(".pheadings", { opacity: 1 },"<=+0.5")
  .to(".ptxt1", { opacity: 1, left: "0%", duration: 0.5 }, "-=0.5")
  .to(".ptxt2", { opacity: 1, right: "0%", duration: 0.5 }, "<")
  .to(".pheadings", {
    top: "20%", left: "17.5%", duration: 0.5, ease: "power1.out", delay: 0.5
  })
  .to(".pitems", { top: "-33%", duration: 0.5, ease: "power1.out" }, "<")
  .addLabel("slide-6")
  .to(".pheadings", {
    left: 0, top: "-20%", duration: 0.5, ease: "power1.out", delay: 0.5
  })
  .to(".pitems", {
    left: "16%", top: "10vw", scale: 1, ease: "power1.out"
  }, "<")
  .to(".pitem1 .pimageContainer", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},"<")

  .addLabel("slide-7")
  .to(".pitems", { top: "-34vw", duration: 0.5, ease: "power4.out", delay: 0.5 }, "<")
  .to(".pitem2 .pimageContainer", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale:1},"<")
  .to('.pitem2 .itemHeading',{
    "left":"0",
    duration:0.5
  },"-=0.5")
  .to('.pitem2 .itemPara',{
    "top":"0",
    opacity:1,
    duration:0.5
  },"<")
  
  .addLabel("slide-8")
  .to(".pitems", { top: "-77vw", duration: 0.5, ease: "power1.out", delay: 0.5 }, "<")
  .to(".pitem3 .pimageContainer", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scale:1},"<")
  .to('.pitem3 .itemHeading',{
    "left":"0",
    duration:0.5
  },"-=0.5")
  .to('.pitem3 .itemPara',{
    "top":"0",
    opacity:1,
    duration:0.5
  },"<")
  .addLabel("slide-9")
  .to(".pitems", { top: "-121vw", duration: 0.5, ease: "power1.out", delay: 0.5 }, "<")
  .to(".pitem4 .pimageContainer", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scale:1},"<")
  .to('.pitem4 .itemHeading',{
    "left":"0",
    duration:0.5
  },"-=0.5")
  .to('.pitem4 .itemPara',{
    "top":"0",
    opacity:1,
    duration:0.5
  },"<")
  .addLabel("slide-10")
  .to(".pitems", { top: "-165vw", duration: 0.5, ease: "power1.out", delay: 0.5 }, "<")
  .to(".pitem5 .pimageContainer", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",scale:1},"<")
  .to('.pitem5 .itemHeading',{
    "left":"0",
    duration:0.5
  },"-=0.5")
  .to('.pitem5 .itemPara',{
    "top":"0",
    opacity:1,
    duration:0.5
  },"<")
  .addLabel("slide-11")
  .to(".pitem5", { "clip-path": "polygon(0 34%, 37% 34%, 37% 61%, 0 62%)", duration: 1,ease: "power2.out" })
  .to(".pitems", { left: "-30%",duration:1,ease: "power2.out"}, "<")


  
  .to(".sliderSus", { right: "0%" },"<")
  // .to(".sliderSus .imgHolder", { right: "-15%" })

 

  .to(".sliderSus .imgHolderx", { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
    onStart:function(){
      
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     }
   },"<")
  .to(".sliderSus .text_wrapper3", { color: "#ffff" },)
  .addLabel("slide-12")

  .to('.sliderSus .imgHolderx',{
    "clip-path": "polygon(35% 30%, 62% 30%, 62% 59%, 35% 59%)",
    onStart:function(){
      
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     }
  })

  .to('.sliderSus .text_wrapperSus',{
    "scale":"0.8",
    opacity:0,
  },"<")

  // Urbanism section
  .to(".blankUrbanism", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    top: "0%", duration: 1
  })
  .to(".headings", { opacity: 1 }, "-=0.5")
  .to(".lineAnimation", { display: "block" },"<")
  .addLabel("slide-13")
  .to(".headings", { top: "-16vh" })



  .to(".lineAnimation", {
    transformOrigin: "top center",
    transform: "translate(-50%,-30%) rotate(90deg)",
    width: "36.875vw",
    // top: topValue
  },"-=0.4")


  .to(".lineAnimation img", { transform: "rotate(-90deg)", duration: 0.5 }, "<")
  .to(".lineAnimation", { left: "95%" })
  .to(".lineAnimation", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1
  })
  .to(".lineAnimation img", { opacity: 1, duration: 1 }, "<")
  .to(".lineSlide1-content .uHeading", { opacity: 1, right: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide1-content .uDescription", { opacity: 1, left: 0 }, "<")
  .addLabel("slide-14")
  .to(".lineAnimation", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 2px, 0% 2px)", left: "95%"
  }, "+=1")
  .to(".lineAnimation img", { opacity: 0 },"<")
  .to(".lineSlide1-content .uHeading", { opacity: 0, right: "-15%" }, `-=${0.7 * 1}`)
  .to(".lineSlide1-content .uDescription", { opacity: 0, left: "-15%" }, "<")
  .to(".lineAnimation", { left: "55%" })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 99.8%, 100% 99.8%, 100% 100%, 0% 100%)",
    onStart: function() {
      $(".lineSlide1").css("display", "none");
      $(".lineSlide2").css("display", "block").css("transform", "rotate(360deg)");
    },
    onReverseComplete: function() {
      $(".lineSlide1").css("display", "block");
      $(".lineSlide2").css("display", "none");
    }
  })
  .to(".lineAnimation img", { opacity: 1 })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  })
  .to(".lineSlide2-content .uHeading", { opacity: 1, left: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide2-content .uDescription", { opacity: 1, right: 0 }, "<")
  .addLabel("slide-15")


  .to('.lineAnimation',{
    "clip-path": "polygon(0% 99.8%, 100% 99.8%, 100% 100%, 0% 100%)",

    onComplete: function() {
      $(".lineSlide2").css("display", "none");
      $(".lineSlide3").css("display", "block").css("transform", "rotate(360deg)");
    },
    onReverseComplete: function() {
      $(".lineSlide2").css("display", "block");
      $(".lineSlide3").css("display", "none");
    }
  },"+=1")
  .to(".lineSlide2-content .uHeading", { opacity: 0, left: "-15%" }, `-=${0.7 * 1}`)
  .to(".lineSlide2-content .uDescription", { opacity: 0, right: "-15%" }, "<")

  .to('.lineAnimation',{
    left: "97%"
  })
  .to(".lineAnimation img", { opacity: 0 },"<")
  .to('.lineAnimation',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 0.2%, 0% 0.2%)",
  
  })
  .to(".lineAnimation img", { opacity: 1 })
  .to('.lineAnimation',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration:1
  })

  .to(".lineSlide3-content .uHeading", { opacity: 1, right: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide3-content .uDescription", { opacity: 1, left: 0 }, "<")

  .addLabel("slide-16")


  .to(".lineAnimation", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 2px, 0% 2px)", left: "95%"
  }, "+=1")
  .to(".lineAnimation img", { opacity: 0 },"<")
  .to(".lineSlide3-content .uHeading", { opacity: 0, right: "-15%" }, `-=${0.7 * 1}`)
  .to(".lineSlide3-content .uDescription", { opacity: 0, left: "-15%" }, "<")
  .to(".lineAnimation", { left: "55%" })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 99.8%, 100% 99.8%, 100% 100%, 0% 100%)",
    onStart: function() {
      $(".lineSlide3").css("display", "none");
      $(".lineSlide4").css("display", "block").css("transform", "rotate(360deg)");
    },
    onReverseComplete: function() {
      $(".lineSlide3").css("display", "block");
      $(".lineSlide4").css("display", "none");
    }
  })
  .to(".lineAnimation img", { opacity: 1 })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  })
  .to(".lineSlide4-content .uHeading", { opacity: 1, left: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide4-content .uDescription", { opacity: 1, right: 0 }, "<")
  .addLabel("slide-17")
 


  .to('.lineAnimation',{
    "clip-path": "polygon(0% 99.8%, 100% 99.8%, 100% 100%, 0% 100%)",

    onComplete: function() {
      $(".lineSlide4").css("display", "none");
      $(".lineSlide5").css("display", "block").css("transform", "rotate(360deg)");
    },
    onReverseComplete: function() {
      $(".lineSlide4").css("display", "block");
      $(".lineSlide5").css("display", "none");
    }
  },"+=1")
  .to(".lineSlide4-content .uHeading", { opacity: 0, left: "-15%" }, `-=${0.7 * 1}`)
  .to(".lineSlide4-content .uDescription", { opacity: 0, right: "-15%" }, "<")

  .to('.lineAnimation',{
    left: "97%"
  })
  .to(".lineAnimation img", { opacity: 0 },"<")
  .to('.lineAnimation',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 0.2%, 0% 0.2%)",
  
  })
  .to(".lineAnimation img", { opacity: 1 })
  .to('.lineAnimation',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration:1
  })

  .to(".lineSlide5-content .uHeading", { opacity: 1, right: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide5-content .uDescription", { opacity: 1, left: 0 }, "<")

  .addLabel("slide-18")

  .to(".lineAnimation", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 2px, 0% 2px)", left: "95%"
  }, "+=1")
  .to(".lineAnimation img", { opacity: 0 },"<")
  .to(".lineSlide5-content .uHeading", { opacity: 0, right: "-15%" }, `-=${0.7 * 1}`)
  .to(".lineSlide5-content .uDescription", { opacity: 0, left: "-15%" }, "<")
  .to(".lineAnimation", { left: "55%" })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 99.8%, 100% 99.8%, 100% 100%, 0% 100%)",
    onStart: function() {
      $(".lineSlide5").css("display", "none");
      $(".lineSlide6").css("display", "block").css("transform", "rotate(360deg)");
    },
    onReverseComplete: function() {
      $(".lineSlide5").css("display", "block");
      $(".lineSlide6").css("display", "none");
    }
  })
  .to(".lineAnimation img", { opacity: 1 })
  .to(".lineAnimation", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  })
  .to(".lineSlide6-content .uHeading", { opacity: 1, left: 0 }, `-=${0.7 * 1}`)
  .to(".lineSlide6-content .uDescription", { opacity: 1, right: 0 }, "<")
  .addLabel("slide-19")
  // .to('.lineAnimation',{
  //  left:'-5%',
  //  duration:0.5
  // })

  // .to('.lineSlide6-content',{
  //     opacity:'0'
  // },"<")

.to('.urbanismWrapper',{
  opacity:0
},"+=0.1")

.to('.materialSection',{

duration:2,
top:0,
ease: "power2.in",


  
},"-=1.1")

.addLabel("slide-19-1")

.to('.materialSection',{
 top:"-120%",
 duration:1
})



  .to('#e-1',{
     "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
duration:2,
top:0,
ease: "power2.in",
onStart:function(){
      
  $('.dark-logo').css("opacity","0");
  $(".white-logo").css("opacity","1")
},
onReverseComplete() { 
  $('.dark-logo').css("opacity","1");
  $(".white-logo").css("opacity","0")
 }


     
  },"<=-0.90")
  .to('.slide_count',{
    opacity:1,
   delay:1,
    onStart() { $(".countNumber").html("01"); },
  },"<")
  
  .to('.keepIt .keepText1',{
   left:'0',
   duration:1
  },"-=0.5")
  .to('.keepIt .keepText2',{
    right:'0'
   },"<")
   .addLabel("slide-20")

   .to('#e-1',{
    "clip-path":"polygon(20% 15%, 80% 15%, 80% 75%, 20% 75%)",
    left:"-100%",
    duration:1,
    opacity:0,
    onStart:function(){
      $('.editionSection video').trigger('click')
      $(".countNumber").html("02");
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
  
    

    onReverseComplete() { 
      $(".countNumber").html("01");
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     }
   
   })

   .to('#e-2',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    right:"0%",
    top:"0%",
    duration:1,
    onStart:function(){
      $('.editionSection video').trigger('click')
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     },
  

   },"<=+0.2")
   .addLabel("slide-20-1")

   .to('#e-2',{
    "clip-path":"polygon(20% 15%, 80% 15%, 80% 75%, 20% 75%)",
    right:"100%",
    duration:1,
    opacity:0,
    onStart:function(){
      $(".countNumber").html("03");
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
    onReverseComplete() { 
      $(".countNumber").html("02");
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     },
   
   
   })

   .to('#e-3',{
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    right:"0%",
    top:"0%",
    duration:1,
    onStart:function(){
      $('.editionSection video').trigger('click')
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
     },
   
   },"<=+0.2")
   .addLabel("slide-20-2")
   .to('#e-3',{
    "clip-path":"polygon(20% 15%, 80% 15%, 80% 75%, 20% 75%)",
    right:"100%",
    duration:1,
    opacity:0,

    onStart:function(){
      
      $('.dark-logo').css("opacity","1");
      $(".white-logo").css("opacity","0")
    },
    onReverseComplete() { 
      $('.dark-logo').css("opacity","0");
      $(".white-logo").css("opacity","1")
     }
    
   })
   .to('.slide_count',{
    "opacity":"0"
   },"<")
 
  .to ('footer',{
    top:"0%"
  },"<")

  .addLabel("slide-21")










  window.onload = function(){
  
    let spinner = document.getElementById("spinner");
    let ctx = spinner.getContext("2d");
    let width = spinner.width;
    let height = spinner.height;
    let degrees = 0;
    let new_degrees = 0;
    let difference = 0;
    let color = "#534334";
    let bgcolor = "#fff";
    let text;
    let animation_loop, redraw_loop;
    
    function init() {
      ctx.clearRect(0, 0, width, height);
      
      ctx.beginPath();
      ctx.strokeStyle = bgcolor;
      ctx.lineWidth = 6;
      ctx.arc(width/2, width/2, 100, 0, Math.PI*2, false);
      ctx.stroke();
      let radians = degrees * Math.PI / 180;
      
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 6;
      ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.font = "40px arial";
      text = Math.floor(degrees/360*100) + "%";
      text_width = ctx.measureText(text).width;
      ctx.fillText(text, width/2 - text_width/2, height/2 + 15);
    }
    
    function draw() {
      if (typeof animation_loop != undefined) clearInterval(animation_loop);
      new_degrees = 360;
      difference = new_degrees - degrees;
      animation_loop = setInterval(animate_to, 7000/difference);
    }
    
    function animate_to() {
      if(degrees == new_degrees) 
        clearInterval(animation_loop);
      else if(degrees < new_degrees)
        degrees++;
      else
        degrees--;
      init();
    }
    
    draw();
  }