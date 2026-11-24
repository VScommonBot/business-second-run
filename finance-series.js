// 성장 기록용 월별·연별 매출·이익·현금 흐름 집계를 만듭니다.
import {formatMoney} from './money.js';

export const finite=value=>typeof value==='number'&&Number.isFinite(value);

const yearOf=month=>Math.floor((month-1)/12)+1;

export function moneyAxis(values,tickCount=4){
 const nums=values.filter(finite);
 let max=Math.max(0,...nums),min=Math.min(0,...nums);
 if(max===0&&min===0)max=1;
 const span=Math.max(max-min,1),rough=span/tickCount,power=10**Math.floor(Math.log10(rough)||0);
 const step=([1,2,5,10].find(n=>n*power>=rough)||10)*power;
 const ceiling=Math.ceil(max/step)*step,floor=Math.floor(min/step)*step;
 const labels=[];
 for(let value=floor;value<=ceiling+step/2;value+=step)labels.push(value);
 return {floor,ceiling,step,labels};
}

export function axisY(value,{floor,ceiling,top,bottom}){
 const span=(ceiling-floor)||1;
 return bottom-(value-floor)/span*(bottom-top);
}

export function axisLabel(manwon){
 return formatMoney(manwon);
}

function restoreExpense(row){
 if(finite(row.expense))return row.expense;
 if(finite(row.revenue)&&finite(row.profit))return row.revenue-row.profit;
 return null;
}

export function normalizeHistory(history=[],{initialCash=null}={}){
 const monthly=[...history].filter(row=>finite(row.month)).sort((a,b)=>a.month-b.month);
 let prevCash=finite(initialCash)?initialCash:null;
 return monthly.map((row,index)=>{
  const revenue=finite(row.revenue)?row.revenue:null;
  const profit=finite(row.profit)?row.profit:null;
  const expense=restoreExpense(row);
  const cashEnd=finite(row.cashEnd)?row.cashEnd:finite(row.cash)?row.cash:null;
  const cashStart=finite(row.cashStart)?row.cashStart:finite(row.before?.cash)?row.before.cash:prevCash;
  const eventCash=finite(row.eventCash)?row.eventCash:finite(cashStart)&&finite(prevCash)?cashStart-prevCash:index===0&&finite(cashStart)?0:null;
  const netCash=finite(row.netCash)?row.netCash:finite(cashEnd)&&finite(prevCash)?cashEnd-prevCash:finite(cashEnd)&&finite(cashStart)?cashEnd-cashStart:null;
  const cashIn=finite(row.cashIn)?row.cashIn:(finite(revenue)||finite(eventCash))?(revenue||0)+Math.max(0,eventCash||0):null;
  const cashOut=finite(row.cashOut)?row.cashOut:(finite(expense)||finite(eventCash))?(expense||0)+Math.max(0,-(eventCash||0)):null;
  const restored=!(finite(row.netCash)&&finite(row.cashIn)&&finite(row.cashOut)&&finite(row.cashEnd||row.cash)&&finite(row.expense));
  const next={month:row.month,revenue,profit,expense,cashStart,cashEnd,eventCash,cashIn,cashOut,netCash,restored};
  if(finite(cashEnd))prevCash=cashEnd;
  else if(finite(cashStart)&&finite(netCash))prevCash=cashStart+netCash;
  return next;
 });
}

function sumField(rows,key){
 const values=rows.map(row=>row[key]).filter(finite);
 if(!values.length)return null;
 return values.reduce((sum,value)=>sum+value,0);
}

export function yearlyTotals(monthly){
 const grouped=new Map();
 for(const row of monthly){
  const year=yearOf(row.month),item=grouped.get(year)||{month:year,unit:'year',count:0,rows:[]};
  item.count++;item.rows.push(row);grouped.set(year,item);
 }
 return [...grouped.values()].map(item=>{
  const last=item.rows.at(-1),first=item.rows[0];
  return {month:item.month,unit:'year',count:item.count,revenue:sumField(item.rows,'revenue'),profit:sumField(item.rows,'profit'),expense:sumField(item.rows,'expense'),cashIn:sumField(item.rows,'cashIn'),cashOut:sumField(item.rows,'cashOut'),netCash:sumField(item.rows,'netCash'),cashStart:finite(first?.cashStart)?first.cashStart:null,cashEnd:finite(last?.cashEnd)?last.cashEnd:null,restored:item.rows.some(row=>row.restored)};
 });
}

function sliceRows(rows,unit,year){
 if(unit==='year')return rows;
 if(year==='recent')return rows.slice(-12);
 return rows.filter(row=>yearOf(row.month)===Number(year));
}

function priorValue(valid,row,unit,key){
 const absolute=valid.indexOf(row),previous=valid[absolute-1];
 if(unit==='year')return previous?.count===12&&row.count===12&&finite(previous[key])&&finite(row[key])?previous[key]:null;
 if(!previous)return row.month===1&&key!=='cashEnd'?0:null;
 if(previous.month!==row.month-1)return null;
 return finite(previous[key])?previous[key]:null;
}

function delta(valid,row,unit,key){
 const current=row[key],value=priorValue(valid,row,unit,key);
 return finite(current)&&finite(value)?current-value:null;
}

export function financeSeries(history=[],{unit='month',year='recent',initialCash=null}={}){
 const monthly=normalizeHistory(history,{initialCash});
 const valid=unit==='year'?yearlyTotals(monthly):monthly;
 const rows=sliceRows(valid,unit,year);
 const left=110,right=790,top=22,bottom=238;
 const primary=rows.map(row=>row.revenue).filter(finite);
 const profitValues=rows.map(row=>row.profit).filter(finite);
 const netValues=rows.map(row=>row.netCash).filter(finite);
 const cashValues=rows.map(row=>row.cashEnd).filter(finite);
 const revenueAxis=moneyAxis(primary);
 const profitAxis=moneyAxis(profitValues);
 const netAxis=moneyAxis(netValues);
 const cashAxis=moneyAxis(cashValues.length?cashValues:[0]);
 const place=rows.map((row,index)=>{
  const x=rows.length===1?(left+right)/2:left+index*(right-left)/Math.max(1,rows.length-1);
  return {
   ...row,x,
   yRevenue:finite(row.revenue)?axisY(row.revenue,{...revenueAxis,top,bottom}):null,
   yProfit:finite(row.profit)?axisY(row.profit,{...profitAxis,top,bottom}):null,
   yNet:finite(row.netCash)?axisY(row.netCash,{...netAxis,top,bottom}):null,
   yCash:finite(row.cashEnd)?axisY(row.cashEnd,{...cashAxis,top,bottom}):null,
   changeRevenue:delta(valid,row,unit,'revenue'),
   changeProfit:delta(valid,row,unit,'profit'),
   changeNet:delta(valid,row,unit,'netCash'),
   changeCash:delta(valid,row,unit,'cashEnd')
  };
 });
 return {left,right,top,bottom,revenueAxis,profitAxis,netAxis,cashAxis,points:place,partial:place.some(row=>row.restored||!finite(row.netCash)||!finite(row.cashEnd)),hasCash:place.some(row=>finite(row.cashEnd)||finite(row.netCash))};
}

export function lastClosedMonth(history=[],month=1,options={}){
 const monthly=normalizeHistory(history,options);
 const target=month-1;
 return monthly.find(row=>row.month===target)||monthly.at(-1)||null;
}
