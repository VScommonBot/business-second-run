#!/usr/bin/env python3
# 인물 대사 원문을 dialogue-data.js로 내보냅니다.
# -*- coding: utf-8 -*-
from __future__ import annotations
import json
from pathlib import Path

THEMES = ["trust", "quality", "cash", "safety", "self", "people", "growth", "speed"]
CORE = ["mentor", "investor", "cofounder", "staff", "friend", "partner", "family", "customer"]
EXTRA = [
    "public_officer", "rival", "private_lender", "foreign_investor", "creator",
    "freelancer", "expert", "lawyer", "tax_advisor", "accountant", "patent_attorney", "pet",
]
ORIGINAL = {p: 16 for p in CORE}
ORIGINAL.update({p: 1 for p in EXTRA})

POOL = {p: [] for p in CORE + EXTRA}


def add(person: str, theme: str, when, *texts: str) -> None:
    if isinstance(when, str):
        when = [when] if when else []
    elif when is None:
        when = []
    else:
        when = list(when)
    for text in texts:
        text = text.strip()
        if not text:
            raise SystemExit(f"empty line for {person}/{theme}")
        POOL[person].append({"themes": [theme], "when": when, "text": text})


def validate() -> dict[str, int]:
    counts = {}
    errors = []
    for person, lines in POOL.items():
        texts = [x["text"] for x in lines]
        counts[person] = len(texts)
        if len(set(texts)) != len(texts):
            seen = set()
            dups = []
            for t in texts:
                if t in seen:
                    dups.append(t)
                seen.add(t)
            errors.append(f"{person} duplicate: {dups[:3]}")
        need = ORIGINAL[person] * 10
        if len(texts) < need:
            errors.append(f"{person} has {len(texts)} unique lines, need >= {need}")
        by_theme = {t: 0 for t in THEMES}
        for line in lines:
            for t in line["themes"]:
                if t in by_theme:
                    by_theme[t] += 1
        missing = [t for t, n in by_theme.items() if n < (10 if person in CORE else 6)]
        if missing:
            errors.append(f"{person} thin themes {missing}: {by_theme}")
    if errors:
        raise SystemExit("validation failed:\n" + "\n".join(errors))
    return counts


# ---------- 정우진 · 멘토 (합니다체, 약속·현금·품질) ----------
add("mentor", "trust", [],
    "평판은 쌓는 데 십 년, 잃는 데 하루입니다.",
    "어려울 때 지킨 약속을 사람들은 기억합니다.",
    "말은 가볍게, 약속은 무겁게 하세요.",
    "한 번 어긴 기한은 다음 계약서에 조항으로 돌아옵니다.",
)
add("mentor", "trust", "cash_ok",
    "여유가 있을 때 지킨 약속이 나중에 진짜 신용이 됩니다.",
    "돈이 있을 때일수록 조건을 대충 넘기지 마세요.",
)
add("mentor", "trust", "cash_tight",
    "현금이 빠듯할수록 말한 날짜를 지키는 게 남는 방법입니다.",
    "부족한 상황을 숨기기보다, 언제까지 가능한지 먼저 알리세요.",
)
add("mentor", "trust", "cash_crisis",
    "통장이 비어도 거짓말까지 비어서는 안 됩니다.",
    "위급할 때 한 거짓 안내는 나중에 자금보다 비싼 값으로 돌아옵니다.",
)
add("mentor", "trust", "early",
    "처음 세 달이 만납니다. 작은 약속도 기록해 두세요.",
    "아직 이름보다 행동이 먼저 알려지는 시기입니다.",
)
add("mentor", "trust", "mid",
    "어느 정도 알려지면, 예외를 만드는 순간부터 평판이 흔들립니다.",
)
add("mentor", "trust", "late",
    "오래 버틴 회사일수록 사람들은 과거 약속의 이력을 찾아봅니다.",
)
add("mentor", "trust", "no_revenue",
    "매출이 없어도 거래 상대는 대표의 말을 벌써 저울질합니다.",
)
add("mentor", "trust", "rev_up",
    "숫자가 오를 때 안내를 바꾸면, 성장이 아니라 변덕으로 보입니다.",
)
add("mentor", "trust", "rev_down",
    "매출이 줄수록 숨기지 말고 원인과 다음 조치를 같이 말하세요.",
)
add("mentor", "trust", "health_low",
    "지친 상태의 즉답은 나중에 주워 담기 어렵습니다. 하루만 미루세요.",
)
add("mentor", "trust", "first_meet",
    "처음 만나는 자리에서는 화려한 계획보다 지킬 수 있는 한 줄을 말하세요.",
)
add("mentor", "trust", "return_visit",
    "다시 만났을 때 지난번에 한 말을 그대로 기억하는 사람이 많습니다.",
)
add("mentor", "trust", "event_ok",
    "일이 잘 풀린 뒤일수록 공로는 나누고, 약속은 문장 그대로 남기세요.",
)
add("mentor", "trust", "event_bad",
    "잘못을 먼저 인정하는 쪽이, 나중에 변명하는 쪽보다 값이 쌉니다.",
)
add("mentor", "trust", "has_debt",
    "빌린 돈이 있으면 상환 일정을 상대보다 먼저 꺼내 놓는 편이 낫습니다.",
)

