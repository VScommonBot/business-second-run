import {formatMoney,formatMoneySigned} from './money.js';
import {axisLabel,axisY,financeSeries} from './finance-series.js';
export {financeSeries};

const finite=value=>typeof value==='number'&&Number.isFinite(value);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=value=>Math.round(value).toLocaleString('ko-KR');
const skillKeys=['product','sales','insight','management','network'];
export const FINANCE_METRICS=[
 {id:'revenue',label:'매출',noun:'매출'},
 {id:'profit',label:'이익',noun:'이익'},
 {id:'cashflow',label:'현금 흐름',noun:'현금 흐름'}
];

// Compare actual values, including capped gains and choices after settlement.
// Older saves have no per-month skills; leave those unknown instead of guessing.
export function recentChanges(state){
 const history=state.history||[],last=history.at(-1),previous=history.at(-2);
 const initial=!state.legacyConditions?{cash:state.initialFinances?.cash,health:state.initialStats?.health,skills:state.initialStats?.skills,revenue:0,customers:0}:null;
 let baseline,basis;
 if(last?.before){baseline=last.before;basis=`${last.month}개월 차 시작 대비 · 사건 결과 포함`;}
 else if(previous){baseline=previous;basis=`${previous.month}개월 차 월말 기록 대비 · 사건 결과 포함`;}
 else if(!last||last.month===1){baseline=initial;basis='창업 시작 대비 · 사건 결과 포함';}
 else {baseline=null;basis='비교할 이전 기록이 없어요';}
 const diff=(current,before)=>finite(current)&&finite(before)?Math.round(current)-Math.round(before):null;
 return {basis,health:diff(state.health,baseline?.health),cash:diff(state.cash,baseline?.cash),customers:diff(state.customers,baseline?.customers),revenue:diff(state.revenue,baseline?.revenue),skills:Object.fromEntries(skillKeys.map(key=>[key,diff(state.skills?.[key],baseline?.skills?.[key])]))};
}

export function changeBadge(value,unit='',basis='전월 대비'){
 if(!finite(value))return '<span class="value-change change-unknown" title="비교할 이전 기록이 없어요. 다음 정산부터 표시돼요." aria-label="변화량 기록 없음">—</span>';
 const rounded=Math.round(value),tone=rounded>0?'up':rounded<0?'down':'flat',sign=rounded>0?'+':rounded<0?'−':'';
 const text=`${sign}${number(Math.abs(rounded))}${unit}`,label=`${basis}, ${rounded===0?'변화 없음':number(Math.abs(rounded))+unit+(rounded>0?' 증가':' 감소')}`;
 return `<span class="value-change change-${tone}" title="${esc(label)}" aria-label="${esc(label)}">${text}</span>`;
}

export function moneyChangeBadge(value,basis='전월 대비'){
 if(!finite(value))return changeBadge(value,'',basis);
 const rounded=Math.round(value),tone=rounded>0?'up':rounded<0?'down':'flat';
 const text=formatMoneySigned(rounded),label=`${basis}, ${rounded===0?'변화 없음':formatMoney(Math.abs(rounded))+(rounded>0?' 증가':' 감소')}`;
 return `<span class="value-change change-${tone}" title="${esc(label)}" aria-label="${esc(label)}">${text}</span>`;
}

export function revenueSeries(history=[],{unit='month',year='recent',initialCash=null}={}){
 const model=financeSeries(history,{unit,year,initialCash});
 return {ceiling:model.revenueAxis.ceiling,step:model.revenueAxis.step,left:model.left,right:model.right,top:model.top,bottom:model.bottom,points:model.points.map(row=>({...row,y:row.yRevenue,change:row.changeRevenue,unit:row.unit||unit}))};
}

function metricMeta(metric){
 return FINANCE_METRICS.find(item=>item.id===metric)||FINANCE_METRICS[0];
}

function periodLabel(point,unit,noun){
 if(!point)return '';
 return point.unit==='year'||unit==='year'?`${point.month}년 차 ${noun} · ${point.count}개월 집계`:`${point.month}개월 차 ${noun}`;
}

