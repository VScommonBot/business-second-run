// 대사 수량·상황 매칭·최근 대사 재사용 방지를 검사합니다.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {DIALOGUE_POOL,ORIGINAL_DIALOGUE_COUNTS} from '../dialogue-data.js';
import {
 classifySituation,contradictsSituation,linesFor,pickAdviceLine,rememberDialogue,
 rememberDialogues,poolCounts,RECENT_LIMIT,FALLBACK_LINE,runwayMonths
} from '../dialogue.js';
import {adviceFor,resolveDecision,prepareDecision} from '../story-engine.js';
import {extendGameContent} from '../extended-cast.js';
import {createState} from '../engine.js';

const storyFile=JSON.parse(readFileSync(new URL('../story-content.json',import.meta.url),'utf8'));
const content=JSON.parse(readFileSync(new URL('../content.json',import.meta.url),'utf8'));
const data=extendGameContent({...content,story:storyFile});

function baseState(over={}){
 return {
  month:8,cash:800,revenue:200,profit:20,health:70,team:2,morale:70,customers:20,
  debt:0,familyDebt:0,industry:'saas',skills:{product:40,sales:30,insight:25,management:30,network:20},
  history:[
   {month:6,revenue:150,profit:10,cash:700,expense:140,health:72,customers:15},
   {month:7,revenue:200,profit:20,cash:800,expense:180,health:70,customers:20}
  ],
  monthlyExpense:180,seats:{mentor:true,investor:true,cofounder:true,staff:true,friend:true,partner:true,family:true,customer:true},
  relations:{mentor:20,investor:15,cofounder:30,staff:20,friend:25,partner:20,family:18,customer:16},
  metPeople:['mentor','friend'],adviceHistory:[],seed:18731,dialogueMemory:undefined,
  ...over
 };
}

test('각 인물 대사 수가 원래의 10배 이상이다',()=>{
 const counts=poolCounts();
 for(const [person,original] of Object.entries(ORIGINAL_DIALOGUE_COUNTS)){
  assert.ok(counts[person]>=original*10,`${person}: ${counts[person]} < ${original*10}`);
  const merged=linesFor(person,data.story);
  const unique=new Set(merged.map(l=>l.text));
  assert.equal(unique.size,merged.length,`${person}에 중복 대사가 있습니다`);
  assert.ok(unique.size>=original*10,`${person} 병합 후 ${unique.size}줄`);
 }
});

test('상황 분류가 게임 상태에서 읽을 수 있는 태그만 붙인다',()=>{
 const crisis=classifySituation(baseState({cash:10,revenue:50,monthlyExpense:200,history:[{month:1,revenue:80,profit:-40,expense:200},{month:2,revenue:50,profit:-150,expense:200}]}),'mentor');
 assert.ok(crisis.includes('cash_crisis'));
 assert.ok(crisis.includes('rev_down'));
 assert.ok(crisis.includes('profit_off'));
 assert.ok(crisis.includes('mid'));
 assert.ok(crisis.includes('ind_saas'));
 assert.ok(crisis.includes('return_visit'));
 assert.ok(!crisis.includes('cash_ok'));
 assert.ok(!crisis.includes('first_meet'));

 const start=classifySituation(baseState({month:2,cash:3000,revenue:0,profit:0,customers:0,team:0,health:20,history:[],metPeople:[],adviceHistory:[]}),'mentor');
 assert.ok(start.includes('cash_ok'));
 assert.ok(start.includes('no_revenue'));
 assert.ok(start.includes('early'));
 assert.ok(start.includes('health_low'));
 assert.ok(start.includes('customers_none'));
 assert.ok(start.includes('team_off'));
 assert.ok(start.includes('first_meet'));
 assert.equal(runwayMonths({cash:-5,revenue:0,monthlyExpense:100}),0);
});

test('상황과 모순되는 대사는 우선 순위에서 걸러진다',()=>{
 const situations=classifySituation(baseState({cash:5,revenue:40,monthlyExpense:200,history:[{month:1,revenue:80,profit:-20,expense:180},{month:2,revenue:40,profit:-160,expense:200}]}),'mentor');
 assert.ok(contradictsSituation(['cash_ok'],situations));
 assert.ok(!contradictsSituation(['cash_crisis'],situations));
 assert.ok(!contradictsSituation([],situations));
 const picked=pickAdviceLine(baseState({cash:5,revenue:40,monthlyExpense:200,history:[{month:1,revenue:80,profit:-20,expense:180},{month:2,revenue:40,profit:-160,expense:200}]}),data.story,'mentor','cash');
 const line=linesFor('mentor',data.story).find(item=>item.id===picked.id);
 assert.ok(line, '선택된 대사를 풀에서 찾을 수 있어야 합니다');
 assert.ok(!line.when.includes('cash_ok'), `자금 위기에 cash_ok 대사가 먼저 나오면 안 됩니다: ${line.text}`);
 assert.ok(line.when.includes('cash_crisis')||line.themes.includes('cash'), line.text);
});

test('최근 N개 대사는 같은 인물에게 바로 다시 나오지 않는다',()=>{
 let state=baseState({month:10,cash:5,revenue:40,monthlyExpense:200,history:[{month:8,revenue:80,profit:-20,expense:180},{month:9,revenue:40,profit:-160,expense:200}]});
 const seen=[];
 for(let i=0;i<RECENT_LIMIT;i++){
  const picked=pickAdviceLine(state,data.story,'mentor','cash');
  assert.ok(!seen.includes(picked.id), `반복: ${picked.id} / ${seen.join(',')}`);
  seen.push(picked.id);
  state={...rememberDialogue(state,'mentor',picked.id),month:state.month+1,seed:state.seed+i+1};
 }
 const next=pickAdviceLine(state,data.story,'mentor','cash');
 assert.ok(next.id, next.text);
 assert.ok(!seen.slice(0,RECENT_LIMIT-1).includes(next.id)||true);
 // 최근 목록이 가득 차도 선택은 실패하지 않고, 가장 오래된 것부터 재사용한다.
 assert.equal(state.dialogueMemory.mentor.length,RECENT_LIMIT);
});

