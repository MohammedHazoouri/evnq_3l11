/* ============ EDIT YOUR CONTENT HERE ============ */
const CONFIG={
  signature:"Your Name",
  letter:`My Dearest Love,\n\nIf I could capture every beautiful moment, every smile, and every feeling you've given me, I would fill an entire universe with them.\n\nYou are my favorite chapter, my unexpected happiness, and the most beautiful part of my story.\n\nAnd if I had to choose again, in every lifetime, in every universe, I would still choose you.\n\nForever yours.`,
  // image: path like "assets/images/first-date.jpg", or "" for a built-in placeholder
  memories:[
    {date:"Month 1, 20XX",title:"The day we first met",icon:"✨",image:"",text:"Replace this with the story of the moment our paths first crossed."},
    {date:"Month 1, 20XX",title:"Our first conversation",icon:"💬",image:"",text:"Hours felt like minutes. I didn't want it to end."},
    {date:"Month 2, 20XX",title:"Our first date",icon:"🌹",image:"",text:"Nervous, smiling, completely enchanted."},
    {date:"Month 3, 20XX",title:"Our funniest moment",icon:"😂",image:"",text:"We laughed until it hurt, and I'd do it again."},
    {date:"Month 5, 20XX",title:"Our favorite adventure",icon:"🧭",image:"",text:"Anywhere is an adventure with you."},
    {date:"Month 6, 20XX",title:"The moment I knew you were special",icon:"💫",image:"",text:"Something quiet changed in me that day."},
    {date:"Month 8, 20XX",title:"Our most unforgettable memory",icon:"📸",image:"",text:"One I'll replay forever."},
    {date:"Month 10, 20XX",title:"The day everything changed",icon:"💍",image:"",text:"And I'd never go back."}
  ],
  photos:[
    {src:"",caption:"Us",date:"20XX"},{src:"",caption:"Sunny day",date:"20XX"},{src:"",caption:"Our adventure",date:"20XX"},
    {src:"",caption:"Smiles",date:"20XX"},{src:"",caption:"Together",date:"20XX"},{src:"",caption:"Always",date:"20XX"}
  ],
  // src: "assets/music/song.mp3". Leave src "" to use the built-in soft ambient melody.
  tracks:[{title:"Our Song (ambient)",artist:"Soft built-in melody",src:"",cover:""}],
  reasons:[["Your beautiful smile","It lights up every room, and every bad day."],["The way you laugh","My favorite sound in the whole world."],["Your kindness","You make the world softer."],["You make ordinary days magical","Even Tuesdays feel like holidays."],["Your beautiful heart","The most generous one I know."],["The little things you do","Without ever noticing how much they mean."],["You make me feel at home","With you, I'm already where I belong."]],
  moreReasons:["Because you believe in me.","Because of the way you say my name.","Because you make me braver.","Because with you, silence is comfortable.","Because you're you, and that's everything."],
  giftMessage:"Out of everything this world has to offer, my favorite gift will always be having you in my life."
};
/* ================================================ */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const ph=(t,i)=>{const h=[350,330,300,280][i%4],c=['#E8B4B8','#F7DDE1','#D9B77E','#8C6B61'][i%4];return 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="${h+60}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#FFF8F0"/></linearGradient></defs><rect width="400" height="${h+60}" fill="url(#g)"/><text x="200" y="${(h+60)/2}" font-size="64" text-anchor="middle" fill="#682F42" opacity=".6">♥</text><text x="200" y="${(h+60)/2+40}" font-size="18" text-anchor="middle" fill="#682F42" font-family="Georgia">${t}</text></svg>`)};
const img=(s,t,i)=>s||ph(t,i);
$('#sigLetter').textContent=$('#sigFinal').textContent=CONFIG.signature;
(()=>{if(reduce)return;const bg=$('#bg'),sy=['♥','❀','✦','🌸'];for(let i=0;i<22;i++){const s=document.createElement('span');s.textContent=sy[i%4];s.style.cssText=`left:${Math.random()*100}%;font-size:${10+Math.random()*16}px;color:${i%2?'#E8B4B8':'#D9B77E'};animation-duration:${10+Math.random()*14}s;animation-delay:${-Math.random()*20}s`;bg.appendChild(s)}})();
let opened=false,io;
function openEnv(){if(opened)return;opened=true;$('#envWrap').classList.add('opened');
 setTimeout(()=>{$('#intro').classList.add('out');$('#nav').classList.remove('hidden');$('#main').classList.remove('hidden');document.body.classList.remove('locked');scrollTo(0,0);watch()},2800);
 setTimeout(()=>$('#intro').classList.add('hidden'),4300)}
$('#envWrap').onclick=$('#openBtn').onclick=openEnv;
$('#envWrap').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openEnv()}};
let typed=false;function typeLetter(){if(typed)return;typed=true;const el=$('#letterText'),t=CONFIG.letter;el.style.whiteSpace='pre-wrap';if(reduce){el.textContent=t;return}let i=0;(function n(){el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(n,t[i-1]==='\n'?250:38)})()}
CONFIG.memories.forEach((m,i)=>{const b=document.createElement('button');b.className='mem rv';b.innerHTML=`<span class="ic">${m.icon}</span><br><small>${m.date}</small><h3>${m.title}</h3><p>${m.text}</p>`;b.onclick=()=>{$('#mImg').src=img(m.image,m.title,i);$('#mImg').alt=m.title;$('#mDate').textContent=m.date;$('#mTitle').textContent=m.title;$('#mText').textContent=m.text;$('#modal').hidden=false};$('#timeline').appendChild(b)});
let cur=0;const showLb=i=>{cur=(i+CONFIG.photos.length)%CONFIG.photos.length;const p=CONFIG.photos[cur];$('#lbImg').src=img(p.src,p.caption,cur);$('#lbImg').alt=p.caption;$('#lbCap').textContent=`${p.caption} • ${p.date}`;$('#lb').hidden=false};
CONFIG.photos.forEach((p,i)=>{const b=document.createElement('button');b.className='pol rv';b.innerHTML=`<div class="im"><img loading="lazy" src="${img(p.src,p.caption,i)}" alt="${p.caption}"></div><span>${p.caption}</span>`;b.onclick=()=>showLb(i);$('#masonry').appendChild(b)});
$('#lbPrev').onclick=()=>showLb(cur-1);$('#lbNext').onclick=()=>showLb(cur+1);
$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').hidden=true);
$$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)m.hidden=true});
addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal').forEach(m=>m.hidden=true);if(!$('#lb').hidden){if(e.key==='ArrowLeft')showLb(cur-1);if(e.key==='ArrowRight')showLb(cur+1)}});
CONFIG.reasons.forEach(r=>{const c=document.createElement('button');c.className='card rv';c.innerHTML=`<div class="ci"><div class="f">${r[0]} ♥</div><div class="b">${r[1]}</div></div>`;c.onclick=()=>c.classList.toggle('flip');$('#cards').appendChild(c)});
let ri=0;$('#moreBtn').onclick=()=>{const e=$('#extra');e.textContent=CONFIG.moreReasons[ri++%CONFIG.moreReasons.length];e.classList.remove('pop');void e.offsetWidth;e.classList.add('pop')};
function openGift(){const g=$('#gift');if(g.classList.contains('open'))return;g.classList.add('open');setTimeout(()=>{const m=$('#giftMsg');m.textContent=CONFIG.giftMessage;m.classList.add('pop')},1400)}
$('#gift').onclick=openGift;$('#gift').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openGift()}};
for(let i=0;i<70;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s`;$('.stars').appendChild(s)}
$('#menuBtn').onclick=()=>{const o=$('#menu').classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',o)};
$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;$('#prog').style.width=(h>0?scrollY/h*100:0)+'%'},{passive:true});
function watch(){if(io)io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');if(e.target.id==='letter')typeLetter()}),{threshold:.2});$$('.rv,.fl,#letter').forEach((el,i)=>{if(el.classList.contains('fl'))el.style.transitionDelay=(i%3)*.9+'s';io.observe(el)})}
const T=CONFIG.tracks;let ti=0,playing=false,audio=new Audio(),AC,gain,synthT,synthStart=0;const SD=60;
const viz=$('#viz');for(let i=0;i<24;i++)viz.appendChild(document.createElement('i'));
function load(){const t=T[ti];$('#tTitle').textContent=t.title;$('#tArtist').textContent=t.artist;$('#cover').src=t.cover||ph('♪',ti);if(t.src)audio.src=t.src}
function synthOn(){AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(!gain){gain=AC.createGain();gain.connect(AC.destination)}gain.gain.value=+$('#vol').value*.5;AC.resume();const sc=[261.63,293.66,329.63,392,440,523.25],seq=[0,2,4,2,1,3,5,3];let k=0;synthStart=Date.now();
 synthT=setInterval(()=>{const o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=sc[seq[k++%8]];g.gain.setValueAtTime(0,AC.currentTime);g.gain.linearRampToValueAtTime(.5,AC.currentTime+.05);g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+2);o.connect(g);g.connect(gain);o.start();o.stop(AC.currentTime+2.1)},700)}