add("mentor", "quality", [],
    "기본을 지키는 곳이 오래갑니다.",
    "하나를 제대로 하면 나머지는 따라옵니다.",
    "손님 앞에 내놓기 전에, 스스로 돈 내고 살 만한지 물어보세요.",
    "대충 넘어간 마감은 반드시 다음 달의 수습 시간이 됩니다.",
)
add("mentor", "quality", "cash_ok",
    "여유가 있을 때 품질을 깎으면, 나중에 돈이 없을 때는 더 깎게 됩니다.",
    "지금 단가를 조금 낮추는 것보다, 다시 안 오게 만드는 손실이 큽니다.",
)
add("mentor", "quality", "cash_tight",
    "빠듯할수록 범위를 줄이세요. 품질을 줄이는 것과는 다릅니다.",
    "모든 걸 조금 대충 하기보다, 한 가지만 제대로 하는 편이 쌉니다.",
)
add("mentor", "quality", "cash_crisis",
    "급한 현금 때문에 불량에 눈감으면, 다음 주문이 끊깁니다.",
    "지금은 파는 양을 줄이더라도 내놓을 기준은 지키세요.",
)
add("mentor", "quality", "early",
    "첫 제품의 흠은 오래 기억됩니다. 출시일을 조금 미루는 게 나을 때도 있습니다.",
)
add("mentor", "quality", "customers_few",
    "손님이 적을 때가 오히려 피드백을 깊게 들을 기회입니다.",
)
add("mentor", "quality", "customers_many",
    "손님이 늘면 기준이 흐려집니다. 거절할 주문을 미리 정하세요.",
)
add("mentor", "quality", "rev_up",
    "잘 팔릴 때일수록 불만 한 건을 대충 넘기지 마세요.",
)
add("mentor", "quality", "health_low",
    "피곤하면 검수 눈이 먼저 흐려집니다. 출고 전에 한 사람만 더 보게 하세요.",
)
add("mentor", "quality", "event_ok",
    "반응이 좋았을 때 바로 범위를 넓히기보다, 잘된 이유를 먼저 적으세요.",
)
add("mentor", "quality", "event_bad",
    "실패했다면 변명보다 재발 방지 한 줄을 공정에 남기세요.",
)
add("mentor", "quality", "mid",
    "익숙해진 공정일수록 기본 점검을 건너뛰기 쉽습니다.",
)
add("mentor", "quality", "late",
    "오래된 제품일수록 처음의 기준이 어디 있는지 다시 펴 보세요.",
)

