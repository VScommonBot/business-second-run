// 성장 기록 재무 그래프 표시(탭, 억·만 원 축, 음수 이익)를 검사합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {financeChart,revenueChart,revenueSeries,financeReadout} from '../metrics-view.js';

const history=Array.from({length:14},(_,i)=>({
 month:i+1,revenue:i<3?80+i*10:400+i*20,profit:i<3?-40+i*5:50+i*8,
 expense:i<3?120:350,cash:1000+((i<3?-40:50)+i*8)*(i+1),
 before:{cash:1000}
}));

const has=(html,snippet)=>{assert.ok(html.includes(snippet),`missing: ${snippet}`);};

test('매출 그래프는 기존처럼 그려지고 축에 억·만 원 단위를 쓴다',()=>{
 const html=revenueChart(history,{unit:'month',year:'recent'});
 has(html,'role="tablist"');
 has(html,'aria-selected="true"');
 has(html,'월별 매출');
 has(html,'축 단위는 억 원·만 원');
 has(html,'만 원');
 assert.ok(/revenue-axis[^>]*>[^<]*(만 원|억 원)</.test(html),'axis tick uses 억/만 원');
});

test('이익 그래프는 음수를 빨강으로 표시하고 0선을 그린다',()=>{
 const loss=[{month:1,revenue:50,profit:-80,expense:130,cash:420,before:{cash:500}},{month:2,revenue:40,profit:-90,expense:130,cash:330,before:{cash:420}}];
 const html=financeChart(loss,{unit:'month',year:'recent',metric:'profit',initialCash:500});
 has(html,'월별 이익');
 has(html,'money-negative');
 has(html,'revenue-zero');
 has(html,'data-id="profit"');
 has(html,'-90만 원');
});

test('현금 흐름 그래프는 순현금흐름 막대와 기말 현금 선을 함께 그린다',()=>{
 const html=financeChart(history,{unit:'month',year:'recent',metric:'cashflow',initialCash:1000});
 has(html,'현금 흐름');
 has(html,'cashflow-bar');
 has(html,'cash-end-line');
 has(html,'기말 현금');
 has(html,'순현금흐름');
 has(html,'data-id="cash-flow"');
 has(html,'data-id="revenue"');
});

test('연별 합산 매출은 12개월을 더하고 전년 대비를 계산한다',()=>{
 const series=revenueSeries(Array.from({length:24},(_,i)=>({month:i+1,revenue:100})),{unit:'year'});
 assert.equal(series.points.length,2);
 assert.equal(series.points[0].revenue,1200);
 assert.equal(series.points[1].revenue,1200);
 assert.equal(series.points[1].change,0);
 const html=financeChart(Array.from({length:24},(_,i)=>({month:i+1,revenue:100})),{unit:'year',metric:'revenue'});
 has(html,'연별 매출');
 has(html,'1,200만 원');
});

test('도움말에 창업 위키 용어 연결이 있다',()=>{
 const html=financeChart(history,{metric:'revenue'});
 has(html,'data-action="wiki-term"');
 has(html,'data-id="profit"');
 has(html,'data-id="cash-flow"');
});

test('읽기 상자의 이익 음수는 부호와 빨강 클래스를 갖는다',()=>{
 const html=financeReadout({month:1,profit:-5000,changeProfit:-1000},'profit','month');
 has(html,'money-negative');
 has(html,'-5,000만 원');
});