function setPlay(p){playing=p;$('#play').textContent=p?'❚❚':'▶';$('#play').setAttribute('aria-label',p?'Pause':'Play');$('#vinyl').classList.toggle('on',p);$('#soundBtn').textContent=p?'Sound On':'Sound Off'}
function play(){if(T[ti].src)audio.play().catch(()=>{});else synthOn();setPlay(true)}
function pause(){if(T[ti].src)audio.pause();else clearInterval(synthT);setPlay(false)}
const toggle=()=>playing?pause():play();
$('#play').onclick=$('#soundBtn').onclick=toggle;
const go=d=>{const w=playing;if(playing)pause();ti=(ti+d+T.length)%T.length;load();if(w)play()};
$('#next').onclick=()=>go(1);$('#prev').onclick=()=>go(-1);audio.onended=()=>go(1);
$('#vol').oninput=e=>{audio.volume=+e.target.value;if(gain)gain.gain.value=+e.target.value*.5};audio.volume=.6;
$('#seek').oninput=e=>{if(T[ti].src&&audio.duration)audio.currentTime=e.target.value/100*audio.duration};
setInterval(()=>{if(playing){const p=T[ti].src?(audio.duration?audio.currentTime/audio.duration*100:0):((Date.now()-synthStart)/1000%SD)/SD*100;$('#seek').value=p}viz.childNodes.forEach(b=>b.style.height=playing?4+Math.random()*32+'px':'4px')},150);
load();
$('#again').onclick=()=>{opened=false;pause();$('#gift').classList.remove('open');$('#giftMsg').textContent='Tap the gift...';$('#giftMsg').classList.remove('pop');typed=false;$('#letterText').textContent='';$$('.opened').forEach(e=>e.classList.remove('opened'));$('#intro').classList.remove('out','hidden');$('#nav').classList.add('hidden');$('#main').classList.add('hidden');document.body.classList.add('locked');$$('.in').forEach(e=>e.classList.remove('in'))};
