/*gsap for fading in card*/
gsap.registerPlugin(ScrollTrigger);

gsap.to('.cg-item',{
  opacity: 1,
  y: 0,
  stagger: 0.06,
  duration: 0.6,
  ease: 'power3.out',
  scrollTrigger:{
    trigger: '.care-guide',
    start: 'top 75%',  
  }
});