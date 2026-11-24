#!/usr/bin/env python3
# 위키 용어 카툰 썸네일 SVG를 남보라·파랑 네온 카툰 화풍으로 만듭니다.
"""Generate 67 term thumbnails and 8 category fallbacks as SVG (no text)."""
from __future__ import annotations

import math
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "assets" / "wiki-thumbs"

INK = "#1b1440"
WHITE = "#f6f8ff"
GOLD = "#ffd166"
AMBER = "#ffb020"
ORANGE = "#ff8a3d"
ROSE = "#ff7aa2"
PINK = "#ff6ad4"
PURPLE = "#b89bff"
VIOLET = "#8b7cff"
BLUE = "#6aa8ff"
CYAN = "#5ee0ff"
MINT = "#5dffc4"
LIME = "#c6f56b"
TEAL = "#2dd4bf"
NAVY = "#2c2f66"
PANEL = "#353a78"
CREAM = "#ffe8c7"
SKIN = "#ffd2b5"
WOOD = "#c9894a"
CRIMSON = "#ff5d6c"
LEAF = "#63d67a"

CAT_ACCENT = {
    "funds": GOLD,
    "customers": ORANGE,
    "product": PURPLE,
    "org": PINK,
    "strategy": BLUE,
    "invest": VIOLET,
    "supporters": TEAL,
    "contracts": "#e0b07a",
}

CAT_SLUG = {
    "자금": "funds",
    "고객": "customers",
    "제품": "product",
    "조직": "org",
    "기업·전략": "strategy",
    "투자": "invest",
    "투자자·지원": "supporters",
    "투자계약": "contracts",
}

TERM_CATEGORY = {
    "runway": "funds", "burn": "funds", "revenue": "funds", "profit": "funds",
    "cash-flow": "funds", "fixed": "funds", "cogs": "funds", "bep": "funds",
    "guarantee": "funds",
    "arpu": "customers", "cac": "customers", "ltv": "customers", "churn": "customers",
    "retention": "customers", "mrr": "customers", "aov": "customers", "dau": "customers",
    "tam": "customers", "sam": "customers", "som": "customers", "cpc": "customers",
    "cpa": "customers",
    "saas": "product", "mvp": "product", "pmf": "product", "pivot": "product",
    "equity": "org", "dilution": "org", "cap-table": "org", "stock-option": "org",
    "startup": "strategy", "lean": "strategy", "milestone": "strategy",
    "death-valley": "strategy", "j-curve": "strategy",
    "seed": "invest", "series-a": "invest", "series-b": "invest", "ma": "invest",
    "ipo": "invest", "valuation": "invest", "pre-money": "invest", "post-money": "invest",
    "exit": "invest", "ir": "invest", "irr": "invest", "multiple": "invest",
    "secondary": "invest",
    "angel": "supporters", "vc": "supporters", "cvc": "supporters",
    "accelerator": "supporters", "incubator": "supporters", "tips": "supporters",
    "demo-day": "supporters", "gp": "supporters", "lp": "supporters",
    "mother-fund": "supporters",
    "safe": "contracts", "convertible-note": "contracts", "ordinary": "contracts",
    "preferred": "contracts", "cb": "contracts", "bw": "contracts", "rcps": "contracts",
    "loi": "contracts", "loc": "contracts",
}


def _st(color=INK, width=8):
    return (
        f'stroke="{color}" stroke-width="{width}" '
        'stroke-linejoin="round" stroke-linecap="round"'
    )


def rect(x, y, w, h, rx=16, fill=PANEL, stroke=INK, sw=8):
    return (
        f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" '
        f'rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" '
        f'stroke-linejoin="round"/>'
    )


def circ(x, y, r, fill=WHITE, stroke=INK, sw=8):
    return (
        f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" fill="{fill}" '
        f'stroke="{stroke}" stroke-width="{sw}"/>'
    )


def elli(x, y, rx, ry, fill="#000", opacity=.22, stroke=None, sw=0):
    s = (
        f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" '
        f'fill="{fill}" opacity="{opacity}"'
    )
    if stroke:
        s += f' stroke="{stroke}" stroke-width="{sw}"'
    return s + "/>"


def path(d, fill="none", stroke=INK, sw=8, opacity=1):
    return (
        f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" '
        f'stroke-linejoin="round" stroke-linecap="round" opacity="{opacity}"/>'
    )


def line(x1, y1, x2, y2, stroke=INK, sw=8):
    return (
        f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" '
        f'stroke="{stroke}" stroke-width="{sw}" stroke-linecap="round"/>'
    )


def poly(points, fill=PANEL, stroke=INK, sw=8):
    pts = " ".join(f"{x:.1f},{y:.1f}" for x, y in points)
    return (
        f'<polygon points="{pts}" fill="{fill}" stroke="{stroke}" '
        f'stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round"/>'
    )


def highlight(x, y, rx=12, ry=6, opacity=.4):
    return elli(x, y, rx, ry, WHITE, opacity)


def ground(y=348, rx=230):
    return elli(320, y, rx, 30, "#090616", .35)


def coin(x, y, r=28, fill=GOLD):
    return (
        circ(x, y, r, fill, INK, 7)
        + circ(x, y, r * 0.62, "none", INK, 4)
        + highlight(x - r * 0.28, y - r * 0.3, r * 0.28, r * 0.15, .5)
    )


def coin_stack(x, y, n=4, r=22, fill=GOLD, gap=8):
    parts = []
    for i in range(n - 1, -1, -1):
        parts.append(elli(x, y - i * gap, r, r * 0.42, fill, 1, INK, 6))
    parts.append(highlight(x - r * 0.25, y - (n - 1) * gap - r * 0.08, r * 0.3, r * 0.1, .45))
    return "".join(parts)


def bill(x, y, w=86, h=48, rot=0, fill=MINT):
    t = f' transform="rotate({rot} {x} {y})"' if rot else ""
    return (
        f'<g{t}>'
        + rect(x - w / 2, y - h / 2, w, h, 10, fill, INK, 7)
        + circ(x, y, min(w, h) * 0.18, GOLD, INK, 4)
        + "</g>"
    )


def person(x, y, scale=1, body=BLUE, hair=INK):
    s = scale
    head_r = 22 * s
    hx, hy = x, y - 38 * s
    return (
        elli(x, y + 36 * s, 26 * s, 8 * s, "#000", .18)
        + path(
            f"M{x-22*s:.1f},{y+28*s:.1f} "
            f"Q{x:.1f},{y-8*s:.1f} {x+22*s:.1f},{y+28*s:.1f} "
            f"Q{x:.1f},{y+42*s:.1f} {x-22*s:.1f},{y+28*s:.1f}Z",
            body, INK, 7,
        )
        + circ(hx, hy, head_r, SKIN, INK, 7)
        + path(
            f"M{hx-head_r+2:.1f},{hy-4:.1f} "
            f"Q{hx:.1f},{hy-head_r-10*s:.1f} {hx+head_r-2:.1f},{hy-4:.1f} "
            f"Q{hx:.1f},{hy-head_r+6*s:.1f} {hx-head_r+2:.1f},{hy-4:.1f}Z",
            hair, INK, 5,
        )
        + circ(hx - 7 * s, hy + 2 * s, 3.2 * s, INK, INK, 0)
        + circ(hx + 7 * s, hy + 2 * s, 3.2 * s, INK, INK, 0)
        + circ(hx + 8 * s, hy + 10 * s, 4.5 * s, ROSE, "none", 0)
    )


