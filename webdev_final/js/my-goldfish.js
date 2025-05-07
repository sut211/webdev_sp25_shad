document.addEventListener('DOMContentLoaded', () => {

    const LS = 'myGoldfish_v2';
    const $   = s => document.querySelector(s);
  
    /* elements */
    const setupSec=$('#setup'), dashSec=$('#dashboard');
    const nameInp=$('#fish-name'), form=$('#setup-form');
    const title=$('#dash-title'), setupDate=$('#setup-date');
    const lastFed=$('#last-fed'), lastWater=$('#last-water');
    const feedLog=$('#feed-log'), waterLog=$('#water-log');
    const feedBtn=$('#feed-btn'), waterBtn=$('#water-btn');
    const resetBtn=$('#reset-btn'), tick=$('#tick');
  
    let fish = JSON.parse(localStorage.getItem(LS)||'null');
  
    /* entry */
    if(fish){showDash();}else{setupSec.hidden=false;}
  
    /*setup new fish*/
    form.addEventListener('submit',e=>{
      e.preventDefault();
      fish={ name:nameInp.value.trim(), created:Date.now(), feeds:[], waters:[] };
      save(); showDash(); gsap.from(dashSec,{opacity:0,y:40,duration:.6});
    });
  
    /* feed */
    feedBtn.addEventListener('click',()=>{fish.feeds.push(Date.now());save();flashTick();render();});
    waterBtn.addEventListener('click',()=>{fish.waters.push(Date.now());save();flashTick();render();});
  
    /* reset */
    resetBtn.addEventListener('click',()=>{
      if(confirm('Delete this fish & all data?')){
        localStorage.removeItem(LS); location.reload();
      }
    });
  
    /* core funcs */
    function showDash(){
      setupSec.hidden=true; dashSec.hidden=false;
      title.textContent=fish.name;
      setupDate.textContent=fmt(fish.created,false);
      render();
    }
  
    function render(){
      // feeds
      if(fish.feeds.length){
        lastFed.textContent=fmt(fish.feeds.at(-1),true);
        feedLog.innerHTML=listHtml(fish.feeds);
      }else{
        lastFed.textContent='—'; feedLog.innerHTML='<li>No feedings yet.</li>';
      }

      // water
      if(fish.waters.length){
        lastWater.textContent=fmt(fish.waters.at(-1),true);
        waterLog.innerHTML=listHtml(fish.waters);
      }else{
        lastWater.textContent='—'; waterLog.innerHTML='<li>No water changes yet.</li>';
      }
    }
  
    function listHtml(arr){
      return arr.slice().reverse().map(t=>`<li>${fmt(t,true)}</li>`).join('');
    }
    function fmt(ms,withTime){
      const d=new Date(ms);
      return withTime?d.toLocaleString():d.toLocaleDateString();
    }
    function save(){localStorage.setItem(LS,JSON.stringify(fish));}
  
    /* tick animation */
    function flashTick(){
      gsap.fromTo(tick,{scale:0,opacity:0},{scale:1.4,opacity:1,duration:.25,ease:'back.out(3)',yoyo:true,repeat:1});
    }
  });