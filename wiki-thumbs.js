// 위키 썸네일 경로. GPT 카툰 webp를 쓰고, 없는 용어는 카테고리 기본 그림으로 대체합니다.
// 같은 이름의 SVG는 이미지가 없을 때 화면에서 대체용으로 남깁니다.
const TERM_IDS=new Set(['runway','burn','revenue','profit','cash-flow','fixed','cogs','bep','guarantee','arpu','cac','ltv','churn','retention','mrr','aov','dau','tam','sam','som','cpc','cpa','saas','mvp','pmf','pivot','equity','dilution','cap-table','stock-option','startup','lean','milestone','death-valley','j-curve','seed','series-a','series-b','ma','ipo','valuation','pre-money','post-money','exit','ir','irr','multiple','secondary','angel','vc','cvc','accelerator','incubator','tips','demo-day','gp','lp','mother-fund','safe','convertible-note','ordinary','preferred','cb','bw','rcps','loi','loc']);
export const WIKI_THUMB_CATEGORY={
 '자금':'funds',
 '고객':'customers',
 '제품':'product',
 '조직':'org',
 '기업·전략':'strategy',
 '투자':'invest',
 '투자자·지원':'supporters',
 '투자계약':'contracts',
};
export function wikiThumbFile(id,category){return TERM_IDS.has(id)?id:`cat-${WIKI_THUMB_CATEGORY[category]||'funds'}`;}
export function wikiThumbPath(id,category){return `assets/wiki-thumbs/${wikiThumbFile(id,category)}.webp`;}
export function wikiThumbSmallPath(id,category){return `assets/wiki-thumbs/sm/${wikiThumbFile(id,category)}.webp`;}
export function wikiThumbFallbackPath(id,category){return `assets/wiki-thumbs/${wikiThumbFile(id,category)}.svg`;}