def building(x, y, w=90, h=140, fill=PANEL, rows=4, cols=3):
    parts = [rect(x - w / 2, y - h, w, h, 10, fill, INK, 8)]
    pad_x, pad_y = 16, 18
    gap = 10
    cw = (w - pad_x * 2 - gap * (cols - 1)) / cols
    ch = (h - pad_y * 2 - 16 - gap * (rows - 1)) / rows
    for r in range(rows):
        for c in range(cols):
            wx = x - w / 2 + pad_x + c * (cw + gap)
            wy = y - h + pad_y + r * (ch + gap)
            color = CYAN if (r + c) % 2 == 0 else GOLD
            parts.append(rect(wx, wy, cw, ch, 4, color, INK, 3.5))
    parts.append(rect(x - 12, y - 22, 24, 22, 4, "#2a1d4a", INK, 5))
    return "".join(parts)


def doc(x, y, w=86, h=110, fill=WHITE, tab=None):
    fold = 22
    d = (
        f"M{x-w/2:.1f},{y-h/2:.1f} H{x+w/2-fold:.1f} "
        f"L{x+w/2:.1f},{y-h/2+fold:.1f} V{y+h/2:.1f} H{x-w/2:.1f} Z"
    )
    corner = (
        f"M{x+w/2-fold:.1f},{y-h/2:.1f} "
        f"L{x+w/2:.1f},{y-h/2+fold:.1f} H{x+w/2-fold:.1f} Z"
    )
    lines = "".join(
        line(x - w / 2 + 16, y - h / 2 + 36 + i * 16, x + w / 2 - 16, y - h / 2 + 36 + i * 16, PURPLE, 5)
        for i in range(4)
    )
    extra = ""
    if tab:
        extra = circ(x, y + h / 2 - 24, 14, tab, INK, 5)
    return path(d, fill, INK, 7) + path(corner, CREAM, INK, 6) + lines + extra


def bag(x, y, fill=ORANGE):
    return (
        path(
            f"M{x-40:.1f},{y-10:.1f} L{x-32:.1f},{y+48:.1f} H{x+32:.1f} "
            f"L{x+40:.1f},{y-10:.1f} Z",
            fill, INK, 7,
        )
        + path(
            f"M{x-16:.1f},{y-10:.1f} Q{x:.1f},{y-40:.1f} {x+16:.1f},{y-10:.1f}",
            "none", INK, 8,
        )
    )


def magnet(x, y):
    return (
        path(
            f"M{x-36:.1f},{y+30:.1f} V{y-6:.1f} Q{x-36:.1f},{y-48:.1f} {x:.1f},{y-48:.1f} "
            f"Q{x+36:.1f},{y-48:.1f} {x+36:.1f},{y-6:.1f} V{y+30:.1f} "
            f"H{x+16:.1f} V{y-6:.1f} Q{x+16:.1f},{y-28:.1f} {x:.1f},{y-28:.1f} "
            f"Q{x-16:.1f},{y-28:.1f} {x-16:.1f},{y-6:.1f} V{y+30:.1f} Z",
            CRIMSON, INK, 7,
        )
        + rect(x - 36, y + 8, 20, 24, 5, NAVY, INK, 5)
        + rect(x + 16, y + 8, 20, 24, 5, NAVY, INK, 5)
    )


def pie(x, y, r=70, slices=((0, 0.7, BLUE), (0.7, 1, GOLD))):
    parts = [circ(x, y, r, PANEL, INK, 8)]
    for start, end, fill in slices:
        if end - start >= 0.999:
            parts.append(circ(x, y, r, fill, INK, 8))
            continue
        a1 = start * math.tau - math.pi / 2
        a2 = end * math.tau - math.pi / 2
        x1, y1 = x + r * math.cos(a1), y + r * math.sin(a1)
        x2, y2 = x + r * math.cos(a2), y + r * math.sin(a2)
        large = 1 if (end - start) > 0.5 else 0
        parts.append(
            path(
                f"M{x:.1f},{y:.1f} L{x1:.1f},{y1:.1f} A{r},{r} 0 {large} 1 {x2:.1f},{y2:.1f} Z",
                fill, INK, 7,
            )
        )
    parts.append(circ(x, y, 14, WHITE, INK, 6))
    return "".join(parts)


def gauge(x, y, level=0.35, w=130, h=36):
    inner = w - 16
    return (
        rect(x - w / 2, y - h / 2, w, h, 16, "#2a2150", INK, 7)
        + rect(x - w / 2 + 8, y - h / 2 + 8, inner * level, h - 16, 10, MINT if level > 0.45 else CRIMSON, INK, 4)
        + circ(x - w / 2 + 8 + inner * level, y, 10, WHITE, INK, 5)
    )


def flame(x, y, scale=1, fill=ORANGE):
    s = scale
    return path(
        f"M{x:.1f},{y+28*s:.1f} "
        f"C{x-28*s:.1f},{y+8*s:.1f} {x-16*s:.1f},{y-20*s:.1f} {x:.1f},{y-36*s:.1f} "
        f"C{x+8*s:.1f},{y-12*s:.1f} {x+26*s:.1f},{y-2*s:.1f} {x:.1f},{y+28*s:.1f}Z",
        fill, INK, 7,
    ) + path(
        f"M{x:.1f},{y+16*s:.1f} "
        f"C{x-12*s:.1f},{y+4*s:.1f} {x-4*s:.1f},{y-8*s:.1f} {x:.1f},{y-16*s:.1f} "
        f"C{x+4*s:.1f},{y-2*s:.1f} {x+10*s:.1f},{y+2*s:.1f} {x:.1f},{y+16*s:.1f}Z",
        GOLD, INK, 4,
    )


def sprout(x, y, scale=1):
    s = scale
    return (
        rect(x - 8 * s, y - 10 * s, 16 * s, 50 * s, 8, LEAF, INK, 6)
        + path(
            f"M{x:.1f},{y:.1f} Q{x-36*s:.1f},{y-20*s:.1f} {x-28*s:.1f},{y-44*s:.1f} "
            f"Q{x-8*s:.1f},{y-18*s:.1f} {x:.1f},{y:.1f}Z",
            LEAF, INK, 6,
        )
        + path(
            f"M{x:.1f},{y-8*s:.1f} Q{x+34*s:.1f},{y-28*s:.1f} {x+30*s:.1f},{y-50*s:.1f} "
            f"Q{x+8*s:.1f},{y-22*s:.1f} {x:.1f},{y-8*s:.1f}Z",
            MINT, INK, 6,
        )
        + elli(x, y + 42 * s, 28 * s, 10 * s, WOOD, 1, INK, 5)
    )


