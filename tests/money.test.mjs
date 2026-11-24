// 금액 표시 규칙(1억 원 이상은 억 원, 미만은 만 원)을 검사합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {formatMoney,formatMoneySigned,formatMoneyProgress,MANWON_PER_EOK} from '../money.js';

test('1억 원 미만은 천 단위 쉼표가 있는 만 원으로 표시한다',()=>{
 assert.equal(formatMoney(0),'0만 원');
 assert.equal(formatMoney(9999),'9,999만 원');
 assert.equal(formatMoney(9500),'9,500만 원');
 assert.equal(formatMoney(1),'1만 원');
});

test('1억 원(10,000만 원) 이상은 억 원으로 표시하고 .0은 생략한다',()=>{
 assert.equal(MANWON_PER_EOK,10000);
 assert.equal(formatMoney(10000),'1억 원');
 assert.equal(formatMoney(30000),'3억 원');
 assert.equal(formatMoney(257017),'25.7억 원');
 assert.equal(formatMoney(25000),'2.5억 원');
 assert.equal(formatMoney(10499),'1억 원');
 assert.equal(formatMoney(10500),'1.1억 원');
});

test('음수는 - 부호로 같은 규칙을 따른다',()=>{
 assert.equal(formatMoney(-257017),'-25.7억 원');
 assert.equal(formatMoney(-5000),'-5,000만 원');
 assert.equal(formatMoney(-10000),'-1억 원');
 assert.equal(formatMoney(-9999),'-9,999만 원');
});

test('부호 있는 표시는 양수에만 +를 붙인다',()=>{
 assert.equal(formatMoneySigned(257017),'+25.7억 원');
 assert.equal(formatMoneySigned(-257017),'-25.7억 원');
 assert.equal(formatMoneySigned(0),'0만 원');
 assert.equal(formatMoneySigned(9500),'+9,500만 원');
});

test('반올림으로 1억 원에 닿으면 억 원으로 올린다',()=>{
 assert.equal(formatMoney(9999.5),'1억 원');
 assert.equal(formatMoney(9999.4),'9,999만 원');
});

test('숫자가 아니면 0만 원으로 표시한다',()=>{
 assert.equal(formatMoney(NaN),'0만 원');
 assert.equal(formatMoney(Infinity),'0만 원');
 assert.equal(formatMoney(undefined),'0만 원');
});

test('진행 표시는 두 금액을 같은 규칙으로 나란히 쓴다',()=>{
 assert.equal(formatMoneyProgress(20000,20000),'2억 원 / 2억 원');
 assert.equal(formatMoneyProgress(3000,20000),'3,000만 원 / 2억 원');
});
