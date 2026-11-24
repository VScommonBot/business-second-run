// 게임형 UI(승인 시안 구현): 상단 재화 바, 메인 대시보드, 행동 선택 팝업(실내·외근 필터, 모바일 바텀시트)
import {faceRig,faceCrop,toneExpression,motionEnabled} from './game-fx.js';
import {calendarEntries,briefingText} from './calendar.js';
import {roadmapStatus,goalDate} from './plan-roadmap.js';
import {adviceFor,relationshipLabel} from './story-engine.js';
import {pickAdviceLine} from './dialogue.js';
import {relationshipSignal} from './relationship-events.js';
import {formatMoney} from './money.js';
import {countMoney} from './count-motion.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=n=>Math.round(Number(n)||0).toLocaleString('ko-KR');
const SKILL_UI={product:['📦','var(--product)'],sales:['📣','var(--sales)'],insight:['💬','var(--insight)'],management:['📘','var(--management)'],network:['🤝','var(--network)']};
const ACT_UI={research:['💬','var(--insight)','cafe',false],build:['📦','var(--product)','office',true],study:['📘','var(--management)','center',true],sales:['📣','var(--sales)','meeting',false],network:['👥','var(--network)','cowork',false],rest:['☕','var(--green)','home',true]};
const ITEM_UI={notebook:'📓',laptop:'💻',chair:'🪑',plant:'🪴'};
const METRIC_UI={researchWeeks:'🔍',product:'🛠️',customers:'🤝',monthlyRevenue:'💵',profitableMonths:'📈',months:'🏆'};
export const SCENE_OF=id=>ACT_UI[id]?.[2]||'home';
const calLabel=month=>{const m=Math.min(month,60);return `${Math.floor((m-1)/12)+1}년 차 ${(m-1)%12+1}월`;};
const blockedOf=c=>!!c.state.pending||!!c.state.ending||!!c.state.lastScene?.unread||c.autoRunning;
const canPlan=(c,a)=>{const s=c.state;return !(blockedOf(c)||s.plan.length===4||c.requiresProduct(s)&&s.plan.length===3&&!s.plan.includes('build')&&a.id!=='build');};
const effectChips=(c,a)=>a.id==='rest'?`<span class="g-chip up">체력 +${a.health}</span>`:Object.entries(a.fx).map(([k,v])=>`<span class="g-chip up">${esc(c.SKILLS[k])} +${v}</span>`).join('');

export function upcomingEvent(state){
 const year=Math.floor((Math.min(state.month,60)-1)/12)+1;
 return [...calendarEntries(state,year),...calendarEntries(state,year+1)].find(e=>e.elapsed>=state.month&&!e.answered&&e.elapsed<=60&&!(e.key==='selection'&&e.requiresApplication))||null;
}