add("mentor", "cash", [],
    "장부에 이익이 나도 통장에 돈이 없을 수 있습니다.",
    "통장에 석 달 치가 없으면 결정이 흔들립니다.",
    "매출은 자랑이 되고, 현금은 내일이 됩니다.",
    "나갈 날짜가 정해진 돈부터 달력에 먼저 쓰세요.",
)
add("mentor", "cash", "cash_ok",
    "여유가 보일 때 고정비를 올리면, 다음 비수기에 그 금액이 남습니다.",
    "지금 쓸 수 있다고 다 쓰지는 마세요. 다음 석 달을 남겨 두세요.",
)
add("mentor", "cash", "cash_tight",
    "빠듯하면 지출을 미루는 것과 끊는 것을 나누어 보세요.",
    "작은 외상이 쌓이면 큰 투자보다 먼저 회사를 조입니다.",
)
add("mentor", "cash", "cash_crisis",
    "지금 필요한 건 멋진 계획이 아니라, 이번 달 나갈 돈의 목록입니다.",
    "위급할 때는 자존심보다 결제 일정을 조정하는 대화가 먼저입니다.",
)
add("mentor", "cash", "has_debt",
    "이자와 원금 날짜를 매출 목표보다 위에 두세요.",
)
add("mentor", "cash", "no_revenue",
    "아직 들어오지 않는 돈을 이미 쓴 것처럼 계산하지 마세요.",
)
add("mentor", "cash", "profit_on",
    "흑자가 났어도 미수금이 묶여 있으면 아직 안심할 때가 아닙니다.",
)
add("mentor", "cash", "profit_off",
    "적자는 부끄러울 일이 아닙니다. 모른 척하는 것이 문제입니다.",
)
add("mentor", "cash", "early",
    "초기의 현금은 시간입니다. 시간을 사는 지출인지 먼저 나누세요.",
)
add("mentor", "cash", "late",
    "오래 운영할수록 관성에 의한 구독과 고정비가 쌓입니다. 목록을 다시 보세요.",
)
add("mentor", "cash", "event_bad",
    "한 번의 손실을 만회하겠다고 더 큰 판을 벌이면 흔히 두 번 잃습니다.",
)
add("mentor", "cash", "year_end",
    "연말에는 미수금과 세금 일정을 매출 자랑보다 먼저 확인하세요.",
)

add("mentor", "safety", [],
    "지키는 선택도 전략입니다.",
    "살아남은 회사만 다음 기회를 만납니다.",
    " 지금 하지 말 일을 먼저 정하는 게 용기의 다른 이름입니다.",
    "모든 기회를 잡으려다 본업의 숨이 먼저 끊어집니다.",
)
add("mentor", "safety", "cash_ok",
    "여유가 있어도 한 번에 판을 두 배로 키우지는 마세요.",
    "지금 지켜 둔 현금이, 다음 위기의 협상력을 만듭니다.",
)
add("mentor", "safety", "cash_tight",
    "빠듯할 때는 새로운 실험의 크기를 반으로 줄이세요.",
    "지금은 이기는 달보다 버티는 달이 점수입니다.",
)
add("mentor", "safety", "cash_crisis",
    "불씨를 키울 때가 아닙니다. 불을 끄고 숨을 고르세요.",
    "위급하면 확장 이야기를 잠시 서랍에 넣으세요.",
)
add("mentor", "safety", "early",
    "시작하자마자 모든 채널을 열 필요는 없습니다.",
)
add("mentor", "safety", "late",
    "익숙한 위험일수록 방심합니다. 보험과 계약 만기부터 다시 보세요.",
)
add("mentor", "safety", "has_debt",
    "갚을 일정이 있는 상태에서 한 번의 도박은 회사 전체가 담보가 됩니다.",
)
add("mentor", "safety", "health_low",
    "몸이 기우는 대표의 회사는, 숫자보다 먼저 위험이 커집니다.",
)
add("mentor", "safety", "event_ok",
    "잘된 한 번을 운명으로 여기고 판을 키우지 마세요.",
)
add("mentor", "safety", "event_bad",
    "다친 다음에는 같은 높이를 바로 다시 오르지 마세요.",
)
add("mentor", "safety", "year_start",
    "해의 처음에는 목표보다 올해 지지 않을 선을 먼저 적으세요.",
)
add("mentor", "safety", "team_on",
    "대표 혼자 감당하던 위험을, 팀에게 설명하지 않고 키우면 안 됩니다.",
)

