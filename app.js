gsap.registerPlugin(ScrollTrigger);
const cur=document.getElementById('c'),ring=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
gsap.ticker.add(()=>{rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px'});
document.querySelectorAll('.interactive').forEach(el=>{el.addEventListener('mouseenter',()=>{cur.classList.add('hover');ring.classList.add('hover')});el.addEventListener('mouseleave',()=>{cur.classList.remove('hover');ring.classList.remove('hover')})});
document.querySelectorAll('.spotlight-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mouse-x',(e.clientX-r.left)+'px');card.style.setProperty('--mouse-y',(e.clientY-r.top)+'px')})});
const bar=document.getElementById('scroll-progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?(window.scrollY/h)*100:0)+'%'});
const roles=['Software Dev (C++ / Python)','Network & Linux','Automation','Web & Brand'];
let ri=0,ci=0,deleting=false;const tw=document.getElementById('typewriter');
function typeLoop(){const word=roles[ri];if(!deleting){tw.textContent=word.slice(0,++ci);if(ci===word.length){deleting=true;setTimeout(typeLoop,1600);return}}else{tw.textContent=word.slice(0,--ci);if(ci===0){deleting=false;ri=(ri+1)%roles.length}}setTimeout(typeLoop,deleting?40:70)}typeLoop();
ScrollTrigger.create({trigger:'#skills',start:'top 75%',once:true,onEnter:()=>{document.querySelectorAll('.sfill').forEach(el=>{el.style.width=el.getAttribute('data-width')||'0%'})}});
const canvas=document.getElementById('pc'),ctx=canvas.getContext('2d');
let W,H,particles=[];
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}window.addEventListener('resize',resize);resize();
function makeP(){return{x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.3+.3,a:Math.random()*.35+.08}}
for(let i=0;i<60;i++)particles.push(makeP());
function draw(){ctx.clearRect(0,0,W,H);for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<115){ctx.beginPath();ctx.strokeStyle='rgba(124,106,255,'+(0.1*(1-d/115))+')';ctx.lineWidth=.5;ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke()}}}particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W||p.y<0||p.y>H)Object.assign(p,makeP());ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(167,139,250,'+p.a+')';ctx.fill()});requestAnimationFrame(draw)}draw();
const termOut=document.getElementById('term-out'),termIn=document.getElementById('term-in');
const cmds={help:'دستورات: about, skills, projects, contact, clear, whoami',about:'امیر زیبائی — مهندسی، C++/Python، شبکه و لینوکس، طراحی وب',skills:'C++ · Python · Xray/3X-UI · Linux · Tailwind · WordPress · Proteus',projects:'Mast VPN · Khorasanian · Quera C++ · SSL automation',contact:'amirzibaei70@gmail.com · github.com/DramirzZ · 0992 440 8567',whoami:'amir',clear:null};
function addLine(html){const d=document.createElement('div');d.innerHTML=html;termOut.appendChild(d);termOut.scrollTop=termOut.scrollHeight}
termIn.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const v=termIn.value.trim().toLowerCase();termIn.value='';addLine('<span class="text-accent-cyan">amir@iust</span>:<span class="text-blue-400">~</span>$ '+v);if(v==='clear'){termOut.innerHTML='';return}const res=cmds[v];if(res)addLine('<span class="text-zinc-400">'+res+'</span>');else if(v)addLine('<span class="text-red-400">command not found: '+v+'</span>')});
['about','skills','projects','experience','terminal-sec','contact'].forEach(id=>{ScrollTrigger.create({trigger:'#'+id,start:'top 45%',end:'bottom 45%',onEnter:()=>setNav(id),onEnterBack:()=>setNav(id)})});
function setNav(id){document.querySelectorAll('.nl').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+id)})}
gsap.from('#hero h1',{opacity:0,y:28,duration:.8,ease:'power3.out'});
gsap.from('#hero p, #hero .inline-flex, #hero a',{opacity:0,y:16,duration:.6,stagger:.08,delay:.15,ease:'power2.out'});
