// 캐릭터 표정 리그(눈 깜빡임·입 모양·상황별 표정), 능력치 +/- 플로팅, '이번 달 업무시작!' 4분할 주간 연출을 담당하는 모듈
import {FACE_MAP} from './face-map.js';
import {formatMoneySigned} from './money.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const MOTION_KEY='bsr-character-motion';
export const reducedMotion=()=>globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
// WCAG 2.2.2: persistent idle motion needs a visible pause control (see motionToggle()).
export function motionEnabled(){try{return localStorage.getItem(MOTION_KEY)!=='off';}catch{return true;}}
export function applyMotionPreference(){document.documentElement.classList.toggle('character-motion-off',!motionEnabled());}
export function toggleMotion(){try{localStorage.setItem(MOTION_KEY,motionEnabled()?'off':'on');}catch{}applyMotionPreference();return motionEnabled();}
export const motionToggleLabel=()=>motionEnabled()?'캐릭터 움직임 멈추기':'캐릭터 움직임 켜기';

const stemOf=file=>String(file||'').split('/').pop().split('?')[0].replace(/\.(webp|png|jpe?g)$/,'');
export const faceFor=file=>FACE_MAP[stemOf(file)]||null;

// SVG overlay drawn in the source image's pixel space, so it stays on the face at any display size.
function overlay(f){
 const d=f.d,[[rx,ry],[lx,ly]]=f.eyes,[mx,my]=f.mouth,ew=d*.2,eh=d*.13,brow=d*.36;
 const eye=(x,y,i)=>`<g class="rig-eye rig-eye-${i}" style="transform-origin:${x}px ${y-eh}px"><ellipse cx="${x}" cy="${y}" rx="${ew*1.12}" ry="${eh*1.25}" fill="${f.skin}"/><path class="rig-lash" d="M${x-ew} ${y+eh*.1}Q${x} ${y+eh*.75} ${x+ew} ${y+eh*.1}" /><path class="rig-happy" d="M${x-ew} ${y+eh*.45}Q${x} ${y-eh*.9} ${x+ew} ${y+eh*.45}" /></g>`;
 const browL=(x,y,side)=>`<path class="rig-brow rig-brow-${side}" style="transform-origin:${x}px ${y-brow}px" d="M${x-ew*1.1} ${y-brow}L${x+ew*1.1} ${y-brow}"/>`;
 return `<svg class="rig-fx" viewBox="0 0 ${f.w} ${f.h}" preserveAspectRatio="none" aria-hidden="true" focusable="false" style="--rig-stroke:${Math.max(2,d*.035)}px">
 ${eye(rx,ry,0)}${eye(lx,ly,1)}${browL(rx,ry,'r')}${browL(lx,ly,'l')}
 <g class="rig-mouth" style="transform-origin:${mx}px ${my}px"><ellipse class="rig-mouth-open" cx="${mx}" cy="${my+d*.03}" rx="${d*.15}" ry="${d*.085}"/><ellipse class="rig-tongue" cx="${mx}" cy="${my+d*.075}" rx="${d*.08}" ry="${d*.035}"/></g>
 <path class="rig-smile" d="M${mx-d*.17} ${my-d*.02}Q${mx} ${my+d*.13} ${mx+d*.17} ${my-d*.02}"/>
 <path class="rig-frown" d="M${mx-d*.14} ${my+d*.07}Q${mx} ${my-d*.05} ${mx+d*.14} ${my+d*.07}"/>
 <path class="rig-wobble" d="M${mx-d*.15} ${my+d*.03}q${d*.05} ${-d*.05} ${d*.1} 0t${d*.1} 0t${d*.1} 0"/>
 <g class="rig-tear"><path d="M${rx+ew*.2} ${ry+eh}q${-d*.05} ${d*.12} 0 ${d*.15}q${d*.05} ${-d*.03} 0 ${-d*.15}Z"/></g>
 <g class="rig-sweat"><path d="M${lx+d*.42} ${ly-d*.32}q${-d*.07} ${d*.14} 0 ${d*.17}q${d*.07} ${-d*.03} 0 ${-d*.17}Z"/></g>
 <g class="rig-anger"><path d="M${lx+d*.5} ${ly-d*.62}l${d*.09} ${d*.09}m0 ${-d*.09}l${-d*.09} ${d*.09}M${lx+d*.62} ${ly-d*.55}l${d*.09} ${d*.09}m0 ${-d*.09}l${-d*.09} ${d*.09}"/></g>
 <g class="rig-blush"><ellipse cx="${rx-d*.05}" cy="${ry+d*.32}" rx="${d*.13}" ry="${d*.06}"/><ellipse cx="${lx+d*.05}" cy="${ly+d*.32}" rx="${d*.13}" ry="${d*.06}"/></g>
 </svg>`;
}
let rigSeq=0;
// expr: neutral|smile|laugh|angry|sad|anxious · act: nod|shake|slump · talk: lip-sync loop while speaking.
export function faceRig(file,{alt='',expr='neutral',act='',talk=false,cls='',lazy=true,imgAttrs=''}={}){
 const f=faceFor(file),delay=((rigSeq++*0.73)%4).toFixed(2);
 const img=`<img src="${esc(file)}" alt="${esc(alt)}" ${lazy?'loading="lazy" decoding="async"':''} ${f?`width="${f.w}" height="${f.h}"`:''} ${imgAttrs}>`;
 return `<span class="face-rig ${f?'has-face':'no-face'} ${talk?'talking':''} ${cls}" data-expr="${expr}" data-act="${act}" style="--ar:${f?`${f.w}/${f.h}`:'auto'};--blink-delay:-${delay}s">${img}${f?overlay(f):''}</span>`;
}
// Circular/square crop focused on the face; the rig keeps the original aspect ratio inside the crop.
export function faceCrop(file,{alt='',expr='neutral',act='',talk=false,zoom=3.1,cls='',lazy=true}={}){
 const f=faceFor(file);
 if(!f)return `<span class="face-crop no-face ${cls}"><img src="${esc(file)}" alt="${esc(alt)}" ${lazy?'loading="lazy" decoding="async"':''}></span>`;
 const cx=(f.eyes[0][0]+f.eyes[1][0])/2,cy=(f.eyes[0][1]+f.mouth[1])/2,w=f.w/(f.d*zoom)*100,h=w*f.h/f.w;
 return `<span class="face-crop ${cls}"><span class="face-crop-inner" style="width:${w.toFixed(2)}%;left:${(50-cx/f.w*w).toFixed(2)}%;top:${(50-cy/f.h*h).toFixed(2)}%">${faceRig(file,{alt,expr,act,talk,lazy})}</span></span>`;
}
export function setExpression(root,{expr,act,talk}={}){
 const rigs=root?.matches?.('.face-rig')?[root]:[...(root?.querySelectorAll?.('.face-rig')||[])];
 for(const r of rigs){if(expr)r.dataset.expr=expr;if(act!==undefined){r.dataset.act='';void r.offsetWidth;r.dataset.act=act;}if(talk!==undefined)r.classList.toggle('talking',!!talk);}
}
// Speak for a while (lip-sync), then return to idle; sequential speakers get staggered starts.
export function speak(root,ms=2200,delay=0){
 const rigs=root?.matches?.('.face-rig')?[root]:[...(root?.querySelectorAll?.('.face-rig')||[])];
 rigs.forEach((r,i)=>{setTimeout(()=>{r.classList.add('talking');setTimeout(()=>r.classList.remove('talking'),ms);},delay+i*ms*.6);});
}
export const toneExpression=({tone,profit,relation,stance}={})=>{
 if(stance==='찬성')return {expr:'smile',act:'nod'};
 if(stance==='반대')return {expr:'angry',act:'shake'};
 if(stance==='조건부')return {expr:'anxious',act:''};
 if(tone==='risk'||tone==='adverse')return {expr:'anxious',act:''};
 if(tone==='good')return {expr:'smile',act:'nod'};
 if(Number.isFinite(profit))return profit>0?{expr:profit>500?'laugh':'smile',act:'nod'}:profit<0?{expr:'sad',act:'slump'}:{expr:'neutral',act:''};
 if(Number.isFinite(relation))return relation>=60?{expr:'laugh',act:''}:relation>=25?{expr:'smile',act:''}:relation<=-20?{expr:'angry',act:''}:relation<0?{expr:'sad',act:''}:{expr:'neutral',act:''};
 return {expr:'neutral',act:''};
};

