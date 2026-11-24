# 모바일 버튼 레이아웃 전수 점검 도구
# 사용: python3 tools/mobile_audit.py http://127.0.0.1:8000 /tmp/mobile-shots [320,390,land667]
# 첫 화면·캐릭터 설정·계획·작업실·모든 모달·각 화면·한 달 진행·월말 정산·사건·엔딩까지 돌며
# 버튼이 한 글자씩 줄바꿈되는지, 화면 밖으로 나가는지, 잘리는지, 겹치는지, 누르는 영역이 44px보다 작은지 검사합니다(검사 규칙: tests/mobile-layout-detect.js).
import asyncio,json,sys,os
from playwright.async_api import async_playwright
DET=open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'tests','mobile-layout-detect.js'),encoding='utf-8').read()
H=OUT=None
VPS={'320':(320,568),'360':(360,740),'375':(375,667),'390':(390,844),'414':(414,896),'land667':(667,375),'land844':(844,390)}
VIEWS=['office','furnishings','people','shop','growth','conditions','wiki','lessons','vshub']
MODAL_ACTIONS=['financing','calendar-year','quests','slots','settings','initial-plan','help','pick-activity','retire','auto-finish','rankings','credits','coin-store','ad-inquiry','reading']
async def run_vp(p,key):
  w,h=VPS[key]; res=[]; errs=[]
  b=await p.chromium.launch(); c=await b.new_context(viewport={'width':w,'height':h},is_mobile=True,has_touch=True,device_scale_factor=2,reduced_motion='reduce'); pg=await c.new_page()
  pg.on('pageerror',lambda e:errs.append(str(e)[:200])); pg.on('console',lambda m: errs.append(m.text[:200]) if m.type=='error' else None)
  async def shot(name,full=False):
    await pg.wait_for_timeout(250)
    d=await pg.evaluate(DET); fn=f'{key}-{name}.png'
    modal=d['modal']
    try:
      if modal: await pg.locator('#modal').screenshot(path=os.path.join(OUT,fn))
      else: await pg.screenshot(path=os.path.join(OUT,fn),full_page=full)
    except Exception: await pg.screenshot(path=os.path.join(OUT,fn))
    res.append({'vp':key,'screen':name,'file':fn,**d})
  async def close():
    for _ in range(3):
      if not await pg.locator('#modal[open]').count(): break
      await pg.keyboard.press('Escape'); await pg.wait_for_timeout(250)
  async def act(a,i=None):
    await pg.evaluate("([a,i])=>{const b=document.createElement('button');b.dataset.action=a;if(i)b.dataset.id=i;document.body.append(b);b.click();b.remove()}",[a,i]); await pg.wait_for_timeout(600)
  async def view(v):
    await pg.evaluate("v=>{const b=document.createElement('button');b.dataset.view=v;document.body.append(b);b.click();b.remove()}",v); await pg.wait_for_timeout(600)
  await pg.goto(H,wait_until='networkidle'); await pg.wait_for_timeout(500)
  await shot('intro',True)
  await pg.click('[data-action=new]'); await pg.wait_for_timeout(900); await shot('setup',True)
  await pg.fill('input[placeholder*="이름을 입력"]','한새싹'); await pg.fill('input[placeholder*="회사의 이름"]','새싹랩')
  await pg.get_by_role('button',name='창업하기!').click(); await pg.wait_for_timeout(1200); await shot('plan',True)
  await pg.click('[data-action=plan-random-all]'); await pg.wait_for_timeout(1200)
  if await pg.locator('#modal[open]').count(): await shot('after-plan-modal')
  await close()
  if await pg.locator('[data-action=recommend]').count(): await pg.locator('[data-action=recommend]').first.click(); await pg.wait_for_timeout(500)
  await pg.evaluate('scrollTo(0,0)'); await shot('home',True)
  for a in MODAL_ACTIONS:
    await act(a)
    if await pg.locator('#modal[open]').count() or await pg.locator('.activity-picker, [class*=picker]:not([hidden])').count(): await shot('modal-'+a)
    await close()
    if a=='pick-activity':
      if await pg.locator('[data-action=close-picker]').count():
        try: await pg.locator('[data-action=close-picker]').first.click(timeout=800)
        except Exception: pass
  # 조언자 팝업
  adv=pg.locator('[data-advisor]')
  if await adv.count():
    try:
      await adv.first.click(timeout=4000); await pg.wait_for_timeout(500); await shot('advisor-pop')
    except Exception as e: errs.append('adv:'+str(e)[:100])
    await close()
    await pg.keyboard.press('Escape')
  for v in VIEWS:
    await view(v); await pg.evaluate('scrollTo(0,0)'); await shot('view-'+v,True)
    if v=='wiki' and await pg.locator('.wiki-card[data-action=wiki-term]').count():
      try:
        await pg.locator('.wiki-card[data-action=wiki-term]').first.click(timeout=4000); await pg.wait_for_timeout(600); await shot('modal-wiki-term')
      except Exception as e: errs.append('wiki:'+str(e)[:100])
      await close()
  await view('home')
  # 한 달 진행 → 진행 화면 → 월말 정산
  async def month(tag):
    if await pg.locator('[data-action=recommend]').count(): await pg.locator('[data-action=recommend]').first.click(); await pg.wait_for_timeout(400)
    await pg.locator('[data-action=run]').first.click(); await pg.wait_for_timeout(1200)
    if tag=='m1': await shot('month-play')
    if await pg.locator('.month-play-skip').count(): await pg.locator('.month-play-skip').first.click()
    await pg.wait_for_selector('#modal[open]',timeout=20000); await pg.wait_for_timeout(500)
    await shot('month-report-'+tag)
    await pg.locator('#modal [data-action=after-report]').first.click(timeout=3000); await pg.wait_for_timeout(1200)
  seen_event=seen_story=False
  for i in range(7):
    if await pg.locator('#modal.story-dialog[open]').count():
      if not seen_story: await shot('story-dialog'); seen_story=True
      ch=pg.locator('#modal [data-action=choose-event]')
      if await ch.count(): await ch.first.click(); await pg.wait_for_timeout(900); await shot('story-after-choice')
      await close(); continue
    if await pg.locator('#modal[open]').count(): await shot(f'modal-after-month-{i}'); await close()
    if await pg.locator('[data-action=event]').count():
      try: await pg.locator('[data-action=event]').first.click(timeout=5000)
      except Exception as e:
        errs.append('event-btn:'+str(e)[:300]); await pg.screenshot(path=os.path.join(OUT,f'{key}-DEBUG-event-btn.png'))
        info=await pg.evaluate("()=>{const b=document.querySelector('[data-action=event]');const r=b.getBoundingClientRect();const e=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return [r.x,r.y,r.width,r.height,innerWidth,innerHeight,e&&e.outerHTML.slice(0,200),getComputedStyle(b).visibility,b.closest('[hidden],[inert]')?.outerHTML.slice(0,120)]}")
        errs.append('event-info:'+json.dumps(info,ensure_ascii=False)); await pg.locator('[data-action=event]').first.dispatch_event('click')
      await pg.wait_for_timeout(900)
      if not seen_event: await shot('event'); seen_event=True
      ch=pg.locator('#modal [data-action=choose-event]')
      if await ch.count(): await ch.first.click(); await pg.wait_for_timeout(900)
      await close(); continue
    try: await month('m%d'%(i+1))
    except Exception as e: errs.append('month:'+str(e)[:120]); await close()
  await view('growth'); await shot('view-growth-after',True)
  await view('home')
  await act('auto-finish')
  if await pg.locator('#modal [data-action=confirm-auto-finish]').count():
    await pg.locator('#modal [data-action=confirm-auto-finish]').click()
    for _ in range(40):
      if await pg.locator('[data-action=ending-card]').count(): break
      await pg.wait_for_timeout(1000)
  await close(); await pg.evaluate('scrollTo(0,0)'); await shot('ending',True)
  if await pg.locator('[data-action=ending-card]').count():
    await pg.locator('[data-action=ending-card]').first.click(); await pg.wait_for_timeout(2500); await shot('modal-ending-card'); await close()
  await act('ad-inquiry')
  if await pg.locator('#modal[open]').count(): await shot('modal-ad-inquiry-ending')
  await b.close()
  return res,errs
