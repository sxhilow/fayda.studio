import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function workProcessAnimations(){

    gsap.from(".process-h1", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".process-h1",
      start: "top 85%",
    },
  });

  gsap.from(".pill", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".process-h1",
      start: "top 85%",
    },
  });
  
  gsap.from(".process-p", {
    opacity: 0,  
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: ".process-p",
      start: "top 85%",
    },
  });

  gsap.utils.toArray(".process-item").forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
}