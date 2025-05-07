/*card flipping animation*/
document.querySelectorAll('.fish-card').forEach(card=>{
    card.addEventListener('click',()=>{
      card.classList.toggle('flipped');
    });
  });

  gsap.registerPlugin();
  gsap.from('.fish-card',{
    opacity:0,y:40,stagger:.08,duration:.8,ease:'power3.out'
  });