export function gameTopbar(c){
 const s=c.state,q=c.quests,month=Math.min(s.month,60),year=Math.floor((month-1)/12)+1;
 return `<header class="g-topbar"><button type="button" class="g-brand" data-action="intro" aria-label="모두의 창업 첫 화면으로"><span class="brand-mark brand-official"><img class="brand-logo" src="assets/modoo-startup-logo.svg" alt="" width="154" height="30"></span><div><b>모두의 창업</b><small>CEO로 살아남기</small></div></button>
 <div class="g-currencies" aria-label="재화">
 <div class="g-cur" title="보유 현금" data-fx-stat="cash"><span class="g-ico cash" aria-hidden="true">💰</span><span class="g-val g-num">${countMoney('cash',s.cash)}</span><span class="g-lab">자금</span><button class="g-plus" data-action="financing" aria-label="자금 대책 보기">+</button></div>
 <div class="g-cur" title="평판(네트워크)" data-fx-stat="network"><span class="g-ico rep" aria-hidden="true">⭐</span><span class="g-val g-num">${num(s.skills.network)}</span><span class="g-lab">평판 · 쌓여 가는 연결</span></div>
 <div class="g-cur" title="체력" data-fx-stat="health"><span class="g-ico hp" aria-hidden="true">❤️</span><span class="g-val g-num">${c.countNumber('health',s.health)}/100</span><span class="g-hpbar" role="progressbar" aria-label="체력" aria-valuenow="${s.health}" aria-valuemin="0" aria-valuemax="100"><i style="width:${s.health}%"></i></span></div>
 <button class="g-cur g-cal" data-tour-target="calendar" data-action="calendar-year" data-year="${year}" aria-label="${calLabel(month)} · 달력 보기"><span class="g-ico cal" aria-hidden="true">📅</span><span class="g-val">${calLabel(month)}</span><span class="g-lab g-num">${month} / 60개월</span></button></div>
 <div class="g-top-icons"><button class="g-icon-btn" data-action="quests" aria-label="업적 ${q.earned} / ${q.total}${q.claimable?` · 받을 보상 ${q.claimable}개`:''}">🏆${q.claimable?`<span class="g-dot">${q.claimable}</span>`:''}</button><button class="g-icon-btn" data-action="slots" aria-label="저장 파일 불러오기">📂</button><button class="g-icon-btn" data-action="save" aria-label="${esc(c.saveDate(s))} 저장">💾</button><button class="g-icon-btn motion-toggle" data-action="motion-toggle" aria-pressed="${!motionEnabled()}" aria-label="${motionEnabled()?'캐릭터 움직임 멈추기':'캐릭터 움직임 켜기'}">${motionEnabled()?'⏸':'▶'}</button><button class="g-icon-btn" data-action="settings" aria-label="설정">⚙️</button></div></header>`;
}