function moneyStrong(value,tone=false){
 if(!finite(value))return '<strong class="money-neutral">기록 없음</strong>';
 const klass=tone?(value>0?'money-positive':value<0?'money-negative':'money-neutral'):'';
 return `<strong class="${klass}">${formatMoney(value)}</strong>`;
}

export function financeReadout(point,metric='revenue',unit='month'){
 if(!point)return '';
 const basis=unit==='year'?(point.unit==='year'&&point.changeRevenue===null&&metric==='revenue'?'집계 기간 확인':point.count===12?'전년 대비':'집계 기간 확인'):'전월 대비';
 if(metric==='cashflow'){
  const change=finite(point.changeNet)?point.changeNet:point.changeCash;
  const compareLabel=unit==='year'?(finite(change)?'전년 대비':'집계 기간 확인'):'전월 대비';
  const inflow=finite(point.cashIn)?`<span>유입 ${formatMoney(point.cashIn)}</span>`:'';
  const outflow=finite(point.cashOut)?`<span>유출 ${formatMoney(point.cashOut)}</span>`:'';
  return `<div><span>${periodLabel(point,unit,'현금 흐름')}</span>${moneyStrong(point.netCash,true)}<small class="finance-readout-sub">순현금흐름</small></div><div><span>기말 현금</span>${moneyStrong(point.cashEnd)}</div><div class="revenue-comparison">${moneyChangeBadge(change,compareLabel)}<span>${compareLabel}</span>${inflow}${outflow}</div>`;
 }
 if(metric==='profit'){
  return `<div><span>${periodLabel(point,unit,'이익')}</span>${moneyStrong(point.profit,true)}</div><div class="revenue-comparison">${moneyChangeBadge(point.changeProfit,basis)}<span>${unit==='year'?(finite(point.changeProfit)?'전년 대비':'집계 기간 확인'):'전월 대비'}</span></div>`;
 }
 return `<div><span>${periodLabel(point,unit,'매출')}</span>${moneyStrong(point.revenue)}</div><div class="revenue-comparison">${moneyChangeBadge(point.changeRevenue,basis)}<span>${unit==='year'?(finite(point.changeRevenue)?'전년 대비':'집계 기간 확인'):'전월 대비'}</span></div>`;
}

export function revenueReadout(point){return financeReadout(point,'revenue',point?.unit||'month');}

function metricTabs(metric){
 return `<div class="finance-metrics" role="tablist" aria-label="재무 그래프 항목">${FINANCE_METRICS.map(item=>`<button type="button" role="tab" id="finance-tab-${item.id}" class="quiet${metric===item.id?' active':''}" data-action="chart-metric" data-id="${item.id}" aria-selected="${metric===item.id}" aria-controls="finance-chart-panel" tabindex="${metric===item.id?'0':'-1'}">${item.label}</button>`).join('')}</div>`;
}

function chartControls(history,unit,year,metric){
 const years=[...new Set(history.filter(row=>finite(row.month)).map(row=>Math.floor((row.month-1)/12)+1))];
 const noun=metricMeta(metric).noun;
 return `<div class="chart-controls">${metricTabs(metric)}<div role="group" aria-label="${esc(noun)} 집계 단위"><button type="button" class="quiet ${unit==='month'?'active':''}" data-action="chart-unit" data-id="month" aria-pressed="${unit==='month'}">월별</button><button type="button" class="quiet ${unit==='year'?'active':''}" data-action="chart-unit" data-id="year" aria-pressed="${unit==='year'}">연별</button></div>${unit==='month'?`<select class="field" id="chart-year" aria-label="${esc(noun)}을 볼 연차"><option value="recent"${year==='recent'?' selected':''}>최근 12개월</option>${years.map(y=>`<option value="${y}" ${String(year)===String(y)?'selected':''}>${y}년 차</option>`).join('')}</select>`:''}</div>`;
}

function axisLines(axis,left,right,top,bottom,side='left'){
 return axis.labels.map(value=>{
  const y=axisY(value,{...axis,top,bottom}),zero=value===0;
  const x=side==='left'?left-12:right+12,anchor=side==='left'?'end':'start';
  return `<line class="revenue-gridline${zero?' revenue-zero':''}" x1="${left}" y1="${y}" x2="${right}" y2="${y}"/><text class="revenue-axis${side==='right'?' revenue-axis-right':''}" x="${x}" y="${y+5}" text-anchor="${anchor}">${axisLabel(value)}</text>`;
 }).join('');
}

