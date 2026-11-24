// 첫 화면 로딩 규칙을 검사합니다: 모듈 미리 받기 목록이 실제 import 연결과 같고, 실패하면 멈춘 화면 대신 다시 시도할 수 있어야 합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('..',import.meta.url));
const html=readFileSync(join(root,'index.html'),'utf8');
const life=readFileSync(join(root,'life.js'),'utf8');
const version=html.match(/life\.js\?v=(\d+)/)[1];
const importmap=JSON.parse(html.match(/<script type="importmap">(.*?)<\/script>/s)[1]).imports;

function deps(file){
 const src=readFileSync(join(root,file),'utf8');
 const out=new Set();
 for(const m of src.matchAll(/(?:import|export)\s[^'"]*?from\s*['"]\.\/([\w-]+\.js)['"]/g))out.add(m[1]);
 for(const m of src.matchAll(/import\s*['"]\.\/([\w-]+\.js)['"]/g))out.add(m[1]);
 return out;
}
function graph(entry){const seen=new Set(),stack=[entry];while(stack.length){const f=stack.pop();if(seen.has(f))continue;seen.add(f);stack.push(...deps(f));}return seen;}

test('모든 게임 모듈을 첫 요청에서 함께 받도록 modulepreload에 올렸다',()=>{
 const preloads=[...html.matchAll(/<link rel="modulepreload" href="([^"]+)">/g)].map(m=>m[1]);
 const modules=graph('life.js');
 assert.equal(new Set(preloads).size,preloads.length,'중복된 modulepreload');
 assert.equal(preloads.length,modules.size,'modulepreload 개수가 import 연결과 다릅니다. python3 tools/update-preload.py를 실행하세요');
 for(const file of modules){
  assert.ok(file==='life.js'||importmap['./'+file],`importmap에 버전 주소가 없습니다: ${file}`);
  const expected=file==='life.js'?`life.js?v=${version}`:importmap['./'+file].replace(/^\.\//,'');
  assert.ok(preloads.includes(expected),`modulepreload 누락: ${expected}`);
  assert.ok(existsSync(join(root,file)),`파일 없음: ${file}`);
 }
});

test('importmap과 자료 주소의 버전이 모두 같다',()=>{
 for(const [key,value] of Object.entries(importmap))assert.equal(value,`${key}?v=${version}`);
 const fetched=[...life.matchAll(/fetchGameJSON\('\.\/([\w-]+\.json)\?v=(\d+)'/g)];
 assert.equal(fetched.length,3);
 for(const [,file,v] of fetched){
  assert.equal(v,version,`${file} 버전`);
  assert.ok(html.includes(`<link rel="preload" href="${file}?v=${version}" as="fetch" crossorigin="anonymous">`),`${file} preload 누락`);
 }
 assert.equal((html.match(/\?v=(\d+)/g)||[]).filter(v=>v!==`?v=${version}`).length,0,'index.html에 다른 버전이 섞였습니다');
});

test('게임 모듈을 받지 못하면 멈춘 화면 대신 자동 재시도와 다시 시도 버튼을 보여 준다',()=>{
 assert.match(html,/<script type="module" src="life\.js\?v=\d+" onerror="window\.__modooBoot&&window\.__modooBoot\.fail\(\)"><\/script>/);
 assert.match(html,/window\.__modooBoot=\{ready:stop,fail:/);
 assert.match(html,/sessionStorage\.setItem\('modoo-boot-retry','1'\)/);
 assert.match(html,/r\.textContent='다시 시도'/);
 assert.ok(html.indexOf('window.__modooBoot=')<html.indexOf('<script type="module" src="life.js'),'감시 스크립트가 게임 모듈보다 먼저 있어야 합니다');
 assert.match(life,/window\.__modooBoot\?\.ready\(\)/);
 assert.match(life,/sessionStorage\.removeItem\('modoo-boot-retry'\)/);
});

test('게임 자료는 동시에 받고, 시간 제한과 재시도가 있으며, 실패하면 다시 시도 버튼을 보여 준다',()=>{
 assert.match(life,/Promise\.all\(\[fetchGameJSON\(/);
 assert.match(life,/async function fetchGameJSON\(url,label\)\{let last;for\(let attempt=0;attempt<3;attempt\+\+\)/);
 assert.match(life,/setTimeout\(\(\)=>ctl\.abort\(\),25000\)/);
 assert.match(life,/class="boot-retry" onclick="location\.reload\(\)">다시 시도<\/button>/);
});
