// 인물 대사 상황 분류와 최근 대사 재사용 방지 선택.
import {DIALOGUE_POOL} from './dialogue-data.js';

export const RECENT_LIMIT=12;
export const THEMES=['trust','quality','cash','safety','self','people','growth','speed'];
export const FALLBACK_LINE='지금 감당할 수 있는 선택인지 한 번 더 살펴봐요.';

const EXCLUSIVE_GROUPS=[
 ['cash_ok','cash_tight','cash_crisis'],
 ['rev_up','rev_down','rev_flat','no_revenue'],
 ['profit_on','profit_off'],
 ['early','mid','late'],
 ['health_low','health_mid','health_ok'],
 ['team_on','team_off'],
 ['customers_none','customers_few','customers_some','customers_many'],
 ['first_meet','return_visit'],
 ['relation_good','relation_mid','relation_risk'],
 ['event_ok','event_bad']
];

function hashString(value){
 let h=2166136261;
 const s=String(value??'');
 for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;
 return h;
}

export function runwayMonths(state){
 const cash=Number(state?.cash)||0;
 if(cash<0)return 0;
 const last=state.history?.at?.(-1);
 const expense=state.monthlyExpense??last?.expense??state.monthlyFixed??120;
 const revenue=Number(state.revenue)||0;
 const burn=expense-revenue;
 return burn<=0?Infinity:cash/burn;
}

export function classifySituation(state,personId){
 const tags=[];
 const add=t=>{if(t&&!tags.includes(t))tags.push(t);};
 const month=Math.max(1,Number(state?.month)||1);
 const cash=Number(state?.cash)||0;
 const hist=Array.isArray(state?.history)?state.history:[];
 const last=hist.at(-1);
 const prev=hist.at(-2);
 const revenue=Number(state?.revenue)||0;
 const profit=Number(last?.profit??state?.profit)||0;
 const rw=runwayMonths(state);

 if(rw<2||cash<=0)add('cash_crisis');
 else if(rw<6)add('cash_tight');
 else add('cash_ok');
 if((Number(state?.debt)||0)>0||(Number(state?.familyDebt)||0)>0)add('has_debt');

 if(!hist.length||revenue<=0)add('no_revenue');
 else{
  if(prev&&Number.isFinite(Number(last?.revenue))&&Number.isFinite(Number(prev.revenue))){
   const a=Number(last.revenue),b=Number(prev.revenue);
   if(b>0&&a>b*1.05)add('rev_up');
   else if(b>0&&a<b*0.95)add('rev_down');
   else add('rev_flat');
  }
  if(profit>0)add('profit_on');
  else add('profit_off');
 }

 if(month<=6)add('early');
 else if(month<=24)add('mid');
 else add('late');
 const cal=((month-1)%12)+1;
 if(cal<=2)add('year_start');
 if(cal>=11)add('year_end');

 const health=Number(state?.health)||0;
 if(health<25)add('health_low');
 else if(health<50)add('health_mid');
 else add('health_ok');

 if((Number(state?.team)||0)>0)add('team_on');
 else add('team_off');
 if((Number(state?.team)||0)>0&&(Number(state?.morale)||70)<40)add('morale_low');

 const customers=Number(state?.customers)||0;
 if(customers<=0)add('customers_none');
 else if(customers<30)add('customers_few');
 else if(customers<100)add('customers_some');
 else add('customers_many');

 const skills=state?.skills||{};
 for(const [key,value] of Object.entries(skills)){
  if(value>=70)add(`skill_${key}_high`);
  else if(value<20)add(`skill_${key}_low`);
 }

 const fx=state?.lastScene?.fx;
 if(fx&&typeof fx==='object'){
  const up=(fx.cash||0)>0||(fx.customers||0)>0||(fx.morale||0)>0||(fx.network||0)>0;
  const down=(fx.cash||0)<0||(fx.customers||0)<0||(fx.hiddenRisk||0)>0||(fx.morale||0)<0||((fx.health||0)<0&&(fx.cash||0)<=0);
  if(up&&!down)add('event_ok');
  else if(down)add('event_bad');
 }

 const met=state?.metPeople||[];
 const advised=(state?.adviceHistory||[]).some(h=>h?.role===personId||(h?.roles||[]).includes(personId));
 if(personId&&!met.includes(personId)&&!advised)add('first_meet');
 else if(personId)add('return_visit');

 const rel=personId?state?.relations?.[personId]:undefined;
 if(Number.isFinite(Number(rel))){
  if(rel>=40)add('relation_good');
  else if(rel<=0)add('relation_risk');
  else add('relation_mid');
 }

 if(state?.industry)add(`ind_${state.industry}`);
 return tags;
}

export function contradictsSituation(when,situations){
 const whenTags=when||[];
 if(!whenTags.length)return false;
 for(const group of EXCLUSIVE_GROUPS){
  const lineHas=whenTags.filter(t=>group.includes(t));
  const stateHas=group.find(t=>situations.includes(t));
  if(lineHas.length&&stateHas&&!lineHas.includes(stateHas))return true;
 }
 const industryTags=whenTags.filter(t=>t.startsWith('ind_'));
 if(industryTags.length&&!industryTags.some(t=>situations.includes(t)))return true;
 return false;
}

