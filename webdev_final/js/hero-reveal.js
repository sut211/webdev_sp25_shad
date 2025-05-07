/*heror reveal*/
window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // grab each element inside .hero-content in DOM order
  const heroItems = document.querySelectorAll('.hero-content > *');

  tl.from(heroItems, {
    opacity: 0,
    y: 50,
    duration: 5.0,
    ease: 'power3.out',
    stagger: 0.5
  });
});