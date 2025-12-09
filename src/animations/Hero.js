import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function heroAnimation(){
    gsap.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger:{
            trigger: ".hero-title",
            start: "top 80%",
        }
    });

    gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-subtitle",
      start: "top 85%",
    },
  });
}
