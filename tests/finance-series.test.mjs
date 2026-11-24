// 월별 집계, 연별 합산, 음수 손익·현금 흐름 복원을 검사합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {normalizeHistory,yearlyTotals,financeSeries,moneyAxis,axisY,lastClosedMonth} from '../finance-series.js';
import {formatMoney,formatMoneySigned} from '../money.js';

const months=Array.from({length:24},(_,i)=>{
 const month=i+1,revenue=100+i*10,expense=80,profit=revenue-expense;
 const cashEnd=500+(i+1)*profit+(month===13?200:0);
 return {month,revenue,profit,expense,cash:cashEnd};
});

test('비용이 없으면 매출에서 이익을 빼 복원한다',()=>{
 const [row]=normalizeHistory([{month:1,revenue:500,profit:-200,cash:300}],{initialCash:500});
 assert.equal(row.expense,700);
 assert.equal(row.netCash,-200);
 assert.equal(row.cashEnd,300);
 assert.equal(row.cashStart,500);
});

test('월별 순현금흐름은 기말 현금 차이이고, 사건 현금은 정산 전 잔고 차이로 복원한다',()=>{
 const rows=normalizeHistory([
  {month:1,revenue:100,profit:20,expense:80,cash:520,before:{cash:500}},
  {month:2,revenue:120,profit:40,expense:80,cash:660,before:{cash:620}}
 ],{initialCash:500});
 assert.equal(rows[0].netCash,20);
 assert.equal(rows[0].eventCash,0);
 assert.equal(rows[1].eventCash,100);
 assert.equal(rows[1].netCash,140);
 assert.equal(rows[1].cashIn,220);
 assert.equal(rows[1].cashOut,80);
});

test('연별 합산은 매출·이익·순현금흐름을 더하고 기말 현금은 마지막 달을 쓴다',()=>{
 const yearly=yearlyTotals(normalizeHistory(months,{initialCash:500}));
 assert.equal(yearly.length,2);
 assert.equal(yearly[0].count,12);
 assert.equal(yearly[0].revenue,months.slice(0,12).reduce((n,r)=>n+r.revenue,0));
 assert.equal(yearly[0].profit,months.slice(0,12).reduce((n,r)=>n+r.profit,0));
 assert.equal(yearly[0].netCash,months[11].cash-500);
 assert.equal(yearly[0].cashEnd,months[11].cash);
 assert.equal(yearly[1].cashEnd,months[23].cash);
 assert.equal(yearly[1].netCash,months[23].cash-months[11].cash);
});

test('음수 이익과 음수 순현금흐름을 월별·연별로 유지한다',()=>{
 const history=[
  {month:1,revenue:50,profit:-80,expense:130,cash:420,before:{cash:500}},
  {month:2,revenue:40,profit:-90,expense:130,cash:330,before:{cash:420}},
  {month:13,revenue:20,profit:-10,expense:30,cash:200,before:{cash:210}}
 ];
 const monthly=normalizeHistory(history,{initialCash:500});
 assert.equal(monthly[0].profit,-80);
 assert.equal(monthly[0].netCash,-80);
 assert.equal(monthly[1].netCash,-90);
 const yearly=yearlyTotals(monthly);
 assert.equal(yearly[0].profit,-170);
 assert.equal(yearly[0].netCash,-170);
 assert.ok(yearly[0].profit<0);
 const series=financeSeries(history,{unit:'month',year:'recent',initialCash:500});
 assert.ok(series.profitAxis.floor<0);
 assert.ok(series.points[0].yProfit>series.points[0].yRevenue || series.profitAxis.floor<0);
 const zero=axisY(0,{...series.profitAxis,top:series.top,bottom:series.bottom});
 const yLoss=series.points[0].yProfit;
 assert.ok(yLoss>zero,'적자는 0선 아래에 놓인다');
});

test('최근 12개월은 마지막 12개만 쓰고, 특정 연차는 해당 연도만 모은다',()=>{
 const recent=financeSeries(months,{unit:'month',year:'recent',initialCash:500});
 assert.equal(recent.points.length,12);
 assert.equal(recent.points[0].month,13);
 assert.equal(recent.points.at(-1).month,24);
 const year1=financeSeries(months,{unit:'month',year:1,initialCash:500});
 assert.equal(year1.points.length,12);
 assert.equal(year1.points[0].month,1);
 assert.equal(year1.points.at(-1).month,12);
 const yearly=financeSeries(months,{unit:'year',initialCash:500});
 assert.equal(yearly.points.length,2);
 assert.equal(yearly.points[0].changeRevenue,null);
 assert.equal(yearly.points[1].changeRevenue,yearly.points[1].revenue-yearly.points[0].revenue);
});

test('기말 현금이 없는 달은 가능한 값만 복원하고, 현금 변화는 비워 둔다',()=>{
 const rows=normalizeHistory([{month:1,revenue:100,profit:20}]);
 assert.equal(rows[0].expense,80);
 assert.equal(rows[0].cashEnd,null);
 assert.equal(rows[0].netCash,null);
 const series=financeSeries([{month:1,revenue:100,profit:20},{month:2,revenue:120,profit:30,cash:200}],{initialCash:50});
 assert.equal(series.points[0].netCash,null);
 assert.equal(series.points[1].cashEnd,200);
 assert.equal(series.partial,true);
});

test('축 눈금은 억·만 원 규칙을 따른다',()=>{
 const axis=moneyAxis([0,257017]);
 assert.ok(axis.labels.at(-1)>=257017);
 assert.equal(formatMoney(10000),'1억 원');
 assert.ok(axis.labels.some(value=>formatMoney(value).includes('억')||formatMoney(value).includes('만')));
});

test('마지막 정산 월은 현재 월의 직전 기록을 고른다',()=>{
 const last=lastClosedMonth(months,25);
 assert.equal(last.month,24);
 assert.equal(formatMoneySigned(last.profit).startsWith('+'),true);
});
