# index.html의 모듈 미리 받기(modulepreload) 목록을 import 연결에서 다시 만듭니다.
# 사용: python3 tools/update-preload.py  (모듈을 더하거나 빼면, 또는 ?v= 버전을 올린 뒤 실행)
# 모듈이 8단계로 이어져 있어 느린 모바일에서 한 단계씩 기다리던 것을, 첫 요청에서 한꺼번에 받게 합니다.
import json,os,re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def deps(f):
    s=open(os.path.join(ROOT,f),encoding='utf-8').read()
    return set(re.findall(r"(?:import|export)\s[^'\"]*?from\s*['\"]\./([\w\-]+\.js)['\"]",s))|set(re.findall(r"import\s*['\"]\./([\w\-]+\.js)['\"]",s))
def graph(entry='life.js'):
    seen,order,stack=set(),[],[entry]
    def visit(f):
        if f in seen:return
        seen.add(f)
        for d in sorted(deps(f)):visit(d)
        order.append(f)
    visit(entry);return order  # 깊은 모듈부터
def main():
    p=os.path.join(ROOT,'index.html');html=open(p,encoding='utf-8').read()
    imap=json.loads(re.search(r'<script type="importmap">(.*?)</script>',html,re.S).group(1))['imports']
    mods=[m for m in graph() if m!='life.js']
    m=re.search(r'life\.js\?v=(\d+)',html);ver=m.group(1)
    lines=['  <!-- modulepreload:start (tools/update-preload.py가 만듭니다) -->']
    for f in ['life.js']+mods[::-1]:
        href=imap.get('./'+f,f'./{f}?v={ver}').lstrip('./') if f!='life.js' else f'life.js?v={ver}'
        lines.append(f'  <link rel="modulepreload" href="{href}">')
    for j in ['content.json','world-events.json','story-content.json']:
        lines.append(f'  <link rel="preload" href="{j}?v={ver}" as="fetch" crossorigin="anonymous">')
    lines.append('  <!-- modulepreload:end -->')
    block='\n'.join(lines)
    if '<!-- modulepreload:start' in html:
        html=re.sub(r'  <!-- modulepreload:start.*?<!-- modulepreload:end -->',block,html,flags=re.S)
    else:
        html=html.replace('  <link rel="stylesheet" href="career-update.css',block+'\n  <link rel="stylesheet" href="career-update.css',1)
    open(p,'w',encoding='utf-8').write(html);print(len(mods)+1,'modules,',3,'data files')
if __name__=='__main__':main()
