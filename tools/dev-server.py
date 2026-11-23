# 로컬 개발 서버: <base href="/games/modoostartup/">에 맞춰 루트(/)와 배포 경로(/games/modoostartup, 슬래시 유무 모두)에서 같은 게임을 내줍니다
import argparse,http.server,os,urllib.parse
PREFIX='/games/modoostartup'
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=ROOT,**kwargs)
    def translate_path(self,path):
        p=urllib.parse.urlsplit(path).path
        if p in (PREFIX,PREFIX+'/'):return os.path.join(ROOT,'index.html')
        if p.startswith(PREFIX+'/'):path=p[len(PREFIX):]
        return super().translate_path(path)
if __name__=='__main__':
    ap=argparse.ArgumentParser(description='모두의 창업 로컬 개발 서버');ap.add_argument('port',nargs='?',type=int,default=8000);ap.add_argument('--bind',default='127.0.0.1')
    a=ap.parse_args();print(f'http://{a.bind}:{a.port}/ 또는 http://{a.bind}:{a.port}{PREFIX} 에서 열 수 있어요')
    http.server.ThreadingHTTPServer((a.bind,a.port),Handler).serve_forever()
