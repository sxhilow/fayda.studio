import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function faqsAnimations(){
    gsap.from(".faqs-h1", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".faqs-h1",
      start: "top 85%",
    },
  });
  
  gsap.from(".faqs-p", {
    opacity: 0,  
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: ".faqs-p",
      start: "top 85%",
    },
  });

  gsap.utils.toArray(".faqs-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: -20,
    duration: 0.35,
    ease: "power2.out",
    delay: i * 0.1,  
    scrollTrigger: {
      trigger: card,  
      start: "top 80%"
    },
  });

});

}