add("mentor", "self", [],
    "대표의 체력도 회사 자산입니다.",
    "지쳤을 때 내린 결정은 나중에 비싼 대가를 치를 수 있습니다.",
    "쉬는 날을 달력에 쓰지 않으면, 그 날은 존재하지 않습니다.",
    "대표가 모든 일을 쥐고 있으면 회사는 대표의 체력만큼만 큽니다.",
)
add("mentor", "self", "health_low",
    "오늘은 용기보다 수면이 필요한 날로 보입니다.",
    "몸이 경고하는데 일정을 더 넣는 건 용기가 아니라 무모함입니다.",
)
add("mentor", "self", "health_mid",
    "조금씩 쌓인 피로는 한 달 뒤에 결정의 질로 나타납니다.",
)
add("mentor", "self", "health_ok",
    "컨디션이 좋을 때 다음 달의 휴식도 미리 막아 두세요.",
)
add("mentor", "self", "early",
    "초기의 열정은 소중하지만, 그 열정으로 잠을 끊지는 마세요.",
)
add("mentor", "self", "late",
    "오래 가려면 대표의 일과에 끝나는 시각이 있어야 합니다.",
)
add("mentor", "self", "cash_crisis",
    "돈이 급할수록 밤새운 판단은 피하세요. 아침의 머리가 더 쌉니다.",
)
add("mentor", "self", "team_on",
    "대표가 쉬지 않으면 팀도 쉬는 신호를 받지 못합니다.",
)
add("mentor", "self", "event_bad",
    "실패한 날을 만회하겠다고 밤을 새우면, 다음 실수가 따라옵니다.",
)
add("mentor", "self", "return_visit",
    "지난번보다 얼굴이 어두워 보입니다. 일정보다 컨디션을 먼저 물어보겠습니다.",
)
add("mentor", "self", "year_end",
    "연말에 모든 걸 몰아서 처리하려는 버릇이 몸을 먼저 상하게 합니다.",
)
add("mentor", "self", "cash_ok",
    "돈이 풀렸다고 일정을 가득 채우지 마세요. 여유는 사람을 위해서도 씁니다.",
)

add("mentor", "people", [],
    "숫자만 보고는 사람이 왜 그런 결정을 했는지 알기 어렵습니다.",
    "떠나는 이유를 먼저 들어 보세요.",
    "칭찬은 공개적으로, 나무람은 짧게 따로 하세요.",
    "사람을 도구처럼 쓰면 그 도구는 오래 남아 있지 않습니다.",
)
add("mentor", "people", "team_on",
    "팀이 생긴 뒤에는 대표의 침묵도 지시가 됩니다. 기준을 말로 남기세요.",
    "같은 일을 반복해서 야근하게 되면, 그건 열정이 아니라 설계 문제입니다.",
)
add("mentor", "people", "team_off",
    "아직 혼자여도, 나중에 들어올 사람이 이해할 메모를 지금 남기세요.",
)
add("mentor", "people", "morale_low",
    "사기가 떨어진 자리에서 목표만 올리면 사람은 더 빨리 떠납니다.",
)
add("mentor", "people", "cash_tight",
    "보수를 미룰 거면 날짜와 이유를 같은 주에 알리세요.",
)
add("mentor", "people", "cash_crisis",
    "위급함을 팀에 숨기면, 소문은 사실보다 나쁘게 퍼집니다.",
)
add("mentor", "people", "early",
    "첫 동료를 고를 때는 화려한 이력보다 함께 고칠 수 있는지를 보세요.",
)
add("mentor", "people", "late",
    "오래된 동료의 불만은 작은 일로 보이지 마세요. 쌓인 이력이 있습니다.",
)
add("mentor", "people", "event_ok",
    "잘된 일의 공은 현장에서 일한 사람 이름부터 부르세요.",
)
add("mentor", "people", "event_bad",
    "잘못의 책임을 아래로 밀어 내면, 다음부터는 보고가 올라오지 않습니다.",
)
add("mentor", "people", "health_low",
    "지친 대표는 짧고 날카로운 말을 하기 쉽습니다. 오늘은 결정을 미루세요.",
)
add("mentor", "people", "first_meet",
    "사람을 처음 볼 때는 조건보다 이 사람이 이 일을 왜 하려는지를 들으세요.",
)