function profile(c){
 const s=c.state,lv=c.level(s),xp=s.xp%100,planned=s.plan.reduce((t,id)=>t+(c.ACTIONS.find(a=>a.id===id)?.xp||0),0);
 const src=c.portraitSource(s,'assets/'+c.getPortrait(s.portrait).file),health=s.health,profit=s.history.at(-1)?.profit;
 const mood=health<25?{expr:'sad',act:'slump'}:health<45?{expr:'anxious',act:''}:toneExpression({profit});
 return `<article class="g-panel g-profile" aria-label="CEO 프로필"><div class="g-profile-head"><div class="g-avatar">${s.customPortrait||s.portrait.startsWith('special-')?`<span class="g-avatar-plain ${s.portrait.startsWith('special-')&&!s.customPortrait?'portrait-clip sprite-thumb':''}"><img src="${esc(src)}" alt="${esc(s.name)} 대표 초상화"></span>`:faceCrop(src,{alt:`${s.name} 대표 초상화`,expr:mood.expr,act:mood.act,zoom:2.6,cls:'g-avatar-rig',lazy:false})}<span class="g-lv">Lv. ${lv}</span></div><div class="g-who"><b>${esc(s.name)}<small>대표</small></b><div class="g-co">${esc(c.companyNameFor(s))} · ${esc(c.data.industries[s.industry].label)}</div><div class="g-stage"><span class="g-ribbon">🌱 ${c.stage(s)}</span></div></div></div>
 <div class="g-xp" data-fx-stat="xp"><div class="g-xp-row"><span>다음 레벨까지</span><span class="g-num">${xp} / 100 XP${planned?` <span class="g-xp-plan">(+${planned} 예정)</span>`:''}</span></div><div class="g-bar" role="progressbar" aria-label="레벨 경험치" aria-valuenow="${xp}" aria-valuemin="0" aria-valuemax="100"><i class="ghost" style="width:${Math.min(100,xp+planned)}%"></i><i style="width:${Math.max(2,xp)}%"></i></div></div>
 <div class="g-skills">${Object.entries(c.SKILLS).map(([id,name])=>`<div class="g-skill" data-fx-stat="${id}"><span class="g-si" style="background:${SKILL_UI[id][1]}" aria-hidden="true">${SKILL_UI[id][0]}</span><span class="g-sname">${name}</span><span class="g-sb" role="progressbar" aria-label="${name}" aria-valuenow="${s.skills[id]}" aria-valuemin="0" aria-valuemax="100"><i style="width:${s.skills[id]}%;background:${SKILL_UI[id][1]}"></i></span><span class="g-sv g-num">${c.countNumber('skill-'+id,s.skills[id])}</span></div>`).join('')}</div>
 <div class="g-kpis" data-tour-target="numbers" aria-label="사업 현황"><div class="g-kpi" data-fx-stat="revenue"><small>지난달 매출</small><b class="g-num">${countMoney('revenue',s.revenue)}</b></div><div class="g-kpi" data-fx-stat="customers"><small>고객</small><b class="g-num">${c.countNumber('customers',s.customers)}명</b></div><div class="g-kpi"><small>월 고정비</small><b class="g-num">${formatMoney(c.costs(s))}</b></div></div></article>`;
}
function menu(c){
 const q=c.quests,items=[['office','🖥️','#9fc0ff','사무실 꾸미기'],['conditions','🩺','#8affb9','나의 상태'],['growth','📈','#ffe08a','성장 기록'],['lessons','📒','#c9b6ff','창업 노트'],['furnishings','🛍️','#ffb38a','꾸미기 상점'],['shop','🏢','#8fdcff','부동산'],['people','👥','#ffb3d2','인물 수첩'],['wiki','📚','#b6f0e4','창업 위키']];
 return `<nav class="g-panel g-menu" aria-label="게임 메뉴"><div class="g-panel-title">🧭 메뉴<span class="g-sub">업적 ${q.earned} / ${q.total}</span></div><div class="g-menu-grid">${items.map(([v,e,bg,t])=>`<button class="g-mi" data-view="${v}"><span class="g-e" style="background:${bg}" aria-hidden="true">${e}</span>${t}</button>`).join('')}<button class="g-mi" data-action="initial-plan"><span class="g-e" style="background:#e0e3ff" aria-hidden="true">🗺️</span>실행 계획</button></div><button class="g-ad-link" data-action="ad-inquiry">광고 문의 · 창업지원사업 모집 소식을 기다립니다</button></nav>`;
}
function islandMap(c){
 const s=c.state,goals=roadmapStatus(s);if(!goals.length)return '';
 const cur=Math.max(0,goals.findIndex(g=>g.reachedMonth===null)),start=Math.max(0,Math.min(goals.length-5,cur-1)),view=goals.slice(start,start+5),done=goals.filter(g=>g.reachedMonth!==null).length;
 const src=c.portraitSource(s,'assets/'+c.getPortrait(s.portrait).file);
 const path='M10 52 C 22 20, 26 20, 30 44 S 42 82, 50 52 S 62 18, 70 44 S 82 80, 90 52';
 return `<article class="g-panel g-map" aria-label="사업 단계 맵"><div class="g-panel-title">🗺️ 사업 단계 맵<span class="g-sub">나의 실행 계획 · 달성 ${done} / ${goals.length}</span></div><div class="g-map-stage"><div class="g-map-track"><svg class="bridges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${path}" fill="none" stroke="#0d0f3a" vector-effect="non-scaling-stroke" style="stroke-width:12px" stroke-linecap="round"/><path d="${path}" fill="none" stroke="#c8a06a" vector-effect="non-scaling-stroke" style="stroke-width:6px;stroke-dasharray:3 7" stroke-linecap="round"/></svg><ol class="g-isles">${view.map((g,i)=>{const idx=start+i,state=g.reachedMonth!==null?'done':idx===cur?'current':'locked',late=g.status==='overdue';
  return `<li class="g-island ${state}" style="left:${10+i*20}%;top:${i%2?46:56}%"><div class="g-isle"><span class="g-side"></span><span class="g-top"></span>${state==='current'?`<span class="g-pin"><img src="${esc(src)}" alt=""></span><span class="g-pin-tag">지금 여기</span>`:`<span class="g-icon" aria-hidden="true">${state==='done'?'✅':METRIC_UI[g.metric]||'⭐'}</span>`}</div><span class="g-ribbon g-name">${state==='locked'?'<span class="g-lock" aria-hidden="true">🔒</span>':''}${esc(g.title)}</span><br><span class="g-due ${late?'late':''}">${state==='done'?`달성 · ${goalDate(g.reachedMonth)}`:`${Math.round(g.percent)}% · ${goalDate(g.byMonth)}${late?' · 기한 경과':''}`}</span><span class="sr-only">${state==='done'?'달성':state==='current'?'진행 중':'예정'}</span></li>`;}).join('')}</ol></div></div><button class="g-btn3d dark g-map-plan" data-action="initial-plan">계획 보기</button></article>`;
}
function weekCards(c){
 const s=c.state,blocked=blockedOf(c),filled=s.plan.length;
 return `<article class="g-panel g-week" aria-labelledby="g-week-title"><div class="g-panel-title" id="g-week-title">📅 이번 달 일정 · ${calLabel(s.month)}<span class="g-sub">${filled} / 4주 배치${filled===4?' 완료':''}</span></div>${c.requiresProduct(s)?'<p class="g-lead">보유 기술 67 이상 · 제품 만들기 1주 필수</p>':''}${c.calendarChoices(s,c.effectsText)}
 <div class="g-week-grid">${Array.from({length:4},(_,i)=>{const a=c.ACTIONS.find(x=>x.id===s.plan[i]);if(!a)return `<button class="g-wcard empty" data-action="pick-activity" data-index="${i}" ${blocked||i>filled?'disabled':''} aria-label="${i+1}주 일정 선택하기"><span class="g-wk">${i+1}주</span><span class="g-empty-plus" aria-hidden="true">+</span><b>일정 선택</b><small>카드를 골라 배치해요</small></button>`;
  const [emo,color,place]=ACT_UI[a.id],hp=c.actionHealth(s,a);
  return `<div class="g-wcard filled"><div class="g-whead"><span class="g-wk">${i+1}주</span><b>${a.name}</b></div><div class="g-wimg"><button class="g-swap" data-action="remove" data-index="${i}" aria-label="${i+1}주 ${a.name} 일정 삭제" ${blocked?'disabled':''}>×</button><img src="${esc(c.sceneAsset(place,s.month))}" alt="" decoding="async" width="1672" height="941"><span class="g-emo" style="background:${color}" aria-hidden="true">${emo}</span><span class="g-place">${esc(a.place)}</span></div><div class="g-wbody"><p>${esc(a.desc)}</p>${effectChips(c,a)}<span class="g-chip xp">XP +${a.xp}</span></div><div class="g-wfoot"><span class="g-btn3d brown g-cost">💰 ${formatMoney(a.cost)} <span class="g-hp ${hp>0?'plus':''}">❤ ${hp>0?'+':'−'}${Math.abs(hp)}</span></span></div></div>`;}).join('')}</div>
 <div class="g-quick" id="action-list" aria-label="빠른 배치"><span class="g-quick-label">빠른 배치</span>${c.ACTIONS.map(a=>`<button class="g-qchip" data-action="plan" data-id="${a.id}" ${canPlan(c,a)?'':'disabled'} aria-label="${a.name} 일정 추가"><span aria-hidden="true">${ACT_UI[a.id][0]}</span>${a.name}</button>`).join('')}<button class="g-qchip more" data-action="pick-activity" data-index="${filled}" ${blocked||filled===4?'disabled':''}>전체 카드 보기</button></div></article>`;
}
function eventCard(c){
 const e=upcomingEvent(c.state);if(!e)return '';
 const left=e.elapsed-c.state.month;
 return `<article class="g-panel g-event" aria-label="다가오는 이벤트">${left<=1?'<span class="g-burst">한정!</span>':''}<div class="g-panel-title">🎍 ${esc(e.title)}<span class="g-sub">${e.year}년 차 ${e.month}월</span></div><span class="g-timer"><span class="g-clock" aria-hidden="true">⏰</span>${left===0?'이번 달 · 업무시작 시 열려요':left===1?'다음 달 · 4주 남음':`${left}개월 남음`}</span><p>${esc(e.description)}</p></article>`;
}
function advisors(c){
 const s=c.state,cast=c.data.story.cast.filter(p=>s.seats?.[p.id]&&p.id!=='pet').slice(0,5),goal=roadmapStatus(s).find(g=>g.reachedMonth===null);
 const roles={yes:r=>r>=25,cond:r=>r>=0};
 return `<article class="g-panel g-advisors" aria-label="조언자"><div class="g-panel-title">🧑‍🤝‍🧑 조언자<span class="g-sub">인물 수첩 ${Object.values(s.seats||{}).filter(Boolean).length}명</span></div><div class="g-guide"><div class="g-g-ava"><img src="assets/npc-ai_agent.webp" alt="안내 비서 모아" width="128" height="128"></div><div class="g-bubble"><b>모아</b> · ${esc(briefingText(s))}${goal&&!s.ending?` <small>다음 목표 · ${esc(goal.title)} · ${goalDate(goal.byMonth)}까지</small>`:''}<div class="g-bubble-actions"><button class="g-btn3d blue small" data-action="help">플레이 배우기</button></div></div></div>
 <div class="g-adv-row">${cast.map(p=>{const r=s.relations?.[p.id]??15,m=toneExpression({relation:r}),cls=roles.yes(r)?'yes':roles.cond(r)?'cond':'no';return `<button type="button" class="g-adv" data-advisor="${p.id}" popovertarget="advisor-pop" popovertargetaction="show" aria-haspopup="dialog" aria-label="${esc(p.name)} · ${esc(p.role)} · 호감도 ${r} · 한마디 듣기">${faceCrop('assets/'+p.file,{alt:'',expr:m.expr,cls:'g-face'})}<span class="g-adv-name">${esc(p.name)}</span><span class="g-vote ${cls}">${esc(p.role)}</span></button>`;}).join('')}</div><dialog popover="auto" id="advisor-pop" class="g-adv-pop" aria-labelledby="advisor-pop-name"></dialog></article>`;
}
function vsEntry(){return `<button class="g-panel g-vs-entry" data-view="vshub" aria-label="벤처스퀘어 허브 열기"><span class="g-vs-new">NEW</span><img src="assets/vs/korean-one-line-white-dark.png" alt="벤처스퀘어" width="1101" height="310" loading="lazy" decoding="async"><b>벤처스퀘어 허브</b><small>보도자료 · 멘토링 · IR · 지원사업</small><span class="g-vs-go" aria-hidden="true">입장 ▶</span></button>`;}
function startPanel(c){
 const s=c.state,f=c.forecast(s,c.data),blocked=blockedOf(c),runOff=blocked||s.plan.length!==4||f.cashAfterCosts<0||c.requiresProduct(s)&&!s.plan.includes('build');
 return `<article class="g-panel g-start" data-tour-target="plan-summary" aria-label="이번 달 시작"><div class="g-sum"><div><span>예상 활동비</span><b class="g-num g-neg">${formatMoney(-f.cost)}</b></div><div><span>월 고정비</span><b class="g-num g-neg">${formatMoney(-f.fixed)}</b></div><div><span>예상 남은 체력</span><b class="g-num">${f.health} / 100</b></div></div><div class="g-m-sum"><span>활동비 <b class="g-num">${formatMoney(f.cost)}</b> · 고정비 <b class="g-num">${formatMoney(f.fixed)}</b></span><span>남은 체력 <b class="g-num">${f.health}</b></span></div>
 ${f.cashAfterCosts<0?'<div class="g-warn">활동비와 고정비가 부족해요. <button data-action="financing">자금 대책 확인하기</button></div>':f.health<25?'<div class="g-warn">일정을 마치면 많이 지칠 것 같아요. 휴식을 넣어 보세요.</div>':''}
 <button class="g-btn3d gold g-go" data-action="run" ${runOff?'disabled':''}><span class="g-sh"></span>▶ 이번 달 업무시작!</button>
 <div class="g-go-sub"><button class="g-btn3d dark" data-action="recommend" ${blocked?'disabled':''}>✨ 추천 일정</button><button class="g-btn3d dark ${c.autoRunning?'active':''}" data-action="${c.autoRunning?'auto-pause':'auto-start'}" aria-label="${c.autoRunning?'자동 진행 일시정지':'자동 진행 2배속'}">${c.autoRunning?'Ⅱ 정지':'AUTO'}</button><button class="g-btn3d dark" data-action="auto-finish" aria-label="건너뛰고 결과보기">🏁 결과보기</button><button class="g-btn3d dark g-m-only" data-action="retire" aria-label="나가기 · 자진 폐업">🚪</button></div><button class="g-exit" data-action="retire">나가기 · 자진 폐업</button></article>`;
}
export function gameDashboard(c){
 return `<div class="g-board"><section class="g-col">${profile(c)}${menu(c)}</section><section class="g-col">${islandMap(c)}${weekCards(c)}</section><section class="g-col">${eventCard(c)}${advisors(c)}${vsEntry()}${startPanel(c)}</section></div>`;
}
export function gameTabbar(view){return `<nav class="g-tabbar" aria-label="하단 메뉴">${[['home','🏠','작업실'],['office','🖥️','꾸미기'],['growth','📈','성장 기록'],['furnishings','🛍️','상점'],['vshub','📰','VS 허브']].map(([v,e,t])=>`<button class="${view===v?'on':''}" data-view="${v}" ${view===v?'aria-current="page"':''}><span aria-hidden="true">${e}</span>${t}</button>`).join('')}</nav>`;}

