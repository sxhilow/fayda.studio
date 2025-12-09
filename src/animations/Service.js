import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function serviceAnimation(){
    gsap.from(".services-h1", {
    opacity: 0, 
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-header"
    },
  });
  
  gsap.from(".services-h3", {
    opacity: 0,  
    y: -40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-header"
    },
  });

  gsap.from(".services-p", {
    opacity: 0,  
    x: 20,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-header"
    },
  });

  gsap.from(".service-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".service-item",
      start: "top 85%",
      toggleActions: "play none none none",
    }
  });

  gsap.utils.toArray(".service-item").forEach((item) => {
  gsap.from(item.querySelectorAll("h1, p, details"), {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.07,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});




}