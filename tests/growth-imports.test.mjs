// 성장 기록 모듈이 서로 보내는 이름을 실제로 불러올 수 있는지 검사합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import * as metrics from '../metrics-view.js';
import * as finance from '../finance-series.js';

test('metrics-view와 finance-series가 life.js가 쓰는 이름을 보낸다',()=>{
 const src=readFileSync(new URL('../life.js',import.meta.url),'utf8');
 const needed=['financeChart','financeReadout','financeSeries','lastClosedMonth'];
 for(const name of needed){
  assert.match(src,new RegExp(`\\b${name}\\b`),`life.js uses ${name}`);
 }
 assert.equal(typeof metrics.financeChart,'function');
 assert.equal(typeof metrics.financeReadout,'function');
 assert.equal(typeof metrics.financeSeries,'function');
 assert.equal(typeof finance.financeSeries,'function');
 assert.equal(typeof finance.lastClosedMonth,'function');
});
