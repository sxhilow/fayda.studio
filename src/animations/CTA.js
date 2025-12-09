import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ctaAnimations(){

    gsap.from(".cta-section", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%"
    }
  });

  gsap.from(".cta-section h1", {
    opacity: 0,
    x: -30,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 80%"
    }
  });
  
}