function segments(points,yKey){
 const groups=[],current=[];
 for(const point of points){
  if(finite(point[yKey]))current.push(point);
  else if(current.length){groups.push(current.splice(0,current.length));}
 }
 if(current.length)groups.push(current);
 return groups;
}

function areaAndLine(points,yKey,zeroY,bottom,fillId,lineClass){
 return segments(points,yKey).map(group=>{
  if(!group.length)return '';
  const line=group.map(p=>`${p.x.toFixed(2)},${p[yKey].toFixed(2)}`).join(' ');
  const base=finite(zeroY)?zeroY:bottom;
  const area=group.length>1?`<polygon points="${group[0].x},${base} ${line} ${group.at(-1).x},${base}" fill="url(#${fillId})"/>`:'';
  const poly=group.length>1?`<polyline class="${lineClass}" points="${line}"/>`:'';
  return area+poly;
 }).join('');
}

function pointLabel(point,unit,metric){
 const when=`${point.month}${unit==='year'?'년':'개월'} 차`;
 if(metric==='cashflow'){
  const net=finite(point.netCash)?`순현금흐름 ${formatMoneySigned(point.netCash)}`:'순현금흐름 기록 없음';
  const end=finite(point.cashEnd)?`기말 현금 ${formatMoney(point.cashEnd)}`:'기말 현금 기록 없음';
  return `${when} · ${net} · ${end}`;
 }
 if(metric==='profit')return `${when} 이익 ${finite(point.profit)?formatMoneySigned(point.profit):'기록 없음'}`;
 return `${when} 매출 ${finite(point.revenue)?formatMoney(point.revenue):'기록 없음'}`;
}

function wikiHelp(partial){
 const chip=(id,label)=>`<button type="button" class="wiki-term-chip" data-action="wiki-term" data-id="${id}">${label}</button>`;
 return `<p class="finance-chart-help">이익은 ${chip('revenue','매출')}에서 비용(원가·활동비·고정비)을 뺀 ${chip('profit','손익')}이에요. 순현금흐름은 기말 현금이 얼마나 늘거나 줄었는지를 보여 주며, 투자금·대출금·사건으로 오간 돈은 이익에는 안 잡히고 ${chip('cash-flow','현금 흐름')}에는 잡혀요.${partial?' 일부 달은 예전 저장이라, 확인할 수 있는 달부터 보여 줘요.':''}</p>`;
}

function emptyChart(history,unit,year,metric,noun){
 return `<section class="card page-card revenue-card"><div class="revenue-chart-heading"><h2>${unit==='year'?'연별':'월별'} ${noun}</h2>${chartControls(history,unit,year,metric)}</div><div class="chart-empty-grid" aria-label="아직 ${esc(noun)} 기록 없음"><p class="chart-empty-note"><span aria-hidden="true">📈</span>첫 달 영업을 마치면 ${noun} 그래프가 여기에 그려져요</p></div>${wikiHelp(false)}</section>`;
}

