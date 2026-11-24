// 위키 용어 썸네일 경로·자산·화면 표시 규칙을 검사합니다.
import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import test from 'node:test';
import {GLOSSARY} from '../glossary.js';
import {WIKI_CATEGORIES,wikiCards,termDetail} from '../wiki-view.js';
import {wikiThumbPath,WIKI_THUMB_CATEGORY} from '../wiki-thumbs.js';

const root=fileURLToPath(new URL('..',import.meta.url));
const thumbDir=join(root,'assets/wiki-thumbs');
const files=new Set(readdirSync(thumbDir));

test('용어 67개와 카테고리 8개에 썸네일이 있다',()=>{
 assert.equal(GLOSSARY.length,67);
 assert.equal(WIKI_CATEGORIES.length,8);
 for(const term of GLOSSARY){
  assert.equal(wikiThumbPath(term.id,term.category),`assets/wiki-thumbs/${term.id}.svg`);
  assert.ok(files.has(`${term.id}.svg`),`missing ${term.id}.svg`);
 }
 for(const category of WIKI_CATEGORIES){
  const slug=WIKI_THUMB_CATEGORY[category];
  assert.ok(slug,`no slug for ${category}`);
  assert.ok(files.has(`cat-${slug}.svg`),`missing cat-${slug}.svg`);
 }
});

test('없는 용어는 카테고리 기본 썸네일로 대체된다',()=>{
 assert.equal(wikiThumbPath('brand-new-term','자금'),'assets/wiki-thumbs/cat-funds.svg');
 assert.equal(wikiThumbPath('brand-new-term','투자계약'),'assets/wiki-thumbs/cat-contracts.svg');
 assert.equal(wikiThumbPath('brand-new-term','없는분야'),'assets/wiki-thumbs/cat-funds.svg');
});

test('썸네일 SVG에 글자가 없다',()=>{
 const svgs=readdirSync(thumbDir).filter(name=>name.endsWith('.svg'));
 assert.ok(svgs.length>=75);
 for(const name of svgs){
  const svg=readFileSync(join(thumbDir,name),'utf8');
  assert.equal(/<text\b/i.test(svg),false,name);
  assert.ok(svg.includes('viewBox="0 0 640 400"'),name);
 }
});

test('목록 카드는 지연 로딩 썸네일을 맨 앞에 둔다',()=>{
 const html=wikiCards('','all');
 assert.equal((html.match(/class="card wiki-card"/g)||[]).length,67);
 assert.match(html,/<button class="card wiki-card"[^>]*>\s*<img class="wiki-thumb"/);
 const runway=html.split('data-id="runway"')[1].split('</button>')[0];
 assert.match(runway,/src="assets\/wiki-thumbs\/runway\.svg"/);
 assert.match(runway,/alt=""/);
 assert.match(runway,/loading="lazy"/);
 assert.match(runway,/decoding="async"/);
 assert.match(runway,/width="640"/);
 assert.match(runway,/height="400"/);
});

test('상세 보기 썸네일은 바로 보이게 둔다',()=>{
 const detail=termDetail('runway');
 assert.match(detail.body,/<article class="wiki-detail"[^>]*>\s*<img class="wiki-thumb"/);
 assert.match(detail.body,/src="assets\/wiki-thumbs\/runway\.svg"/);
 assert.match(detail.body,/alt=""/);
 assert.equal(detail.body.includes('loading="lazy"'),false);
 assert.match(detail.body,/decoding="async"/);
});
