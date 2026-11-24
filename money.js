// 내부 단위(만 원)를 화면 표시용 금액 문자열로 바꿉니다.
export const MANWON_PER_EOK=10000;

function eokLabel(absManwon){
 const eok=Math.round(absManwon/MANWON_PER_EOK*10)/10;
 return Number.isInteger(eok)?`${eok}억 원`:`${eok.toFixed(1)}억 원`;
}

export function formatMoney(manwon){
 const n=Number(manwon);
 if(!Number.isFinite(n))return '0만 원';
 const sign=n<0?'-':'';
 const abs=Math.abs(n);
 if(abs>=MANWON_PER_EOK)return `${sign}${eokLabel(abs)}`;
 const man=Math.round(abs);
 if(man>=MANWON_PER_EOK)return `${sign}${eokLabel(man)}`;
 return `${sign}${man.toLocaleString('ko-KR')}만 원`;
}

export function formatMoneySigned(manwon){
 const n=Number(manwon);
 if(!Number.isFinite(n))return '0만 원';
 return n>0?`+${formatMoney(n)}`:formatMoney(n);
}

export function formatMoneyProgress(value,target){
 return `${formatMoney(value)} / ${formatMoney(target)}`;
}

export function isManwonUnit(unit){
 return unit==='만 원'||unit==='만';
}
