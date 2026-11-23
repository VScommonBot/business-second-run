// 게임 공개 주소와 결과 카드 QR 이미지를 한 곳에서 관리하는 설정
// 주소는 끝 슬래시 없이 씁니다(서버가 /modoostartup/ 을 /modoostartup 으로 308 리디렉션). index.html의 canonical·og 주소도 같은 값입니다.
export const GAME_URL='https://www.letter4ceo.com/games/modoostartup';
// 로컬에서 qrcode(오류 정정 M)로 만든 GAME_URL QR. 주소를 바꾸면 이 파일도 새로 만듭니다.
export const GAME_QR='assets/qr-game.png';
export const isPlaceholderUrl=url=>url.includes('GAME-URL-PLACEHOLDER');
