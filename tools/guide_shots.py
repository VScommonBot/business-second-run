# 첫 화면 '이렇게 플레이해요' 안내 사진을 현재 게임 화면으로 다시 찍는 도구(샘플 이름·회사, 개인정보 없음)
# 사용: python3 tools/guide_shots.py http://127.0.0.1:8772 /tmp/out shoot 후 PNG를 webp로 줄여 assets/guide-*.webp 교체
import asyncio,sys,json
from playwright.async_api import async_playwright
HOST=sys.argv[1];OUT=sys.argv[2].rstrip('/')+'/';MODE=sys.argv[3] if len(sys.argv)>3 else 'shoot'
async def main():
    info={}
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
        # 계획서: 775×810
        c=await b.new_context(viewport={'width':775,'height':810},reduced_motion='reduce');pg=await c.new_page()
        await pg.goto(HOST+'/games/modoostartup',wait_until='networkidle');await pg.wait_for_timeout(600)
        await pg.click('[data-action=new]');await pg.wait_for_timeout(900)
        await pg.fill('input[placeholder*="이름을 입력"]','한새싹');await pg.fill('input[placeholder*="회사의 이름"]','새싹랩')
        await pg.get_by_role('button',name='창업하기!').click();await pg.wait_for_timeout(1200)
        opts=pg.locator('.plan-option, .memo-option, [data-plan-option], button[data-action=plan-pick]')
        info['planOpts']=await opts.count()
        if await opts.count()>2:await opts.nth(2).click();await pg.wait_for_timeout(500)
        await pg.evaluate('scrollTo(0,0)');await pg.screenshot(path=OUT+'plan.png')
        await c.close()
        # 나머지: 1348×926
        c=await b.new_context(viewport={'width':1348,'height':926},reduced_motion='reduce');pg=await c.new_page()
        await pg.goto(HOST+'/games/modoostartup',wait_until='networkidle');await pg.wait_for_timeout(600)
        await pg.click('[data-action=new]');await pg.wait_for_timeout(900)
        await pg.fill('input[placeholder*="이름을 입력"]','한새싹');await pg.fill('input[placeholder*="회사의 이름"]','새싹랩')
        await pg.get_by_role('button',name='창업하기!').click();await pg.wait_for_timeout(1200)
        await pg.click('[data-action=plan-random-all]');await pg.wait_for_timeout(1200);await pg.keyboard.press('Escape');await pg.wait_for_timeout(300)
        if await pg.locator('[data-action=tutorial-done]').count():
            try:await pg.locator('[data-action=tutorial-done]').first.click(timeout=800)
            except:pass
        await pg.keyboard.press('Escape');await pg.wait_for_timeout(300)
        if await pg.locator('[data-action=recommend]').count():await pg.locator('[data-action=recommend]').first.click();await pg.wait_for_timeout(700)
        await pg.evaluate('scrollTo(0,0)');await pg.screenshot(path=OUT+'schedule.png')
        async def month():
            await pg.locator('[data-action=run]').first.click();await pg.wait_for_timeout(1500)
            if await pg.locator('.month-play-skip').count():await pg.locator('.month-play-skip').first.click()
            await pg.wait_for_selector('#modal[open]',timeout=15000)
            await pg.locator('#modal [data-action=after-report]').first.click(timeout=3000);await pg.wait_for_timeout(1200)
        for _ in range(6):
            if await pg.locator('#modal.story-dialog[open]').count():break
            if await pg.locator('[data-action=event]').count():await pg.locator('[data-action=event]').first.click();await pg.wait_for_timeout(900);continue
            if await pg.locator('[data-action=recommend]').count():await pg.locator('[data-action=recommend]').first.click();await pg.wait_for_timeout(400)
            await month()
        info['storyButtons']=await pg.evaluate("[...document.querySelectorAll('#modal button')].map(b=>(b.dataset.action||'')+'|'+b.textContent.trim().slice(0,24))")
        await pg.screenshot(path=OUT+'decision-0.png')
        if MODE=='shoot':
            ch=pg.locator('#modal [data-action=choose-event]')
            info['choices']=await ch.count()
            if await ch.count():
                await ch.first.click();await pg.wait_for_timeout(1200)
                info['afterChoose']=await pg.evaluate("[...document.querySelectorAll('#modal button')].map(b=>(b.dataset.action||'')+'|'+b.textContent.trim().slice(0,24))")
                await pg.screenshot(path=OUT+'decision.png')
            await pg.keyboard.press('Escape');await pg.wait_for_timeout(400)
            await pg.evaluate("()=>{const b=document.createElement('button');b.dataset.action='auto-finish';document.body.append(b);b.click();b.remove()}");await pg.wait_for_timeout(500)
            await pg.locator('#modal [data-action=confirm-auto-finish]').click();await pg.wait_for_timeout(6000)
            for _ in range(20):
                if await pg.locator('[data-action=ending-card]').count():break
                await pg.wait_for_timeout(1000)
            await pg.keyboard.press('Escape');await pg.wait_for_timeout(500);await pg.evaluate('scrollTo(0,0)')
            await pg.screenshot(path=OUT+'ending.png')
        await c.close();await b.close()
    print(json.dumps(info,ensure_ascii=False,indent=0))
asyncio.run(main())