async def audit(host,out,sel=None,shots=True):
  global H,OUT
  H=host.rstrip('/')+'/games/modoostartup'; OUT=out; os.makedirs(OUT,exist_ok=True); sel=sel or list(VPS)
  async with async_playwright() as p:
    sem=asyncio.Semaphore(4)
    async def lim(k):
      async with sem: return await run_vp(p,k)
    outs=await asyncio.gather(*[lim(k) for k in sel],return_exceptions=True)
  allres=[];allerr={}
  for k,o in zip(sel,outs):
    if isinstance(o,Exception): allerr[k]=['CRASH '+repr(o)[:300]]; continue
    allres+=o[0]; allerr[k]=o[1]
  json.dump({'results':allres,'errors':allerr},open(os.path.join(OUT,'audit.json'),'w'),ensure_ascii=False,indent=1)
  return allres,allerr
async def main():
  allres,allerr=await audit(sys.argv[1],sys.argv[2],sys.argv[3].split(',') if len(sys.argv)>3 else None)
  from collections import Counter
  cnt=Counter(); 
  for r in allres:
    for i in r['issues']: cnt[i['kind']]+=1
  print('screens',len(allres),dict(cnt)); print('errors',{k:v[:3] for k,v in allerr.items() if v})
if __name__=='__main__':asyncio.run(main())