/* ── +/- floating stat deltas ── */
let lastSnapshot=null,lastRun=null;const pending=[];
const LABELS={health:'체력',cash:'현금',customers:'고객',revenue:'매출',media:'미디어 노출',xp:'XP',product:'제품력',sales:'영업력',insight:'시장 이해',management:'운영력',network:'네트워크'};
export function snapshot(state){if(!state)return null;return {health:state.health,cash:state.cash,customers:state.customers,revenue:state.revenue,media:state.media||0,xp:state.xp,...state.skills};}
export function queueStatFloats(state){
 const snap=snapshot(state);if(!snap)return;
 if(lastSnapshot&&lastRun===state.runId){for(const [k,v]of Object.entries(snap)){const diff=Math.round(v-(lastSnapshot[k]??v));if(diff)pending.push([k,diff]);}}
 lastSnapshot=snap;lastRun=state.runId;
}
let floatDone=Promise.resolve();
export const statFloatsDone=()=>floatDone;
export function playStatFloats(root=document){if(!pending.length)return floatDone=Promise.resolve();return floatDone=new Promise(res=>requestAnimationFrame(()=>{const ms=flushFloats(root);setTimeout(res,Math.min(ms,1800));}));}
function flushFloats(root){
 const modal=document.querySelector('dialog[open]');
 if(modal){modal.addEventListener('close',()=>requestAnimationFrame(()=>flushFloats(document)),{once:true});return 0;}
 const items=pending.splice(0);let i=0;
 for(const [key,diff] of items){
  const target=[...root.querySelectorAll(`[data-fx-stat="${key}"]`)].find(el=>el.getClientRects().length);if(!target)continue;
  const r=target.getBoundingClientRect(),el=document.createElement('span');
  el.className=`fx-float ${diff>0?'up':'down'}`;el.setAttribute('aria-hidden','true');
  el.textContent=key==='cash'||key==='revenue'?formatMoneySigned(diff):`${diff>0?'+':'−'}${Math.abs(diff).toLocaleString('ko-KR')}`;
  el.style.left=`${r.left+r.width/2+scrollX}px`;el.style.top=`${r.top+scrollY}px`;el.style.setProperty('--i',i++);
  document.body.append(el);el.addEventListener('animationend',()=>el.remove(),{once:true});setTimeout(()=>el.remove(),4000+i*250);
 }
 if(items.length){const live=document.querySelector('#fx-live');if(live)live.textContent=items.slice(0,6).map(([k,d])=>`${LABELS[k]||k} ${d>0?'+':''}${d}`).join(', ');}
 return i?(reducedMotion()?900:1100+i*160):0;
}
export function resetStatFloats(){lastSnapshot=null;lastRun=null;pending.length=0;}

