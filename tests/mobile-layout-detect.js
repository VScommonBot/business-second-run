() => {
  const vw = innerWidth, vh = innerHeight, out = [];
  const modal = document.querySelector('#modal[open]') || [...document.querySelectorAll('dialog[open]')].pop() || null;
  const root = modal || document;
  const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); const cd = el.closest('details:not([open])'); if (cd && !(el.tagName==='SUMMARY' && el.parentElement===cd)) return false; return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity !== 0; };
  const label = el => (el.innerText || el.getAttribute('aria-label') || el.title || '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const sel = el => { let s = el.tagName.toLowerCase(); if (el.dataset.action) s += `[data-action=${el.dataset.action}]`; else if (el.dataset.view) s += `[data-view=${el.dataset.view}]`; if (el.className && typeof el.className === 'string') s += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.'); return s; };
  const btns = [...root.querySelectorAll('button, a.button, [role=button], .chip-button, summary')].filter(vis);
  const lines = el => { // count text lines via character rects
    const tops = new Set(); let chars = 0;
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const t = w.currentNode; const txt = t.textContent; for (let i = 0; i < txt.length; i++) { if (/\s/.test(txt[i])) continue; const rg = document.createRange(); rg.setStart(t, i); rg.setEnd(t, i + 1); const rr = rg.getBoundingClientRect(); if (rr.width && rr.height) { tops.add(Math.round(rr.top / 4)); chars++; } } }
    return { lines: tops.size, chars };
  };
  for (const b of btns) {
    const r = b.getBoundingClientRect(); const L = lines(b); const name = label(b); const s = sel(b);
    // inside a scroll container that's intentionally horizontally scrollable? skip viewport checks then
    let scroller = null; for (let p = b.parentElement; p; p = p.parentElement) { const cs = getComputedStyle(p); if (/(auto|scroll)/.test(cs.overflowX) && p.scrollWidth > p.clientWidth + 2) { scroller = p; break; } }
    if (b.classList.contains('month-calendar')) {} else if (L.chars >= 3 && L.lines >= 3 && L.chars / L.lines <= 2.2) out.push({ kind: 'char-wrap', sel: s, name, lines: L.lines, chars: L.chars, w: Math.round(r.width), h: Math.round(r.height) });
    else if (L.lines >= 3 && r.width < 160) out.push({ kind: 'multi-line', sel: s, name, lines: L.lines, w: Math.round(r.width), h: Math.round(r.height) });
    if (!scroller && (r.right > vw + 1 || r.left < -1)) out.push({ kind: 'offscreen-x', sel: s, name, left: Math.round(r.left), right: Math.round(r.right) });
    if (b.scrollWidth > b.clientWidth + 2 && getComputedStyle(b).overflowX !== 'visible') out.push({ kind: 'text-clipped', sel: s, name, sw: b.scrollWidth, cw: b.clientWidth });
    const pb = getComputedStyle(b,'::before'); const hw = pb.content!=='none' && pb.position==='absolute' ? parseFloat(pb.width)||0 : 0, hh = pb.content!=='none' && pb.position==='absolute' ? parseFloat(pb.height)||0 : 0;
    if ((Math.max(r.height,hh) < 43.5 || Math.max(r.width,hw) < 43.5) && !b.closest('.sr-only')) out.push({ kind: 'small-target', sel: s, name, w: Math.round(r.width), h: Math.round(r.height) });
    // clipped by overflow-hidden ancestor
    for (let p = b.parentElement; p && p !== document.body; p = p.parentElement) { const cs = getComputedStyle(p); if (cs.overflow !== 'visible' || cs.overflowX !== 'visible') { const pr = p.getBoundingClientRect(); if (/(auto|scroll)/.test(cs.overflowX + cs.overflowY)) break; if (r.right > pr.right + 2 || r.left < pr.left - 2 || r.bottom > pr.bottom + 2 || r.top < pr.top - 2) out.push({ kind: 'clipped-by-parent', sel: s, name, parent: sel(p) }); break; } }
  }
  function clipRect(el){ let r=el.getBoundingClientRect(); let L=r.left,T=r.top,R=r.right,B=r.bottom; for(let p=el.parentElement;p&&p!==document.documentElement;p=p.parentElement){const cs=getComputedStyle(p); if(/(auto|scroll|hidden|clip)/.test(cs.overflowX+cs.overflowY)){const q=p.getBoundingClientRect(); L=Math.max(L,q.left);T=Math.max(T,q.top);R=Math.min(R,q.right);B=Math.min(B,q.bottom);} } return (R-L>1&&B-T>1)?{left:L,top:T,right:R,bottom:B}:null; }
  // overlaps between buttons (and with modal headings)
  const fixedish = el => { for (let p = el; p && p !== document.body; p = p.parentElement) { const ps = getComputedStyle(p).position; if (ps === 'fixed' || ps === 'sticky') return p !== modal && !(modal && p.contains(modal)); } return false; };
  const els = btns.filter(e=>!fixedish(e)).concat([...root.querySelectorAll('h1,h2,h3,.modal-title,#dialog-title')].filter(vis));
  for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) {
    const a = els[i], c = els[j]; if (a.contains(c) || c.contains(a)) continue;
    const A = clipRect(a), C = clipRect(c); if (!A || !C) continue;
    const ix = Math.min(A.right, C.right) - Math.max(A.left, C.left), iy = Math.min(A.bottom, C.bottom) - Math.max(A.top, C.top);
    if (ix > 3 && iy > 3) {
      // ignore if one is visually under the other in a scroll container offscreen
      out.push({ kind: 'overlap', sel: sel(a), name: label(a), other: sel(c), otherName: label(c), area: Math.round(ix * iy) });
    }
  }
  for (const b of btns) { if (!b.closest('#modal')) continue; const r=b.getBoundingClientRect(); const head=b.closest('header,.modal-head,.g-modal-head,[class*=head]'); }
  /*end*/
  const docOverflow = document.documentElement.scrollWidth > vw + 1 ? document.documentElement.scrollWidth : 0;
  if (docOverflow) out.push({ kind: 'page-overflow-x', sel: 'html', name: '', sw: docOverflow });
  return { buttons: btns.length, issues: out, modal: !!modal, title: (modal?.querySelector('#dialog-title,h2')?.innerText || document.title).slice(0, 40) };
}