function asLine(item,id){
 if(typeof item==='string')return {id,text:item,themes:[],when:[]};
 const text=String(item?.text||'').trim();
 if(!text)return null;
 return {id:item.id||id,text,themes:[...new Set(item.themes||item.theme&&[item.theme]||[])],when:[...new Set(item.when||item.situations||[])]};
}

function legacyLines(story,personId){
 const byTag=story?.adviceLines?.[personId]||{};
 const out=[];
 for(const [theme,arr] of Object.entries(byTag)){
  (Array.isArray(arr)?arr:[]).forEach((item,index)=>{
   const line=asLine(item,`legacy:${personId}:${theme}:${index}`);
   if(!line)return;
   if(!line.themes.includes(theme)&&THEMES.includes(theme))line.themes.push(theme);
   out.push(line);
  });
 }
 return out;
}

export function linesFor(personId,story){
 const merged=[];
 const seen=new Set();
 const add=line=>{
  if(!line?.text||seen.has(line.text))return;
  seen.add(line.text);
  merged.push(line);
 };
 for(const [index,item] of (DIALOGUE_POOL[personId]||[]).entries()){
  add(asLine(item,item?.id||`${personId}:${index}`));
 }
 for(const line of legacyLines(story,personId))add(line);
 return merged;
}

export function hasThemeLines(personId,story,theme){
 return linesFor(personId,story).some(line=>!line.themes.length||line.themes.includes(theme));
}

export function preferredTheme(story,personId,tags){
 const prefs=story?.seats?.[personId]?.prefs||{};
 const source=[...(tags&&tags.length?tags:Object.keys(prefs))];
 const sorted=source.sort((a,b)=>(prefs[b]||0)-(prefs[a]||0));
 return sorted.find(t=>THEMES.includes(t)&&hasThemeLines(personId,story,t))||'trust';
}

function scoreLine(line,theme,situations){
 const themes=line.themes||[];
 const when=line.when||[];
 const themeOk=!themes.length||themes.includes(theme);
 const conflict=contradictsSituation(when,situations);
 const sitMatches=when.filter(t=>situations.includes(t)).length;
 const general=!when.length;
 let score=0;
 if(themeOk)score+=10;
 if(sitMatches)score+=sitMatches*3;
 if(general)score+=1;
 if(conflict)score-=20;
 return {themeOk,sitMatches,general,conflict,score};
}

function pickStable(items,state,personId){
 if(!items.length)return null;
 if(items.length===1)return items[0];
 const seed=(Number(state?.seed)||18731)+Math.max(1,Number(state?.month)||1)*131+hashString(personId);
 return items[seed%items.length];
}

function leastRecent(items,recent){
 if(!items.length)return null;
 const rank=id=>{
  const index=recent.indexOf(id);
  return index===-1?recent.length+1:index;
 };
 return [...items].sort((a,b)=>rank(b.id)-rank(a.id)||a.id.localeCompare(b.id))[0];
}

export function pickAdviceLine(state,story,personId,theme){
 const situations=classifySituation(state,personId);
 const chosenTheme=theme||preferredTheme(story,personId);
 const lines=linesFor(personId,story);
 const recent=state?.dialogueMemory?.[personId]||[];
 const fallback={id:`fallback:${personId}`,text:FALLBACK_LINE,themes:[],when:[]};
 if(!lines.length)return {...fallback,theme:chosenTheme,situations};

 const ranked=lines.map(line=>({line,...scoreLine(line,chosenTheme,situations)}))
  .sort((a,b)=>b.score-a.score||a.line.id.localeCompare(b.line.id));

 const buckets=[
  item=>item.themeOk&&item.sitMatches>0&&!item.conflict,
  item=>item.themeOk&&item.general&&!item.conflict,
  item=>item.themeOk&&!item.conflict,
  item=>item.sitMatches>0&&!item.conflict,
  item=>item.general&&!item.conflict,
  item=>!item.conflict,
  item=>true
 ];

 for(const allow of buckets){
  const fresh=ranked.filter(item=>allow(item)&&!recent.includes(item.line.id)).map(item=>item.line);
  const picked=pickStable(fresh,state,personId);
  if(picked)return {...picked,theme:chosenTheme,situations};
 }

 const any=leastRecent(ranked.map(item=>item.line),recent)||fallback;
 return {...any,theme:chosenTheme,situations};
}

export function rememberDialogue(state,personId,lineId){
 if(!state||!personId||!lineId)return state||{};
 const prev=state.dialogueMemory?.[personId]||[];
 const next=[lineId,...prev.filter(id=>id!==lineId)].slice(0,RECENT_LIMIT);
 if(prev.length===next.length&&prev.every((id,i)=>id===next[i]))return state;
 return {...state,dialogueMemory:{...(state.dialogueMemory||{}),[personId]:next}};
}

export function rememberDialogues(state,entries){
 let next=state;
 for(const [personId,lineId] of entries||[])next=rememberDialogue(next,personId,lineId);
 return next;
}

export function poolCounts(){
 const counts={};
 for(const [personId,lines] of Object.entries(DIALOGUE_POOL)){
  const texts=new Set((lines||[]).map(item=>typeof item==='string'?item:item?.text).filter(Boolean));
  counts[personId]=texts.size;
 }
 return counts;
}