add("mentor", "growth", [],
    "클 수 있을 때 크되, 왜 크는지는 알고 가세요.",
    "성장은 수단입니다. 목적을 다시 적어 보세요.",
    "숫자만 커지고 일이 버거우면, 그건 성장이 아니라 부풀어 오름입니다.",
    "한 줄의 매출보다, 같은 손님이 다시 오는 이유를 키우세요.",
)
add("mentor", "growth", "cash_ok",
    "자금이 있을 때 키우되, 키운 뒤의 고정비를 먼저 계산하세요.",
)
add("mentor", "growth", "cash_tight",
    "빠듯한 상태에서 채널을 늘리면 숨만 가빠집니다.",
)
add("mentor", "growth", "cash_crisis",
    "지금은 성장 이야기의 계절이 아닙니다. 먼저 숨부터 붙이세요.",
    "규모를 줄이는 것도 전략입니다. 부끄러워하지 마세요.",
)
add("mentor", "growth", "early",
    "첫해에는 모든 시장을 가지려 하지 마세요. 한 손님을 제대로 이해하세요.",
)
add("mentor", "growth", "mid",
    "어느 정도 길이 보이면, 하지 않을 일을 목록에서 지우세요.",
)
add("mentor", "growth", "late",
    "오래 달린 뒤에는 속력보다 방향이 맞는지 다시 물으세요.",
)
add("mentor", "growth", "rev_up",
    "오르는 숫자를 추세라고 단정하기 전에, 한 달만 더 지켜보세요.",
)
add("mentor", "growth", "rev_down",
    "줄어들 때는 광고를 늘리기 전에, 떠나가는 이유를 먼저 들으세요.",
)
add("mentor", "growth", "customers_many",
    "손님이 많아지면 모두를 만족시키려다 핵심 손님이 떠납니다.",
)
add("mentor", "growth", "event_ok",
    "한 번의 대박을 다음 달의 기본값으로 잡지 마세요.",
)
add("mentor", "growth", "team_off",
    "혼자인 상태에서 주문을 두 배로 받으면, 품질이 먼저 무너집니다.",
)

# typo check - I accidentally used Chinese 轨道. Must fix to Korean.
# I'll fix after writing - "어느 정도 轨道이 보이면" -> "어느 정도 길이 보이면"

add("mentor", "speed", [],
    "급할수록 계획서를 다시 펴 보세요.",
    "빨리 가는 것과 서두르는 것은 다릅니다.",
    "오늘 안에 할 일과 이번 주에 할 일을 섞지 마세요.",
    "속도는 줄일 일을 정할 때 생깁니다.",
)
add("mentor", "speed", "cash_ok",
    "자금이 넉넉하다고 일정을 앞당기면, 검토하지 못한 조항이 남습니다.",
)
add("mentor", "speed", "cash_tight",
    "현금이 급할수록 성급한 계약에 서명하기 쉽습니다. 하룻밤을 두세요.",
)
add("mentor", "speed", "cash_crisis",
    "급하다고 조건 없이 돈을 받으면, 속도의 대가가 이자로 남습니다.",
)
add("mentor", "speed", "early",
    "시작의 조급함은 이해합니다. 그래도 첫 출시는 하루를 더 보는 편이 낫습니다.",
)
add("mentor", "speed", "late",
    "익숙하다고 검토를 건너뛰면, 오래된 회사도 한 번에 넘어집니다.",
)
add("mentor", "speed", "health_low",
    "잠이 부족한 날의 빠른 결정은 다음 주에 다시 고치게 됩니다.",
)
add("mentor", "speed", "rev_up",
    "주문이 늘 때 납기를 무리하게 당기면, 칭찬보다 클레임이 먼저 옵니다.",
)
add("mentor", "speed", "event_ok",
    "잘된 흐름을 이어 가되, 다음 단계는 하루를 쉬고 설계하세요.",
)
add("mentor", "speed", "event_bad",
    "만회하려고 서두르면 같은 구덩이에 더 깊게 들어갑니다.",
)
add("mentor", "speed", "team_on",
    "대표의 급한 마음이 팀의 실수로 옮겨 가지 않게, 우선순위를 하나만 남기세요.",
)
add("mentor", "speed", "year_end",
    "연말 실적을 채우려고 밀어붙인 숫자는 보통 다음 해에 바로잡게 됩니다.",
)
add("mentor", "speed", "first_meet",
    "처음 제안이 급해 보여도, 답은 오늘 밤에 하지 않아도 됩니다.",
)