def rocket(x, y, scale=1, body=CYAN):
    s = scale
    return (
        path(
            f"M{x:.1f},{y-70*s:.1f} "
            f"Q{x+28*s:.1f},{y-20*s:.1f} {x+24*s:.1f},{y+30*s:.1f} "
            f"H{x-24*s:.1f} "
            f"Q{x-28*s:.1f},{y-20*s:.1f} {x:.1f},{y-70*s:.1f}Z",
            body, INK, 8,
        )
        + circ(x, y - 10 * s, 12 * s, WHITE, INK, 6)
        + poly([(x - 24 * s, y + 16 * s), (x - 48 * s, y + 42 * s), (x - 18 * s, y + 30 * s)], CRIMSON)
        + poly([(x + 24 * s, y + 16 * s), (x + 48 * s, y + 42 * s), (x + 18 * s, y + 30 * s)], CRIMSON)
        + flame(x, y + 52 * s, 0.7 * s, ORANGE)
    )


def pot(x, y):
    return path(
        f"M{x-32:.1f},{y-10:.1f} L{x-24:.1f},{y+36:.1f} "
        f"Q{x:.1f},{y+46:.1f} {x+24:.1f},{y+36:.1f} L{x+32:.1f},{y-10:.1f} Z",
        ORANGE, INK, 7,
    ) + rect(x - 38, y - 22, 76, 16, 6, AMBER, INK, 6)


def arrow_turn(x, y):
    return path(
        f"M{x-50:.1f},{y+20:.1f} H{x+10:.1f} Q{x+50:.1f},{y+20:.1f} {x+50:.1f},{y-20:.1f} "
        f"V{y-50:.1f}",
        "none", CYAN, 14,
    ) + poly([(x + 50, y - 68), (x + 32, y - 42), (x + 68, y - 42)], CYAN)


def flag(x, y, fill=ROSE, h=90):
    return (
        line(x, y, x, y - h, INK, 8)
        + poly([(x, y - h), (x + 54, y - h + 22), (x, y - h + 44)], fill)
        + circ(x, y, 8, GOLD, INK, 5)
    )


def clock(x, y, r=54):
    # hands only, no numerals
    return (
        circ(x, y, r, WHITE, INK, 8)
        + circ(x, y, r - 10, "#eef2ff", "none", 0)
        + line(x, y, x + 4, y - r * 0.55, INK, 8)
        + line(x, y, x + r * 0.4, y + 8, CRIMSON, 7)
        + circ(x, y, 6, CRIMSON, INK, 4)
    )


def chest(x, y, open_=False):
    body = rect(x - 70, y - 20, 140, 80, 14, WOOD, INK, 8)
    band = rect(x - 70, y + 10, 140, 16, 4, GOLD, INK, 5)
    lock = circ(x, y + 18, 10, GOLD, INK, 5)
    lid = path(
        f"M{x-78:.1f},{y-20:.1f} Q{x:.1f},{y-70:.1f} {x+78:.1f},{y-20:.1f} Z" if open_
        else f"M{x-70:.1f},{y-20:.1f} Q{x:.1f},{y-58:.1f} {x+70:.1f},{y-20:.1f} L{x+70:.1f},{y-8:.1f} "
             f"Q{x:.1f},{y-40:.1f} {x-70:.1f},{y-8:.1f} Z",
        AMBER, INK, 8,
    )
    return body + band + lid + lock


def handshake(x, y):
    return (
        path(
            f"M{x-70:.1f},{y+20:.1f} L{x-20:.1f},{y-8:.1f} L{x+6:.1f},{y+10:.1f} "
            f"L{x-8:.1f},{y+28:.1f} L{x-50:.1f},{y+36:.1f} Z",
            SKIN, INK, 7,
        )
        + path(
            f"M{x+70:.1f},{y+16:.1f} L{x+16:.1f},{y-10:.1f} L{x-4:.1f},{y+8:.1f} "
            f"L{x+14:.1f},{y+26:.1f} L{x+52:.1f},{y+34:.1f} Z",
            "#f0bc98", INK, 7,
        )
        + rect(x - 86, y + 16, 28, 40, 10, BLUE, INK, 6)
        + rect(x + 58, y + 14, 28, 40, 10, VIOLET, INK, 6)
    )


def speech_burst(x, y, fill=GOLD):
    pts = []
    for i in range(10):
        ang = i * math.tau / 10 - math.pi / 2
        r = 34 if i % 2 == 0 else 20
        pts.append((x + r * math.cos(ang), y + r * math.sin(ang)))
    return poly(pts, fill)


def register(x, y):
    return (
        rect(x - 80, y - 30, 160, 100, 16, NAVY, INK, 8)
        + rect(x - 58, y - 12, 70, 36, 8, CYAN, INK, 6)
        + rect(x + 20, y - 8, 44, 50, 8, PANEL, INK, 6)
        + circ(x + 42, y + 16, 8, GOLD, INK, 4)
        + rect(x - 40, y - 70, 80, 44, 10, CRIMSON, INK, 7)
        + highlight(x - 18, y - 58, 16, 6, .35)
    )


def scale_balance(x, y, tilt=0, left_fill=GOLD, right_fill=CYAN, left_extra="", right_extra=""):
    # tilt degrees: negative left down. Stem/beam use a light stroke so they stay visible on the dark artboard.
    return (
        line(x, y + 86, x, y - 48, WHITE, 12)
        + poly([(x - 40, y + 86), (x + 40, y + 86), (x, y + 108)], PANEL)
        + f'<g transform="rotate({tilt} {x} {y-48})">'
        + line(x - 120, y - 48, x + 120, y - 48, WHITE, 10)
        + circ(x, y - 48, 11, GOLD, INK, 5)
        + line(x - 96, y - 48, x - 96, y + 8, WHITE, 5)
        + line(x + 96, y - 48, x + 96, y + 8, WHITE, 5)
        + path(f"M{x-140:.1f},{y+8:.1f} Q{x-96:.1f},{y+42:.1f} {x-52:.1f},{y+8:.1f} Z", left_fill, WHITE, 6)
        + path(f"M{x+52:.1f},{y+8:.1f} Q{x+96:.1f},{y+42:.1f} {x+140:.1f},{y+8:.1f} Z", right_fill, WHITE, 6)
        + left_extra
        + right_extra
        + "</g>"
    )


