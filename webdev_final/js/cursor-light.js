/* cursor glow, follows mouse*/

(function () {
    const root = document.documentElement;
  
    //current glow position 
    let currentX = 70, currentY = 30;
  
    //mouse positions 
    let targetX = currentX, targetY = currentY;
  
    const ease = 0.12;           // smaller = slower / more lag
  
    //updated target position on mouse move
    function handleMove(e) {
      targetX = (e.clientX / window.innerWidth)  * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    }
    window.addEventListener('mousemove', handleMove, { passive: true });
  
    function animate() {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
  
      root.style.setProperty('--cursor-x', `${currentX}%`);
      root.style.setProperty('--cursor-y', `${currentY}%`);
  
      requestAnimationFrame(animate);
    }
    animate();
  })();