/* ── '이번 달 업무시작!' 4-week split-screen sequence ── */
const SCENE_FOR={research:'cafe',build:'office',study:'center',sales:'meeting',network:'cowork',rest:'home'};
const PROPS={research:['💬','☕','📝'],build:['💻','⚙️','✨'],study:['📖','✏️','💡'],sales:['📣','🤝','📈'],network:['🤝','💬','⭐'],rest:['☕','💤','🌿']};
const MOOD={research:{expr:'smile',talk:true,act:'nod'},build:{expr:'neutral',talk:false,act:''},study:{expr:'neutral',talk:false,act:'nod'},sales:{expr:'smile',talk:true,act:''},network:{expr:'laugh',talk:true,act:''},rest:{expr:'smile',talk:false,act:''}};
export function playMonthSequence({plan,actions,skills,standing,sceneFor,name,month}){
 return new Promise(resolve=>{
  const dlg=document.createElement('dialog');dlg.className='month-play';dlg.setAttribute('aria-labelledby','month-play-title');
  const quiet=reducedMotion()||!motionEnabled();
  dlg.innerHTML=`<div class="month-play-head"><h2 id="month-play-title">${esc(month)} · ${esc(name)} 대표의 4주</h2><button type="button" class="month-play-skip" autofocus>건너뛰기 ▶▶</button></div><div class="month-play-grid">${plan.map((id,i)=>{const a=actions.find(x=>x.id===id),m=MOOD[id]||MOOD.build,gains=Object.entries(a.fx||{}).map(([k,v])=>`<span class="mp-gain up">${esc(skills[k]||k)} +${v}</span>`).join('')+(id==='rest'?`<span class="mp-gain up">체력 +${a.health}</span>`:`<span class="mp-gain down">체력 ${a.health}</span>`);
   return `<section class="mp-panel mp-${id}" style="--i:${i}"><img class="mp-bg" src="${esc(sceneFor(SCENE_FOR[id]||'home'))}" alt=""><span class="mp-week">${i+1}주</span><div class="mp-actor">${faceRig(standing,{alt:'',expr:m.expr,act:m.act,talk:m.talk,lazy:false})}</div><div class="mp-props" aria-hidden="true">${PROPS[id].map((p,j)=>`<i style="--j:${j}">${p}</i>`).join('')}</div><div class="mp-caption"><b>${esc(a.name)}</b><small>${esc(a.place)}</small><div class="mp-gains">${gains}</div></div><span class="mp-check" aria-hidden="true">✓</span></section>`;}).join('')}</div><p class="month-play-status" role="status">1주 차 진행 중</p>`;
  document.body.append(dlg);dlg.showModal();
  const panels=[...dlg.querySelectorAll('.mp-panel')],status=dlg.querySelector('.month-play-status');let step=0,timer,done=false;
  const finish=()=>{if(done)return;done=true;clearTimeout(timer);if(dlg.open)dlg.close();dlg.remove();resolve();};
  const next=()=>{panels.forEach((p,i)=>{p.classList.toggle('active',i===step);p.classList.toggle('done',i<step);});
   if(step>=panels.length){status.textContent='4주 일정을 모두 마쳤어요!';timer=setTimeout(finish,quiet?500:700);return;}
   status.textContent=`${step+1}주 차 · ${panels[step].querySelector('b').textContent}`;step++;timer=setTimeout(next,quiet?450:1150);};
  dlg.querySelector('.month-play-skip').addEventListener('click',finish);
  dlg.addEventListener('close',finish);
  next();
 });
}
