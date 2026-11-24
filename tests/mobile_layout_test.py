# 모바일 레이아웃 회귀 테스트: 버튼 글자가 한 글자씩 줄바꿈되거나 넘치거나 겹치면 실패합니다.
# 실행: python3 tests/mobile_layout_test.py  (Playwright와 Chromium이 필요합니다. 없으면 건너뜁니다)
# 320px·390px 세로, 667×375 가로에서 첫 화면부터 월말 정산·사건·엔딩까지 돌며 tests/mobile-layout-detect.js 규칙으로 검사합니다.
import asyncio,os,socket,subprocess,sys,tempfile,time,unittest
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0,os.path.join(ROOT,'tools'))
try:
    from playwright.async_api import async_playwright
    import mobile_audit
except ImportError:
    async_playwright=None
LAYOUT_KINDS={'char-wrap','multi-line','offscreen-x','text-clipped','clipped-by-parent','overlap','page-overflow-x'}
DETECT=open(os.path.join(ROOT,'tests','mobile-layout-detect.js'),encoding='utf-8').read()
def free_port():
    s=socket.socket();s.bind(('127.0.0.1',0));p=s.getsockname()[1];s.close();return p
@unittest.skipIf(async_playwright is None,'Playwright가 없어 건너뜁니다')
class MobileLayoutTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.port=free_port()
        cls.server=subprocess.Popen([sys.executable,os.path.join(ROOT,'tools','dev-server.py'),str(cls.port)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        for _ in range(50):
            try: socket.create_connection(('127.0.0.1',cls.port),0.2).close();break
            except OSError: time.sleep(0.1)
    @classmethod
    def tearDownClass(cls): cls.server.terminate();cls.server.wait(5)
    def test_detector_flags_one_letter_wrapping_button(self):
        async def run():
            async with async_playwright() as p:
                b=await p.chromium.launch();pg=await b.new_page(viewport={'width':320,'height':568})
                await pg.set_content('<div style="display:flex;width:300px"><h2 style="flex:1">아주 긴 제목이 들어갑니다</h2><button style="width:34px">오토모드 · 2배속</button><button style="width:44px;height:44px">X</button></div>')
                r=await pg.evaluate(DETECT);await b.close();return r
        r=asyncio.run(run())
        self.assertIn('char-wrap',[i['kind'] for i in r['issues']])
    def test_every_screen_has_no_broken_buttons(self):
        out=tempfile.mkdtemp(prefix='mobile-layout-')
        results,errors=asyncio.run(mobile_audit.audit(f'http://127.0.0.1:{self.port}',out,['320','390','land667']))
        self.assertEqual({k:v for k,v in errors.items() if v},{},'화면 이동 중 오류(가려져 누를 수 없는 버튼 포함)')
        screens={r['vp'] for r in results}
        self.assertEqual(screens,{'320','390','land667'})
        self.assertGreaterEqual(len(results),100)
        bad=[(r['vp'],r['screen'],i['kind'],i['sel'],i.get('name','')) for r in results for i in r['issues'] if i['kind'] in LAYOUT_KINDS]
        self.assertEqual(bad,[],f'깨진 버튼: {bad[:10]} (캡처: {out})')
        small={vp:sum(1 for r in results if r['vp']==vp for i in r['issues'] if i['kind']=='small-target') for vp in screens}
        for vp,n in small.items(): self.assertLessEqual(n,5,f'{vp}: 44px보다 작은 터치 영역 {n}개')
if __name__=='__main__':unittest.main(verbosity=2)
