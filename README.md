# 모두의 창업: CEO로 살아남기

창업자가 되어 한 달의 일정을 짜고, 사람을 만나며 회사를 운영하는 한국어 브라우저 게임입니다. 공개 주소는 <https://www.letter4ceo.com/games/modoostartup>입니다(주소를 바꿀 때는 `site-config.js`의 `GAME_URL`, `index.html`의 canonical·og 주소, `assets/qr-game.png`를 함께 바꿉니다).

## 내 컴퓨터에서 실행하기

Python 3가 있다면 저장소를 내려받아 압축을 푼 뒤, `index.html`이 있는 폴더에서 실행하세요.

```sh
python3 tools/dev-server.py 8000
```

브라우저에서 <http://127.0.0.1:8000/>(또는 배포 경로와 같은 <http://127.0.0.1:8000/games/modoostartup>)을 엽니다. `index.html`에 `<base href="/games/modoostartup/">`가 있어서, 그냥 `python3 -m http.server`로 열면 자원 경로를 찾지 못합니다. 별도 빌드나 계정은 필요하지 않습니다. 파일을 더블클릭하는 대신 로컬 서버를 사용해야 브라우저가 게임 모듈과 데이터를 읽을 수 있습니다.

## 이 저장소에 담은 것

기존 웹 게임의 브라우저 배포본입니다. 개발 도구의 대화나 프로젝트 이력은 포함하지 않습니다. 호스팅 업체가 페이지에 삽입한 스크립트는 제외했습니다. 게임 크레딧의 이전 게임·편집기 링크는 원래 사이트를 가리킵니다.

## 출처와 권리

- 원작: [사업 2회차: 또 창업을 한다면](https://www.letter4ceo.com/games/business-second-run.html) 기여자. 원작 콘텐츠는 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.ko)이며, 이 게임은 일정·성장 방식과 사건 진행을 재구성했습니다.
- 게임에 연결된 [그만의 아침편지](https://www.letter4ceo.com/) 등 외부 글의 권리는 각 글쓴이에게 있습니다. 자세한 출처와 변경 사항은 게임의 **자료와 제작 정보**에서 확인할 수 있습니다.
- 일러스트는 이 버전을 위해 생성했습니다. MV 로고의 공개는 상표 사용권을 별도로 부여하지 않습니다.
- 분기 원본: 이 저장소는 [VScommonBot/persona-startup-game](https://github.com/VScommonBot/persona-startup-game)(《사업 2회차 : 또 창업을 한다면》의 소스 저장소)에서 분기한 버전입니다.