add("mentor", "trust", "relation_good",
    "이만큼 이야기를 나눈 사이라면, 불편한 진실도 돌려 말하지 않겠습니다.",
)
add("mentor", "trust", "relation_risk",
    "사이가 어색해졌다면 새로운 부탁보다 지난 약속을 먼저 확인합시다.",
)
add("mentor", "quality", "profit_on",
    "이익이 난 달일수록 원가를 깎아 품질을 흔들지 마세요.",
)
add("mentor", "quality", "profit_off",
    "적자일 때 품질을 지키면 손님이 남는 경우가 많습니다.",
)
add("mentor", "cash", "mid",
    "이 시기에는 매출 성장과 현금 잔고를 같은 그래프에 놓고 보세요.",
)
add("mentor", "cash", "customers_none",
    "손님이 생기기 전의 현금은 연습탄이 아닙니다. 한 번 쓰면 다시 채워지지 않습니다.",
)
add("mentor", "safety", "customers_none",
    "아직 검증 전이면, 큰 계약보다 작은 실험이 안전합니다.",
)
add("mentor", "safety", "rev_down",
    "떨어지는 숫자를 만회하려고 새로운 업을 곁들이면 숨이 더 가쁩니다.",
)
add("mentor", "self", "mid",
    "이 무렵부터 대표의 일정이 회사의 일정이 됩니다. 빈칸을 남겨 두세요.",
)
add("mentor", "self", "customers_many",
    "손님이 늘수록 대표가 모든 문의에 답할 필요는 없습니다.",
)
add("mentor", "people", "customers_few",
    "손님이 적어도 응대하는 태도는 이미 회사의 얼굴입니다.",
)
add("mentor", "people", "return_visit",
    "다시 보니, 사람 이야기는 숫자 보고보다 짧게 끝나는 버릇이 있어 보입니다.",
)
add("mentor", "growth", "profit_on",
    "이익이 난 김에 영역을 넓히기 전에, 이 이익이 반복 가능한지 보세요.",
)
add("mentor", "growth", "year_start",
    "새해 목표를 두 배로 적기 전에, 작년의 병목부터 지우세요.",
)
add("mentor", "speed", "customers_none",
    "아직 손님이 없는데 출시일을 앞당기는 건 속도가 아니라 불안입니다.",
)
add("mentor", "speed", "mid",
    "중간쯤 오면 결정이 빨라집니다. 그래서 한 줄짜리 검토 목록이 필요합니다.",
)
add("mentor", "cash", "first_meet",
    "처음 드릴 조언은 단순합니다. 통장 잔액과 나갈 돈을 한 장에 적으세요.",
)
add("mentor", "quality", "first_meet",
    "처음 보는 제품이라면, 자랑보다 아직 못 하는 범위를 먼저 듣겠습니다.",
)
add("mentor", "safety", "first_meet",
    "첫 만남에서 무모한 확신을 보이면, 저는 오히려 걱정을 먼저 합니다.",
)
add("mentor", "people", "cash_ok",
    "여유가 있을 때 사람 처우를 고쳐 두어야, 어려울 때 남는 사람이 생깁니다.",
)
add("mentor", "trust", "profit_off",
    "적자인 달을 숨기려다 거래처와의 신뢰가 먼저 금이 갑니다.",
)
add("mentor", "growth", "health_low",
    "몸이 기울면 성장 계획이 아니라 회복 계획이 먼저입니다.",
)



# 추가 인물 대사는 tools/dialogue-lines/ 에서 불러옵니다.
_lines_dir = Path(__file__).resolve().parent / "dialogue-lines"
for _chunk in sorted(_lines_dir.glob("*.py")):
    exec(_chunk.read_text(encoding="utf-8"), globals())

def emit():
    counts = validate()
    payload = {}
    for person, lines in POOL.items():
        items = []
        for i, line in enumerate(lines, 1):
            items.append({
                "id": f"{person}_{line['themes'][0]}_{i:03d}",
                "text": line["text"],
                "themes": line["themes"],
                "when": line["when"],
            })
        payload[person] = items
    out = Path(__file__).resolve().parents[1] / "dialogue-data.js"
    pool_js = json.dumps(payload, ensure_ascii=False, indent=1)
    counts_js = json.dumps(ORIGINAL, ensure_ascii=False, indent=1)
    header = "// 인물별 상황 대사 모음. 선택 로직은 dialogue.js에 있습니다.\n"
    body = header + "export const DIALOGUE_POOL = " + pool_js + ";\nexport const ORIGINAL_DIALOGUE_COUNTS = " + counts_js + ";\n"
    out.write_text(body, encoding="utf-8")
    print("wrote", out, "bytes", out.stat().st_size)
    for person in CORE + EXTRA:
        print(f"{person}: {counts[person]} (min {ORIGINAL[person]*10})")

if __name__ == "__main__":
    emit()
