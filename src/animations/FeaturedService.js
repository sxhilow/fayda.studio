import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function featuredServiceAnimation(){
  gsap.from(".services-h1", {
    opacity: 0,  
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-h1",
      start: "top 85%",
    },
  });
  
  gsap.from(".services-p", {
    opacity: 0,  
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: ".services-p",
      start: "top 85%",
    },
  });
  
  gsap.utils.toArray(".services-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    x: -50,
    duration: 0.3,
    delay: i * 0.15,
    scrollTrigger: {
      trigger: card,
      start: "top 98%",
      toggleActions: "play none none reverse",
    }
  });
});


}