export function financeChart(history=[],{unit='month',year='recent',metric='revenue',initialCash=null}={}){
 const noun=metricMeta(metric).noun;
 const model=financeSeries(history,{unit,year,initialCash});
 const {points,left,right,top,bottom,revenueAxis,profitAxis,netAxis,cashAxis,partial}=model;
 const axis=metric==='profit'?profitAxis:metric==='cashflow'?netAxis:revenueAxis;
 const yKey=metric==='profit'?'yProfit':metric==='cashflow'?'yNet':'yRevenue';
 const drawable=points.filter(point=>metric==='cashflow'?finite(point.netCash)||finite(point.cashEnd):finite(point[yKey]));
 if(!drawable.length)return emptyChart(history,unit,year,metric,noun);
 const selected=drawable.at(-1);
 const zeroY=axisY(0,{...axis,top,bottom});
 const lineClass=metric==='profit'?'revenue-line profit-line':'revenue-line';
 const fillId=metric==='profit'?'profit-fill':'revenue-fill';
 const fillColor=metric==='profit'?'#2a8a6a':'#2e68e8';
 const gap=points.length<=1?48:(right-left)/Math.max(1,points.length-1);
 const barW=Math.max(8,Math.min(26,gap*0.42));
 const bars=metric==='cashflow'?points.map(point=>{
  if(!finite(point.netCash)||!finite(point.yNet))return '';
  const y=Math.min(point.yNet,zeroY),h=Math.max(point.netCash===0?0:1.5,Math.abs(point.yNet-zeroY));
  return `<rect class="cashflow-bar ${point.netCash>=0?'up':'down'}" x="${(point.x-barW/2).toFixed(2)}" y="${y.toFixed(2)}" width="${barW.toFixed(2)}" height="${h.toFixed(2)}" rx="2"/>`;
 }).join(''):'';
 const cashLine=metric==='cashflow'?areaAndLine(points,'yCash',null,bottom,'cash-end-fill','cash-end-line'):'';
 const mainLine=metric==='cashflow'?'':areaAndLine(points,yKey,zeroY,bottom,fillId,lineClass);
 const rightAxis=metric==='cashflow'?axisLines(cashAxis,left,right,top,bottom,'right')+'<text class="revenue-axis-caption" x="'+(right)+'" y="16" text-anchor="end">기말 현금</text>':'';
 const leftCaption=metric==='cashflow'?`<text class="revenue-axis-caption" x="${left}" y="16" text-anchor="start">순현금흐름</text>`:'';
 return `<section class="card page-card revenue-card"><div class="revenue-chart-heading"><h2>${unit==='year'?'연별':'월별'} ${noun}</h2>${chartControls(history,unit,year,metric)}<span>${unit==='year'?'연간 합계':'월별 합계'} · 축 단위는 억 원·만 원</span></div><div class="revenue-chart-readout" id="revenue-readout" aria-live="polite">${financeReadout(selected,metric,unit)}</div><div class="revenue-plot-scroll" id="finance-chart-panel" role="tabpanel" aria-labelledby="finance-tab-${metric}"><svg class="revenue-plot${metric==='cashflow'?' cashflow-plot':''}${metric==='profit'?' profit-plot':''}" viewBox="0 0 900 280" role="group" aria-label="${unit==='year'?'연별':'월별'} ${noun} 그래프"><defs><linearGradient id="${fillId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${fillColor}" stop-opacity=".18"/><stop offset="100%" stop-color="${fillColor}" stop-opacity=".015"/></linearGradient><linearGradient id="cash-end-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d0892a" stop-opacity=".1"/><stop offset="100%" stop-color="#d0892a" stop-opacity="0"/></linearGradient></defs>${leftCaption}${axisLines(axis,left,right,top,bottom,'left')}${rightAxis}${bars}${mainLine}${cashLine}<line id="revenue-guide" class="revenue-guide" x1="${selected.x}" x2="${selected.x}" y1="${top}" y2="${bottom}"/>${points.map(p=>`<g class="revenue-point ${p===selected?'selected':''}" tabindex="0" role="button" aria-pressed="${p===selected}" aria-label="${esc(pointLabel(p,unit,metric))}" data-action="chart-point" data-chart-month="${p.month}" data-x="${p.x}"><title>${esc(pointLabel(p,unit,metric))}</title><circle class="revenue-hit" cx="${p.x}" cy="${finite(p[yKey])?p[yKey]:finite(p.yCash)?p.yCash:(top+bottom)/2}" r="19"/><circle class="revenue-dot${metric==='cashflow'?' cash-end-dot':''}" cx="${p.x}" cy="${finite(p[yKey])?p[yKey]:finite(p.yCash)?p.yCash:(top+bottom)/2}" r="5"/></g><text class="revenue-axis" x="${p.x}" y="266" text-anchor="middle">${p.month}${unit==='year'?'년':'개월'}</text>`).join('')}</svg></div><p class="revenue-chart-hint">점을 누르거나 마우스를 올려 확인하세요.</p>${wikiHelp(partial)}</section>`;
}

export function revenueChart(history=[],options={}){
 return financeChart(history,{...options,metric:options.metric||'revenue'});
}
