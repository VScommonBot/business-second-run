// 모든 게임 ES 모듈의 named import가 대상 파일이 보내는 이름과 맞는지 검사합니다.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,readdirSync,statSync} from 'node:fs';
import {dirname,join,normalize} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=fileURLToPath(new URL('..',import.meta.url));

function walk(dir){
 const out=[];
 for(const name of readdirSync(dir)){
  if(name==='tests'||name==='tools'||name==='node_modules'||name==='.git'||name==='assets')continue;
  const path=join(dir,name);
  if(statSync(path).isDirectory())out.push(...walk(path));
  else if(name.endsWith('.js'))out.push(path);
 }
 return out;
}

function strip(src){
 return src.replace(/\/\*[\s\S]*?\*\//g,'').replace(/(^|[^:\\])\/\/.*$/gm,'$1');
}

function exportedNames(src){
 const names=new Set();
 const text=strip(src);
 for(const re of[
  /export\s+async\s+function\s+(\w+)/g,
  /export\s+function\s+(\w+)/g,
  /export\s+class\s+(\w+)/g,
  /export\s+(?:const|let|var)\s+(\w+)/g
 ])for(const m of text.matchAll(re))names.add(m[1]);
 for(const m of text.matchAll(/export\s*\{([^}]+)\}/g)){
  for(const part of m[1].split(',')){
   const raw=part.trim();if(!raw||raw.startsWith('type '))continue;
   const bits=raw.split(/\s+as\s+/);
   names.add((bits[1]||bits[0]).trim());
  }
 }
 if(/export\s+default\b/.test(text))names.add('default');
 return names;
}

function namedImports(src){
 const text=strip(src),found=[];
 const re=/import\s+(?:type\s+)?([\s\S]*?)\s+from\s*['"](\.[^'"]+)['"]/g;
 let m;while((m=re.exec(text))){
  const clause=m[1].trim(),spec=m[2];
  const brace=clause.match(/\{([^}]*)\}/);
  if(!brace)continue;
  const names=[];
  for(const part of brace[1].split(',')){
   const raw=part.trim();if(!raw||raw.startsWith('type '))continue;
   const bits=raw.split(/\s+as\s+/);
   names.push(bits[0].trim());
  }
  found.push({spec,names});
 }
 return found;
}

function resolveSpec(fromFile,spec){
 const path=normalize(join(dirname(fromFile),spec));
 return path.endsWith('.js')?path:path+'.js';
}

test('모든 게임 모듈의 named import가 대상 export에 있다',()=>{
 const files=walk(root);
 const missing=[];
 for(const file of files){
  const src=readFileSync(file,'utf8');
  for(const {spec,names} of namedImports(src)){
   const target=resolveSpec(file,spec);
   let source;
   try{source=readFileSync(target,'utf8');}
   catch{missing.push(`${file} → ${spec} (파일을 찾을 수 없음)`);continue;}
   const exported=exportedNames(source);
   for(const name of names){
    if(!exported.has(name))missing.push(`${file.replace(root,'')} imports {${name}} from ${spec}`);
   }
  }
 }
 assert.deepEqual(missing,[],'missing named exports:\n'+missing.join('\n'));
 assert.ok(files.length>=40,`expected a full module set, got ${files.length}`);
});
