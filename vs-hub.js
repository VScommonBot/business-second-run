// 벤처스퀘어 허브: 보도자료 발송·멘토링 신청·미디어 노출도(신규 규칙)와 기존 지원사업·전시회·데모데이·투자자 만남 연결 화면
import {calendarEntries} from './calendar.js';
import {canMeetExtra,EXTRA_CAST} from './extended-cast.js';
import {sceneAsset} from './scenery.js';
import {faceRig} from './game-fx.js';
import {formatMoney} from './money.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,n));
// New rules (kept small so balance holds): see PR "벤처스퀘어 허브 규칙".
export const VS_RULES={
 article:{cooldown:6,minProduct:30,health:-4,fx:{sales:2,network:2},media:10},
 mentoring:{cooldown:3,health:-4,fx:{insight:3,management:1},relation:3},
 mediaDecay:3,mediaDemandPerPoint:1/400
};
const lastUse=(state,key)=>state.vsHub?.[key]??-99;
export function hubAvailability(state,key){
 const r=VS_RULES[key],wait=r.cooldown-(state.month-lastUse(state,key));
 if(state.ending||state.pending||state.lastScene?.unread)return {ok:false,reason:'진행 중인 사건을 먼저 마무리해 주세요.'};
 if(key==='article'&&state.skills.product<r.minProduct)return {ok:false,reason:`제품력 ${r.minProduct} 이상(첫 제품 준비)부터 ${key==='article'?'보도자료를 보낼':'신청할'} 수 있어요.`};
 if(wait>0)return {ok:false,reason:`${wait}개월 뒤 다시 ${key==='article'?'보낼':'신청할'} 수 있어요.`};
 if(state.health+r.health<=5)return {ok:false,reason:'체력이 부족해요. 먼저 쉬어 주세요.'};
 return {ok:true,reason:''};
}
export function applyHub(state,key){
 if(!hubAvailability(state,key).ok)return state;
 const r=VS_RULES[key],s=structuredClone(state);
 s.health=clamp(s.health+r.health);
 for(const [k,v] of Object.entries(r.fx))s.skills[k]=clamp(s.skills[k]+v);
 if(r.media)s.media=clamp((s.media||0)+r.media);
 if(r.relation&&s.relations)s.relations.mentor=clamp((s.relations.mentor??15)+r.relation,-100,100);
 s.vsHub={...(s.vsHub||{}),[key]:s.month,[`${key}Count`]:(s.vsHub?.[`${key}Count`]||0)+1};
 s.journal=[{month:s.month,title:key==='article'?'벤처스퀘어에게 보도자료 발송':'벤처스퀘어 멘토링',text:key==='article'?'회사 소개 자료와 수치를 담은 보도자료를 게임 속 벤처스퀘어 기자에게 보냈다.':'정우진 멘토와 첫 거래처를 만날 방법을 함께 정리했다.',type:'event'},...(s.journal||[])];
 return s;
}
export function articlePreview(state,data){
 const company=state.companyName||`${state.name}의 회사`,ind=data.industries[state.industry]?.label||'',c=state.customers;
 const headline=c>=30?`${company}, ${ind}로 고객 ${c.toLocaleString('ko-KR')}명을 모으기까지`:state.skills.product>=30?`${company}, ${ind}로 첫 고객 검증에 나서`:`${company}, ${ind} 창업 준비를 시작하다`;
 return {headline,body:`${state.name} 대표가 이끄는 ${company}는 ${c?`고객 ${c.toLocaleString('ko-KR')}명과 함께`:'첫 고객을 찾아'} 다음 단계를 준비하고 있다.`};
}
const months=(state,key)=>{const year=Math.floor((state.month-1)/12)+1;const e=[...calendarEntries(state,year),...calendarEntries(state,year+1)].find(x=>x.key===key&&x.elapsed>=state.month);return e?{left:e.elapsed-state.month,label:`${e.year}년 차 ${e.month}월`,answered:e.answered,year:e.year}:null;};
const chip=(t,cls='up')=>`<span class="g-chip ${cls}">${esc(t)}</span>`;
const num=n=>Math.round(Number(n)||0).toLocaleString('ko-KR');
function card({cat,title,src='old',own='',pic,emo='',emoBg='#fff',chips,xp='',timer='',desc,price,button,limited=false,locked=false,person=null}){
 return `<article class="g-hcard ${limited?'limited':''} ${locked?'locked':''}" data-cat="${cat}">${limited?'<span class="g-super">이번 달!</span>':''}<div class="g-hh"><b>${title}</b><span class="g-src ${src}">${src==='new'?'신규':'기존'}</span><span class="g-own">${own}</span></div><div class="g-pic ${person?'person':''}">${person?faceRig(`assets/${person.file}`,{alt:`${person.name} ${person.role}`,cls:'g-pic-rig'}):`<img src="${esc(pic)}" alt="" loading="lazy" decoding="async" width="1672" height="941">`}<span class="g-emo" style="background:${emoBg}" aria-hidden="true">${emo}</span></div><div class="g-info"><div class="g-badges">${chips}</div><div class="g-xprow">${xp}${timer?`<span class="g-tmr">⏰ ${esc(timer)}</span>`:''}</div><p class="g-desc">${desc}</p><div class="g-act"><span class="g-price">${price}</span>${button}</div></div></article>`;
}
export function vsHubView(state,data,{saveLabel=''}={}){
 const art=hubAvailability(state,'article'),men=hubAvailability(state,'mentoring'),media=Math.round(state.media||0);
 const demo=months(state,'demo'),grant=months(state,'grant'),expo=months(state,'exhibition');
 const investor=EXTRA_CAST.find(p=>p.id==='foreign_investor'),officer=EXTRA_CAST.find(p=>p.id==='public_officer'),mentor=data.story.cast.find(p=>p.id==='mentor');
 const met=id=>!!state.seats?.[id]||!!state.seenEvents?.includes(`meet_${id}`),free=!state.pending&&!state.lastScene?.unread&&!state.ending;
 const canInvestor=free&&canMeetExtra(state,'foreign_investor')&&!met('foreign_investor'),canOfficer=free&&canMeetExtra(state,'public_officer')&&!met('public_officer');
 const left=m=>m?(m.left===0?'이번 달':`${m.left}개월 남음`):'';
 const year=Math.floor((Math.min(state.month,60)-1)/12)+1;
 const btn=(action,label,ok,cls='vsblue',extra='')=>`<button class="g-btn3d ${ok?cls:''}" data-action="${action}" ${extra} ${ok?'':'disabled'}>${label}</button>`;
 const preview=articlePreview(state,data),m=Math.min(state.month,60),when=`${Math.floor((m-1)/12)+1}년 차 ${(m-1)%12+1}월`;
 const cards=[
  card({cat:'press',title:'벤처스퀘어에게 보도자료 발송',src:'new',own:`쿨다운 ${VS_RULES.article.cooldown}개월`,pic:sceneAsset('news',state.month),emo:'📰',chips:chip('영업력 +2')+chip('네트워크 +2'),xp:chip(`미디어 노출 +${VS_RULES.article.media}`,'xp'),desc:`회사 소개 자료와 수치를 담아 게임 속 벤처스퀘어 기자에게 보도자료를 보내요.${art.ok?'':` <b class="g-lock-reason">${esc(art.reason)}</b>`}`,price:'💰 0원 · <span class="g-hp">❤ −4</span>',button:btn('vs-article','발송',art.ok),locked:!art.ok}),
  card({cat:'mentor',title:'멘토링 신청',src:'new',own:`${esc(mentor?.name||'')} 멘토`,person:mentor,emo:'🧑‍🏫',emoBg:'var(--management)',chips:chip('시장 이해 +3')+chip('운영력 +1'),xp:chip(`멘토 호감도 +${VS_RULES.mentoring.relation}`,'xp'),desc:`첫 거래처를 만날 방법을 멘토와 함께 정리해요.${men.ok?'':` <b class="g-lock-reason">${esc(men.reason)}</b>`}`,price:'💰 0원 · <span class="g-hp">❤ −4</span>',button:btn('vs-mentoring','신청',men.ok),locked:!men.ok}),
  card({cat:'ir',title:'🎤 데모데이 IR 참가',own:demo?`한정 · ${demo.label}`:'올해 일정 종료',pic:sceneAsset('pitch',state.month),emo:'🎤',emoBg:'var(--gold)',chips:chip('연말 데모데이','ghost'),xp:chip('투자자 연결','xp'),timer:left(demo),desc:'성과를 공유하고 다음 연결을 만들어요. 11월에 업무를 시작하면 이벤트가 열려요.',price:'달력 일정',button:btn('calendar-year','달력 보기',true,'pink',`data-year="${demo?.year||year}"`),limited:demo?.left===0}),
  card({cat:'ir',title:'투자사 미팅',own:met('foreign_investor')?'만남 완료':'해금: 월 매출 1,000만 원 또는 8개월 차',person:investor,emo:'💼',emoBg:'var(--gold)',chips:chip('네트워크')+chip('해외 시장','ghost'),xp:chip('인물수첩 합류','xp'),desc:canInvestor?`${esc(investor.name)} 심사역이 회사에 관심을 보였어요.`:met('foreign_investor')?'이미 만났어요. 인물수첩에서 관계를 확인해요.':'조건을 채우면 만날 수 있어요.',price:'만남 이벤트',button:btn('meet-person',met('foreign_investor')?'만남 완료':canInvestor?'만나기':'잠김',canInvestor,'vsblue','data-id="foreign_investor"'),locked:!canInvestor&&!met('foreign_investor')}),
  card({cat:'support',title:'지원사업 신청',own:`${grant?grant.label:''} · ${esc(officer.name)} 담당자`,person:officer,emo:'🏛️',chips:chip('3월 신청','ghost'),xp:chip('5월 선발 발표','xp'),timer:left(grant),desc:`계획과 증빙을 정리해 선발에 도전해요.${canOfficer?' 담당자와 미리 상담할 수 있어요.':''}`,price:canOfficer?'만남 이벤트':'달력 일정',button:canOfficer?btn('meet-person','상담하기',true,'vsblue','data-id="public_officer"'):btn('calendar-year','달력 보기',true,'vsblue',`data-year="${grant?.year||year}"`),limited:grant?.left===0}),
  card({cat:'community',title:'창업 전시회 부스',own:expo?expo.label:'올해 일정 종료',pic:sceneAsset('market',state.month),emo:'🎪',emoBg:'var(--pink)',chips:chip('고객 반응 확인','ghost'),xp:chip('6월','xp'),timer:left(expo),desc:'부스에서 고객의 질문을 듣고 다음 연락처를 남겨요.',price:'달력 일정',button:btn('calendar-year','달력 보기',true,'vsblue',`data-year="${expo?.year||year}"`),limited:expo?.left===0})
 ];
 const cats=[['all','🏠','전체',6],['press','📰','보도자료·기사',1],['mentor','🧑‍🏫','멘토링',1],['ir','💼','투자 연결(IR)',2],['support','🏛️','지원사업',1],['community','🎪','커뮤니티·행사',1]];
 const ticker=['같이 시작한 창업 동기, 첫 투자 유치 소식','지원사업 신청 시즌, 증빙 정리가 관건','연말 데모데이 참가 신청 열려'];
 return `<header class="g-topbar"><div class="g-vs-brand"><img class="g-logo" src="assets/vs/korean-one-line-white-dark.png" alt="벤처스퀘어" width="1101" height="310"><span class="g-divider" aria-hidden="true"></span><div><h1 id="vs-hub-title"><b>벤처스퀘어 허브</b></h1><small>게임 속 스타트업 프로그램</small></div></div>
 <div class="g-currencies" aria-label="재화"><div class="g-cur" data-fx-stat="cash"><span class="g-ico cash" aria-hidden="true">💰</span><span class="g-val g-num">${formatMoney(state.cash)}</span><span class="g-lab">자금</span></div><div class="g-cur" data-fx-stat="network"><span class="g-ico rep" aria-hidden="true">⭐</span><span class="g-val g-num">평판 ${num(state.skills.network)}</span></div><div class="g-cur" data-fx-stat="health"><span class="g-ico hp" aria-hidden="true">❤️</span><span class="g-val g-num">${num(state.health)}/100</span></div><div class="g-cur"><span class="g-ico cal" aria-hidden="true">📅</span><span class="g-val">${when}</span></div></div>
 <div class="g-media" data-fx-stat="media" title="미디어 노출도"><span class="g-ico" aria-hidden="true">📣</span><span>미디어 노출도</span><span class="g-mbar" role="progressbar" aria-label="미디어 노출도" aria-valuenow="${media}" aria-valuemin="0" aria-valuemax="100"><i style="width:${media}%"></i></span><b class="g-num">${media} / 100</b></div>
 <button class="g-close-hub" data-view="home" aria-label="작업실로 돌아가기">×</button></header>
 <main class="g-hub" aria-labelledby="vs-hub-title"><nav class="g-tabs" aria-label="허브 분류">${cats.map(([id,ico,label,n],i)=>`<button class="g-tab ${i===0?'on':''}" data-hub-filter="${id}" aria-pressed="${i===0}"><span aria-hidden="true">${ico}</span>${label}<small>${n}</small></button>`).join('')}</nav>
 <section class="g-cards" aria-label="프로그램 카드">${cards.join('')}</section>
 <aside class="g-hside"><article class="g-panel g-news" aria-label="이번 달 헤드라인"><div class="g-panel-title">📰 이번 달 벤처스퀘어 헤드라인<span class="g-sub">게임 속 가상 기사</span></div><div class="g-ticker"><span class="g-tag">속보</span><div class="g-roll">${[...ticker,...ticker].map((t,i)=>`<span ${i>=ticker.length?'aria-hidden="true"':''}>${t}</span>`).join('')}</div></div>
 <div class="g-article"><div class="g-aimg"><img src="${esc(sceneAsset(state.businessPlace||'home',state.month))}" alt="" loading="lazy" decoding="async" width="1672" height="941"><span class="g-kicker">내 회사 기사 미리보기</span></div><div class="g-abody"><h3>${esc(preview.headline)}</h3><div class="g-meta">게임 속 가상 기사 · ${when}</div><p>${esc(preview.body)}</p><div class="g-note">게임 속 가상 기사예요. 실제 벤처스퀘어 기사가 아니며, 실제 회사·투자사와 관계가 없어요.</div></div></div></article>
 <article class="g-panel g-ach" aria-label="허브 기록"><div class="g-panel-title">🏅 허브 기록<span class="g-sub">이번 도전</span></div><div class="g-medals"><div class="g-medal"><span class="g-m" aria-hidden="true">📰</span>보도자료 발송<small>${state.vsHub?.articleCount||0}회</small><div class="g-pbar"><i style="width:${Math.min(100,(state.vsHub?.articleCount||0)*20)}%"></i></div></div><div class="g-medal"><span class="g-m" aria-hidden="true">🧑‍🏫</span>멘토링<small>${state.vsHub?.mentoringCount||0}회</small><div class="g-pbar"><i style="width:${Math.min(100,(state.vsHub?.mentoringCount||0)*10)}%"></i></div></div><div class="g-medal"><span class="g-m" aria-hidden="true">📣</span>미디어 노출<small>${media} / 100</small><div class="g-pbar"><i style="width:${media}%"></i></div></div></div><ul class="g-hub-rules"><li>보도자료 발송은 ${VS_RULES.article.cooldown}개월에 한 번, 멘토링은 ${VS_RULES.mentoring.cooldown}개월에 한 번 할 수 있어요.</li><li>미디어 노출도는 매달 ${VS_RULES.mediaDecay}씩 줄고, 새 고객 유입을 최대 25%까지 늘려요.</li><li>행사·투자자 만남은 기존 달력·인물 규칙을 그대로 따라요.</li></ul></article></aside></main>
 <footer class="g-hub-foot"><span class="g-pts"><span class="g-ico" aria-hidden="true">💰</span><span class="g-num">${formatMoney(state.cash)}</span></span><span class="g-hint">허브 프로그램은 게임 속 가상 프로그램이에요. 신청하면 바로 반영되고, 4주 일정과는 별도예요.</span><button class="g-btn3d gold g-cta" data-action="vs-article" ${art.ok?'':'disabled'}>📰 보도자료 발송하기</button></footer>`;
}
export function filterHub(btn){
 const root=btn.closest('.g-hub'),cat=btn.dataset.hubFilter;if(!root)return;
 root.querySelectorAll('[data-hub-filter]').forEach(b=>{const on=b===btn;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
 root.querySelectorAll('.g-hcard[data-cat]').forEach(card=>{card.hidden=cat!=='all'&&card.dataset.cat!==cat;});
}