def frame(uid, accent, inner):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">
<defs>
<linearGradient id="bg-{uid}" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#15122e"/>
<stop offset=".55" stop-color="#1c1440"/>
<stop offset="1" stop-color="#24103c"/>
</linearGradient>
<radialGradient id="blob-{uid}" cx="28%" cy="22%" r="70%">
<stop offset="0" stop-color="{accent}" stop-opacity=".42"/>
<stop offset="1" stop-color="{accent}" stop-opacity="0"/>
</radialGradient>
<filter id="soft-{uid}" x="-15%" y="-15%" width="130%" height="130%">
<feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#0b0818" flood-opacity=".35"/>
</filter>
</defs>
<rect width="640" height="400" fill="url(#bg-{uid})"/>
<circle cx="130" cy="70" r="170" fill="url(#blob-{uid})"/>
<circle cx="540" cy="330" r="150" fill="{accent}" fill-opacity=".14"/>
<circle cx="480" cy="70" r="8" fill="{CYAN}" opacity=".55"/>
<circle cx="90" cy="300" r="5" fill="{GOLD}" opacity=".45"/>
<circle cx="600" cy="140" r="6" fill="{PINK}" opacity=".4"/>
<g filter="url(#soft-{uid})">{inner}</g>
</svg>
'''


# --- term scenes ---

def scene_runway():
    strip = path(
        "M80,250 L280,110 H360 L560,250 Z",
        "#3a3f80", INK, 8,
    )
    dashes = "".join(
        path(f"M{320+t*18:.1f},{122+t*12:.1f} L{320+t*28:.1f},{122+t*18:.1f}", "none", GOLD, 8)
        for t in range(0, 8)
    )
    lights_l = "".join(circ(120 + i * 48, 232 - i * 16, 7, MINT if i < 3 else GOLD, INK, 3) for i in range(8))
    lights_r = "".join(circ(520 - i * 48, 232 - i * 16, 7, MINT if i < 3 else GOLD, INK, 3) for i in range(8))
    return ground(360, 260) + strip + dashes + lights_l + lights_r + gauge(320, 310, 0.32) + rocket(320, 200, 0.55, CYAN)


def scene_burn():
    return (
        ground()
        + bill(250, 230, 100, 56, -18, MINT)
        + bill(330, 245, 100, 56, 8, "#8dffc8")
        + bill(390, 220, 90, 50, 20, MINT)
        + flame(300, 150, 1.35, ORANGE)
        + flame(360, 165, 1.0, CRIMSON)
        + flame(250, 170, 0.75, GOLD)
        + circ(220, 130, 6, GOLD, "none", 0)
        + circ(400, 110, 5, ORANGE, "none", 0)
        + circ(330, 90, 4, CRIMSON, "none", 0)
    )


def scene_revenue():
    return (
        ground()
        + register(300, 230)
        + coin(430, 260, 32)
        + coin(470, 300, 24)
        + coin(400, 310, 20)
        + coin_stack(170, 300, 5, 24)
    )


def scene_profit():
    left = coin(224, 218, 14)
    right = coin(416, 210, 18)
    return ground() + scale_balance(320, 200, -12, CRIMSON, MINT, left, right)


def scene_cashflow():
    wallet = path(
        "M200,160 H430 Q460,160 460,190 V270 Q460,300 430,300 H200 Q170,300 170,270 V190 Q170,160 200,160 Z",
        NAVY, INK, 8,
    )
    flap = rect(170, 150, 290, 40, 14, VIOLET, INK, 7)
    stream_in = "".join(coin(120 - i * 10, 210 + i * 16, 16 - i, GOLD) for i in range(3))
    stream_out = "".join(coin(530 + i * 12, 230 + i * 10, 16 - i, CYAN) for i in range(3))
    arrows = path("M130,170 C180,120 150,120 200,155", "none", MINT, 8) + poly([(198, 140), (222, 160), (186, 168)], MINT)
    arrows2 = path("M470,250 C520,250 530,250 560,220", "none", ROSE, 8) + poly([(548, 206), (576, 214), (550, 234)], ROSE)
    return ground() + wallet + flap + highlight(250, 168, 30, 8, .3) + stream_in + stream_out + arrows + arrows2 + coin(300, 240, 26)


def scene_fixed():
    cal = rect(200, 110, 200, 200, 18, WHITE, INK, 8)
    header = rect(200, 110, 200, 48, 18, CRIMSON, INK, 0)
    header2 = rect(200, 134, 200, 24, 0, CRIMSON, INK, 0)
    rings = circ(250, 118, 10, GOLD, INK, 5) + circ(350, 118, 10, GOLD, INK, 5)
    dots = "".join(
        circ(236 + c * 42, 186 + r * 36, 8, VIOLET if (r, c) not in {(1, 1), (2, 0), (2, 2)} else ORANGE, INK, 3)
        for r in range(3) for c in range(3)
    )
    lock = rect(430, 200, 70, 56, 12, GOLD, INK, 7) + path(
        "M445,200 V178 Q445,150 465,150 Q485,150 485,178 V200", "none", INK, 8,
    )
    return ground() + cal + header + header2 + rings + dots + lock


def scene_cogs():
    box = rect(200, 150, 160, 130, 16, AMBER, INK, 8)
    tape = rect(260, 150, 40, 130, 0, WHITE, INK, 5)
    tag = poly([(370, 170), (470, 170), (470, 230), (370, 230), (350, 200)], ROSE) + circ(372, 200, 7, WHITE, INK, 4)
    minus = rect(250, 310, 40, 10, 4, CRIMSON, INK, 4)
    return ground() + box + tape + tag + minus + coin(520, 250, 30) + coin(560, 300, 22) + coin(500, 310, 18)


def scene_bep():
    left = coin(224, 216, 16)
    right = coin(416, 216, 16)
    return ground() + scale_balance(320, 200, 0, GOLD, GOLD, left, right)


def scene_guarantee():
    stamp = circ(430, 230, 40, "none", CRIMSON, 8) + circ(430, 230, 26, "none", CRIMSON, 5)
    hand = path(
        "M150,250 Q180,180 250,200 L270,240 Q230,250 210,280 Z",
        SKIN, INK, 7,
    )
    return ground() + doc(300, 200, 120, 160, WHITE, None) + stamp + person(150, 250, 0.85, BLUE) + hand


def scene_arpu():
    return ground() + person(260, 230, 1.15, CYAN) + coin(380, 200, 36) + coin(430, 250, 22) + coin(370, 270, 18)


def scene_cac():
    return ground() + magnet(220, 200) + person(400, 230, 1.05, ORANGE) + coin(310, 160, 20) + path(
        "M270,200 C310,170 330,170 360,200", "none", GOLD, 6,
    )


def scene_ltv():
    tree = (
        circ(330, 160, 54, LEAF, INK, 8)
        + circ(280, 190, 36, MINT, INK, 7)
        + circ(380, 195, 32, LEAF, INK, 7)
        + rect(318, 200, 24, 90, 8, WOOD, INK, 7)
    )
    return ground(350) + tree + person(180, 250, 0.9, BLUE) + coin(300, 150, 16) + coin(360, 130, 14) + coin(400, 180, 12)


def scene_churn():
    door = rect(380, 110, 110, 220, 10, "#2a2158", INK, 8) + circ(470, 220, 8, GOLD, INK, 4)
    return (
        ground()
        + door
        + person(240, 250, 1.0, ROSE)
        + path("M280,250 L350,250", "none", CRIMSON, 8)
        + poly([(350, 238), (372, 250), (350, 262)], CRIMSON)
        + elli(200, 250, 16, 8, "#000", .15)
    )


def scene_retention():
    loop = path(
        "M250,180 Q250,120 320,120 Q390,120 390,180 Q390,250 320,250",
        "none", MINT, 12,
    )
    head = poly([(320, 250), (300, 278), (340, 270)], MINT)
    heart = path(
        "M320,250 C300,230 270,245 270,265 C270,290 320,310 320,310 "
        "C320,310 370,290 370,265 C370,245 340,230 320,250Z",
        ROSE, INK, 7,
    )
    return ground() + loop + head + person(320, 200, 0.95, CYAN) + heart


def scene_mrr():
    cal = rect(160, 130, 170, 170, 16, WHITE, INK, 8)
    header = rect(160, 130, 170, 40, 16, VIOLET, INK, 0)
    header2 = rect(160, 150, 170, 20, 0, VIOLET, INK, 0)
    dots = "".join(circ(200 + c * 40, 200 + r * 32, 7, PURPLE, INK, 3) for r in range(3) for c in range(3))
    arrows = path("M360,200 C430,180 430,260 500,240", "none", GOLD, 8)
    return ground() + cal + header + header2 + dots + arrows + coin(520, 230, 32) + coin(500, 290, 20) + coin(560, 280, 16)


def scene_saas():
    cloud = path(
        "M240,200 Q220,150 270,140 Q300,100 350,120 Q400,100 420,140 "
        "Q470,150 460,200 Q460,240 400,240 H260 Q220,240 240,200Z",
        CYAN, INK, 8,
    )
    window = rect(280, 165, 100, 70, 12, WHITE, INK, 6)
    dots = circ(296, 181, 5, CRIMSON, INK, 2) + circ(312, 181, 5, GOLD, INK, 2) + circ(328, 181, 5, MINT, INK, 2)
    return ground() + cloud + window + dots + coin(500, 250, 26) + coin(540, 290, 18)


def scene_mvp():
    cube = (
        poly([(320, 140), (400, 180), (320, 220), (240, 180)], CYAN)
        + poly([(240, 180), (320, 220), (320, 300), (240, 260)], VIOLET)
        + poly([(320, 220), (400, 180), (400, 260), (320, 300)], NAVY)
    )
    check = path("M470,230 L500,260 L560,180", "none", MINT, 14)
    return ground() + cube + check


def scene_pmf():
    piece = path(
        "M220,150 H300 Q300,150 300,180 Q330,180 330,210 Q300,210 300,240 "
        "H220 Q220,240 220,210 Q190,210 190,180 Q220,180 220,150Z",
        ROSE, INK, 8,
    )
    slot = path(
        "M340,150 H500 V270 H340 V240 Q370,240 370,210 Q340,210 340,180 Z",
        PANEL, INK, 8,
    )
    return ground() + slot + piece + highlight(250, 170, 16, 6, .35)


def scene_pivot():
    return ground() + arrow_turn(330, 230) + circ(240, 250, 18, ORANGE, INK, 7) + rocket(470, 230, 0.45, LIME)


def scene_equity():
    return ground() + pie(320, 200, 90, ((0, 0.7, BLUE), (0.7, 1.0, GOLD)))


def scene_dilution():
    return ground() + pie(320, 200, 90, ((0, 0.45, BLUE), (0.45, 0.7, MINT), (0.7, 1.0, GOLD)))


def scene_captable():
    board = rect(150, 110, 340, 220, 16, WHITE, INK, 8)
    bars = (
        rect(190, 150, 200, 28, 8, BLUE, INK, 5)
        + rect(190, 198, 130, 28, 8, GOLD, INK, 5)
        + rect(190, 246, 80, 28, 8, ROSE, INK, 5)
    )
    faces = person(460, 165, 0.4, BLUE) + person(460, 215, 0.4, GOLD) + person(460, 265, 0.4, ROSE)
    return ground() + board + bars + faces


def scene_stockoption():
    ticket = rect(180, 150, 220, 130, 18, CREAM, INK, 8)
    dashes = "".join(circ(200 + i * 22, 215, 4, ROSE, "none", 0) for i in range(8))
    key = (
        circ(470, 200, 28, GOLD, INK, 7)
        + rect(494, 192, 70, 16, 6, GOLD, INK, 6)
        + rect(540, 192, 10, 28, 3, GOLD, INK, 4)
        + rect(556, 192, 10, 22, 3, GOLD, INK, 4)
    )
    star = speech_burst(290, 200, GOLD)
    return ground() + ticket + dashes + key + star


def scene_seed():
    return ground() + pot(320, 260) + sprout(320, 200, 1.15) + coin(430, 250, 22) + coin(200, 270, 16)


def scene_series_a():
    return ground() + pot(260, 280) + sprout(260, 210, 0.7) + rocket(420, 200, 0.85, CYAN) + coin(520, 300, 18)


def scene_series_b():
    tree = (
        circ(400, 150, 70, LEAF, INK, 8)
        + circ(340, 180, 46, MINT, INK, 7)
        + circ(460, 190, 44, LEAF, INK, 7)
        + rect(386, 200, 28, 110, 8, WOOD, INK, 7)
    )
    return ground() + rocket(200, 210, 0.7, PURPLE) + tree + coin_stack(520, 300, 5, 20)


def scene_ma():
    return (
        ground()
        + building(230, 320, 100, 160, PANEL, 4, 2)
        + building(430, 320, 100, 160, VIOLET, 4, 2)
        + path("M300,200 L360,200", "none", GOLD, 10)
        + poly([(360, 188), (382, 200), (360, 212)], GOLD)
        + poly([(300, 188), (278, 200), (300, 212)], GOLD)
    )


def scene_ipo():
    bell = (
        path(
            "M270,155 Q270,112 320,100 Q370,112 370,155 L390,215 "
            "Q390,248 320,258 Q250,248 250,215 Z",
            GOLD, INK, 8,
        )
        + circ(320, 96, 14, GOLD, INK, 6)
        + elli(320, 268, 28, 10, AMBER, 1, INK, 6)
        + rect(240, 280, 160, 36, 10, PANEL, INK, 7)
    )
    light = path("M200,110 L160,300 H480 L440,110 Z", GOLD, "none", 0)
    sparkles = speech_burst(150, 120, CYAN) + speech_burst(500, 110, ROSE)
    return ground() + f'<g opacity=".22">{light}</g>' + bell + sparkles + person(170, 290, 0.55, BLUE) + person(470, 290, 0.55, PINK)


def scene_aov():
    return ground() + bag(300, 230, ORANGE) + coin(410, 250, 28) + coin(450, 290, 20) + coin(390, 300, 16)


def scene_startup():
    garage = rect(140, 200, 160, 120, 12, PANEL, INK, 8) + rect(160, 230, 120, 90, 8, "#1c1840", INK, 6)
    return ground() + garage + rocket(400, 190, 1.05, CYAN)


def scene_lean():
    ring = circ(320, 200, 90, "none", CYAN, 12)
    arrows = (
        poly([(320, 92), (304, 118), (336, 118)], CYAN)
        + poly([(410, 245), (432, 220), (444, 252)], CYAN)
        + poly([(214, 245), (196, 220), (184, 252)], CYAN)
    )
    nodes = circ(320, 110, 16, GOLD, INK, 6) + circ(400, 250, 16, MINT, INK, 6) + circ(240, 250, 16, ROSE, INK, 6)
    return ground() + ring + arrows + nodes


def scene_milestone():
    path_road = path("M120,300 Q250,250 320,220 Q420,180 540,160", "none", "#4a508c", 18)
    stones = "".join(circ(160 + i * 80, 290 - i * 30, 10, GOLD if i == 2 else WHITE, INK, 5) for i in range(5))
    return ground() + path_road + stones + flag(400, 210, ROSE, 80) + person(250, 280, 0.7, CYAN)


def scene_deathvalley():
    valley = path(
        "M60,140 L160,140 L250,300 L390,300 L500,140 H580 L500,340 H140 Z",
        "#2a2150", INK, 8,
    )
    sun = circ(460, 110, 28, GOLD, INK, 7)
    tight = path("M250,300 C300,250 340,250 390,300", "none", CRIMSON, 8)
    person_s = person(320, 270, 0.55, ROSE)
    return ground(360, 260) + valley + sun + tight + person_s


def scene_jcurve():
    axes = line(140, 80, 140, 320, PURPLE, 6) + line(140, 320, 540, 320, PURPLE, 6)
    curve = path(
        "M160,200 C200,200 220,280 280,300 C340,320 360,200 420,140 C460,100 500,90 540,80",
        "none", MINT, 14,
    )
    return ground(360, 200) + axes + curve + circ(280, 300, 10, CRIMSON, INK, 4) + circ(540, 80, 10, GOLD, INK, 4)


def scene_dau():
    sun = circ(200, 140, 50, GOLD, INK, 8) + "".join(
        line(
            200 + 70 * math.cos(i * math.tau / 8),
            140 + 70 * math.sin(i * math.tau / 8),
            200 + 88 * math.cos(i * math.tau / 8),
            140 + 88 * math.sin(i * math.tau / 8),
            AMBER, 8,
        )
        for i in range(8)
    )
    people = person(340, 250, 0.8, CYAN) + person(420, 260, 0.75, ROSE) + person(500, 250, 0.8, LIME)
    return ground() + sun + people


def scene_tam():
    return ground() + circ(320, 200, 120, BLUE, INK, 8) + circ(320, 200, 80, "#7cbcff", INK, 0) + circ(320, 200, 28, GOLD, INK, 6)


def scene_sam():
    return (
        ground()
        + circ(320, 200, 120, "#2a3a70", INK, 6)
        + circ(320, 200, 78, CYAN, INK, 8)
        + circ(320, 200, 28, GOLD, INK, 6)
    )


def scene_som():
    return (
        ground()
        + circ(320, 200, 120, "#2a3a70", INK, 5)
        + circ(320, 200, 78, "#3d5a88", INK, 5)
        + circ(320, 200, 42, GOLD, INK, 8)
        + flag(320, 200, ROSE, 54)
    )


def scene_cpc():
    pointer = poly([(300, 160), (300, 280), (330, 250), (360, 330), (382, 322), (352, 242), (400, 242)], WHITE)
    coin_c = coin(430, 170, 30)
    burst = speech_burst(300, 160, GOLD)
    return ground() + burst + pointer + coin_c


def scene_cpa():
    check = circ(260, 200, 70, MINT, INK, 8) + path("M220,200 L250,230 L310,160", "none", INK, 14)
    return ground() + check + coin(430, 230, 32) + coin(480, 280, 20)


def scene_valuation():
    gem = poly([(320, 110), (400, 170), (320, 300), (240, 170)], CYAN)
    gem2 = poly([(320, 110), (360, 170), (320, 170)], WHITE)
    tape = rect(180, 200, 280, 22, 6, GOLD, INK, 5)
    return ground() + building(160, 320, 70, 110, PANEL, 3, 2) + gem + gem2 + tape


def scene_premoney():
    return ground() + building(300, 330, 130, 200, PANEL, 5, 3) + coin(470, 180, 24) + path(
        "M470,220 L470,280", "none", GOLD, 8,
    )


def scene_postmoney():
    return (
        ground()
        + building(300, 330, 150, 230, VIOLET, 5, 3)
        + coin(300, 140, 28)
        + speech_burst(460, 160, GOLD)
        + coin_stack(500, 300, 4, 20)
    )


def scene_angel():
    wings = (
        path(
            "M260,180 Q180,120 140,180 Q180,200 230,200 Z",
            WHITE, INK, 7,
        )
        + path(
            "M380,180 Q460,120 500,180 Q460,200 410,200 Z",
            WHITE, INK, 7,
        )
    )
    halo = elli(320, 112, 36, 12, "none", 1, GOLD, 8)
    return ground() + wings + halo + person(320, 220, 1.05, CREAM) + coin(200, 280, 22) + coin(440, 280, 22)


def scene_vc():
    case = rect(220, 180, 200, 130, 16, NAVY, INK, 8) + rect(280, 160, 80, 28, 10, NAVY, INK, 7)
    lens = circ(470, 170, 36, CYAN, INK, 8) + circ(470, 170, 18, WHITE, INK, 5)
    handle = rect(430, 200, 90, 22, 8, PANEL, INK, 6)
    return ground() + case + case and "" + lens + handle + coin_stack(200, 300, 3, 18) + rect(220, 180, 200, 130, 16, NAVY, INK, 8) + rect(280, 160, 80, 28, 10, NAVY, INK, 7)


def scene_cvc():
    return (
        ground()
        + building(230, 320, 120, 180, PANEL, 5, 3)
        + sprout(430, 250, 1.0)
        + pot(430, 300)
        + path("M310,220 C360,200 370,220 400,240", "none", GOLD, 8)
        + poly([(400, 226), (420, 248), (390, 252)], GOLD)
    )


def scene_accelerator():
    return ground() + rocket(320, 190, 1.2, ORANGE) + circ(200, 280, 10, GOLD, "none", 0) + circ(440, 300, 8, CYAN, "none", 0)


def scene_incubator():
    nest = elli(320, 280, 130, 40, WOOD, 1, INK, 8)
    egg = elli(300, 230, 40, 54, CREAM, 1, INK, 7) + elli(360, 240, 32, 44, WHITE, 1, INK, 7)
    crack = path("M300,210 L310,230 L296,240 L308,255", "none", INK, 5)
    sprout_s = sprout(320, 200, 0.45)
    return ground() + nest + egg + crack + sprout_s


def scene_tips():
    shield = path(
        "M320,110 L400,150 V230 Q400,280 320,310 Q240,280 240,230 V150 Z",
        MINT, INK, 8,
    )
    return ground() + shield + handshake(320, 230) + coin(200, 140, 18) + coin(440, 140, 18)


def scene_demoday():
    stage = path("M120,280 H520 L500,320 H140 Z", NAVY, INK, 8)
    light = path("M320,80 L220,280 H420 Z", GOLD, INK, 0)
    light_fill = path("M320,80 L220,280 H420 Z", GOLD, "none", 0)
    # make spotlight translucent by using opacity on a group
    spot = f'<g opacity=".28">{light_fill}</g>' + path("M320,80 L220,280 H420 Z", "none", GOLD, 6)
    curtain_l = path("M80,80 Q140,160 80,300 H40 V80 Z", CRIMSON, INK, 7)
    curtain_r = path("M560,80 Q500,160 560,300 H600 V80 Z", CRIMSON, INK, 7)
    return ground(350) + stage + spot + curtain_l + curtain_r + person(320, 230, 0.9, CYAN) + person(200, 300, 0.45, ROSE) + person(250, 305, 0.45, GOLD) + person(400, 305, 0.45, LIME)


def scene_exit():
    door = rect(360, 100, 120, 230, 12, "#3b2a78", INK, 8)
    arch = path("M360,140 Q420,70 480,140", "#3b2a78", INK, 8)
    glow = elli(420, 200, 30, 80, GOLD, .35)
    arrow = path("M160,230 H300", "none", MINT, 12) + poly([(300, 214), (330, 230), (300, 246)], MINT)
    return ground() + door + arch + glow + arrow + person(200, 230, 0.9, BLUE) + coin(500, 250, 22) + coin(540, 290, 16)


def scene_ir():
    board = rect(150, 110, 240, 170, 14, WHITE, INK, 8)
    chart = path("M180,230 L220,200 L260,210 L310,150 L360,160", "none", VIOLET, 8)
    dots = circ(180, 230, 6, GOLD, INK, 3) + circ(310, 150, 6, GOLD, INK, 3)
    return ground() + board + chart + dots + person(460, 240, 1.05, CYAN) + person(200, 300, 0.5, ROSE) + person(260, 305, 0.5, GOLD)


def scene_safe():
    return ground() + chest(300, 230, False) + path(
        "M430,200 L500,160", "none", GOLD, 8,
    ) + circ(530, 150, 22, GOLD, INK, 7) + rect(548, 144, 40, 12, 4, GOLD, INK, 5)


def scene_convertible():
    return (
        ground()
        + doc(230, 200, 100, 140, CREAM)
        + path("M310,200 C360,160 360,240 420,200", "none", CYAN, 10)
        + poly([(420, 186), (448, 200), (420, 214)], CYAN)
        + pie(500, 210, 50, ((0, 0.5, BLUE), (0.5, 1, GOLD)))
    )


def scene_ordinary():
    cert = rect(180, 120, 280, 180, 16, CREAM, INK, 8)
    seal = circ(400, 250, 28, BLUE, INK, 7) + circ(400, 250, 14, GOLD, INK, 5)
    ribbon = poly([(400, 270), (384, 310), (400, 296), (416, 310)], CRIMSON)
    return ground() + cert + seal + ribbon + path("M210,170 H400", "none", PURPLE, 8) + path("M210,200 H360", "none", PURPLE, 6)


def scene_preferred():
    cert = rect(180, 120, 280, 180, 16, "#fff0c8", INK, 8)
    crown = path(
        "M250,150 L270,190 L300,155 L330,190 L350,150 L350,200 H250 Z",
        GOLD, INK, 7,
    )
    seal = circ(400, 250, 28, GOLD, INK, 7)
    return ground() + cert + crown + seal + path("M210,220 H360", "none", AMBER, 6)


def scene_cb():
    bond = rect(150, 140, 180, 140, 16, PANEL, INK, 8) + rect(170, 170, 140, 20, 6, GOLD, INK, 4)
    return (
        ground()
        + bond
        + path("M350,210 C400,170 400,250 450,210", "none", MINT, 10)
        + poly([(450, 196), (478, 210), (450, 224)], MINT)
        + pie(530, 210, 48, ((0, 1, BLUE),))
    )


def scene_bw():
    bond = rect(150, 140, 180, 140, 16, PANEL, INK, 8) + rect(170, 170, 140, 20, 6, GOLD, INK, 4)
    ticket = rect(360, 170, 90, 70, 12, CREAM, INK, 7)
    return ground() + bond + ticket + path("M460,200 H510", "none", CYAN, 8) + poly([(510, 188), (534, 200), (510, 212)], CYAN) + circ(560, 200, 26, GOLD, INK, 7)


def scene_rcps():
    share = pie(240, 210, 70, ((0, 1, GOLD),))
    arrows = (
        path("M330,180 C390,120 450,120 500,170", "none", MINT, 8)
        + poly([(500, 156), (528, 176), (492, 184)], MINT)
        + path("M330,240 C390,300 450,300 500,250", "none", ROSE, 8)
        + poly([(500, 264), (528, 244), (492, 236)], ROSE)
    )
    return ground() + share + arrows + circ(540, 160, 24, CYAN, INK, 6) + circ(540, 260, 24, CRIMSON, INK, 6)


def scene_loi():
    env = path("M180,160 H460 L460,300 H180 Z", WHITE, INK, 8)
    flap = path("M180,160 L320,240 L460,160", "none", INK, 8)
    flap2 = path("M180,160 L320,240 L460,160 Z", CREAM, INK, 8)
    stamp = handshake(320, 250)
    return ground() + env + flap2 + flap + circ(400, 250, 26, ROSE, INK, 6)


def scene_loc():
    paper = doc(280, 200, 130, 170, WHITE)
    wax = circ(400, 250, 34, CRIMSON, INK, 7) + circ(400, 250, 16, GOLD, INK, 5)
    ribbon = rect(394, 250, 12, 70, 3, GOLD, INK, 4)
    return ground() + paper + ribbon + wax


def scene_gp():
    wheel = circ(320, 210, 80, NAVY, INK, 8)
    inner = circ(320, 210, 16, GOLD, INK, 6)
    spokes = "".join(
        line(
            320 + 20 * math.cos(i * math.tau / 6),
            210 + 20 * math.sin(i * math.tau / 6),
            320 + 70 * math.cos(i * math.tau / 6),
            210 + 70 * math.sin(i * math.tau / 6),
            CYAN, 8,
        )
        for i in range(6)
    )
    return ground() + wheel + spokes + inner + person(320, 200, 0.7, ORANGE)


def scene_lp():
    ship = path(
        "M180,230 H500 L470,290 H210 Z",
        NAVY, INK, 8,
    )
    mast = line(320, 230, 320, 110, INK, 8) + poly([(320, 110), (320, 200), (410, 170)], CYAN)
    return ground() + ship + mast + person(240, 210, 0.55, ROSE) + person(400, 210, 0.55, GOLD) + coin(200, 200, 16) + coin(440, 200, 16)


def scene_motherfund():
    big = chest(240, 220, True)
    small = (
        rect(430, 230, 70, 44, 10, WOOD, INK, 6)
        + rect(500, 250, 70, 40, 10, WOOD, INK, 6)
        + rect(465, 280, 70, 40, 10, WOOD, INK, 6)
    )
    pour = path("M300,180 C360,160 400,180 450,240", "none", GOLD, 8)
    coins = coin(450, 240, 14) + coin(490, 260, 12) + coin(500, 290, 12)
    return ground() + big + small + pour + coins + coin_stack(160, 300, 3, 16)


def scene_irr():
    return (
        ground()
        + clock(230, 200, 70)
        + path("M330,260 C380,260 400,200 450,150 C480,120 510,110 550,90", "none", MINT, 12)
        + coin(500, 140, 20)
        + coin(540, 100, 16)
    )


def scene_multiple():
    return ground() + coin(200, 230, 40) + path("M260,230 H340", "none", CYAN, 10) + poly([(340, 216), (368, 230), (340, 244)], CYAN) + coin_stack(460, 260, 6, 28)


def scene_secondary():
    cert = rect(270, 160, 100, 80, 12, CREAM, INK, 7) + circ(320, 200, 16, GOLD, INK, 5)
    return ground() + person(180, 230, 1.0, BLUE) + person(460, 230, 1.0, ORANGE) + cert + path(
        "M230,200 L270,200", "none", MINT, 6
    ) + path("M370,200 L410,200", "none", MINT, 6)


# category fallbacks
def cat_funds():
    return ground() + chest(250, 230, True) + coin_stack(430, 280, 5, 26) + coin(500, 230, 22)


def cat_customers():
    return ground() + person(240, 230, 1.05, CYAN) + person(330, 240, 1.0, ROSE) + person(420, 230, 1.05, GOLD)


def cat_product():
    return scene_mvp()


def cat_org():
    return (
        ground()
        + person(320, 140, 0.75, VIOLET)
        + line(320, 190, 320, 220, INK, 6)
        + line(220, 220, 420, 220, INK, 6)
        + person(220, 280, 0.7, BLUE)
        + person(320, 280, 0.7, CYAN)
        + person(420, 280, 0.7, GOLD)
    )


def cat_strategy():
    compass = circ(320, 200, 90, NAVY, INK, 8) + circ(320, 200, 70, "#2d356e", INK, 5)
    needle = poly([(320, 130), (338, 200), (320, 210), (302, 200)], CRIMSON) + poly([(320, 270), (338, 200), (302, 200)], CYAN)
    return ground() + compass + needle + circ(320, 200, 10, GOLD, INK, 5)


def cat_invest():
    bars = (
        rect(200, 220, 50, 100, 10, BLUE, INK, 6)
        + rect(270, 180, 50, 140, 10, VIOLET, INK, 6)
        + rect(340, 140, 50, 180, 10, MINT, INK, 6)
        + rect(410, 100, 50, 220, 10, GOLD, INK, 6)
    )
    return ground() + bars


def cat_supporters():
    return ground() + person(240, 230, 1.0, TEAL) + handshake(360, 250) + coin(480, 230, 24)


def cat_contracts():
    return ground() + doc(270, 200, 120, 160, WHITE) + circ(400, 250, 30, CRIMSON, INK, 7) + circ(400, 250, 14, GOLD, INK, 5)


SCENES = {
    "runway": scene_runway, "burn": scene_burn, "revenue": scene_revenue,
    "profit": scene_profit, "cash-flow": scene_cashflow, "fixed": scene_fixed,
    "cogs": scene_cogs, "bep": scene_bep, "guarantee": scene_guarantee,
    "arpu": scene_arpu, "cac": scene_cac, "ltv": scene_ltv, "churn": scene_churn,
    "retention": scene_retention, "mrr": scene_mrr, "saas": scene_saas,
    "mvp": scene_mvp, "pmf": scene_pmf, "pivot": scene_pivot, "equity": scene_equity,
    "dilution": scene_dilution, "cap-table": scene_captable,
    "stock-option": scene_stockoption, "seed": scene_seed,
    "series-a": scene_series_a, "series-b": scene_series_b, "ma": scene_ma,
    "ipo": scene_ipo, "aov": scene_aov, "startup": scene_startup, "lean": scene_lean,
    "milestone": scene_milestone, "death-valley": scene_deathvalley,
    "j-curve": scene_jcurve, "dau": scene_dau, "tam": scene_tam, "sam": scene_sam,
    "som": scene_som, "cpc": scene_cpc, "cpa": scene_cpa, "valuation": scene_valuation,
    "pre-money": scene_premoney, "post-money": scene_postmoney, "angel": scene_angel,
    "vc": scene_vc, "cvc": scene_cvc, "accelerator": scene_accelerator,
    "incubator": scene_incubator, "tips": scene_tips, "demo-day": scene_demoday,
    "exit": scene_exit, "ir": scene_ir, "safe": scene_safe,
    "convertible-note": scene_convertible, "ordinary": scene_ordinary,
    "preferred": scene_preferred, "cb": scene_cb, "bw": scene_bw, "rcps": scene_rcps,
    "loi": scene_loi, "loc": scene_loc, "gp": scene_gp, "lp": scene_lp,
    "mother-fund": scene_motherfund, "irr": scene_irr, "multiple": scene_multiple,
    "secondary": scene_secondary,
}

CAT_SCENES = {
    "funds": cat_funds, "customers": cat_customers, "product": cat_product,
    "org": cat_org, "strategy": cat_strategy, "invest": cat_invest,
    "supporters": cat_supporters, "contracts": cat_contracts,
}


def write_svg(name, accent, scene_fn):
    svg = frame(name, accent, ground.__doc__ or "" )
    # unique filter/gradient ids cannot include characters other than safe
    uid = name.replace("-", "")
    svg = frame(uid, accent, scene_fn())
    path_out = OUT / f"{name}.svg"
    path_out.write_text(svg, encoding="utf-8")
    if "<text" in svg.lower():
        raise SystemExit(f"text found in {name}")
    return path_out


def write_manifest(ids):
    # 용어 id와 카테고리 기본 썸네일 경로를 프론트에 알려 줍니다.
    lines = [
        "// 위키 썸네일 경로. 없는 용어는 카테고리 기본 그림으로 대체합니다.",
        "const TERM_IDS=new Set([" + ",".join(repr(i) for i in ids) + "]);",
        "export const WIKI_THUMB_CATEGORY=" + "{",
    ]
    for ko, slug in CAT_SLUG.items():
        lines.append(f" {repr(ko)}:{repr(slug)},")
    lines.append("};")
    lines.append(
        "export function wikiThumbPath(id,category){"
        "const file=TERM_IDS.has(id)?id:`cat-${WIKI_THUMB_CATEGORY[category]||'funds'}`;"
        "return `assets/wiki-thumbs/${file}.svg`;"
        "}"
    )
    dest = Path(__file__).resolve().parents[1] / "wiki-thumbs.js"
    dest.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return dest


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    missing = [k for k in TERM_CATEGORY if k not in SCENES]
    extra = [k for k in SCENES if k not in TERM_CATEGORY]
    if missing or extra:
        raise SystemExit(f"scene mismatch missing={missing} extra={extra}")
    written = []
    for tid, cat in TERM_CATEGORY.items():
        written.append(write_svg(tid, CAT_ACCENT[cat], SCENES[tid]))
    for slug, fn in CAT_SCENES.items():
        write_svg(f"cat-{slug}", CAT_ACCENT[slug], fn)
    write_manifest(list(TERM_CATEGORY.keys()))
    print(f"wrote {len(written)} term thumbs and {len(CAT_SCENES)} category fallbacks to {OUT}")


if __name__ == "__main__":
    main()
