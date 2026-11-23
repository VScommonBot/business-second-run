# 예전 화면 CSS의 색 선언을 읽어 게임 남색 테마용 색 덮어쓰기 규칙(game-skin-colors.css)을 만드는 생성기
import re,sys,colorsys,tinycss2
import os
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..')+'/'
FILES=['life.css','ending.css','insights.css','founder-update.css','career-update.css','office.css','session-update.css','gameplay-fixes.css']
NAMED={'white':'#ffffff','black':'#000000'}
COLOR_RE=re.compile(r'#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\bwhite\b|\bblack\b')
PROPS_BG={'background','background-color','background-image'}
PROPS_FG={'color','fill','stroke','caret-color','-webkit-text-fill-color','text-decoration-color'}
PROPS_LINE={'border','border-color','border-top','border-bottom','border-left','border-right','border-top-color','border-bottom-color','border-left-color','border-right-color','outline','outline-color','column-rule'}
def parse(c):
    c=NAMED.get(c.lower(),c)
    if c.startswith('#'):
        h=c[1:]
        if len(h) in(3,4):h=''.join(x*2 for x in h)
        r,g,b=(int(h[i:i+2],16)/255 for i in(0,2,4));a=int(h[6:8],16)/255 if len(h)==8 else 1
        return r,g,b,a
    m=re.findall(r'[\d.]+%?',c)
    if len(m)<3:return None
    v=[float(x.rstrip('%'))*(2.55 if x.endswith('%') else 1) for x in m[:3]]
    a=float(m[3]) if len(m)>3 else 1
    return v[0]/255,v[1]/255,v[2]/255,a
def fmt(r,g,b,a):
    r,g,b=(max(0,min(255,round(x*255))) for x in(r,g,b))
    return f'#{r:02x}{g:02x}{b:02x}' if a>=.999 else f'rgba({r},{g},{b},{round(a,3)})'
def lum(r,g,b):
    f=lambda x:x/12.92 if x<=.03928 else((x+.055)/1.055)**2.4
    return .2126*f(r)+.7152*f(g)+.0722*f(b)
def hls(h,l,s,a):r,g,b=colorsys.hls_to_rgb(h,l,s);return fmt(r,g,b,a)
NAVY_H=243/360
def bg(c):
    p=parse(c)
    if not p:return c
    r,g,b,a=p;h,l,s=colorsys.rgb_to_hls(r,g,b)
    if a<.02:return c
    if l>=.80:   # 흰색·밝은 틴트 → 남색 패널(틴트는 색상 유지)
        if s<.25 or l>.97:return hls(NAVY_H,.27-(1-l)*.6,.5,max(a,.0) if a<1 else 1)
        return hls(h,.24,min(.55,s*.6+.2),a)
    if l>=.55:   # 중간 밝기 → 진한 같은 색
        return hls(h,.34,min(.6,s*.8),a)
    return c
def fg(c):
    p=parse(c)
    if not p:return c
    r,g,b,a=p;h,l,s=colorsys.rgb_to_hls(r,g,b)
    if l>=.62:return c
    if s<.3:     # 잉크·회색 글자 → 밝은 글자
        return hls(236/360,.97 if l<.3 else .86,.9 if l<.3 else .8,a)
    return hls(h,.76,min(1,s*.9+.15),a)
def line(c):
    p=parse(c)
    if not p:return c
    r,g,b,a=p;h,l,s=colorsys.rgb_to_hls(r,g,b)
    if l>=.75:return f'rgba(201,205,251,{round(.2*a+.02,3)})'
    if l>=.45 and s>.3:return hls(h,.68,min(1,s),a)
    return c
def transform(prop,val):
    f=bg if prop in PROPS_BG else fg if prop in PROPS_FG else line if prop in PROPS_LINE else None
    if prop=='box-shadow':
        # 밝은 그림자는 의미가 없어지므로 남색 그림자로
        def sh(m):
            p=parse(m.group(0))
            if not p:return m.group(0)
            r,g,b,a=p;return f'rgba(5,6,30,{round(min(.5,a+.15),3)})' if colorsys.rgb_to_hls(r,g,b)[1]>.5 else m.group(0)
        return COLOR_RE.sub(sh,val)
    if not f:return None
    if prop=='background' and 'url(' in val and not COLOR_RE.search(val):return None
    return COLOR_RE.sub(lambda m:f(m.group(0)),val)
SKIP=re.compile(r'(^|[\s>+~,(])(:root|html|body|\*)(?![\w-])|intro-|\.g-|\.gx|title-')
def scope(sel):
    out=[]
    for s in [x.strip() for x in sel.split(',') if x.strip()]:
        if SKIP.search(s):continue
        first=re.split(r'\s+|>|\+|~',s,1)[0]
        if re.search(r'(^|[^\w-])dialog(?![\w-])|#modal|-dialog\b',first):
            rest=s[len(first):]
            out.append(f'{first}:is(#modal){rest}')
        else:out.append(f':is(body[data-skin],#modal) {s}')
    return ', '.join(out)
def rules(nodes,indent=''):
    out=[]
    for n in nodes:
        if n.type=='qualified-rule':
            sel=tinycss2.serialize(n.prelude).strip()
            decls=tinycss2.parse_declaration_list(n.content,skip_whitespace=True,skip_comments=True)
            new=[]
            for d in decls:
                if d.type!='declaration':continue
                val=tinycss2.serialize(d.value).strip()
                if not COLOR_RE.search(val):continue
                t=transform(d.lower_name,val)
                if t and t!=val:new.append(f'{d.lower_name}:{t}'+('!important' if d.important else ''))
            sc=scope(sel)
            if new and sc:out.append(f'{indent}{sc}{{{";".join(new)}}}')
        elif n.type=='at-rule' and n.lower_at_keyword in('media','supports'):
            inner=rules(tinycss2.parse_rule_list(n.content,skip_whitespace=True,skip_comments=True),indent+' ')
            if inner:out.append(f'@{n.lower_at_keyword} {tinycss2.serialize(n.prelude).strip()}{{\n'+'\n'.join(inner)+'\n}')
    return out
lines=['/* 예전 화면 CSS의 밝은 바탕·어두운 글자·옅은 선을 게임 남색 테마 색으로 덮어쓰는 규칙(tools/gen_skin.py로 생성, 직접 고치지 말 것) */']
total=0
for f in FILES:
    rl=rules(tinycss2.parse_stylesheet(open(R+f).read(),skip_whitespace=True,skip_comments=True))
    total+=len(rl);lines.append(f'/* {f} */');lines+=rl
open(R+'game-skin-colors.css','w').write('\n'.join(lines)+'\n')
print('rules',total)
