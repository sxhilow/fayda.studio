import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function contactAnimation(){
    gsap.from(".contact-h1", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-h1",
      start: "top 85%",
    },
  });
  
  gsap.from(".contact-p", {
    opacity: 0,  
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact-p",
      start: "top 85%",
    },
  });

}