/* ── activity picker (native <dialog>, bottom sheet on mobile) ── */
let picker=null,pickTab='act',pickPlace='all',pickIndex=0;
function pickerBody(c){
 const s=c.state,f=c.forecast(s,c.data),counts={};for(const h of s.history||[])for(const id of h.actions||[])counts[id]=(counts[id]||0)+1;
 const rec=c.recommendIds?.()||[],week=Math.min(4,s.plan.length+1),evt=upcomingEvent(s);
 let cards='';
 if(pickTab==='act')cards=c.ACTIONS.filter(a=>pickPlace==='all'||(pickPlace==='in')===ACT_UI[a.id][3]).map(a=>{const [emo,color,place]=ACT_UI[a.id],hp=c.actionHealth(s,a),ok=canPlan(c,a);
  return `<article class="g-hcard ${rec[s.plan.length]===a.id?'pick':''}"><div class="g-hh"><b>${a.name}</b>${rec[s.plan.length]===a.id?'<span class="g-chip xp">★ 추천</span>':''}<span class="g-own">누적 ${(counts[a.id]||0)+s.plan.filter(x=>x===a.id).length}주</span></div><div class="g-pic"><img src="${esc(c.sceneAsset(place,s.month))}" alt="" loading="lazy" decoding="async" width="1672" height="941"><span class="g-emo" style="background:${color}" aria-hidden="true">${emo}</span></div><div class="g-info"><div class="g-badges">${effectChips(c,a)}</div><div class="g-xprow"><span class="g-chip xp">XP +${a.xp}</span></div><p class="g-desc">${esc(a.desc)} · ${esc(a.place)}</p><div class="g-act"><span class="g-price">💰 ${formatMoney(a.cost)} · <span class="g-hp ${hp>0?'plus':''}">❤ ${hp>0?'+':'−'}${Math.abs(hp)}</span></span><button class="g-btn3d brown" data-action="plan" data-id="${a.id}" ${ok?'':'disabled'} aria-label="${a.name}을 ${week}주에 배치">배치</button></div></div></article>`;}).join('');
 else if(pickTab==='item')cards=c.ITEMS.map(it=>{const own=s.items.includes(it.id);return `<article class="g-hcard"><div class="g-hh"><b>🎒 ${esc(it.name)}</b><span class="g-own">보유 ${own?1:0} / 1</span></div><div class="g-pic g-pic-item" aria-hidden="true">${ITEM_UI[it.id]||'🎁'}</div><div class="g-info"><div class="g-badges"><span class="g-chip up">${esc(it.desc)}</span></div><div class="g-xprow"></div><p class="g-desc">한 번 사면 계속 효과가 있어요.</p><div class="g-act"><span class="g-price">💰 ${formatMoney(it.price)}</span><button class="g-btn3d brown" data-action="buy" data-id="${it.id}" ${own||s.cash<it.price?'disabled':''}>${own?'보유 중':'구입'}</button></div></div></article>`;}).join('');
 else cards=(evt?`<article class="g-hcard limited"><div class="g-hh"><b>🎍 ${esc(evt.title)}</b><span class="g-own">한정 · ${evt.year}년 차 ${evt.month}월</span></div><div class="g-pic"><img src="${esc(c.sceneAsset('center',s.month))}" alt="" loading="lazy" decoding="async" width="1672" height="941"><span class="g-emo" style="background:var(--gold)" aria-hidden="true">📄</span></div><div class="g-info"><div class="g-badges"><span class="g-chip ghost">${evt.elapsed===s.month?'이번 달':`${evt.elapsed-s.month}개월 남음`}</span></div><div class="g-xprow"></div><p class="g-desc">${esc(evt.description)} 그달 업무를 시작하면 이벤트가 열려요.</p><div class="g-act"><span class="g-price">달력 일정</span><button class="g-btn3d pink" data-action="calendar-year" data-year="${evt.year}">달력 보기</button></div></div></article>`:'')+`<article class="g-hcard"><div class="g-hh"><b>📰 벤처스퀘어 허브</b><span class="g-own">보도자료 · 멘토링 · IR</span></div><div class="g-pic g-pic-item" aria-hidden="true"><img src="assets/vs/symbol-white-dark.png" alt="" width="351" height="352" loading="lazy" decoding="async"></div><div class="g-info"><div class="g-badges"><span class="g-chip xp">미디어 노출 ${Math.round(s.media||0)}</span></div><div class="g-xprow"></div><p class="g-desc">보도자료 발송과 멘토링은 허브에서 해요. 4주 일정과 별도로 진행돼요.</p><div class="g-act"><span class="g-price">허브</span><button class="g-btn3d blue" data-view="vshub">입장</button></div></div></article>`;
 const tabs=[['act','🏃','활동'],['item','🎒','아이템'],['event','🎍','이벤트']];
 return `<div class="g-modal"><button class="g-close" data-action="close-picker" aria-label="닫기">×</button><div class="g-m-head"><h2 id="pick-title">${week}주 할 일 고르기</h2><span class="g-slot">${calLabel(s.month)} · 예상 남은 체력 ${f.health} / 100</span>${evt?`<span class="g-timer"><span class="g-clock" aria-hidden="true">⏰</span>${esc(evt.title)}까지 ${evt.elapsed-s.month}개월</span>`:''}</div>
 <div class="g-tabs" role="group" aria-label="카드 종류">${tabs.map(([id,e,t])=>`<button class="g-tab ${pickTab===id?'on':''}" data-pick-tab="${id}" aria-pressed="${pickTab===id}"><span aria-hidden="true">${e}</span>${t}</button>`).join('')}<div class="g-spacer"></div>${pickTab==='act'?`<div class="g-place-filter" role="group" aria-label="장소 필터"><button class="g-btn3d ${pickPlace==='in'?'blue':'dark'}" data-pick-place="in" aria-pressed="${pickPlace==='in'}">🏠 실내</button><button class="g-btn3d ${pickPlace==='out'?'blue':'dark'}" data-pick-place="out" aria-pressed="${pickPlace==='out'}">🚶 외근</button></div>`:''}</div>
 <div class="g-cards">${cards}</div>
 <div class="g-m-foot"><span class="g-pts"><span class="g-ico" aria-hidden="true">💰</span><span class="g-num">${formatMoney(s.cash)}</span></span><span class="g-hint">${s.plan.length===4?'4주를 모두 채웠어요.':`카드를 눌러 ${week}주에 배치하세요.`}</span><span class="g-slots" aria-label="${s.plan.length} / 4주 배치">${[0,1,2,3].map(i=>`<i class="${i<s.plan.length?'f':''}">${i+1}</i>`).join('')}</span><button class="g-btn3d blue round" data-action="recommend" ${blockedOf(c)?'disabled':''}>✨ 추천으로 채우기</button></div></div>`;
}
export const pickerIsOpen=()=>!!picker?.open;
export function openActivityPicker(c,index=0){
 pickIndex=index;
 if(!picker){picker=document.createElement('dialog');picker.className='gx g-picker';picker.setAttribute('aria-labelledby','pick-title');document.body.append(picker);
  picker.addEventListener('click',e=>{const t=e.target.closest('[data-pick-tab],[data-pick-place]');if(e.target===picker){picker.close();return;}if(!t)return;if(t.dataset.pickTab)pickTab=t.dataset.pickTab;if(t.dataset.pickPlace)pickPlace=pickPlace===t.dataset.pickPlace?'all':t.dataset.pickPlace;refreshActivityPicker(picker._ctx);picker.querySelector(`[data-pick-tab="${pickTab}"]`)?.focus({preventScroll:true});});
 }
 picker._ctx=c;picker.innerHTML=pickerBody(c);if(!picker.open)picker.showModal();
 picker.querySelector('[data-action="plan"]:not(:disabled)')?.focus({preventScroll:true});
}
export function refreshActivityPicker(c){if(!picker?.open)return;picker._ctx=c;const scroll=picker.querySelector('.g-cards')?.scrollTop||0;picker.innerHTML=pickerBody(c);const cards=picker.querySelector('.g-cards');if(cards)cards.scrollTop=scroll;}
export function closeActivityPicker(){if(picker?.open)picker.close();}