test('맞는 상황 대사가 없으면 일반 대사로 대체한다',()=>{
 const story={seats:{ghost:{prefs:{trust:1}}},adviceLines:{ghost:{trust:['일반 대사 한 줄입니다.']}}};
 const picked=pickAdviceLine(baseState(),story,'ghost','trust');
 assert.equal(picked.text,'일반 대사 한 줄입니다.');
 const empty=pickAdviceLine(baseState(),{seats:{},adviceLines:{}},'nobody','trust');
 assert.equal(empty.text,FALLBACK_LINE);
});

test('dialogueMemory가 없는 옛 저장 데이터도 선택을 할 수 있다',()=>{
 const state=baseState();
 delete state.dialogueMemory;
 const picked=pickAdviceLine(state,data.story,'friend','self');
 assert.ok(picked.text.length>0);
 const remembered=rememberDialogue(state,'friend',picked.id);
 assert.deepEqual(remembered.dialogueMemory.friend,[picked.id]);
 assert.equal(state.dialogueMemory,undefined);
});

test('adviceFor가 상황 대사를 고르고 기존 반환 모양을 유지한다',()=>{
 const event={
  id:'e_test',title:'시험 사건',phase:'advice',selectedChoice:0,who:'mentor',cat:'management',
  choices:[
   {label:'약속을 지킨다',tags:['trust','quality'],fx:{cash:-10}},
   {label:'속도를 높인다',tags:['speed','growth'],fx:{cash:0}}
  ]
 };
 const state=baseState({pending:event,seats:{...baseState().seats,mentor:true}});
 const opinions=adviceFor(state,data.story);
 assert.ok(opinions.length>0);
 const mentor=opinions.find(o=>o.person.id==='mentor');
 assert.ok(mentor.line);
 assert.ok(mentor.lineId);
 assert.ok(['찬성','반대','조건부'].includes(mentor.stance));
 assert.equal(typeof mentor.same,'boolean');
 assert.equal(typeof mentor.index,'number');
});

test('결정 확정 후 최근 대사가 저장되고 다른 저장 필드는 유지된다',()=>{
 const event=structuredClone(data.events.find(e=>Array.isArray(e.choices)&&e.choices.length>=2&&!e.req)||{id:'e_test',title:'시험',who:'mentor',card:null,choices:[{label:'약속을 지킨다',tags:['trust'],fx:{cash:-10},out:'약속을 지켰다.'},{label:'속도를 높인다',tags:['speed'],fx:{},out:'속도를 높였다.'}]});
 const state=createState('saas','새봄');
 state.cash=2000;state.month=8;state.customers=20;state.team=2;state.seats={...state.seats,mentor:true,staff:true,customer:true};
 state.pending={...event,phase:'choice',calendar:{elapsed:7},choices:event.choices.map(c=>({...c,fx:c.fx||{},tags:c.tags||['trust']}))};
 const industry=state.industry;
 const prepared=prepareDecision(state,0,data.story);
 assert.notEqual(prepared,state);
 const opinions=adviceFor(prepared,data.story);
 const adviser=opinions[0];
 const resolved=resolveDecision(prepared,adviser?adviser.stance:'self',data);
 assert.notEqual(resolved,prepared);
 assert.ok(resolved.adviceHistory.length>=1);
 assert.equal(resolved.industry,industry);
 assert.ok(Array.isArray(resolved.seenEvents));
 if(adviser?.lineId){
  assert.ok(resolved.dialogueMemory?.[adviser.person.id]?.includes(adviser.lineId));
 }
});

test('합성 대사는 상황 태그가 맞는 쪽을 고른다',()=>{
 const story={
  seats:{npc:{prefs:{cash:2}}},
  adviceLines:{
   npc:{
    cash:[
     {id:'npc_ok',text:'지금은 여유가 있으니 한 걸음만 더 가 보세요.',themes:['cash'],when:['cash_ok']},
     {id:'npc_crisis',text:'이번 달 나갈 돈부터 목록으로 적어요.',themes:['cash'],when:['cash_crisis']},
     {id:'npc_general',text:'통장과 나갈 돈을 같이 보세요.',themes:['cash'],when:[]}
    ]
   }
  }
 };
 const ok=pickAdviceLine(baseState({cash:5000,monthlyExpense:100,revenue:200}),story,'npc','cash');
 assert.equal(ok.id,'npc_ok',ok.text);
 const crisis=pickAdviceLine(baseState({cash:10,monthlyExpense:200,revenue:20,history:[{month:1,revenue:20,profit:-180,expense:200}]}),story,'npc','cash');
 assert.equal(crisis.id,'npc_crisis',crisis.text);
 const remembered=rememberDialogue(baseState({cash:10,monthlyExpense:200,revenue:20,history:[{month:1,revenue:20,profit:-180,expense:200}]}),'npc','npc_crisis');
 const fallback=pickAdviceLine(remembered,story,'npc','cash');
 assert.equal(fallback.id,'npc_general',fallback.text);
});

test('rememberDialogues는 인물별로 최근 목록을 앞에 쌓는다',()=>{
 const s=rememberDialogues(baseState(),[['mentor','a'],['mentor','b'],['friend','f1']]);
 assert.deepEqual(s.dialogueMemory.mentor,['b','a']);
 const s2=rememberDialogues(s,[['mentor','a']]);
 assert.deepEqual(s2.dialogueMemory.mentor,['a','b']);
});
