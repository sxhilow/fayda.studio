import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function plansAnimation(){
    gsap.from(".plans-h1", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".plans-h1",
      start: "top 85%",
    },
  });
  
  gsap.from(".plans-p", {
    opacity: 0,  
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: ".plans-p",
      start: "top 85%",
    },
  });

  gsap.utils.toArray(".plans-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,  
    scale: 0.9,   // the secret sauce
    duration: 0.6,
    ease: "power2.out",
    delay: 0.12,
    scrollTrigger: {
      trigger: card,
      start: "top 70%",
      toggleActions: "play none none reverse",
    }
  });
});

}