// 조언자 얼굴 팝업: 지금 사건이 있으면 그 사건의 조언(adviceFor), 없으면 인물 성향의 조언 대사(adviceLines)와 관계 상태를 보여 줍니다.
export function advisorLine(c,id){
 const s=c.state,story=c.data.story,p=story.cast.find(x=>x.id===id);if(!p)return null;
 const r=s.relations?.[id]??15,label=relationshipLabel(r);
 const advice=s.pending&&!s.ending?adviceFor(s,story).find(a=>a.person.id===id):null;
 if(advice)return {p,r,label,line:advice.line,context:`지금 사건 · ${s.pending.title} · ${advice.stance} 의견`,mood:toneExpression({stance:advice.stance})};
 const picked=pickAdviceLine(s,story,id);
 return {p,r,label,line:picked.text,context:`${label} · 호감도 ${r} · ${relationshipSignal(r).hint}`,mood:toneExpression({relation:r})};
}
export function advisorPopHtml(c,id){
 const a=advisorLine(c,id);if(!a)return '';
 return `<div class="g-ap-head"><span class="g-ap-face">${faceCrop('assets/'+a.p.file,{alt:'',expr:a.mood.expr,lazy:false,cls:'g-face'})}</span><div class="g-ap-who"><b id="advisor-pop-name">${esc(a.p.name)}</b><span>${esc(a.p.role)} · ${esc(a.label)}</span></div><button type="button" class="g-ap-close" popovertarget="advisor-pop" popovertargetaction="hide" aria-label="닫기">×</button></div><p class="g-ap-line">“${esc(a.line)}”</p><p class="g-ap-ctx">${esc(a.context)}</p><div class="g-ap-actions"><button type="button" class="g-btn3d blue small" data-action="advisor-detail" data-id="${esc(id)}" autofocus>자세히 보기</button></div>`;
}
export function placeAdvisorPop(pop,btn){
 if(!pop||!btn)return;const m=8,r=btn.getBoundingClientRect(),vw=document.documentElement.clientWidth,vh=window.innerHeight,w=pop.offsetWidth,h=pop.offsetHeight;
 const left=Math.min(Math.max(m,r.left+r.width/2-w/2),vw-w-m);let top=r.top-h-14,below=false;
 if(top<m){top=Math.min(r.bottom+14,vh-h-m);below=true;}
 pop.style.left=`${Math.round(left)}px`;pop.style.top=`${Math.round(Math.max(m,top))}px`;pop.style.setProperty('--tail',`${Math.round(Math.min(w-22,Math.max(22,r.left+r.width/2-left)))}px`);pop.classList.toggle('below',below);
}
