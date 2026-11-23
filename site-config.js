// 공개 주소가 확정되면 한 곳에서 바꾸는 게임 URL 플레이스홀더 설정
// TODO(배포): 실제 공개 주소가 정해지면 GAME_URL과 index.html의 canonical·og 주소(같은 플레이스홀더 문자열)를 함께 바꿉니다.
export const GAME_URL='https://GAME-URL-PLACEHOLDER.example/';
export const isPlaceholderUrl=url=>url.includes('GAME-URL-PLACEHOLDER');
