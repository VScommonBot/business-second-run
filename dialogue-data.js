// 인물별 상황 대사 모음. 선택 로직은 dialogue.js에 있습니다.
export const DIALOGUE_POOL = {
 "mentor": [
  {
   "id": "mentor_trust_001",
   "text": "평판은 쌓는 데 십 년, 잃는 데 하루입니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "mentor_trust_002",
   "text": "어려울 때 지킨 약속을 사람들은 기억합니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "mentor_trust_003",
   "text": "말은 가볍게, 약속은 무겁게 하세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "mentor_trust_004",
   "text": "한 번 어긴 기한은 다음 계약서에 조항으로 돌아옵니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "mentor_trust_005",
   "text": "여유가 있을 때 지킨 약속이 나중에 진짜 신용이 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_trust_006",
   "text": "돈이 있을 때일수록 조건을 대충 넘기지 마세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_trust_007",
   "text": "현금이 빠듯할수록 말한 날짜를 지키는 게 남는 방법입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_trust_008",
   "text": "부족한 상황을 숨기기보다, 언제까지 가능한지 먼저 알리세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_trust_009",
   "text": "통장이 비어도 거짓말까지 비어서는 안 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_trust_010",
   "text": "위급할 때 한 거짓 안내는 나중에 자금보다 비싼 값으로 돌아옵니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_trust_011",
   "text": "처음 세 달이 만납니다. 작은 약속도 기록해 두세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_trust_012",
   "text": "아직 이름보다 행동이 먼저 알려지는 시기입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_trust_013",
   "text": "어느 정도 알려지면, 예외를 만드는 순간부터 평판이 흔들립니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_trust_014",
   "text": "오래 버틴 회사일수록 사람들은 과거 약속의 이력을 찾아봅니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_trust_015",
   "text": "매출이 없어도 거래 상대는 대표의 말을 벌써 저울질합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "mentor_trust_016",
   "text": "숫자가 오를 때 안내를 바꾸면, 성장이 아니라 변덕으로 보입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "mentor_trust_017",
   "text": "매출이 줄수록 숨기지 말고 원인과 다음 조치를 같이 말하세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "mentor_trust_018",
   "text": "지친 상태의 즉답은 나중에 주워 담기 어렵습니다. 하루만 미루세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_trust_019",
   "text": "처음 만나는 자리에서는 화려한 계획보다 지킬 수 있는 한 줄을 말하세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_trust_020",
   "text": "다시 만났을 때 지난번에 한 말을 그대로 기억하는 사람이 많습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "mentor_trust_021",
   "text": "일이 잘 풀린 뒤일수록 공로는 나누고, 약속은 문장 그대로 남기세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_trust_022",
   "text": "잘못을 먼저 인정하는 쪽이, 나중에 변명하는 쪽보다 값이 쌉니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_trust_023",
   "text": "빌린 돈이 있으면 상환 일정을 상대보다 먼저 꺼내 놓는 편이 낫습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "mentor_quality_024",
   "text": "기본을 지키는 곳이 오래갑니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "mentor_quality_025",
   "text": "하나를 제대로 하면 나머지는 따라옵니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "mentor_quality_026",
   "text": "손님 앞에 내놓기 전에, 스스로 돈 내고 살 만한지 물어보세요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "mentor_quality_027",
   "text": "대충 넘어간 마감은 반드시 다음 달의 수습 시간이 됩니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "mentor_quality_028",
   "text": "여유가 있을 때 품질을 깎으면, 나중에 돈이 없을 때는 더 깎게 됩니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_quality_029",
   "text": "지금 단가를 조금 낮추는 것보다, 다시 안 오게 만드는 손실이 큽니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_quality_030",
   "text": "빠듯할수록 범위를 줄이세요. 품질을 줄이는 것과는 다릅니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_quality_031",
   "text": "모든 걸 조금 대충 하기보다, 한 가지만 제대로 하는 편이 쌉니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_quality_032",
   "text": "급한 현금 때문에 불량에 눈감으면, 다음 주문이 끊깁니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_quality_033",
   "text": "지금은 파는 양을 줄이더라도 내놓을 기준은 지키세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_quality_034",
   "text": "첫 제품의 흠은 오래 기억됩니다. 출시일을 조금 미루는 게 나을 때도 있습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_quality_035",
   "text": "손님이 적을 때가 오히려 피드백을 깊게 들을 기회입니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "mentor_quality_036",
   "text": "손님이 늘면 기준이 흐려집니다. 거절할 주문을 미리 정하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "mentor_quality_037",
   "text": "잘 팔릴 때일수록 불만 한 건을 대충 넘기지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "mentor_quality_038",
   "text": "피곤하면 검수 눈이 먼저 흐려집니다. 출고 전에 한 사람만 더 보게 하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_quality_039",
   "text": "반응이 좋았을 때 바로 범위를 넓히기보다, 잘된 이유를 먼저 적으세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_quality_040",
   "text": "실패했다면 변명보다 재발 방지 한 줄을 공정에 남기세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_quality_041",
   "text": "익숙해진 공정일수록 기본 점검을 건너뛰기 쉽습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_quality_042",
   "text": "오래된 제품일수록 처음의 기준이 어디 있는지 다시 펴 보세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_cash_043",
   "text": "장부에 이익이 나도 통장에 돈이 없을 수 있습니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "mentor_cash_044",
   "text": "통장에 석 달 치가 없으면 결정이 흔들립니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "mentor_cash_045",
   "text": "매출은 자랑이 되고, 현금은 내일이 됩니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "mentor_cash_046",
   "text": "나갈 날짜가 정해진 돈부터 달력에 먼저 쓰세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "mentor_cash_047",
   "text": "여유가 보일 때 고정비를 올리면, 다음 비수기에 그 금액이 남습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_cash_048",
   "text": "지금 쓸 수 있다고 다 쓰지는 마세요. 다음 석 달을 남겨 두세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_cash_049",
   "text": "빠듯하면 지출을 미루는 것과 끊는 것을 나누어 보세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_cash_050",
   "text": "작은 외상이 쌓이면 큰 투자보다 먼저 회사를 조입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_cash_051",
   "text": "지금 필요한 건 멋진 계획이 아니라, 이번 달 나갈 돈의 목록입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_cash_052",
   "text": "위급할 때는 자존심보다 결제 일정을 조정하는 대화가 먼저입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_cash_053",
   "text": "이자와 원금 날짜를 매출 목표보다 위에 두세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "mentor_cash_054",
   "text": "아직 들어오지 않는 돈을 이미 쓴 것처럼 계산하지 마세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "mentor_cash_055",
   "text": "흑자가 났어도 미수금이 묶여 있으면 아직 안심할 때가 아닙니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "mentor_cash_056",
   "text": "적자는 부끄러울 일이 아닙니다. 모른 척하는 것이 문제입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "mentor_cash_057",
   "text": "초기의 현금은 시간입니다. 시간을 사는 지출인지 먼저 나누세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_cash_058",
   "text": "오래 운영할수록 관성에 의한 구독과 고정비가 쌓입니다. 목록을 다시 보세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_cash_059",
   "text": "한 번의 손실을 만회하겠다고 더 큰 판을 벌이면 흔히 두 번 잃습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_cash_060",
   "text": "연말에는 미수금과 세금 일정을 매출 자랑보다 먼저 확인하세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "mentor_safety_061",
   "text": "지키는 선택도 전략입니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "mentor_safety_062",
   "text": "살아남은 회사만 다음 기회를 만납니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "mentor_safety_063",
   "text": "지금 하지 말 일을 먼저 정하는 게 용기의 다른 이름입니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "mentor_safety_064",
   "text": "모든 기회를 잡으려다 본업의 숨이 먼저 끊어집니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "mentor_safety_065",
   "text": "여유가 있어도 한 번에 판을 두 배로 키우지는 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_safety_066",
   "text": "지금 지켜 둔 현금이, 다음 위기의 협상력을 만듭니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_safety_067",
   "text": "빠듯할 때는 새로운 실험의 크기를 반으로 줄이세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_safety_068",
   "text": "지금은 이기는 달보다 버티는 달이 점수입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_safety_069",
   "text": "불씨를 키울 때가 아닙니다. 불을 끄고 숨을 고르세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_safety_070",
   "text": "위급하면 확장 이야기를 잠시 서랍에 넣으세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_safety_071",
   "text": "시작하자마자 모든 채널을 열 필요는 없습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_safety_072",
   "text": "익숙한 위험일수록 방심합니다. 보험과 계약 만기부터 다시 보세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_safety_073",
   "text": "갚을 일정이 있는 상태에서 한 번의 도박은 회사 전체가 담보가 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "mentor_safety_074",
   "text": "몸이 기우는 대표의 회사는, 숫자보다 먼저 위험이 커집니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_safety_075",
   "text": "잘된 한 번을 운명으로 여기고 판을 키우지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_safety_076",
   "text": "다친 다음에는 같은 높이를 바로 다시 오르지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_safety_077",
   "text": "해의 처음에는 목표보다 올해 지지 않을 선을 먼저 적으세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "mentor_safety_078",
   "text": "대표 혼자 감당하던 위험을, 팀에게 설명하지 않고 키우면 안 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "mentor_self_079",
   "text": "대표의 체력도 회사 자산입니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "mentor_self_080",
   "text": "지쳤을 때 내린 결정은 나중에 비싼 대가를 치를 수 있습니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "mentor_self_081",
   "text": "쉬는 날을 달력에 쓰지 않으면, 그 날은 존재하지 않습니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "mentor_self_082",
   "text": "대표가 모든 일을 쥐고 있으면 회사는 대표의 체력만큼만 큽니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "mentor_self_083",
   "text": "오늘은 용기보다 수면이 필요한 날로 보입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_self_084",
   "text": "몸이 경고하는데 일정을 더 넣는 건 용기가 아니라 무모함입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_self_085",
   "text": "조금씩 쌓인 피로는 한 달 뒤에 결정의 질로 나타납니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "mentor_self_086",
   "text": "컨디션이 좋을 때 다음 달의 휴식도 미리 막아 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "mentor_self_087",
   "text": "초기의 열정은 소중하지만, 그 열정으로 잠을 끊지는 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_self_088",
   "text": "오래 가려면 대표의 일과에 끝나는 시각이 있어야 합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_self_089",
   "text": "돈이 급할수록 밤새운 판단은 피하세요. 아침의 머리가 더 쌉니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_self_090",
   "text": "대표가 쉬지 않으면 팀도 쉬는 신호를 받지 못합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "mentor_self_091",
   "text": "실패한 날을 만회하겠다고 밤을 새우면, 다음 실수가 따라옵니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_self_092",
   "text": "지난번보다 얼굴이 어두워 보입니다. 일정보다 컨디션을 먼저 물어보겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "mentor_self_093",
   "text": "연말에 모든 걸 몰아서 처리하려는 버릇이 몸을 먼저 상하게 합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "mentor_self_094",
   "text": "돈이 풀렸다고 일정을 가득 채우지 마세요. 여유는 사람을 위해서도 씁니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_people_095",
   "text": "숫자만 보고는 사람이 왜 그런 결정을 했는지 알기 어렵습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "mentor_people_096",
   "text": "떠나는 이유를 먼저 들어 보세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "mentor_people_097",
   "text": "칭찬은 공개적으로, 나무람은 짧게 따로 하세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "mentor_people_098",
   "text": "사람을 도구처럼 쓰면 그 도구는 오래 남아 있지 않습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "mentor_people_099",
   "text": "팀이 생긴 뒤에는 대표의 침묵도 지시가 됩니다. 기준을 말로 남기세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "mentor_people_100",
   "text": "같은 일을 반복해서 야근하게 되면, 그건 열정이 아니라 설계 문제입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "mentor_people_101",
   "text": "아직 혼자여도, 나중에 들어올 사람이 이해할 메모를 지금 남기세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "mentor_people_102",
   "text": "사기가 떨어진 자리에서 목표만 올리면 사람은 더 빨리 떠납니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "mentor_people_103",
   "text": "보수를 미룰 거면 날짜와 이유를 같은 주에 알리세요.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_people_104",
   "text": "위급함을 팀에 숨기면, 소문은 사실보다 나쁘게 퍼집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_people_105",
   "text": "첫 동료를 고를 때는 화려한 이력보다 함께 고칠 수 있는지를 보세요.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_people_106",
   "text": "오래된 동료의 불만은 작은 일로 보이지 마세요. 쌓인 이력이 있습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_people_107",
   "text": "잘된 일의 공은 현장에서 일한 사람 이름부터 부르세요.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_people_108",
   "text": "잘못의 책임을 아래로 밀어 내면, 다음부터는 보고가 올라오지 않습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_people_109",
   "text": "지친 대표는 짧고 날카로운 말을 하기 쉽습니다. 오늘은 결정을 미루세요.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_people_110",
   "text": "사람을 처음 볼 때는 조건보다 이 사람이 이 일을 왜 하려는지를 들으세요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_growth_111",
   "text": "클 수 있을 때 크되, 왜 크는지는 알고 가세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "mentor_growth_112",
   "text": "성장은 수단입니다. 목적을 다시 적어 보세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "mentor_growth_113",
   "text": "숫자만 커지고 일이 버거우면, 그건 성장이 아니라 부풀어 오름입니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "mentor_growth_114",
   "text": "한 줄의 매출보다, 같은 손님이 다시 오는 이유를 키우세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "mentor_growth_115",
   "text": "자금이 있을 때 키우되, 키운 뒤의 고정비를 먼저 계산하세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_growth_116",
   "text": "빠듯한 상태에서 채널을 늘리면 숨만 가빠집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_growth_117",
   "text": "지금은 성장 이야기의 계절이 아닙니다. 먼저 숨부터 붙이세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_growth_118",
   "text": "규모를 줄이는 것도 전략입니다. 부끄러워하지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_growth_119",
   "text": "첫해에는 모든 시장을 가지려 하지 마세요. 한 손님을 제대로 이해하세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_growth_120",
   "text": "어느 정도 길이 보이면, 하지 않을 일을 목록에서 지우세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_growth_121",
   "text": "오래 달린 뒤에는 속력보다 방향이 맞는지 다시 물으세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_growth_122",
   "text": "오르는 숫자를 추세라고 단정하기 전에, 한 달만 더 지켜보세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "mentor_growth_123",
   "text": "줄어들 때는 광고를 늘리기 전에, 떠나가는 이유를 먼저 들으세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "mentor_growth_124",
   "text": "손님이 많아지면 모두를 만족시키려다 핵심 손님이 떠납니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "mentor_growth_125",
   "text": "한 번의 대박을 다음 달의 기본값으로 잡지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_growth_126",
   "text": "혼자인 상태에서 주문을 두 배로 받으면, 품질이 먼저 무너집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "mentor_speed_127",
   "text": "급할수록 계획서를 다시 펴 보세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "mentor_speed_128",
   "text": "빨리 가는 것과 서두르는 것은 다릅니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "mentor_speed_129",
   "text": "오늘 안에 할 일과 이번 주에 할 일을 섞지 마세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "mentor_speed_130",
   "text": "속도는 줄일 일을 정할 때 생깁니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "mentor_speed_131",
   "text": "자금이 넉넉하다고 일정을 앞당기면, 검토하지 못한 조항이 남습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_speed_132",
   "text": "현금이 급할수록 성급한 계약에 서명하기 쉽습니다. 하룻밤을 두세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "mentor_speed_133",
   "text": "급하다고 조건 없이 돈을 받으면, 속도의 대가가 이자로 남습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "mentor_speed_134",
   "text": "시작의 조급함은 이해합니다. 그래도 첫 출시는 하루를 더 보는 편이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "mentor_speed_135",
   "text": "익숙하다고 검토를 건너뛰면, 오래된 회사도 한 번에 넘어집니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "mentor_speed_136",
   "text": "잠이 부족한 날의 빠른 결정은 다음 주에 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "mentor_speed_137",
   "text": "주문이 늘 때 납기를 무리하게 당기면, 칭찬보다 클레임이 먼저 옵니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "mentor_speed_138",
   "text": "잘된 흐름을 이어 가되, 다음 단계는 하루를 쉬고 설계하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "mentor_speed_139",
   "text": "만회하려고 서두르면 같은 구덩이에 더 깊게 들어갑니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "mentor_speed_140",
   "text": "대표의 급한 마음이 팀의 실수로 옮겨 가지 않게, 우선순위를 하나만 남기세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "mentor_speed_141",
   "text": "연말 실적을 채우려고 밀어붙인 숫자는 보통 다음 해에 바로잡게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "mentor_speed_142",
   "text": "처음 제안이 급해 보여도, 답은 오늘 밤에 하지 않아도 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_trust_143",
   "text": "이만큼 이야기를 나눈 사이라면, 불편한 진실도 돌려 말하지 않겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "relation_good"
   ]
  },
  {
   "id": "mentor_trust_144",
   "text": "사이가 어색해졌다면 새로운 부탁보다 지난 약속을 먼저 확인합시다.",
   "themes": [
    "trust"
   ],
   "when": [
    "relation_risk"
   ]
  },
  {
   "id": "mentor_quality_145",
   "text": "이익이 난 달일수록 원가를 깎아 품질을 흔들지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "mentor_quality_146",
   "text": "적자일 때 품질을 지키면 손님이 남는 경우가 많습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "mentor_cash_147",
   "text": "이 시기에는 매출 성장과 현금 잔고를 같은 그래프에 놓고 보세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_cash_148",
   "text": "손님이 생기기 전의 현금은 연습탄이 아닙니다. 한 번 쓰면 다시 채워지지 않습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "mentor_safety_149",
   "text": "아직 검증 전이면, 큰 계약보다 작은 실험이 안전합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "mentor_safety_150",
   "text": "떨어지는 숫자를 만회하려고 새로운 업을 곁들이면 숨이 더 가쁩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "mentor_self_151",
   "text": "이 무렵부터 대표의 일정이 회사의 일정이 됩니다. 빈칸을 남겨 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_self_152",
   "text": "손님이 늘수록 대표가 모든 문의에 답할 필요는 없습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "mentor_people_153",
   "text": "손님이 적어도 응대하는 태도는 이미 회사의 얼굴입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "mentor_people_154",
   "text": "다시 보니, 사람 이야기는 숫자 보고보다 짧게 끝나는 버릇이 있어 보입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "mentor_growth_155",
   "text": "이익이 난 김에 영역을 넓히기 전에, 이 이익이 반복 가능한지 보세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "mentor_growth_156",
   "text": "새해 목표를 두 배로 적기 전에, 작년의 병목부터 지우세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "mentor_speed_157",
   "text": "아직 손님이 없는데 출시일을 앞당기는 건 속도가 아니라 불안입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "mentor_speed_158",
   "text": "중간쯤 오면 결정이 빨라집니다. 그래서 한 줄짜리 검토 목록이 필요합니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "mentor_cash_159",
   "text": "처음 드릴 조언은 단순합니다. 통장 잔액과 나갈 돈을 한 장에 적으세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_quality_160",
   "text": "처음 보는 제품이라면, 자랑보다 아직 못 하는 범위를 먼저 듣겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_safety_161",
   "text": "첫 만남에서 무모한 확신을 보이면, 저는 오히려 걱정을 먼저 합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "mentor_people_162",
   "text": "여유가 있을 때 사람 처우를 고쳐 두어야, 어려울 때 남는 사람이 생깁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "mentor_trust_163",
   "text": "적자인 달을 숨기려다 거래처와의 신뢰가 먼저 금이 갑니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "mentor_growth_164",
   "text": "몸이 기울면 성장 계획이 아니라 회복 계획이 먼저입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  }
 ],
 "investor": [
  {
   "id": "investor_self_001",
   "text": "이 단계에서는 대표의 시간이 가장 비싼 자원입니다. 직접 할 일 목록을 반으로 줄이세요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_self_002",
   "text": "처음 뵙는 대표에게는 비전보다, 이번 주에 직접 끝낼 일 세 가지를 묻습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_quality_003",
   "text": "지난번에 말한 완성도 기준이 실제 출시에 반영됐는지 확인하겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "investor_quality_004",
   "text": "이익이 난 김에 쓰지 않는 기능을 붙이지 마세요. 남는 돈은 핵심 품질에만 쓰세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "investor_safety_005",
   "text": "첫 미팅에서 리스크를 전혀 말하지 않으면, 오히려 준비를 의심합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_safety_006",
   "text": "적자인 달의 방어는 맞습니다. 그 방어가 성장 실험을 전부 지우면 안 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "investor_speed_007",
   "text": "손님이 적을 때가 가장 빠르게 배워도 되는 때입니다. 실험을 미루지 마세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "investor_trust_008",
   "text": "연말 실적 포장보다 내년 가정과 남은 위험을 같이 적는 보고를 원합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "investor_people_009",
   "text": "다시 보니 핵심 역할이 아직 대표에게 몰려 있습니다. 위임 일정을 숫자로 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "investor_growth_010",
   "text": "연말 성장률만 보지 않습니다. 내년 1분기에 반복 가능한 엔진이 있는지를 봅니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "investor_cash_011",
   "text": "손님이 적은데 고정비가 늘고 있으면, 그 지출의 회수 기간을 설명해 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "investor_self_012",
   "text": "숫자가 오를 때 대표가 모든 영업을 붙잡고 있으면 스케일이 멈춥니다.",
   "themes": [
    "self"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_growth_013",
   "text": "지금은 속도가 중요합니다. 점유율부터 잡으세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "investor_growth_014",
   "text": "성장이 꺾이면 다음 투자 이야기가 어려워집니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "investor_growth_015",
   "text": "이 시장에서 한 발 늦으면 다음 라운드의 조건이 달라집니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "investor_growth_016",
   "text": "성장 없는 효율은 작게 남겠다는 결정으로 읽힙니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "investor_growth_017",
   "text": "자금이 있을 때 시장을 넓히지 않으면, 그 돈은 결국 고정비로 녹습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_growth_018",
   "text": "지금은 실험할 여유가 있습니다. 작은 시장 테스트를 숫자로 가져오세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_growth_019",
   "text": "빠듯해도 성장 가설은 멈춰서는 안 됩니다. 다만 한 가지만 검증하세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_growth_020",
   "text": "현금을 아끼는 것과 성장을 포기하는 것은 다른 이야기입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_growth_021",
   "text": "생존이 먼저입니다. 다만 살린 뒤에 다시 뛸 한 줄짜리 성장 가설은 남겨 두세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_growth_022",
   "text": "지금은 확장 슬라이드를 거두고, 이번 달 현금 계획을 보여 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_growth_023",
   "text": "초기의 성장은 광고 규모가 아니라 반복 구매의 싹으로 증명됩니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_growth_024",
   "text": "아직 이르다면, 큰 시장 이야기 대신 첫 스무 명의 행동을 가져오세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_growth_025",
   "text": "이 시점에서 성장이 정체되면, 다음 투자자는 이미 다른 회사를 보고 있습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_growth_026",
   "text": "오래 운영한 회사의 성장은 감으로 말하지 마세요. 단위 경제를 펴 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_growth_027",
   "text": "오르는 매출이 한 번의 행사 덕분인지, 반복 가능한 흐름인지 구분해 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_growth_028",
   "text": "하락을 감추면 더 큰 할인이 붙습니다. 원인과 다음 실험을 같이 가져오세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "investor_growth_029",
   "text": "매출이 없는 기간이 길수록, 가설이 아니라 일정이 있는 검증 계획이 필요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "investor_growth_030",
   "text": "좋은 결과가 나왔으니 지금이 다음 채널을 시험할 때입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_growth_031",
   "text": "한 번의 실패로 성장을 접지 마세요. 다만 같은 방식의 반복은 투자 가치가 없습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_growth_032",
   "text": "손님이 늘었으면 객단가와 이탈을 같이 보여 주세요. 숫자 하나만으로는 부족합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "investor_growth_033",
   "text": "처음 뵙는 자리니 비전보다, 앞으로 세 달 안에 증명할 숫자부터 듣겠습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_speed_034",
   "text": "먼저 내고 고치세요. 시장은 기다려 주지 않습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "investor_speed_035",
   "text": "늦은 완벽보다 빠른 80점이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "investor_speed_036",
   "text": "결정이 미뤄지는 주가 쌓이면, 그 자체로 리스크입니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "investor_speed_037",
   "text": "경쟁사가 움직이는데 내부 회의만 늘리는 그림을 좋아할 투자자는 없습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "investor_speed_038",
   "text": "자금이 있는데도 출시가 늦으면, 실행력에 의문이 붙습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_speed_039",
   "text": "여유 있을 때 속도를 못 내면, 빠듯할 때는 더 못 냅니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_speed_040",
   "text": "현금이 빠듯하면 더 빨리 배워야 합니다. 한 달짜리 실험을 이주로 줄이세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_speed_041",
   "text": "위급한데 보고서를 다듬고 있으면 시간은 더 줄어듭니다. 오늘 할 일을 고르세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_speed_042",
   "text": "초기일수록 배움의 회전이 곧 가치입니다. 다음 주 안에 확인할 것을 정하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_speed_043",
   "text": "조직이 커졌다고 결재 단계가 늘어나면, 그 속도 저하가 기업가치에 반영됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_speed_044",
   "text": "수요가 있을 때 공급을 늦추면, 그 자리는 다른 회사가 가져갑니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_speed_045",
   "text": "떨어지는 중에도 실험은 빠르게 하세요. 다만 같은 실수를 빠르게 반복하지는 마세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "investor_speed_046",
   "text": "대표의 과로는 이해합니다. 그래도 의사결정이 멈추는 것은 별개의 문제입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "investor_speed_047",
   "text": "반응이 왔으면 다음 버전을 이번 주 안에 내놓을 일정을 잡으세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_speed_048",
   "text": "실패한 실험을 오래 추모하지 마세요. 배움만 남기고 다음으로 넘기세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_speed_049",
   "text": "혼자여도 결정 속도를 늦출 이유는 아닙니다. 오히려 지금이 가장 빠를 때입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "investor_speed_050",
   "text": "연초 계획이 길면 실행이 늦습니다. 이번 달의 한 가지부터 착수하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "investor_speed_051",
   "text": "첫 미팅에서 일정 없는 포부를 들으면, 저는 속도를 가늠할 수 없습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_safety_052",
   "text": "안전한 선택만 해서는 투자할 만한 실적을 내기 어렵습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "investor_safety_053",
   "text": "지키기만 해서는 이 회사에 투자한 이유가 사라집니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "investor_safety_054",
   "text": "리스크를 피하겠다는 말이 반복되면, 기회도 같이 피한 것으로 보입니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "investor_safety_055",
   "text": "보수적인 운영은 존중합니다. 다만 그것만으로는 라운드를 열기 어렵습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "investor_safety_056",
   "text": "현금이 있는데 실험하지 않으면, 그 안전은 정체로 읽힙니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_safety_057",
   "text": "지금은 지키는 비중이 커도 됩니다. 그러나 성장 실험의 불씨는 남기세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_safety_058",
   "text": "지금은 공격보다 생존이 맞습니다. 살린 뒤의 반등 계획만 같이 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_safety_059",
   "text": "위기에서 무리한 확장은 반대합니다. 반대로 아무 손도 안 대는 것도 반대합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_safety_060",
   "text": "초기의 안전만 강조하면 시장 학습이 멈춥니다. 작은 실패를 계획하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_safety_061",
   "text": "안정된 회사일수록 한 번의 큰 베팅이 필요해질 때가 있습니다. 근거를 가져오세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_safety_062",
   "text": "부채가 있으면 레버리지를 더 얹는 선택은 조건을 매우 까다롭게 봅니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "investor_safety_063",
   "text": "잘된 실험을 안전하게만 반복하면 경쟁자가 따라잡습니다. 다음 판을 키우세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_safety_064",
   "text": "다친 뒤의 과한 위축은 기업가치를 더 깎습니다. 작은 재도전을 설계하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_safety_065",
   "text": "오르는 중에도 완충 현금은 남겨 두세요. 다만 그 이유를 성장을 멈추는 데 쓰지는 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_safety_066",
   "text": "손님도 없는데 리스크만 이야기하면, 시작할 이유를 찾기 어렵습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "investor_safety_067",
   "text": "중간 단계에서 안전만 고르면 그 자리가 곧 천장입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_safety_068",
   "text": "다시 보니 위험을 줄이는 이야기의 비중이 커졌습니다. 그 반대급부의 성장을 보여 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "investor_self_069",
   "text": "대표가 쉬는 동안 경쟁사는 달립니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "investor_self_070",
   "text": "지금은 대표 개인 사정을 앞세울 때가 아닙니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "investor_self_071",
   "text": "대표의 체력 관리는 필요하지만, 그 이유로 의사결정이 공백이면 곤란합니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "investor_self_072",
   "text": "휴식이 필요하면 위임 체계를 같이 가져오세요. 빈자리가 보이면 안 됩니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "investor_self_073",
   "text": "쓰러지면 회사 가치가 먼저 흔들립니다. 짧게라도 회복 일정을 넣으세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "investor_self_074",
   "text": "건강이 이 상태면 큰 베팅의 판단력을 신뢰하기 어렵습니다. 먼저 쉬세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "investor_self_075",
   "text": "컨디션이 좋을 때 어려운 결정을 밀어 두세요. 그 시간이 공짜가 아닙니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "investor_self_076",
   "text": "초기의 과로는 흔합니다. 다만 그것이 습관이 되면 투자 리스크로 적습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_self_077",
   "text": "이제 대표 한 사람의 시간에 회사가 묶여 있으면 확장에 한계가 보입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_self_078",
   "text": "위기일수록 대표가 현장을 떠나면 안 됩니다. 동시에 밤을 새운 결정은 피하세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_self_079",
   "text": "팀이 있는데도 모든 승인을 대표가 쥐면, 그건 열정이 아니라 병목입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "investor_self_080",
   "text": "혼자 운영 중이면 대표의 공백이 곧 영업 중단입니다. 대체 절차를 만들어 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "investor_self_081",
   "text": "잘된 뒤에는 자축보다 다음 주 실행 일정을 고정하세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_self_082",
   "text": "감정으로 하루를 비우는 것은 이해합니다. 이틀을 비우면 비용이 됩니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_self_083",
   "text": "연말 피로로 내년 계획을 대충 넘기면, 그 한 달이 다음 라운드를 늦춥니다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "investor_self_084",
   "text": "다시 만나 보니 일정 밀도가 높습니다. 위임하지 않는 일이 무엇인지 정리해 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "investor_trust_085",
   "text": "약속을 지킨 기록이 다음 투자 조건이 됩니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "investor_trust_086",
   "text": "실적을 솔직하게 알려야 좋은 조건으로 자금을 구할 수 있습니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "investor_trust_087",
   "text": "좋은 숫자만 골라 보내면, 나중에는 모든 숫자를 할인해서 봅니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "investor_trust_088",
   "text": "보고가 늦는 것보다 숨기는 쪽이 훨씬 비싼 조건을 만듭니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "investor_trust_089",
   "text": "여유가 있을 때 투명하게 공유한 회사가, 어려울 때 조건을 덜 깎입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_trust_090",
   "text": "현금이 빠듯한 달일수록 보고 주기를 줄이세요. 침묵이 더 불안합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_trust_091",
   "text": "위기 보고는 빠르고 구체적이어야 합니다. 해결책 없는 낙관은 독입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_trust_092",
   "text": "지금 숨긴 구멍은 실사에서 배율로 돌아옵니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_trust_093",
   "text": "성장 숫자를 가져올 때는 가정과 일회성 요인을 같이 표시하세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_trust_094",
   "text": "하락 달을 다음 달에 합쳐 평균으로 보이게 하지 마세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "investor_trust_095",
   "text": "초기일수록 작은 약속도 지켰는지가 대표 평가의 전부입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_trust_096",
   "text": "좋은 소식을 전할 때도 남은 위험을 한 줄 적으세요. 그게 신뢰입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_trust_097",
   "text": "나쁜 소식을 당일 공유하는 대표를 더 신뢰합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_trust_098",
   "text": "첫 만남에서 과장된 시장 규모보다, 지금 가진 사실만 말씀해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_trust_099",
   "text": "지난번에 약속한 지표가 어떻게 됐는지부터 보겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "investor_trust_100",
   "text": "부채 조건은 나중에 실사에서 반드시 나옵니다. 지금 열어 두는 편이 낫습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "investor_trust_101",
   "text": "적자를 포장하지 마세요. 이유와 턴어라운드 일정이면 충분합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "investor_cash_102",
   "text": "현금은 쓰라고 받은 겁니다. 다만 쓴 만큼 숫자로 보여 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "investor_cash_103",
   "text": "런웨이가 줄면 다음 투자 조건이 나빠집니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "investor_cash_104",
   "text": "현금 소진의 이유가 성장이면 이해합니다. 설명이 없으면 낭비로 봅니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "investor_cash_105",
   "text": "통장만 두둑하고 실험이 없으면 그 돈의 기회비용이 아깝습니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "investor_cash_106",
   "text": "런웨이가 길 때 승부를 걸지 않으면, 그 여유는 기업가치로 이어지지 않습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_cash_107",
   "text": "여유 자금을 예비비와 성장 투자로 나눠 표를 만들어 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_cash_108",
   "text": "런웨이가 짧아지고 있습니다. 다음 유입 시점을 주 단위로 보여 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_cash_109",
   "text": "빠듯할수록 단위 경제가 안 나오는 채널부터 끄세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_cash_110",
   "text": "이 런웨이로는 협상력이 거의 없습니다. 지출 동결과 유입 계획을 오늘 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_cash_111",
   "text": "위기 자금은 조건이 나쁩니다. 그래도 침묵보다 일찍 문을 두드리는 편이 낫습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_cash_112",
   "text": "상환 일정이 런웨이를 어떻게 깎는지 한 표로 보여 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "investor_cash_113",
   "text": "매출 전의 현금은 학습비입니다. 무엇을 배웠는지 없이 소진만 되면 곤란합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "investor_cash_114",
   "text": "이익이 나기 시작했으면 재투자 비율과 유보 비율을 같이 정하세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "investor_cash_115",
   "text": "적자 폭이 줄고 있는지가 중요합니다. 절대 금액만 보지 않습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "investor_cash_116",
   "text": "초기의 큰 사무실과 큰 툴 구독은 제가 가장 먼저 줄이라고 하는 항목입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_cash_117",
   "text": "손실이 났으면 회수 계획이 아니라 현금 방어 계획부터 적으세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_cash_118",
   "text": "연말 현금 포장은 의미가 없습니다. 1월에 나갈 세금과 미지급부터 빼 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "investor_cash_119",
   "text": "처음 보는 장부라면 매출보다 런웨이와 소진 이유를 먼저 묻겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_people_120",
   "text": "사람 문제는 비용으로 계산해 보세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "investor_people_121",
   "text": "좋은 사람을 뽑는 데 돈이 들지만 잘못 뽑으면 돈이 더 듭니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "investor_people_122",
   "text": "핵심 인력의 이탈은 제품 지연보다 먼저 기업가치를 깎습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "investor_people_123",
   "text": "인건비를 아끼려다 실행이 멈추면, 그 절약은 가장 비싼 절약입니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "investor_people_124",
   "text": "팀이 있으면 1인당 생산성을 같이 보고 싶습니다. 인원수만으로는 부족합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "investor_people_125",
   "text": "인원이 늘었는데 출시 속도가 그대로면, 채용의 이유를 다시 설명해야 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "investor_people_126",
   "text": "아직 혼자라면 핵심 업무를 외주로 넘길 지점을 숫자로 정해 두세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "investor_people_127",
   "text": "사기가 낮은 조직의 성장 전망은 할인합니다. 원인과 조치를 보고해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "investor_people_128",
   "text": "현금이 빠듯할 때의 채용은 매출과 직접 연결되는 역할만 남기세요.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_people_129",
   "text": "위기 채용 동결은 이해합니다. 핵심 인재 잔류 계획은 별도로 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_people_130",
   "text": "초기에 친구를 공동 창업자로 들이는 결정은, 역할과 지분을 문서로 남긴 뒤에 하세요.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_people_131",
   "text": "조직이 커졌으면 대표가 면접에 전부 들어갈 단계는 지났습니다. 기준을 위임하세요.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_people_132",
   "text": "성과가 난 팀을 보상하는 규칙은 즉흥이 아니라 미리 있어야 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_people_133",
   "text": "실패의 책임을 실무자에게만 지우면, 다음 실험이 올라오지 않습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_people_134",
   "text": "팀을 처음 소개할 때는 경력 나열보다 이 사람들이 무엇을 끝냈는지를 말해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_people_135",
   "text": "성장기 채용은 필요하지만, 리드타임이 긴 포지션만 앞당기세요.",
   "themes": [
    "people"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_people_136",
   "text": "대표가 지친 상태에서 한 채용 결정은 나중에 가장 비싸게 돌아옵니다.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "investor_quality_137",
   "text": "품질은 팔리는 만큼만 올리세요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "investor_quality_138",
   "text": "완성도는 고객이 돈을 내는 지점까지만 필요합니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "investor_quality_139",
   "text": "엔지니어의 자부심과 시장의 지불 의사는 다른 그래프입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "investor_quality_140",
   "text": "완벽을 위해 출시를 미루는 동안 고객은 다른 제품을 배웁니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "investor_quality_141",
   "text": "자금이 있어도 쓰이지 않는 기능에 공을 들이면 기회비용이 큽니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_quality_142",
   "text": "빠듯하면 품질의 범위를 줄이세요. 핵심 한 가지의 기준만 높이세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "investor_quality_143",
   "text": "위기에서 고급 기능을 붙이는 개발은 우선순위가 아닙니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "investor_quality_144",
   "text": "초기 제품은 부끄러워도 됩니다. 다만 돈 받는 지점의 신뢰는 깨지지 않아야 합니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "investor_quality_145",
   "text": "오래된 제품의 리팩터링은 필요하지만, 매출에 연결되는 순서로 하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_quality_146",
   "text": "잘 팔릴 때 품질 사고를 내면 성장 곡선이 한 번에 꺾입니다. 그 지점만은 지키세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "investor_quality_147",
   "text": "규모가 커지면 예외 처리 비용이 품질 원가가 됩니다. 기준을 단순화하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "investor_quality_148",
   "text": "호평이 나온 지점을 더 갈고, 아무도 안 쓰는 기능은 과감히 멈추세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "investor_quality_149",
   "text": "품질 이슈가 났다면 재발 방지보다 먼저, 영향 범위와 보상 비용을 숫자로 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "investor_quality_150",
   "text": "아직 안 팔리는데 완성도를 올리는 시간은, 시장 학습을 미루는 시간입니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "investor_quality_151",
   "text": "첫 제품 소개에서는 기술 자랑보다 누가 돈을 내는지부터 말해 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "investor_quality_152",
   "text": "이 단계에서 품질 논의가 내부 취향 싸움이 되면 출시가 늦어집니다. 고객 기준으로 자르세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_growth_153",
   "text": "이익이 나기 시작했으면 성장에 재투자할 비율을 제안해 주세요. 그 숫자가 다음 이야기의 출발점입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "investor_growth_154",
   "text": "대표 컨디션이 이 상태면 공격적인 성장 계획을 당장 승인하기 어렵습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "investor_cash_155",
   "text": "이 시기 현금 소진이 성장과 무관한 항목에서 늘고 있지는 않은지 점검하세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_cash_156",
   "text": "오래 간 회사의 현금 흐름은 계절성을 보여 주세요. 한 달 잔고만으로는 판단이 안 됩니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "investor_trust_157",
   "text": "정기 보고의 형식이 바뀌지 않는 것이 신뢰입니다. 숫자를 바꾸지 마세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_speed_158",
   "text": "이 무렵 의사결정 속도가 떨어지는 회사가 많습니다. 병목을 한 개만 지워 보세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "investor_self_159",
   "text": "자금이 안정된 틈에 대표의 역할을 재설계하세요. 실행만 하다가는 다음 단계가 안 보입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_safety_160",
   "text": "연말 보수적 결산은 좋습니다. 다만 내년 1분기 성장 실험을 같이 남겨 두세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "investor_people_161",
   "text": "여유가 있을 때 핵심 인력을 붙잡아 두는 보상이 가장 싼 투자입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "investor_quality_162",
   "text": "지친 상태의 품질 판단은 대개 과하거나 부족합니다. 출시 기준을 문서로만 적용하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  }
 ],
 "cofounder": [
  {
   "id": "cofounder_quality_001",
   "text": "제대로 만들어야 다음 손님이 와.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "cofounder_quality_002",
   "text": "시간이 걸려도 그게 맞아.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "cofounder_quality_003",
   "text": "출시 날짜보다 내놓기 창피하지 않은지가 먼저야.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "cofounder_quality_004",
   "text": "대충 넘긴 부분은 결국 우리가 밤에 고치게 돼.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "cofounder_quality_005",
   "text": "돈 있을 때 품질을 깎으면 나중에 변명할 말이 없어.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_quality_006",
   "text": "지금은 단가보다 다시 안 고치게 만드는 쪽이 싸.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_quality_007",
   "text": "빠듯하면 기능을 줄이자. 기준까지 낮추지는 말자.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_quality_008",
   "text": "모든 걸 조금 대충 하지 말고, 한 면만 제대로 하자.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_quality_009",
   "text": "현금이 급해도 불량을 눈감으면 우리 이름이 먼저 상해.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_quality_010",
   "text": "지금은 많이 팔기보다 내놓을 수 있는 것만 내자.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_quality_011",
   "text": "첫 버전은 허술해도 돼. 다만 거짓말처럼 보이게 만들지는 말자.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_quality_012",
   "text": "익숙해졌다고 점검을 건너뛰면 그때부터 사고가 나.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_quality_013",
   "text": "오래 만든 제품일수록 처음 정한 기준이 어디 있는지 다시 보자.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_quality_014",
   "text": "잘 팔릴 때 클레임을 미루면 나중에 한꺼번에 와.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "cofounder_quality_015",
   "text": "손님이 늘면 예외가 늘거든. 기준을 더 짧게 적자.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "cofounder_quality_016",
   "text": "이번엔 잘 됐어. 잘된 지점만 남기고 욕심난 기능은 다음으로 미루자.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_quality_017",
   "text": "망친 부분을 변명하지 말고, 같은 실수가 안 나오게 공정부터 고치자.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_quality_018",
   "text": "너 지친 눈으로 검수하지 마. 내가 한 번 더 볼게. 아니면 내일 하자.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_quality_019",
   "text": "같이 시작한다면, 적당히 넘어가도 되는 선과 안 되는 선을 먼저 정하자.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_people_020",
   "text": "같이 일하는 사람들 얼굴부터 생각하자.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "cofounder_people_021",
   "text": "팀이 납득해야 일이 굴러가.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "cofounder_people_022",
   "text": "혼자 결정하고 나중에 통보하면 그때부터 금이 가.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "cofounder_people_023",
   "text": "사람 이야기에 시간을 안 쓰면, 그 시간이 이직으로 돌아와.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "cofounder_people_024",
   "text": "팀이 생겼으면 너랑 나랑만의 카톡으로 일을 정하지 말자.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "cofounder_people_025",
   "text": "같은 야근이 반복되면 열정이 아니라 설계가 잘못된 거야.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "cofounder_people_026",
   "text": "아직 둘이서만 해도, 나중에 들어올 사람이 읽을 메모는 남기자.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "cofounder_people_027",
   "text": "분위기 이런데 목표만 올리면 사람부터 나가.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "cofounder_people_028",
   "text": "보수를 미룰 거면 날짜를 오늘 말하자. 침묵이 더 무서워.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_people_029",
   "text": "위기면 팀에 숨기지 말자. 사실보다 나쁜 소문이 먼저 돌아.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_people_030",
   "text": "첫 동료는 화려한 이력보다, 우리가 싸우면서도 고칠 수 있는 사람이어야 해.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_people_031",
   "text": "오래된 동료의 한숨은 작은 일로 넘기지 말자.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_people_032",
   "text": "잘된 일의 공은 현장에서 일한 사람 이름부터 부르자.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_people_033",
   "text": "이번 일은 우리 책임이야. 아래로 밀지 말자.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_people_034",
   "text": "너 예민할 때는 사람 관련 결정 내일로 미루자. 내가 먼저 들을게.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_people_035",
   "text": "또 사람 이야기를 숫자 뒤에 두더라. 이번엔 그거부터 보자.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "cofounder_people_036",
   "text": "같이 하려면 역할부터 솔직히 나누자. 나중에 애매한 게 제일 피곤해.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_speed_037",
   "text": "서두르다 생긴 문제는 결국 내가 고쳐야 해.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "cofounder_speed_038",
   "text": "급하게 가면 고칠 게 두 배로 늘어.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "cofounder_speed_039",
   "text": "오늘 안에 다 하자는 말, 이번 주에 한 번만 하자.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "cofounder_speed_040",
   "text": "빠르려면 안 할 일을 먼저 지우자.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "cofounder_speed_041",
   "text": "돈 있다고 일정 당기지 마. 검토 안 한 조항이 남거든.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_speed_042",
   "text": "현금이 급해도 계약서에 바로 서명하지는 말자. 하룻밤만 두자.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_speed_043",
   "text": "급하다고 조건 없는 돈은 받지 말자. 그 속도의 이자가 너무 비싸.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_speed_044",
   "text": "시작이니까 조급한 거 알아. 그래도 첫 출시는 하루 더 보자.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_speed_045",
   "text": "익숙하다고 건너뛰면 오래된 팀도 한 번에 넘어져.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_speed_046",
   "text": "잠 부족한 날의 빠른 결정은 다음 주에 우리가 다시 고치게 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_speed_047",
   "text": "주문 늘었다고 납기 무리하면 칭찬보다 클레임이 먼저 와.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "cofounder_speed_048",
   "text": "흐름 좋을 때일수록 다음 단계는 하루 쉬고 설계하자.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_speed_049",
   "text": "만회하려고 서두르면 같은 구덩이에 더 들어가. 천천히 걷자.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_speed_050",
   "text": "우리 초조함이 팀 실수로 옮겨 가기 전에, 우선순위 하나만 남기자.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "cofounder_speed_051",
   "text": "연말 실적 채우자고 밀어붙인 숫자는 내년에 우리가 주워 담게 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_speed_052",
   "text": "같이 일하려면, 급한 일과 중요한 일을 섞지 않는 버릇부터 맞추자.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_cash_053",
   "text": "통장 잔고부터 보고 정하자.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "cofounder_cash_054",
   "text": "돈이 마르면 선택지가 없어져.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "cofounder_cash_055",
   "text": "장부가 괜찮아 보여도 내일 나갈 돈을 먼저 세자.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "cofounder_cash_056",
   "text": "매출 자랑은 나중에 하고, 이번 주 결제부터 보자.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "cofounder_cash_057",
   "text": "여유 보일 때 고정비 올리지 말자. 다음 비수기에 그 금액이 남아.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_cash_058",
   "text": "지금 쓸 수 있다고 다 쓰지 말자. 석 달은 남겨 두자.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_cash_059",
   "text": "빠듯하면 지출을 미룰 것과 끊을 것을 나누자.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_cash_060",
   "text": "작은 외상이 쌓이면 큰 투자보다 먼저 우릴 조여.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_cash_061",
   "text": "멋진 계획 말고, 이번 달 나갈 돈 목록부터 같이 적자.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_cash_062",
   "text": "자존심보다 결제 일정 조정이 먼저야. 내가 전화할게.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_cash_063",
   "text": "이자 나가는 날짜를 목표 매출보다 위에 두자.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "cofounder_cash_064",
   "text": "아직 안 들어온 돈을 이미 있는 것처럼 쓰지 말자.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "cofounder_cash_065",
   "text": "흑자여도 미수금 묶여 있으면 아직 안심하면 안 돼.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "cofounder_cash_066",
   "text": "적자는 부끄러운 게 아니야. 모르는 척하는 게 문제지.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "cofounder_cash_067",
   "text": "초기 현금은 시간이야. 시간을 사는 지출인지부터 가리자.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_cash_068",
   "text": "오래 하니 구독이랑 고정비가 슬쩍 늘더라. 목록 다시 보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_cash_069",
   "text": "이번 손실 만회하겠다고 더 큰 판 벌이지 말자. 흔히 두 번 잃어.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_cash_070",
   "text": "연말엔 미수금이랑 세금 일정을 자랑거리보다 먼저 확인하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_growth_071",
   "text": "키우는 건 좋은데 지금 구조로 버틸 수 있어?",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "cofounder_growth_072",
   "text": "성장은 감당할 수 있는 만큼만 하자.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "cofounder_growth_073",
   "text": "숫자만 커지고 우리가 치이면, 그건 성장이 아니라 부푸는 거야.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "cofounder_growth_074",
   "text": "새 시장 이야기 전에, 지금 손님이 다시 오는 이유부터 단단히 하자.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "cofounder_growth_075",
   "text": "자금 있을 때 키우자. 다만 키운 뒤 고정비부터 계산하고.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_growth_076",
   "text": "이 상태에서 채널 늘리면 우리만 더 헐떡이게 돼.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_growth_077",
   "text": "지금은 성장 이야기의 달이 아니야. 숨부터 붙이자.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_growth_078",
   "text": "첫해에 모든 시장 가지려 하지 말자. 한 손님을 제대로 알자.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_growth_079",
   "text": "이제 조금 보이니, 하지 않을 일부터 지워 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_growth_080",
   "text": "오래 달린 뒤에는 속력보다 방향이 맞는지 다시 묻자.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_growth_081",
   "text": "오른 한 달을 추세라고 단정하지 말자. 한 달만 더 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "cofounder_growth_082",
   "text": "줄어들 때 광고부터 늘리지 말고, 떠나는 이유부터 듣자.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "cofounder_growth_083",
   "text": "손님 많아지면 모두를 만족시키려다 핵심 손님이 떠나.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "cofounder_growth_084",
   "text": "한 번의 대박을 다음 달 기본값으로 잡지 말자.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_growth_085",
   "text": "우리만으로 주문을 두 배로 받으면 품질이 먼저 무너져.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "cofounder_growth_086",
   "text": "이익 났다고 영역 넓히기 전에, 이 이익이 반복되는지부터 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "cofounder_growth_087",
   "text": "너 몸 이런데 성장 계획 회의는 의미 없어. 먼저 쉬자.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_safety_088",
   "text": "지킬 건 지키자. 다만 너무 움츠리진 말고.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "cofounder_safety_089",
   "text": "안전하게 가도 늦지는 않아.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "cofounder_safety_090",
   "text": "하지 말 일 목록이 있어야 나머지를 제대로 해.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "cofounder_safety_091",
   "text": "모든 기회를 잡으려다 본업이 먼저 쓰러져.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "cofounder_safety_092",
   "text": "여유 있다고 판을 한 번에 두 배로 키우지는 말자.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_safety_093",
   "text": "지금은 버티는 달이 이기는 달이야. 실험 크기를 반으로 줄이자.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_safety_094",
   "text": "불 키울 때 아니야. 끄고 숨 고르자.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_safety_095",
   "text": "시작하자마자 모든 채널 열 필요 없어.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_safety_096",
   "text": "익숙한 위험일수록 방심해. 계약 만기부터 다시 보자.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_safety_097",
   "text": "갚을 일정이 있는데 한 번 더 베팅하면 회사 전체가 담보야.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "cofounder_safety_098",
   "text": "네가 이 상태면 회사 위험이 숫자보다 먼저 커져.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_safety_099",
   "text": "잘된 한 번을 운으로 판 키우지 말자.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_safety_100",
   "text": "다친 다음에 같은 높이 바로 다시 오르지 말자.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_safety_101",
   "text": "올해 목표보다, 올해 지지 않을 선부터 적자.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "cofounder_safety_102",
   "text": "우리만 아는 위험을 팀에 설명하지 않고 키우면 안 돼.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "cofounder_safety_103",
   "text": "아직 검증 전이야. 큰 계약보다 작은 실험이 맞아.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "cofounder_safety_104",
   "text": "같이 하려면 무모한 확신부터 내려놓자. 그건 용기가 아니라 숙제야.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_self_105",
   "text": "네가 쓰러지면 나도 같이 멈춰.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "cofounder_self_106",
   "text": "쉴 땐 쉬어. 대신 다음 사람이 볼 인수인계 메모는 남겨 줘.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "cofounder_self_107",
   "text": "끝나는 시각을 정하자. 안 그러면 이 일이 둘 다 잡아먹어.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "cofounder_self_108",
   "text": "네가 모든 걸 쥐고 있으면 회사는 네 체력만큼만 커져.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "cofounder_self_109",
   "text": "오늘은 일정 줄이자. 네가 이 얼굴로 결정하면 내일 후회해.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_self_110",
   "text": "잠깐만 눈 감아. 내가 오늘 오전은 막을게.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_self_111",
   "text": "조금씩 쌓인 피로, 한 달 뒤에 결정의 질로 나와. 이번 주 하루는 비우자.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "cofounder_self_112",
   "text": "컨디션 좋을 때 다음 달 휴일도 달력에 막아 두자.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "cofounder_self_113",
   "text": "초반 열정은 좋은데, 그걸로 잠을 끊지는 말자.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_self_114",
   "text": "이쯤 되면 일과에 끝나는 벨이 있어야 해. 우리 둘 다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_self_115",
   "text": "돈 급할수록 밤샘 판단은 피하자. 아침 머리가 더 싸.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_self_116",
   "text": "우리가 안 쉬면 팀도 쉬는 신호를 못 받아.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "cofounder_self_117",
   "text": "만회하겠다고 밤 새우지 말자. 다음 실수가 따라와.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_self_118",
   "text": "지난번보다 얼굴이 더 어두워. 일정보다 너 상태부터 보자.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "cofounder_self_119",
   "text": "연말에 몰아서 처리하려는 버릇, 이번엔 나누자.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_self_120",
   "text": "돈 풀렸다고 일정 가득 채우지 말자. 여유는 사람도 위해 쓰자.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_self_121",
   "text": "같이 하려면 서로의 쉬는 방식도 맞춰야 해. 안 그러면 금방 지쳐.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_self_122",
   "text": "이 무렵부터 네 일정이 회사 일정이 되더라. 빈칸 남겨 두자.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_trust_123",
   "text": "약속한 건 지키자. 그게 우리 자산이야.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "cofounder_trust_124",
   "text": "한 번 속이면 계속 속여야 해.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "cofounder_trust_125",
   "text": "대외 안내는 둘이 같이 확인하자. 나중에 말이 달라지면 곤란해.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "cofounder_trust_126",
   "text": "기한은 여유 있게 말하고, 그 안에서 지키자.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "cofounder_trust_127",
   "text": "여유 있을 때 지킨 약속이 나중에 진짜 신용이 돼.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_trust_128",
   "text": "빠듯할수록 날짜를 지키는 게 남는 길이야. 못 지키면 미리 알리자.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "cofounder_trust_129",
   "text": "통장이 비어도 거짓말까지 비면 안 돼.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "cofounder_trust_130",
   "text": "처음 세 달이 우리를 알려. 작은 약속도 적어두자.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "cofounder_trust_131",
   "text": "이름 좀 알려졌을 때 예외를 만들기 시작하면 평판이 흔들려.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_trust_132",
   "text": "오래 버틴 만큼, 과거 약속 이력을 찾아보는 사람이 늘어.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "cofounder_trust_133",
   "text": "매출 없어도 상대는 이미 우리 말을 저울질해.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "cofounder_trust_134",
   "text": "줄어드는 숫자를 숨기지 말고, 원인과 다음 조치를 같이 말하자.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "cofounder_trust_135",
   "text": "지친 상태로 즉답하지 말자. 하루만 미루자.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "cofounder_trust_136",
   "text": "같이 시작한다면 화려한 계획보다 지킬 수 있는 한 줄부터 쓰자.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_trust_137",
   "text": "지난번에 우리가 한 말, 상대는 다 기억하고 있을 거야.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "cofounder_trust_138",
   "text": "잘 풀렸을 때 공로는 나누고, 약속은 문장 그대로 남기자.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "cofounder_trust_139",
   "text": "잘못은 빨리 인정하자. 변명보다 값이 싸.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "cofounder_trust_140",
   "text": "빌린 돈 있으면 상환 일정을 상대보다 먼저 꺼내 놓자.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "cofounder_speed_141",
   "text": "아직 손님도 없는데 일정만 당기지 말자. 지금은 호흡을 맞출 때야.",
   "themes": [
    "speed"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "cofounder_speed_142",
   "text": "여유 있다고 야근으로 앞당기지 말자. 그 여유로 검수하는 게 맞아.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_speed_143",
   "text": "이쯤 되니 결정이 빨라지더라. 그래서 짧은 검토 목록이 필요해.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_speed_144",
   "text": "손님이 적어도 서두른 결과물을 내면 첫인상이 남아.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "cofounder_people_145",
   "text": "중간쯤 오면 침묵이 지시가 돼. 기준을 말로 남기자.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_people_146",
   "text": "연말에 사람 이야기를 뒤로 미루지 말자. 그때 쌓인 게 제일 커.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_people_147",
   "text": "손님이 적어도 응대하는 태도는 이미 우리 얼굴이야.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "cofounder_cash_148",
   "text": "같이 하려면 통장 잔액과 나갈 돈을 한 장에 적는 버릇부터 같이하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "cofounder_cash_149",
   "text": "이 시기엔 매출 성장과 현금 잔고를 같은 표에 놓고 보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_cash_150",
   "text": "손님이 생기기 전의 현금은 연습탄이 아니야. 한 번 쓰면 안 돌아와.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "cofounder_growth_151",
   "text": "새해 목표를 두 배로 적기 전에, 작년의 병목부터 지우자.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "cofounder_growth_152",
   "text": "자금 있을 때 한 채널만 시험하자. 다 열면 우리가 먼저 지쳐.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "cofounder_safety_153",
   "text": "떨어지는 숫자를 만회하겠다고 새 업을 곁들이면 숨이 더 가빠.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "cofounder_safety_154",
   "text": "중간 단계에서 안전만 고르면 천장이 생겨. 작은 실험은 남기자.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "cofounder_safety_155",
   "text": "다시 보니 위험을 줄이는 이야기만 늘었어. 그 반대급부도 보자.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "cofounder_self_156",
   "text": "손님이 늘수록 네가 모든 문의에 답할 필요는 없어. 나눠 갖자.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "cofounder_self_157",
   "text": "적자 난 달을 만회하겠다고 잠을 끊지 말자. 머리를 쓰자.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "cofounder_quality_158",
   "text": "아직 안 팔려도 출시 기준은 두자. 기준 없는 바쁨은 나중에 고칠 게 돼.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "cofounder_quality_159",
   "text": "연말 실적 채우자고 마감을 낮추지 말자. 그 티가 내년까지 가.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_trust_160",
   "text": "연말에 포장된 숫자보다, 내년에 지킬 가정부터 같이 적자.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "cofounder_trust_161",
   "text": "손님이 늘수록 안내가 짧아지면 오해가 커져. 한 줄만 더 정확히 하자.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "cofounder_growth_162",
   "text": "또 새 시장 이야기로 시작하는구나. 지금 구조로 버틸 수 있는지만 먼저 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  }
 ],
 "staff": [
  {
   "id": "staff_speed_001",
   "text": "아직 손님이 없는데 일정을 당기시면 준비만 설칩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "staff_speed_002",
   "text": "여유가 있어도 야근으로 앞당기시면 검수가 빠집니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_speed_003",
   "text": "이쯤에서 급한 일이 많아집니다. 우선순위 목록을 짧게 남겨 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_people_004",
   "text": "중간쯤 되면 대표님의 침묵도 지시가 됩니다. 기준을 말로 남겨 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_people_005",
   "text": "연말에 사람 이야기를 뒤로 미루시면 그때 쌓인 불만이 제일 큽니다.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_people_006",
   "text": "손님이 적어도 응대하는 태도는 이미 회사의 얼굴입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "staff_cash_007",
   "text": "이 시기에는 매출과 나갈 돈을 같은 표로 보여 주시면 현장이 계획을 짭니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_cash_008",
   "text": "손님이 생기기 전의 필수 비용 목록만 먼저 정해 주시면 낭비가 줄어듭니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "staff_cash_009",
   "text": "지난번에 말씀하신 절감 기준이 아직 현장에는 안 내려와 있습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_growth_010",
   "text": "새해 목표를 올리시기 전에, 작년에 막혔던 일부터 정리해 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "staff_growth_011",
   "text": "다시 키우자는 이야기가 나왔습니다. 지금 인원으로 받을 수 있는 양부터 계산해 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_growth_012",
   "text": "이익이 난 김에 일을 넓히시기 전에, 이 이익이 반복되는지 현장을 한 번 더 봐 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "staff_safety_013",
   "text": "줄어드는 달을 만회하려고 새 일을 넣으시면 현장이 더 흔들립니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "staff_safety_014",
   "text": "이 단계에서는 지키는 일과 실험할 일을 나누어 주시면 실수가 줄어듭니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_safety_015",
   "text": "다시 보니 급하게 바뀌는 방침이 늘었습니다. 예측 가능한 일정부터 주시면 좋겠습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_self_016",
   "text": "손님이 늘수록 대표님이 모든 문의에 답하실 필요는 없습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "staff_self_017",
   "text": "적자 난 달을 만회하겠다고 잠을 줄이시면 지시가 흔들립니다.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "staff_quality_018",
   "text": "아직 안 팔려도 출고 기준은 정해 주세요. 기준 없는 바쁨은 나중에 고칠 일이 됩니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "staff_quality_019",
   "text": "연말 실적 때문에 마감을 낮추시면 그 티가 다음 해까지 갑니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_quality_020",
   "text": "지난번에 고치기로 한 품질 항목, 현장에서 아직 대기 중입니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_trust_021",
   "text": "연말에 숫자를 포장하기보다, 내년에 지킬 일정을 사실대로 알려 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_trust_022",
   "text": "손님이 늘수록 안내가 짧아지면 오해가 커집니다. 한 줄만 더 정확히 적어 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "staff_people_023",
   "text": "사람이 남아야 일이 됩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "staff_people_024",
   "text": "그렇게 해 주시면 다들 힘이 날 겁니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "staff_people_025",
   "text": "현장 이야기는 짧게라도 들어 주시면 달라집니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "staff_people_026",
   "text": "지시가 매일 바뀌면 일은 늘어나고 사람은 지칩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "staff_people_027",
   "text": "팀이 있는 만큼, 누가 무엇을 맡는지 한 장으로 남겨 주시면 좋겠습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_people_028",
   "text": "야근이 반복되면 열정이 아니라 사람이 부족한 겁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_people_029",
   "text": "아직 사람이 없어도, 나중에 들어올 사람이 볼 메모를 남겨 두시면 도움이 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "staff_people_030",
   "text": "분위기가 이런데 목표만 올리면 버티기 힘듭니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "staff_people_031",
   "text": "보수가 밀리면 날짜라도 미리 말씀해 주세요. 기다리는 시간이 더 불안합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_people_032",
   "text": "어려운 상황은 이해합니다. 숨기시면 소문이 더 나빠집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_people_033",
   "text": "초반일수록 작은 칭찬이 현장을 붙잡습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_people_034",
   "text": "오래 다닌 사람의 불만은 작은 일로 보이지 말아 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_people_035",
   "text": "잘된 일의 이름을 불러 주시면, 다음에도 그렇게 하고 싶어집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_people_036",
   "text": "잘못은 같이 고치면 됩니다. 책임만 아래로 내려오면 보고가 끊깁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_people_037",
   "text": "대표님이 지쳐 보이시면 저희도 말이 조심해집니다. 오늘은 결정을 조금 미루셔도 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_people_038",
   "text": "처음 말씀드리지만, 지킬 수 있는 일정을 주시면 그만큼 맞추겠습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_people_039",
   "text": "다시 인사드립니다. 지난번에 말씀하신 업무 범위가 아직 애매합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_people_040",
   "text": "여유가 있을 때 처우를 손봐 주셔야, 어려울 때도 남는 사람이 생깁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_safety_041",
   "text": "월급이 제때 안 들어오면 다들 이직을 알아봅니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "staff_safety_042",
   "text": "안정적인 쪽이 현장에서는 버티기 쉽습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "staff_safety_043",
   "text": "갑자기 바뀌는 방침보다, 조금 느려도 예측 가능한 일정이 낫습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "staff_safety_044",
   "text": "위험을 나중에 알면 현장은 이미 수습에 들어간 뒤입니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "staff_safety_045",
   "text": "여유가 있어도 일을 한 번에 두 배로 늘리시면 실수가 납니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_safety_046",
   "text": "빠듯할 때는 새로운 일보다 지금 일을 안정시키는 편이 현장에 맞습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_safety_047",
   "text": "위급하면 확장 이야기보다 이번 달 운영부터 말씀해 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_safety_048",
   "text": "시작부터 모든 일을 열면 현장이 따라가지 못합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_safety_049",
   "text": "익숙한 공정일수록 점검을 건너뛰기 쉽습니다. 기본만 다시 봐 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_safety_050",
   "text": "상환 때문에 급해 보이시면 현장도 서두르게 됩니다. 우선순위를 정해 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "staff_safety_051",
   "text": "대표님이 이 상태로 무리하시면, 저희도 어디를 따라가야 할지 모르겠습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_safety_052",
   "text": "잘된 한 번을 바로 규모로 키우시면 준비가 안 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_safety_053",
   "text": "다친 다음에는 같은 속도로 바로 가기보다, 빈틈부터 메우는 게 낫습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_safety_054",
   "text": "올해 목표보다, 현장에서 실수하지 않을 선부터 같이 정하면 좋겠습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "staff_safety_055",
   "text": "팀에게 설명되지 않은 위험은, 나중에 현장의 사고로 나타납니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_safety_056",
   "text": "처음이니 무리한 확신보다, 지금 지킬 수 있는 선을 듣고 싶습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_safety_057",
   "text": "손님이 아직 없어도 준비 과정이 흔들리면 나중에 더 힘듭니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "staff_speed_058",
   "text": "이 속도면 실수가 납니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "staff_speed_059",
   "text": "현장은 이미 한계입니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "staff_speed_060",
   "text": "오늘 안에는 한 가지만 주시면 정확히 끝낼 수 있습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "staff_speed_061",
   "text": "급하게 시킨 일은 다시 손보는 시간이 더 깁니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "staff_speed_062",
   "text": "자금이 있어도 일정만 당기시면 검수가 빠집니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_speed_063",
   "text": "현금이 급해도 계약이나 출고는 한 번만 더 봐 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_speed_064",
   "text": "급하신 건 알겠습니다. 그래도 확인 없는 진행은 나중에 더 큰 수습이 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_speed_065",
   "text": "초반의 서두름은 이해합니다. 첫 결과물은 하루만 더 보면 좋겠습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_speed_066",
   "text": "익숙하다고 단계를 건너뛰면 오래된 팀도 실수합니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_speed_067",
   "text": "대표님이 지치신 날의 급한 지시는 다음 주에 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_speed_068",
   "text": "주문이 늘면 납기를 당기고 싶으시겠지만, 현장은 이미 꽉 찼습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "staff_speed_069",
   "text": "잘된 흐름을 이어 가되, 다음 일은 하루 쉬고 나눠 주시면 실수가 줄어듭니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_speed_070",
   "text": "만회하려고 서두르시면 같은 실수가 납니다. 천천히 다시 하는 편이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_speed_071",
   "text": "우선순위를 하나만 남겨 주세요. 다 급하면 하나도 못 맞춥니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_speed_072",
   "text": "연말 실적 때문에 밀어붙이면 내년에 그 숫자를 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_speed_073",
   "text": "처음 지시하실 때 기한을 여유 있게 주시면, 그 안에서 맞추겠습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_speed_074",
   "text": "손님이 적어도 서두른 티가 나면 첫인상이 나빠집니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "staff_growth_075",
   "text": "일은 늘고 사람은 그대로면 못 버팁니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "staff_growth_076",
   "text": "키우기 전에 지금 일부터 정리해 주세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "staff_growth_077",
   "text": "규모가 커지면 현장의 빈틈도 같이 커집니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "staff_growth_078",
   "text": "새로운 일보다 반복되는 일을 먼저 줄여 주시면 성장이 수월합니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "staff_growth_079",
   "text": "자금이 있을 때 사람을 보강하셔야 키운 일을 받칠 수 있습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_growth_080",
   "text": "이 상태에서 채널만 늘리면 현장만 더 바빠집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_growth_081",
   "text": "지금은 키우는 이야기보다 일을 줄이는 이야기가 필요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_growth_082",
   "text": "처음에는 모든 요청을 받기보다, 잘하는 한 가지에 힘을 모으는 편이 낫습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_growth_083",
   "text": "이쯤에서 안 할 일을 정하지 않으면 현장이 먼저 무너집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_growth_084",
   "text": "오래 키운 뒤에는 속력보다 빈틈 없는 운영이 더 중요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_growth_085",
   "text": "주문이 늘면 처리 순서를 먼저 정해 주세요. 다 당장일 수는 없습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "staff_growth_086",
   "text": "줄어들 때 새로운 일을 많이 넣으시면 현장은 더 혼란스럽습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "staff_growth_087",
   "text": "손님이 많아지면 예외 요청이 늘습니다. 거절 기준을 알려 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "staff_growth_088",
   "text": "한 번 잘 됐다고 기본값을 올리면 다음 달이 버겁습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_growth_089",
   "text": "사람 없이 일만 두 배가 되면 품질이 먼저 떨어집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "staff_growth_090",
   "text": "대표님이 지치신 채 확장 지시를 내리시면 현장도 방향을 잃습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_growth_091",
   "text": "처음이니 크게 키우기 전에, 지금 일이 돌아가는 방식부터 같이 보고 싶습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_quality_092",
   "text": "손님 앞에 내놓기 부끄럽지 않게 하고 싶습니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "staff_quality_093",
   "text": "품질을 지키면 일하는 사람도 자부심이 생깁니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "staff_quality_094",
   "text": "대충 넘긴 건 현장에서 바로 티가 납니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "staff_quality_095",
   "text": "출고 전에 한 번만 더 볼 시간을 주시면 클레임이 줄어듭니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "staff_quality_096",
   "text": "여유가 있을 때 기준을 낮추시면, 나중에 올리기가 더 어렵습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_quality_097",
   "text": "빠듯하면 가짓수를 줄이시고, 남은 것의 마감은 지키면 좋겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_quality_098",
   "text": "급해도 불량으로 내보내면 다음 손님이 없습니다. 양을 줄이더라도 기준은 지키겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_quality_099",
   "text": "첫 결과물의 흠은 오래 기억됩니다. 하루를 더 쓰는 편이 낫습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_quality_100",
   "text": "익숙해진 공정일수록 기본 점검을 빼먹기 쉽습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_quality_101",
   "text": "오래된 제품일수록 처음 기준이 어디 있는지 다시 적어 주시면 좋겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_quality_102",
   "text": "잘 팔릴 때 불만을 미루면 나중에 한꺼번에 들어옵니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "staff_quality_103",
   "text": "손님이 늘면 예외가 늘므로, 품질 기준을 짧게 고정해 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "staff_quality_104",
   "text": "잘된 지점은 남기고, 욕심 난 추가는 다음으로 미루면 좋겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_quality_105",
   "text": "이번 실수는 변명하지 않겠습니다. 같은 일이 없게 체크리스트를 고치겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_quality_106",
   "text": "피곤한 날의 검수는 놓치기 쉽습니다. 출고는 내일로 미루면 안 될까요.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_quality_107",
   "text": "처음 맡는 일이니, 통과 기준을 구체적으로 알려 주시면 맞추겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_quality_108",
   "text": "적자여도 품질을 지키면 손님이 남는 경우가 많습니다. 그 선은 지키겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "staff_cash_109",
   "text": "아끼는 건 좋은데 필요한 도구는 사 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "staff_cash_110",
   "text": "비용을 줄일 거면 기준을 알려 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "staff_cash_111",
   "text": "현장은 어디서 아끼고 어디서 쓰면 되는지 명확할 때 움직이기 쉽습니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "staff_cash_112",
   "text": "갑자기 모든 지출을 막으시면, 당장 필요한 소모품부터 멈춥니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "staff_cash_113",
   "text": "여유가 보일 때 필요한 도구를 갖춰 두시면 나중에 더 싸게 끝납니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_cash_114",
   "text": "빠듯하면 어디에 쓰는지부터 나눠 주세요. 다 막으면 일이 멈춥니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_cash_115",
   "text": "위급하시면 이번 달 꼭 나가야 할 비용 목록을 같이 정리하겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_cash_116",
   "text": "상환이 있어 급하신 건 알겠습니다. 그래도 현장 필수 비용은 남겨 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "staff_cash_117",
   "text": "아직 매출이 없어도 기본 도구는 필요합니다. 최소 목록만 드리겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "staff_cash_118",
   "text": "흑자가 나도 미결제 업체가 있으면 현장이 불편합니다. 그 목록부터 보시면 좋겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "staff_cash_119",
   "text": "적자인 달에도 알려만 주시면 현장에서 낭비부터 줄이겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "staff_cash_120",
   "text": "초기에 비싼 장비보다, 매일 쓰는 작은 도구가 더 급할 때가 많습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_cash_121",
   "text": "오래 쓰다 보니 안 쓰는 구독이 있습니다. 목록을 같이 정리하면 좋겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_cash_122",
   "text": "이번 손실을 만회하겠다고 필수 비용을 한꺼번에 자르시면 일이 멈춥니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_cash_123",
   "text": "연말에는 미지급 업체부터 정리해 주시면 다음 해 현장이 편합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_cash_124",
   "text": "처음이니 말씀드립니다. 현장에서 꼭 필요한 비용과 그렇지 않은 비용을 구분해 주시면 따르겠습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_cash_125",
   "text": "팀이 있는데 소모품이 모자라면 시간이 더 비쌉니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_self_126",
   "text": "대표님이 쉬셔야 저희도 쉽니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "staff_self_127",
   "text": "대표님이 지쳐 보이면 저희도 마음이 무겁습니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "staff_self_128",
   "text": "끝나는 시간이 정해져 있으면 일도 더 정확하게 끝납니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "staff_self_129",
   "text": "대표님이 모든 확인을 쥐고 계시면 저희는 기다리기만 합니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "staff_self_130",
   "text": "오늘은 무리하지 마세요. 급한 것만 남기고 나머지는 저희가 정리하겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_self_131",
   "text": "이 상태면 큰 결정보다 휴식이 먼저입니다. 진심으로 그렇습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_self_132",
   "text": "조금씩 지쳐 보이십니다. 이번 주 하루는 비워 두시면 좋겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "staff_self_133",
   "text": "컨디션이 좋으실 때 다음 휴식도 달력에 표시해 주세요. 저희가 맞추겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "staff_self_134",
   "text": "초반이라 열심이신 건 압니다. 잠을 줄이시면 지시가 흔들립니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_self_135",
   "text": "이제 대표님이 모든 야근에 같이 계실 필요는 없습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_self_136",
   "text": "돈이 급할수록 밤새운 지시보다 아침의 짧은 회의가 낫습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_self_137",
   "text": "대표님이 안 쉬시면 저희도 먼저 가기가 어렵습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "staff_self_138",
   "text": "만회하시겠다고 밤을 새우시면 다음 실수가 납니다. 저희가 낮에 돕겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_self_139",
   "text": "지난번보다 더 지쳐 보입니다. 일정 이야기 전에 좀 쉬셨으면 합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_self_140",
   "text": "연말 몰아서 하기보다 나눠 주시면 현장도 몸도 버팁니다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "staff_self_141",
   "text": "여유가 생겼다고 일정을 가득 채우지 마세요. 그 여유는 사람도 쉬라고 있는 겁니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_self_142",
   "text": "처음 모시는 대표님께 감히 말씀드리면, 쉬는 시간이 있어야 지시가 명확해집니다.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_self_143",
   "text": "이쯤 되면 대표님 일정이 회사 일정이 됩니다. 빈칸을 남겨 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_trust_144",
   "text": "말씀하신 대로 되는 회사면 좋겠습니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "staff_trust_145",
   "text": "약속이 지켜지면 믿고 일합니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "staff_trust_146",
   "text": "기한이 바뀌면 빨리 알려 주세요. 뒤늦게 알면 현장만 급해집니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "staff_trust_147",
   "text": "작은 약속도 지켜 주시면, 큰일도 따라가겠습니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "staff_trust_148",
   "text": "여유 있을 때 지킨 말씀이 나중에 저희의 신뢰가 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "staff_trust_149",
   "text": "빠듯할수록 날짜를 지키는 게 현장에 힘이 됩니다. 못 지키실 것 같으면 미리 말씀해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "staff_trust_150",
   "text": "어려운 상황을 숨기시지 마세요. 사실대로 들으면 맞출 방법을 찾겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "staff_trust_151",
   "text": "처음 몇 달이 이 회사의 말버릇을 만듭니다. 작은 약속도 적어 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "staff_trust_152",
   "text": "일이 익숙해질수록 예외가 생깁니다. 예외가 늘면 기준이 흐려집니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "staff_trust_153",
   "text": "오래 일한 사람일수록 과거에 하신 말씀을 기억합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "staff_trust_154",
   "text": "매출이 없어도 대외 안내는 사실대로여야 현장이 덜 흔들립니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "staff_trust_155",
   "text": "줄어든 숫자를 숨기시면 현장 계획이 틀어집니다. 원인만 공유해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "staff_trust_156",
   "text": "지치셨을 때는 즉답을 내일로 미루셔도 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "staff_trust_157",
   "text": "처음이니 화려한 계획보다, 이번 주에 꼭 지키실 한 가지만 말씀해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "staff_trust_158",
   "text": "지난번에 약속하신 일정, 현장에서 기다리고 있습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "staff_trust_159",
   "text": "잘됐을 때도 하신 말씀 그대로 남겨 주시면 좋겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "staff_trust_160",
   "text": "잘못을 빨리 인정해 주시면 현장은 수습에 집중할 수 있습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "staff_trust_161",
   "text": "갚을 일정이 있으면 미리 알려 주세요. 갑작스러운 긴축이 제일 힘듭니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  }
 ],
 "friend": [
  {
   "id": "friend_speed_001",
   "text": "이쯤 되니 네가 모든 일을 당장으로 만들더라. 하나만 남기자.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_speed_002",
   "text": "좀 남았다고 일정 당기지 마. 그때 더 무리하잖아.",
   "themes": [
    "speed"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "friend_speed_003",
   "text": "또 급하다고 문을 나서네. 하룻밤만 두자.",
   "themes": [
    "speed"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_people_004",
   "text": "중간쯤 오면 너는 사람 연락을 더 줄이더라. 한 통만 해.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_people_005",
   "text": "연말에 사람부터 챙기라. 일은 다음 해에도 있어.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_people_006",
   "text": "손님 적어도 주변에 남는 사람은 따로 있어. 그 사람들 밥 한 끼 해.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "friend_cash_007",
   "text": "이쯤 되면 통장은 네가 보고 있는 거지? 자랑 말고 잔고만 보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_cash_008",
   "text": "또 돈 이야기는 피하네. 밥값만 남아 있는지만 확인하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_cash_009",
   "text": "손님 생기기 전에 생활비는 남겨 둬. 그게 기본이야.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "friend_growth_010",
   "text": "새해라고 목표 두 배로 적지 마. 작년에 지친 이유부터 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "friend_growth_011",
   "text": "또 키우자는 이야기네. 네가 잠은 자면서 키울 수 있는지부터 생각해.",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_growth_012",
   "text": "조금 남았다고 영역을 넓히지 마. 그 이익이 반복되는지 보고.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "friend_safety_013",
   "text": "줄었다고 새 일을 벌이지 마. 보기만 해도 숨 가빠.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "friend_safety_014",
   "text": "이 단계에서 한 방에 가려고 하지 마. 연습이 아직 필요해.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_safety_015",
   "text": "다시 보니 무모한 확신이 늘었어. 나는 네가 무사한 게 더 중요해.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_self_016",
   "text": "손님 많아져서 좋지만, 네가 안 보이면 의미가 없어.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "friend_self_017",
   "text": "적자 났다고 잠을 끊지 마. 그건 만회가 아니야.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "friend_quality_018",
   "text": "아직 안 팔려도 네가 부끄러운 건 내놓지 마.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "friend_quality_019",
   "text": "연말 실적 채우자고 대충 만들지 마. 너 밤에 잠 못 자잖아.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_quality_020",
   "text": "익숙해졌다고 건너뛰는 버릇, 지금 고치자.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_trust_021",
   "text": "연말에 포장하지 마. 있는 그대로가 너답잖아.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_trust_022",
   "text": "손님 늘었다고 안내를 대충 하면 바로 티 나. 솔직하게 해.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "friend_self_023",
   "text": "너 요즘 얼굴이 말이 아니야. 좀 쉬어.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "friend_self_024",
   "text": "회사보다 네가 먼저야.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "friend_self_025",
   "text": "밥은 먹고 다니는 거지? 그게 제일 걱정이야.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "friend_self_026",
   "text": "주말에 한 번만 연락 없이 자 봐. 회사가 무너지진 않아.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "friend_self_027",
   "text": "야, 진짜 아프다. 오늘 일정 취소해. 내가 보기엔 그게 맞아.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_self_028",
   "text": "그 얼굴로 미팅 들어가지 마. 상대도 알아.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_self_029",
   "text": "조금씩 지쳐 보인다. 이번 주는 하루만 비워.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "friend_self_030",
   "text": "컨디션 좋을 때 쉬는 날도 미리 잡아 둬. 너 나중에 안 하잖아.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "friend_self_031",
   "text": "시작했다고 잠을 끊지 마. 초반에 몸 상하면 나중에 더 힘들어.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_self_032",
   "text": "이제 좀 됐다 싶을 때도 너는 안 쉬더라. 이번엔 쉬어.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_self_033",
   "text": "돈 급해도 밤새우면 판단이 더 구려져. 자고 내일 생각해.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_self_034",
   "text": "사람 있는데 네가 다 하고 있으면 그게 문제야. 좀 맡겨.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "friend_self_035",
   "text": "망했다고 밤 새우지 마. 오늘은 그냥 나오자. 내가 밥 살게.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_self_036",
   "text": "다시 보니 더 초췌해. 사업 이야기 말고 너 이야기 먼저 하자.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_self_037",
   "text": "연말에 몰아서 하다 쓰러지는 거, 너 작년이랑 똑같은 패턴이야.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_self_038",
   "text": "돈 좀 풀렸다고 일정 가득 채우지 마. 그 여유로 쉬어야지.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_self_039",
   "text": "오랜만이다. 인사부터 하자. 회사 자랑은 밥 먹고 해도 돼.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_self_040",
   "text": "이쯤 되면 네가 회사인 줄 알더라. 너라는 사람은 따로 있어.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_people_041",
   "text": "사람 잃고 돈 벌면 뭐 하냐.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "friend_people_042",
   "text": "같이 일하는 사람한테 잘해.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "friend_people_043",
   "text": "너는 일에 빠지면 사람 연락을 먼저 끊더라. 그거 고치자.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "friend_people_044",
   "text": "주변에 남는 사람이 있어야 너도 오래 가.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "friend_people_045",
   "text": "팀 있으면 잘해. 네가 예민한 날 말에 상처받는 사람 많아.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "friend_people_046",
   "text": "혼자 하면 외롭잖아. 가끔은 사람 만나.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "friend_people_047",
   "text": "분위기 안 좋다며. 목표 올리기 전에 한번 들어나 봐.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "friend_people_048",
   "text": "돈 없다고 사람한테 차갑게 굴면 더 힘들어져.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_people_049",
   "text": "위기여도 말은 곱게 해. 너 스트레스 받으면 말이 짧아지잖아.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_people_050",
   "text": "처음 같이하는 사람한테 특히 잘해. 첫 동료는 오래 기억하거든.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_people_051",
   "text": "오래 버틴 사람 소중히 해. 그런 사람 주위에 잘 없어.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_people_052",
   "text": "잘됐을 때 사람 이름 불러 줘. 네가 혼자 한 거 아니잖아.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_people_053",
   "text": "실패했다고 남 탓하면 너답지 않아. 오늘은 그냥 듣자.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_people_054",
   "text": "너 아픈데 사람 만나서 날카롭게 구는 거, 나중에 후회해.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_people_055",
   "text": "사람 이야기도 하자. 계약 이야기만 하면 숨 막혀.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_people_056",
   "text": "또 업무 이야기로 시작하네. 친구 얼굴 보고 온 건데.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_people_057",
   "text": "여유 있을 때 밥 한 끼 사는 게, 나중에 크게 남는 일이야.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_growth_058",
   "text": "그렇게까지 키워야 해? 지금도 대단한데.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "friend_growth_059",
   "text": "욕심내다 다 잃는 거 많이 봤어.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "friend_growth_060",
   "text": "나는 잘 모르겠고, 네가 잠은 자면서 키우는지가 궁금해.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "friend_growth_061",
   "text": "크게 되는 것보다 네가 남는 게 낫지 않아?",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "friend_growth_062",
   "text": "돈 있다고 판 키우기 전에, 네가 감당할 수 있는지부터 생각해.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_growth_063",
   "text": "빠듯한데 또 새 일 벌이지 마. 보기만 해도 숨 가빠.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_growth_064",
   "text": "지금은 키울 때가 아니지. 일단 살고 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_growth_065",
   "text": "시작하자마자 대박 생각 말고, 일단 한 걸음만 가자.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_growth_066",
   "text": "이제 좀 됐다 싶어서 욕심내는 거 아니지? 한번 돌아봐.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_growth_067",
   "text": "이만큼 왔으면 속력보다 네가 원하는 삶인지 물어봐야지.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_growth_068",
   "text": "숫자 오른다고 들뜨지 마. 너는 그럴 때 일을 더 받더라.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "friend_growth_069",
   "text": "줄었다고 너무 자책하지 마. 그거 한 달이야.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "friend_growth_070",
   "text": "손님 많아져서 좋긴 한데, 너 얼굴이 더 없어지면 곤란해.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "friend_growth_071",
   "text": "잘했어. 그렇다고 내일부터 두 배로 하지는 마.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_growth_072",
   "text": "혼자 주문을 두 배로 받는 거, 남들이 보기엔 용감해 보여도 무모해.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "friend_growth_073",
   "text": "몸 이 상태면 성장 이야기 하지 마. 회복이 먼저지.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_growth_074",
   "text": "크게 될 이야기 말고, 요즘 너 괜찮은지부터 듣자.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_safety_075",
   "text": "난 잘 모르지만, 안전한 게 낫지 않아?",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "friend_safety_076",
   "text": "무리하지 마.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "friend_safety_077",
   "text": "한 번에 다 걸지 마. 너 예전에 그런 거 후회했잖아.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "friend_safety_078",
   "text": "잘 모르겠으면 안 하는 쪽을 골라. 그게 틀린 건 아니야.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "friend_safety_079",
   "text": "여유 있다고 큰 거 한 방에 하지 마. 봐 온 게 있어서 그래.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_safety_080",
   "text": "빠듯할 때는 새로운 거보다 지키는 게 맞잖아.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_safety_081",
   "text": "지금은 모험할 때 아니야. 내가 봐도 그래.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_safety_082",
   "text": "시작부터 올인하지 마. 연습 경기도 필요해.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_safety_083",
   "text": "오래 했으니까 방심하지 마. 익숙한 게 제일 위험하대잖아.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_safety_084",
   "text": "빚 있는데 또 큰 거 하지 마. 제발.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "friend_safety_085",
   "text": "몸 이런데 모험은 무슨. 오늘은 집에 가.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_safety_086",
   "text": "잘 됐다고 바로 판 키우지 마. 한 번 이겼을 뿐이야.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_safety_087",
   "text": "다쳤으면 같은 높이 바로 다시 올라가지 마.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_safety_088",
   "text": "새해라고 거창한 목표 잡지 마. 다치지 않을 선부터 정하자.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "friend_safety_089",
   "text": "너만 아는 위험 있으면 팀에 말해야지. 혼자 끌어안지 마.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "friend_safety_090",
   "text": "큰소리부터 치지 마. 나는 네가 무사한 게 더 중요해.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_safety_091",
   "text": "아직 시작인데 큰 계약 이야기 들으면 내가 더 불안해.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "friend_cash_092",
   "text": "돈 얘기는 모르겠고, 밥은 먹고 다녀.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "friend_cash_093",
   "text": "빚은 지지 마라.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "friend_cash_094",
   "text": "나는 재무는 모르지만, 통장 잔고는 네가 보고 있는 거지?",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "friend_cash_095",
   "text": "돈 없다고 끼니 거르면 그게 제일 비싼 손해야.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "friend_cash_096",
   "text": "좀 여유 있어 보여서 다행이다. 그래도 다 쓰진 마.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_cash_097",
   "text": "빠듯해 보인다. 내가 밥은 살게. 쓸데없는 자존심 부리지 마.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_cash_098",
   "text": "많이 급해 보인다. 혼자 끙끙하지 말고, 믿을 사람한테는 말해.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_cash_099",
   "text": "이자 나가는 거 괜찮아? 잘 몰라도 그건 미루면 안 되는 거잖아.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "friend_cash_100",
   "text": "아직 안 들어와도 밥값은 있어야지. 비상금은 남겨 둬.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "friend_cash_101",
   "text": "조금 남았다고? 축하해. 그래도 전부 재투자하지는 마.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "friend_cash_102",
   "text": "이번 달 적자라 해도 네가 망한 건 아니야. 밥부터 먹자.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "friend_cash_103",
   "text": "초반에 멋있는 사무실보다 생활비가 먼저지.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_cash_104",
   "text": "오래 했으면 안 쓰는 돈 나가는 데도 있을 거야. 한번 들여다봐.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_cash_105",
   "text": "손해봤으면 만회 생각 전에 오늘 쓸 돈부터 세 봐.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_cash_106",
   "text": "연말에 세금 같은 거 갑자기 나오잖아. 미리 봐 둬.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_cash_107",
   "text": "돈 자랑도, 돈 걱정도 나중에 하고 일단 밥 먹자.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_cash_108",
   "text": "사람 있으면 그들 월급은 너 자존심보다 먼저잖아.",
   "themes": [
    "cash"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "friend_speed_109",
   "text": "천천히 해도 되잖아.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "friend_speed_110",
   "text": "급하게 먹은 밥이 체해.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "friend_speed_111",
   "text": "오늘 안에 안 해도 세상 안 끝나. 진짜야.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "friend_speed_112",
   "text": "너는 급하면 실수하잖아. 알고 있잖아.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "friend_speed_113",
   "text": "돈 있는데 왜 이렇게 급해? 하루 미뤄도 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_speed_114",
   "text": "빠듯해도 급하게 계약하지 마. 하룻밤 자 보고 해.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_speed_115",
   "text": "급하다고 아무 돈이나 받지 마. 그건 내가 봐도 위험해.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_speed_116",
   "text": "시작이니까 조급한 거 알아. 그래도 천천히 해도 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_speed_117",
   "text": "익숙하다고 대충 빨리 하지 마. 그럴 때 사고 나.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_speed_118",
   "text": "잠 부족한 날 빠른 결정 하지 마. 너 맨날 후회하잖아.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_speed_119",
   "text": "잘된다고 일정 당기지 마. 몸부터 따라가야지.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "friend_speed_120",
   "text": "잘 됐으면 하루는 쉬어. 바로 다음 달리지 말고.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_speed_121",
   "text": "만회하려고 서두르지 마. 같은 구멍에 또 빠져.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_speed_122",
   "text": "네가 급하면 팀도 급해져. 하나만 하자고 해.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "friend_speed_123",
   "text": "연말 실적 채우겠다고 무리하지 마. 그건 너만 지쳐.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "friend_speed_124",
   "text": "급하게 답하지 마. 친구한테는 나중에 말해도 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_speed_125",
   "text": "손님도 없는데 뭘 그렇게 서둘러. 숨 고르자.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "friend_quality_126",
   "text": "네가 만든 건 티가 나. 그게 좋아.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "friend_quality_127",
   "text": "대충 하는 건 너답지 않아.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "friend_quality_128",
   "text": "나는 잘 몰라도, 네가 부끄러워하는 건 내놓지 마.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "friend_quality_129",
   "text": "사람들이 네 이름 보고 사는 거잖아. 그거 잊지 마.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "friend_quality_130",
   "text": "돈 있다고 대충 늘리지 마. 네가 아끼던 그 맛을 남겨.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_quality_131",
   "text": "빠듯하면 가짓수 줄여. 퀄리티까지 줄이면 너 밤에 잠 못 자잖아.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_quality_132",
   "text": "급해도 이상한 거 팔지는 마. 그건 너 아니라니까.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_quality_133",
   "text": "첫 작품이 오래가. 하루 더 봐도 괜찮잖아.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_quality_134",
   "text": "익숙해졌다고 대충 하지 마. 그게 제일 티 나.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_quality_135",
   "text": "오래 한 만큼 처음 마음 어디 갔는지 한번 봐.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_quality_136",
   "text": "잘 팔린다고 엉성한 거 끼워 넣지 마.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "friend_quality_137",
   "text": "손님 많아도 네가 자신 있는 것만 내놔. 욕심내면 평판 깎여.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "friend_quality_138",
   "text": "칭찬받았으면 그 지점만 더 잘해. 이상한 거 덧붙이지 말고.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_quality_139",
   "text": "실수했으면 솔직하게 고치자. 너는 그게 어울려.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_quality_140",
   "text": "피곤하면 검수가 대충 돼. 내일 하자.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_quality_141",
   "text": "네가 만든 거 자랑해도 돼. 대충 만든 척은 하지 말고.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_quality_142",
   "text": "적자여도 퀄리티 지키면 너는 덜 후회할 거야.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "friend_quality_143",
   "text": "지난번에 말하던 그거, 네가 만족할 정도는 됐어?",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_trust_144",
   "text": "거짓말은 하지 마. 너 그런 사람 아니잖아.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "friend_trust_145",
   "text": "솔직한 게 제일 오래가.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "friend_trust_146",
   "text": "나한테까지 포장하지 마. 친구잖아.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "friend_trust_147",
   "text": "말 바뀌면 남들은 바로 느껴. 너도 알잖아.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "friend_trust_148",
   "text": "여유 있을 때 지킨 말이 나중에 너를 지켜 줘.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "friend_trust_149",
   "text": "빠듯해도 거짓말하지 마. 못 지키면 미리 말해.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "friend_trust_150",
   "text": "급하다고 허세 부리지 마. 어려운 거 솔직히 말해.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "friend_trust_151",
   "text": "처음 몇 달이 네 말의 무게를 정해. 작은 약속도 지켜.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "friend_trust_152",
   "text": "좀 됐다 싶어서 예외 만들기 시작하면 이미 흔들리는 거야.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "friend_trust_153",
   "text": "오래 한 사람일수록 옛날에 한 말을 기억해. 조심해.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "friend_trust_154",
   "text": "아직 안 팔려도 과장은 하지 마. 그게 너답지 않아.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "friend_trust_155",
   "text": "줄었으면 줄었다고 해. 포장하다 더 힘들어져.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "friend_trust_156",
   "text": "지쳤을 때 즉답하지 마. 나중에 주워 담기 힘들어.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "friend_trust_157",
   "text": "처음 보는 사람한테도 지킬 수 있는 말만 해. 네가 원래 그런 사람이잖아.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "friend_trust_158",
   "text": "지난번에 네가 한 말, 나는 기억한다. 남들도 그럴 거야.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "friend_trust_159",
   "text": "잘됐어도 과장하지 마. 있는 그대로가 더 멋있어.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "friend_trust_160",
   "text": "실수했으면 빨리 말해. 숨기는 거 너 티 나.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "friend_trust_161",
   "text": "빚 있는 거 숨기느라 주변하고 멀어지지 마.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  }
 ],
 "partner": [
  {
   "id": "partner_speed_001",
   "text": "이쯤 되니 모든 일이 지금 당장이더라. 집에서는 하나만 하자.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_speed_002",
   "text": "조금 남았다고 일정을 당기지 마. 그때 우리 시간이 먼저 사라져.",
   "themes": [
    "speed"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "partner_speed_003",
   "text": "또 급하다고 문을 나서네. 하룻밤은 같이 두자.",
   "themes": [
    "speed"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_people_004",
   "text": "중간쯤 오면 당신 연락이 업무 말고는 끊기더라. 나한테는 남기자.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_people_005",
   "text": "연말에 사람들 챙기는 거 좋은데, 우리 저녁도 목록에 넣어 줘.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_people_006",
   "text": "손님이 적어도 우리 관계는 따로 있어. 그 시간도 지켜 줘.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "partner_cash_007",
   "text": "이 시기엔 회사 사정이든 우리 생활이든, 숫자로 같이 보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_cash_008",
   "text": "또 돈 이야기를 피하네. 생활비 경계만은 오늘 확인하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_cash_009",
   "text": "손님 생기기 전에도 우리 생활비 선은 그대로 가자.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "partner_growth_010",
   "text": "새해 목표를 키우기 전에, 우리 일상이 어떻게 바뀔지부터 이야기하자.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "partner_growth_011",
   "text": "또 키우자는 이야기네. 그 반대편에 우리 저녁이 있는 거 알아?",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_growth_012",
   "text": "이익이 났다고 영역을 넓히기 전에, 우리 시간이 줄 양도 계산해 줘.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "partner_safety_013",
   "text": "줄었다고 새 일을 벌이면 집 공기가 먼저 급해져.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "partner_safety_014",
   "text": "이 단계에서 한 번에 다 걸지 말자. 우리 선이 있잖아.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_safety_015",
   "text": "다시 보니 무리한 확신이 늘었어. 집 통장까지 가는 선택은 같이 정하자.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_self_016",
   "text": "손님이 늘수록 당신이 집에 안 보여. 문의 전부를 쥐지 마.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "partner_self_017",
   "text": "적자 났다고 잠을 끊지 마. 그건 만회가 아니야.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "partner_quality_018",
   "text": "아직 안 팔려도 당신이 부끄러운 건 내놓지 마.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "partner_quality_019",
   "text": "연말 실적 때문에 기준을 낮추지 마. 당신이 잠 못 자잖아.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_quality_020",
   "text": "지난번에 말하던 그거, 당신이 만족할 정도는 됐어?",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_trust_021",
   "text": "연말에 포장하지 마. 있는 그대로가 나한테는 더 좋아.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_trust_022",
   "text": "손님이 늘었다고 나한테까지 짧게 설명하면 섭섭해. 사실대로 해 줘.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "partner_self_023",
   "text": "당신이 건강해야 회사도 챙길 수 있어.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "partner_self_024",
   "text": "오늘은 일찍 들어와. 그게 맞아.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "partner_self_025",
   "text": "회사 이야기 전에, 당신은 밥 먹었어?",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "partner_self_026",
   "text": "우리 시간에 끝나는 시각을 다시 정하자.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "partner_self_027",
   "text": "이 상태면 내일 미팅보다 오늘 잠이 먼저야.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_self_028",
   "text": "아프면 아프다고 해. 참는 거 이제 그만하자.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_self_029",
   "text": "조금씩 지쳐 보여. 이번 주 하루는 우리 시간으로 비우자.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "partner_self_030",
   "text": "컨디션 좋을 때 다음 휴식도 달력에 같이 표시하자.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "partner_self_031",
   "text": "시작이라 바쁜 거 알아. 그래도 잠은 같이 지키자.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_self_032",
   "text": "이만큼 왔으면 당신 일과에 끝나는 종이 있어야 해.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_self_033",
   "text": "돈 급해도 밤새운 결정은 하지 마. 내일 아침에 같이 보자.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_self_034",
   "text": "사람이 있는데 당신이 다 들고 오면, 집에는 남는 게 없어.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "partner_self_035",
   "text": "잘 안 된 날은 만회보다 먼저 집에 와. 여기서 한숨 돌리자.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_self_036",
   "text": "또 그 얼굴이네. 일정 이야기 전에 당신부터 좀 보자.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_self_037",
   "text": "연말에 몰아서 하다 쓰러지는 패턴, 올해는 바꾸자.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_self_038",
   "text": "돈 좀 안정됐다고 일정을 가득 채우지 마. 그 여유는 우리도 써야지.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_self_039",
   "text": "우리 이야기도 할 자리는 남겨 줘. 회사 소개만 하다 가면 서운해.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_self_040",
   "text": "이쯤 되니 당신이 회사인 것 같아. 당신은 여기에 따로 있어.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_safety_041",
   "text": "우리 생활은 지킬 수 있는 거지?",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "partner_safety_042",
   "text": "한계선은 처음에 정한 대로 가자.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "partner_safety_043",
   "text": "집 통장까지 건드리는 선택은 같이 정하자.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "partner_safety_044",
   "text": "한 번에 다 걸지 말자. 우리 생활이 담보가 되면 안 돼.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "partner_safety_045",
   "text": "여유 있다고 판을 한 번에 키우면, 그 긴장감이 집까지 와.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_safety_046",
   "text": "빠듯할 때는 새로운 일보다 우리 생활을 지키는 쪽이 맞아.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_safety_047",
   "text": "지금은 모험할 때가 아니야. 집부터 흔들리면 안 돼.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_safety_048",
   "text": "시작부터 올인하지 말자. 우리가 정한 선이 있잖아.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_safety_049",
   "text": "오래 했다고 방심하지 마. 익숙한 위험이 집으로 와.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_safety_050",
   "text": "빚이 있는 상태에서 큰 결정은 꼭 같이 이야기하자.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "partner_safety_051",
   "text": "몸도 이런데 무리한 선택은 우리 둘 다 위험해.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_safety_052",
   "text": "잘 됐다고 바로 판 키우지 마. 우리 속도도 있어.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_safety_053",
   "text": "다친 다음에는 같은 높이를 바로 다시 가지 말자.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_safety_054",
   "text": "올해 목표보다, 우리 생활에서 지키지 않을 선을 먼저 적자.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "partner_safety_055",
   "text": "회사 위험을 혼자 끌어안지 마. 집에서도 모르고 싶지 않아.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "partner_safety_056",
   "text": "큰 이야기 전에, 우리 생활이 어디까지 영향받는지 말해 줘.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_safety_057",
   "text": "아직 시작인데 큰돈을 걸면 내가 더 불안해.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "partner_growth_058",
   "text": "회사가 커질수록 당신이 안 보여.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "partner_growth_059",
   "text": "더 키우는 게 정말 원하는 거야?",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "partner_growth_060",
   "text": "성장 이야기의 반대편에 우리 저녁이 있는 거 알아?",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "partner_growth_061",
   "text": "크게 되는 것보다, 당신이 집에 남는 게 나한테는 더 중요해.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "partner_growth_062",
   "text": "자금 있다고 키우기 전에, 우리 시간이 줄어들 양도 계산해 줘.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_growth_063",
   "text": "빠듯한데 새 일을 벌이면 집 공기가 먼저 급해져.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_growth_064",
   "text": "지금은 키울 때가 아니야. 일단 우리부터 숨 고르자.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_growth_065",
   "text": "시작하자마자 크게만 보지 말자. 우리 일상을 먼저 만들자.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_growth_066",
   "text": "이제 좀 됐다 싶어서 욕심내는 거면, 한번 같이 돌아보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_growth_067",
   "text": "이만큼 왔으면 속력보다, 우리가 원하는 삶인지 물어봐야 해.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_growth_068",
   "text": "숫자 오른다고 일정을 더 받지 마. 그러면 당신이 더 안 보여.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "partner_growth_069",
   "text": "줄었다고 자책하며 집을 사무실로 만들지 마.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "partner_growth_070",
   "text": "손님이 늘어서 좋지만, 우리 식탁이 비면 곤란해.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "partner_growth_071",
   "text": "잘했어. 그렇다고 내일부터 두 배로 하지는 말자.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_growth_072",
   "text": "혼자 주문을 두 배로 받으면 집으로 오는 건 피로운 얼굴뿐이야.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "partner_growth_073",
   "text": "몸 이런데 성장 계획은 의미 없어. 회복이 먼저지.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_growth_074",
   "text": "크게 될 이야기보다, 우리 생활이 어떻게 바뀔지부터 듣자.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_speed_075",
   "text": "왜 항상 지금 당장이어야 해?",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "partner_speed_076",
   "text": "하루 미룬다고 무너지지 않아.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "partner_speed_077",
   "text": "급한 일과 중요한 일을 집에서까지 섞지 말자.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "partner_speed_078",
   "text": "오늘은 대답하지 않아도 돼. 밤만이라도 두자.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "partner_speed_079",
   "text": "여유 있는데도 이렇게 급할 일은 거의 없어.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_speed_080",
   "text": "빠듯해도 급하게 서명하지 마. 하룻밤은 같이 보자.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_speed_081",
   "text": "급하다고 아무 조건이나 받지 마. 그 결과가 집으로 와.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_speed_082",
   "text": "시작이라 조급한 거 알아. 그래도 천천히 해도 우리 안 무너져.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_speed_083",
   "text": "익숙하다고 빨리 처리하지 마. 그럴 때 사고 나.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_speed_084",
   "text": "잠 부족한 날의 빠른 결정은 나중에 우리 둘 다 후회해.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_speed_085",
   "text": "잘된다고 일정을 당기면 집이 먼저 흔들려.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "partner_speed_086",
   "text": "잘 됐으면 하루는 우리 시간으로 쉬자.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_speed_087",
   "text": "만회하려고 서두르지 마. 같은 구멍에 또 빠져.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_speed_088",
   "text": "당신이 급하면 집 공기도 급해져. 하나만 하자고 해.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "partner_speed_089",
   "text": "연말 실적 때문에 저녁을 다 비우지는 말자.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_speed_090",
   "text": "급하게 답하지 않아도 돼. 우리 이야기는 천천히 해도 돼.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_speed_091",
   "text": "아직 손님이 없는데 뭘 그렇게 서둘러. 숨부터 고르자.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "partner_cash_092",
   "text": "집에 가져오는 돈 얘기도 해야 해.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "partner_cash_093",
   "text": "우리 통장은 건드리지 않기로 했잖아.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "partner_cash_094",
   "text": "회사 사정이 어려워도, 생활비 경계는 같이 보자.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "partner_cash_095",
   "text": "돈 이야기를 피하면 나중에 더 크게 싸우게 돼.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "partner_cash_096",
   "text": "여유가 있으면 우리 생활에도 조금은 남기자. 회사만의 여유는 아니잖아.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_cash_097",
   "text": "빠듯하면 솔직히 말해 줘. 같이 줄일 수 있는 걸 찾아보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_cash_098",
   "text": "이 정도면 나도 알아야 해. 혼자 끌어안지 마.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_cash_099",
   "text": "이자 나가는 날짜는 우리 달력에도 표시하자. 갑자기 알게 되면 무서워.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "partner_cash_100",
   "text": "아직 안 들어와도 생활비는 있어야 해. 그 선은 지키자.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "partner_cash_101",
   "text": "조금 남았으면 축하해. 그래도 전부 회사에 넣지는 말자.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "partner_cash_102",
   "text": "적자여도 당신이 실패자가 되는 건 아니야. 숫자부터 같이 보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "partner_cash_103",
   "text": "초반에 멋있는 지출보다 우리 생활이 먼저야.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_cash_104",
   "text": "오래 했으면 안 쓰는 돈 나가는 데도 있을 거야. 같이 들여다보자.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_cash_105",
   "text": "손해봤으면 만회 계획 전에, 이번 달 집 생활부터 세자.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_cash_106",
   "text": "연말에 갑자기 나오는 돈 있잖아. 미리 이야기하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "partner_cash_107",
   "text": "돈 자랑이나 걱정만 하다 가면 섭섭해. 우리 계획도 말해 줘.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_cash_108",
   "text": "사람 월급은 중요하지만, 우리 생활비도 같은 줄에 올려 줘.",
   "themes": [
    "cash"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "partner_people_109",
   "text": "사람들한테 잘하는 건 좋은데 나한테도 그래 줘.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "partner_people_110",
   "text": "당신 직원들도 가족이 있어.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "partner_people_111",
   "text": "집에 와서까지 사람 고민이면, 나도 들을게. 다만 나만 남기지 마.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "partner_people_112",
   "text": "주변에 남는 사람이 있어야 당신도, 우리도 오래 가.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "partner_people_113",
   "text": "팀한테는 부드럽게 하고 집에서는 예민하면, 그건 공평하지 않아.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "partner_people_114",
   "text": "혼자 일하면 외롭잖아. 그래도 나만은 남겨 두지 마.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "partner_people_115",
   "text": "회사 분위기 안 좋으면 집 공기도 달라져. 이야기해 줘.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "partner_people_116",
   "text": "돈 없다고 사람한테 차갑게 굴면, 당신 얼굴이 집에서 더 굳어져.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_people_117",
   "text": "위기여도 말은 곱게 해. 그 말이 집으로도 돌아와.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_people_118",
   "text": "처음 같이하는 사람들한테 잘해. 그 관계가 우리 생활도 편하게 해.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_people_119",
   "text": "오래 버틴 사람 소중히 해. 그 사람들이 당신을 집에 보내 주기도 하잖아.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_people_120",
   "text": "잘됐을 때 사람들 이름 불러 줘. 혼자 한 거 아니잖아.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_people_121",
   "text": "실패했다고 누구를 탓하며 집에 오지 마. 오늘은 그냥 이야기하자.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_people_122",
   "text": "아플 때 사람 만나서 날카롭게 구는 거, 나중에 우리 둘 다 후회해.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_people_123",
   "text": "사람 자랑보다, 우리 둘의 시간도 그 사람들만큼 지켜 줘.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_people_124",
   "text": "또 업무 사람 이야기로 시작하네. 우리 이야기도 하자.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_people_125",
   "text": "여유 있을 때 사람들한테 잘하면, 어려울 때 당신이 덜 외로워져.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_quality_126",
   "text": "당신이 자랑스러워할 만한 걸 만들어.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "partner_quality_127",
   "text": "대충 넘어가면 밤에 잠 못 자잖아.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "partner_quality_128",
   "text": "이름 걸고 내놓는 거잖아. 부끄러운 건 내일로 미뤄.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "partner_quality_129",
   "text": "사람들이 당신 이름을 보고 선택하는 거야. 그 무게를 잊지 마.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "partner_quality_130",
   "text": "돈 있다고 대충 늘리지 마. 당신이 아끼던 그 기준을 남겨.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_quality_131",
   "text": "빠듯하면 가짓수를 줄여. 기준까지 낮추면 당신이 더 힘들어해.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_quality_132",
   "text": "급해도 이상한 건 내놓지 마. 그건 당신답지 않아.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_quality_133",
   "text": "첫 작품이 오래가. 하루 더 봐도 우리 안 무너져.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_quality_134",
   "text": "익숙해졌다고 대충 하지 마. 당신이 제일 티를 내잖아.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_quality_135",
   "text": "오래 한 만큼 처음 마음을 한번 꺼내 보자.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_quality_136",
   "text": "잘 팔린다고 엉성한 걸 끼워 넣지 마.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "partner_quality_137",
   "text": "손님이 많아도 자신 있는 것만 내놔. 욕심내면 평판이 깎여.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "partner_quality_138",
   "text": "칭찬받았으면 그 지점만 더 잘해. 이상한 걸 덧붙이지 말고.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_quality_139",
   "text": "실수했으면 솔직하게 고치자. 그게 당신다워.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_quality_140",
   "text": "피곤하면 검수가 대충 돼. 내일 하자. 내가 그렇게 말할게.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_quality_141",
   "text": "당신이 만든 걸 듣고 싶어. 대충 만든 척은 하지 말고.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_quality_142",
   "text": "적자여도 기준을 지키면 당신은 덜 후회할 거야.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "partner_trust_143",
   "text": "나한테는 숨기지 마.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "partner_trust_144",
   "text": "약속은 지키는 사람이었으면 해.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "partner_trust_145",
   "text": "집에서는 포장하지 말자. 사실대로 들어도 나는 당신 편이야.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "partner_trust_146",
   "text": "말 바뀌면 남들도 느끼지만, 나는 더 빨리 느껴.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "partner_trust_147",
   "text": "여유 있을 때 지킨 말이 나중에 우리를 지켜 줘.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "partner_trust_148",
   "text": "빠듯해도 거짓말하지 마. 못 지키면 미리 말해 줘.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "partner_trust_149",
   "text": "급하다고 허세 부리지 마. 어려운 거 나한테는 솔직히 말해.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "partner_trust_150",
   "text": "처음 몇 달이 우리 사이의 말의 무게를 정해.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "partner_trust_151",
   "text": "좀 됐다 싶어서 예외를 만들기 시작하면 이미 흔들리는 거야.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "partner_trust_152",
   "text": "오래 같이한 만큼, 옛날에 한 말을 나는 기억해.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "partner_trust_153",
   "text": "아직 안 팔려도 과장하지 마. 집에서는 사실만 하자.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "partner_trust_154",
   "text": "줄었으면 줄었다고 해. 포장하다 둘이 더 힘들어져.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "partner_trust_155",
   "text": "지쳤을 때 즉답하지 마. 나한테는 나중에 말해도 돼.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "partner_trust_156",
   "text": "지킬 수 있는 말만 하자. 그게 우리답잖아.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "partner_trust_157",
   "text": "지난번에 당신이 한 말, 나는 기억하고 있어.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "partner_trust_158",
   "text": "잘됐어도 과장하지 마. 있는 그대로가 나한테는 더 좋아.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "partner_trust_159",
   "text": "실수했으면 빨리 말해. 숨기면 집에서 더 티 나.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "partner_trust_160",
   "text": "빚 있는 걸 나한테까지 숨기면, 그 거리감이 제일 무서워.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  }
 ],
 "family": [
  {
   "id": "family_speed_001",
   "text": "이쯤 되니 모든 일을 당장으로 만드는구나. 하나만 남겨라.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_speed_002",
   "text": "조금 남았다고 일정을 당기지 마라. 그때 더 무리한다.",
   "themes": [
    "speed"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "family_speed_003",
   "text": "또 급하다고 나서는구나. 하룻밤 자고 해라.",
   "themes": [
    "speed"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_people_004",
   "text": "중간쯤 오면 너는 사람 연락을 더 줄인다. 한 통만 하거라.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_people_005",
   "text": "연말에 사람부터 챙겨라. 일은 다음 해에도 있다.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_people_006",
   "text": "손님이 적어도 주변에 남는 사람은 따로 있다. 밥 한 끼 해라.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "family_cash_007",
   "text": "이쯤 되면 통장은 네가 보고 있지? 자랑 말고 잔고를 말해라.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_cash_008",
   "text": "또 돈 이야기를 피하는구나. 밥값이 남아 있는지만 확인하자.",
   "themes": [
    "cash"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_cash_009",
   "text": "손님 생기기 전에 생활비는 남겨 둬라. 그게 기본이다.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "family_growth_010",
   "text": "새해라고 목표를 두 배로 적지 마라. 작년에 지친 이유부터 보거라.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "family_growth_011",
   "text": "또 키우자는 이야기냐. 네가 잠은 자면서 할 수 있는지부터 생각해라.",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_growth_012",
   "text": "조금 남았다고 일을 넓히지 마라. 그 이익이 반복되는지 보고.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "family_safety_013",
   "text": "줄었다고 새 일을 벌이지 마라. 보기만 해도 숨이 가쁘다.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "family_safety_014",
   "text": "이 단계에서 한 방에 가려고 하지 마라. 아직 천천히 해도 된다.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_safety_015",
   "text": "다시 보니 무모한 확신이 늘었구나. 나는 네가 다치지 않는 게 먼저다.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_self_016",
   "text": "손님이 늘수록 네가 모든 일을 쥐고 있으면 몸이 먼저 상한다. 좀 맡겨라.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "family_self_017",
   "text": "적자 났다고 잠을 끊지 마라. 그건 만회가 아니다.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "family_quality_018",
   "text": "아직 안 팔려도 네가 부끄러운 것은 내놓지 마라.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "family_quality_019",
   "text": "연말 실적 채우자고 대충 만들지 마라. 손님 속이는 것과 다를 바 없다.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_quality_020",
   "text": "지난번에 말하던 그거, 네가 자신 있게 내놓을 정도는 됐느냐.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_trust_021",
   "text": "연말에 포장하지 마라. 있는 그대로가 너를 지킨다.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_trust_022",
   "text": "손님이 늘었다고 안내를 대충 하면 신용이 깎인다. 사실대로 해라.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "family_safety_023",
   "text": "무리하지 않는 쪽이 맞다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "family_safety_024",
   "text": "할 수 있는 만큼만 해라. 그게 오래간다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "family_safety_025",
   "text": "한 번에 다 잡으려다 넘어지는 사람 많이 봤다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "family_safety_026",
   "text": "안 하는 선택을 부끄러워하지 마라.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "family_safety_027",
   "text": "여유 있다고 큰일 벌이지 마라. 여유는 남겨 두는 것이다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_safety_028",
   "text": "빠듯할 때는 새 일보다 지키는 일이 먼저다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_safety_029",
   "text": "지금은 모험할 때가 아니다. 살아남는 게 먼저다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_safety_030",
   "text": "시작했다고 모든 문을 열 필요는 없다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_safety_031",
   "text": "오래 했다고 방심하지 마라. 익숙한 데서 사고가 난다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_safety_032",
   "text": "빚이 있는데 또 큰일을 벌이면 집이 먼저 흔들린다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "family_safety_033",
   "text": "몸도 이런데 무모한 일은 하지 마라.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_safety_034",
   "text": "잘됐다고 바로 판을 키우지 마라. 한 번 이긴 것이다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_safety_035",
   "text": "다쳤으면 같은 높이를 바로 다시 오르지 마라.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_safety_036",
   "text": "새해라고 거창한 목표보다, 다치지 않을 선을 먼저 정해라.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "family_safety_037",
   "text": "너만 아는 위험이 있으면 같이 일하는 사람에게 말해라.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "family_safety_038",
   "text": "큰소리부터 치지 말고, 지금 할 수 있는 일만 말해라.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_safety_039",
   "text": "아직 손님이 없는데 큰돈을 걸지 마라.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "family_cash_040",
   "text": "들어오는 돈은 챙겨라. 나가는 돈은 더 챙기고.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "family_cash_041",
   "text": "돈은 버는 것보다 지키는 게 어렵다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "family_cash_042",
   "text": "통장 잔고는 네가 보고 있지? 자랑보다 그게 먼저다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "family_cash_043",
   "text": "쓸 일이 많다고 생활비까지 손대면 안 된다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "family_cash_044",
   "text": "여유가 있으면 다행이다. 그래도 다 쓰지 마라.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_cash_045",
   "text": "빠듯해 보이는구나. 밥값은 남겨 둬라.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_cash_046",
   "text": "많이 급해 보인다. 혼자 끙끙하지 말고 믿을 사람에게는 말해라.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_cash_047",
   "text": "이자는 미루면 안 된다. 그 날짜는 달력에 크게 써 둬라.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "family_cash_048",
   "text": "아직 안 들어와도 비상금은 남겨 둬라. 그건 만지면 안 된다.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "family_cash_049",
   "text": "조금 남았으면 잘했다. 그래도 전부 일에 넣지는 마라.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "family_cash_050",
   "text": "이번 달 적자라고 네가 실패한 것은 아니다. 밥부터 먹어라.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "family_cash_051",
   "text": "초반에 멋있는 사무실보다 생활비가 먼저다.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_cash_052",
   "text": "오래 했으면 안 쓰는 돈 나가는 데가 있을 것이다. 한번 들여다봐라.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_cash_053",
   "text": "손해봤으면 만회 생각 전에 오늘 쓸 돈부터 세어라.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_cash_054",
   "text": "연말에 세금 같은 게 갑자기 나온다. 미리 봐 둬라.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_cash_055",
   "text": "돈 자랑은 말고, 나가는 돈부터 이야기해라.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_cash_056",
   "text": "사람 있으면 그 사람들 몫은 네 자존심보다 먼저다.",
   "themes": [
    "cash"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "family_growth_057",
   "text": "작게 해도 먹고살면 되지 않니?",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "family_growth_058",
   "text": "일을 너무 크게 벌이면 넘어질 때도 크게 다친다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "family_growth_059",
   "text": "키우는 이야기만 하지 말고, 네가 감당할 수 있는지를 생각해라.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "family_growth_060",
   "text": "크게 되는 것보다 오래 하는 게 낫다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "family_growth_061",
   "text": "돈 있다고 판을 키우기 전에, 네가 버틸 수 있는지부터 생각하거라.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_growth_062",
   "text": "빠듯한데 새 일을 벌이지 마라. 보기만 해도 숨이 가쁘다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_growth_063",
   "text": "지금은 키울 때가 아니다. 일단 살고 보자.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_growth_064",
   "text": "시작하자마자 대박을 생각하지 말고, 한 걸음만 가거라.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_growth_065",
   "text": "이제 좀 됐다고 욕심내지 마라. 한번 돌아봐라.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_growth_066",
   "text": "이만큼 왔으면 속력보다 네가 원하는 삶인지를 물어봐라.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_growth_067",
   "text": "숫자 오른다고 일을 더 받지 마라. 몸이 먼저다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "family_growth_068",
   "text": "줄었다고 너무 자책하지 마라. 그거 한 달이다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "family_growth_069",
   "text": "손님이 많아져서 좋긴 한데, 네 얼굴이 더 없어지면 곤란하다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "family_growth_070",
   "text": "잘했다. 그렇다고 내일부터 두 배로 하지는 마라.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_growth_071",
   "text": "혼자 일을 두 배로 받는 것은 용기가 아니라 무모함이다.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "family_growth_072",
   "text": "몸 이 상태로 키울 생각 하지 마라. 회복이 먼저다.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_growth_073",
   "text": "크게 될 이야기 말고, 요즘 너는 괜찮은지부터 말해라.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_self_074",
   "text": "밥은 챙겨 먹고 다니니?",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "family_self_075",
   "text": "몸 상하면 다 소용없다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "family_self_076",
   "text": "잠은 자니? 그 얼굴이면 일이 먼저가 아니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "family_self_077",
   "text": "주말에 한 번은 일을 내려놓아라.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "family_self_078",
   "text": "오늘은 쉬어라. 그 얼굴로 밖에 나가지 마라.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_self_079",
   "text": "아프면 아프다고 해라. 참는 버릇 좋지 않다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_self_080",
   "text": "조금씩 지쳐 보이는구나. 이번 주는 하루를 비워라.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "family_self_081",
   "text": "기운 있을 때 쉬는 날도 미리 잡아 둬라. 너는 나중에 안 하잖니.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "family_self_082",
   "text": "시작했다고 잠을 끊지 마라. 초반에 몸 상하면 나중에 더 힘들다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_self_083",
   "text": "이제 좀 됐다 싶을 때도 너는 안 쉬더라. 이번엔 쉬어라.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_self_084",
   "text": "돈 급해도 밤새우면 판단이 흐려진다. 자고 내일 생각해라.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_self_085",
   "text": "사람 있는데 네가 다 하고 있으면 그게 문제다. 좀 맡겨라.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "family_self_086",
   "text": "망했다고 밤 새우지 마라. 밥부터 먹고 내일 하자.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_self_087",
   "text": "다시 보니 더 수척하구나. 일 이야기 말고 너 이야기부터 하자.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_self_088",
   "text": "연말에 몰아서 하다 쓰러지는 거, 작년이랑 똑같은 패턴이다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_self_089",
   "text": "돈 좀 풀렸다고 일정을 가득 채우지 마라. 그 여유로 쉬어야지.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_self_090",
   "text": "회사 자랑은 나중에 하고, 밥은 먹었는지부터 말해라.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_self_091",
   "text": "이쯤 되면 네가 일인 줄 알겠구나. 너는 따로 있다.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_speed_092",
   "text": "급할 것 없다. 돌아가도 된다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "family_speed_093",
   "text": "서두르면 꼭 탈이 난다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "family_speed_094",
   "text": "오늘 안에 안 해도 세상은 안 끝난다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "family_speed_095",
   "text": "급하면 실수하는 거, 너도 알지 않니.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "family_speed_096",
   "text": "돈 있는데 왜 이렇게 급하냐. 하루 미뤄도 된다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_speed_097",
   "text": "빠듯해도 급하게 계약하지 마라. 하룻밤 자고 해라.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_speed_098",
   "text": "급하다고 아무 돈이나 받지 마라. 그건 더 위험하다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_speed_099",
   "text": "시작이니까 조급한 거 안다. 그래도 천천히 해도 된다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_speed_100",
   "text": "익숙하다고 대충 빨리 하지 마라. 그럴 때 사고가 난다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_speed_101",
   "text": "잠 부족한 날 빠른 결정은 하지 마라. 나중에 후회한다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_speed_102",
   "text": "잘된다고 일정을 당기지 마라. 몸이 따라가야 한다.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "family_speed_103",
   "text": "잘됐으면 하루는 쉬어라. 바로 다음을 달리지 말고.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_speed_104",
   "text": "만회하려고 서두르지 마라. 같은 구멍에 또 빠진다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_speed_105",
   "text": "네가 급하면 다른 사람들도 급해진다. 하나만 하자고 해라.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "family_speed_106",
   "text": "연말 실적 채우겠다고 무리하지 마라. 그건 너만 지친다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "family_speed_107",
   "text": "급하게 답하지 마라. 생각은 천천히 해도 된다.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_speed_108",
   "text": "손님도 없는데 뭘 그렇게 서두르느냐. 숨 고르고 해라.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "family_people_109",
   "text": "사람한테 인색하면 안 된다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "family_people_110",
   "text": "같이 일하는 사람 밥은 잘 사 줘라.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "family_people_111",
   "text": "너는 일에 빠지면 사람 연락을 먼저 끊는다. 그거 고쳐라.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "family_people_112",
   "text": "주변에 남는 사람이 있어야 너도 오래 간다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "family_people_113",
   "text": "같이 일하는 사람에게 잘해라. 네가 예민한 날 말에 상처받는다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "family_people_114",
   "text": "혼자 하면 외롭다. 가끔은 사람을 만나거라.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "family_people_115",
   "text": "분위기 안 좋으면 목표 올리기 전에 한번 들어나 봐라.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "family_people_116",
   "text": "돈 없다고 사람한테 차갑게 굴면 더 힘들어진다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_people_117",
   "text": "위기여도 말은 고르게 해라. 너는 스트레스 받으면 말이 짧아진다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_people_118",
   "text": "처음 같이하는 사람에게 특히 잘해라. 첫 동료는 오래 기억한다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_people_119",
   "text": "오래 버틴 사람을 소중히 해라. 그런 사람은 주위에 잘 없다.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_people_120",
   "text": "잘됐을 때 사람 이름을 불러 줘라. 혼자 한 게 아니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_people_121",
   "text": "실패했다고 남 탓하지 마라. 그건 보기 좋지 않다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_people_122",
   "text": "아픈데 사람 만나서 날카롭게 굴면 나중에 후회한다.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_people_123",
   "text": "사람 이야기도 하거라. 일 이야기만 하면 숨이 막힌다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_people_124",
   "text": "또 일 이야기로 시작하는구나. 네 얼굴부터 보자.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_people_125",
   "text": "여유 있을 때 밥 한 끼 사는 게 나중에 크게 남는다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_quality_126",
   "text": "손님 속이는 장사는 오래 못 간다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "family_quality_127",
   "text": "정직하게 만들어라.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "family_quality_128",
   "text": "네가 부끄러워하는 것은 내놓지 마라.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "family_quality_129",
   "text": "이름 걸고 파는 것이다. 대충 하면 금세 티가 난다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "family_quality_130",
   "text": "돈 있다고 대충 늘리지 마라. 네가 아끼던 그 맛을 남겨라.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_quality_131",
   "text": "빠듯하면 가짓수를 줄여라. 품질까지 줄이면 밤에 잠 못 잔다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_quality_132",
   "text": "급해도 이상한 것은 팔지 마라. 그건 네 이름이 상한다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_quality_133",
   "text": "첫 물건이 오래간다. 하루 더 봐도 괜찮다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_quality_134",
   "text": "익숙해졌다고 대충 하지 마라. 그게 제일 티가 난다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_quality_135",
   "text": "오래 한 만큼 처음 마음을 한번 들여다봐라.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_quality_136",
   "text": "잘 팔린다고 엉성한 것을 끼워 넣지 마라.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "family_quality_137",
   "text": "손님이 많아도 자신 있는 것만 내놔라. 욕심내면 평판이 깎인다.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "family_quality_138",
   "text": "칭찬받았으면 그 지점만 더 잘해라. 이상한 것을 덧붙이지 말고.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_quality_139",
   "text": "실수했으면 솔직하게 고쳐라. 그게 너를 살린다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_quality_140",
   "text": "피곤하면 검수가 대충 된다. 내일 해라.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_quality_141",
   "text": "네가 만든 것을 부끄러워하지 말고, 대충 만든 척만 하지 마라.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_quality_142",
   "text": "적자여도 정직하게 만들면 덜 후회한다.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "family_trust_143",
   "text": "신용 하나로 사는 거다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "family_trust_144",
   "text": "약속은 손해를 보더라도 지켜라.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "family_trust_145",
   "text": "거짓말하면 나중에 더 크게 물어줘야 한다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "family_trust_146",
   "text": "말은 짧게, 약속은 무겁게 해라.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "family_trust_147",
   "text": "여유 있을 때 지킨 말이 나중에 너를 지킨다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "family_trust_148",
   "text": "빠듯해도 거짓말하지 마라. 못 지키면 미리 말해라.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "family_trust_149",
   "text": "급하다고 허세 부리지 마라. 어려운 것은 솔직히 말해라.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "family_trust_150",
   "text": "처음 몇 달이 네 말의 무게를 정한다. 작은 약속도 지켜라.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "family_trust_151",
   "text": "좀 됐다 싶어서 예외를 만들기 시작하면 이미 흔들리는 것이다.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "family_trust_152",
   "text": "오래 한 사람일수록 옛날에 한 말을 기억한다. 조심해라.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "family_trust_153",
   "text": "아직 안 팔려도 과장은 하지 마라. 그게 너를 오래 가게 한다.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "family_trust_154",
   "text": "줄었으면 줄었다고 해라. 포장하다 더 힘들어진다.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "family_trust_155",
   "text": "지쳤을 때 즉답하지 마라. 나중에 주워 담기 힘들다.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "family_trust_156",
   "text": "처음 보는 사람에게도 지킬 수 있는 말만 해라.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "family_trust_157",
   "text": "지난번에 네가 한 말, 나는 기억한다. 남들도 그럴 것이다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "family_trust_158",
   "text": "잘됐어도 과장하지 마라. 있는 그대로가 더 보기 좋다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "family_trust_159",
   "text": "실수했으면 빨리 말해라. 숨기는 것은 더 티가 난다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "family_trust_160",
   "text": "빚 있는 것을 숨기느라 주변과 멀어지지 마라.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  }
 ],
 "customer": [
  {
   "id": "customer_speed_001",
   "text": "이쯤 되니 모든 일이 당장이 되더군요. 제 건의 가능한 날짜만 사실대로 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_speed_002",
   "text": "잘되신다고 일정을 당기시면 완성도가 떨어져요. 하루 미뤄도 기다립니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "customer_speed_003",
   "text": "다시 왔는데도 급하게 진행하시는 느낌이 있어요. 확인만 한 번 더 해 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_people_004",
   "text": "중간쯤 되면 담당이 자주 바뀌기 쉬워요. 기록이 이어졌으면 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_people_005",
   "text": "연말에 사람이 바뀌어도 지난 이야기를 알고 계시면 편합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_people_006",
   "text": "손님이 적어도 응대가 정성스러우면 다시 오게 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "customer_cash_007",
   "text": "이 시기에는 가격보다 구성이 흔들리지 않는지가 중요해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_cash_008",
   "text": "지난번에 말한 구성 그대로인지 확인하고 왔어요. 설명만 해 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_cash_009",
   "text": "첫 손님 입장에서는 화려한 패키지보다 정직한 기본이 좋습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "customer_growth_010",
   "text": "새해에 일을 넓히시더라도, 제가 쓰던 것이 흔들리지 않으면 좋겠습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "customer_growth_011",
   "text": "다시 와 보니 새 일이 많이 붙었네요. 기존 약속부터 지켜 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_growth_012",
   "text": "잘되신 김에 가격만 올리기보다, 내용이 유지되는지를 먼저 보여 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "customer_safety_013",
   "text": "손님이 줄었다고 서비스를 급하게 바꾸시면 남은 단골이 더 불안합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "customer_safety_014",
   "text": "이 단계에서는 큰 모험보다 내일도 문이 열려 있는 게 안심됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_safety_015",
   "text": "다시 왔는데 운영이 흔들려 보이면 오래 쓰기 어렵습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_self_016",
   "text": "손님이 늘수록 사장님이 모든 문의에 답하실 필요는 없어요. 정확한 답이면 됩니다.",
   "themes": [
    "self"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "customer_self_017",
   "text": "어려운 달이라고 밤늦게 답장하실 필요는 없습니다. 아침의 정확한 안내가 낫습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "customer_quality_018",
   "text": "아직 자리를 잡는 중이어도, 내놓는 것의 기준만은 분명히 해 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "customer_quality_019",
   "text": "연말 실적 때문에 완성도를 낮추시면 그 기억이 오래갑니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_quality_020",
   "text": "지난번에 고치기로 한 부분, 이번엔 반영됐는지 보고 왔습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_trust_021",
   "text": "연말에 포장된 안내보다 내년에도 지킬 약속을 듣고 싶습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_trust_022",
   "text": "손님이 늘었다고 안내가 짧아지면 오해가 커집니다. 한 줄만 더 정확히 적어 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "customer_quality_023",
   "text": "저는 이게 좋아서 옵니다. 바꾸지 마세요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "customer_quality_024",
   "text": "품질이 떨어지면 올 이유가 없어요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "customer_quality_025",
   "text": "세세한 마감이 보이면 또 오게 됩니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "customer_quality_026",
   "text": "대충 만든 티가 나면 한 번으로 끝납니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "customer_quality_027",
   "text": "잘될 때일수록 품질을 지키세요. 그때 바꾼 게 가장 오래 남아요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_quality_028",
   "text": "아끼시더라도 이 부분은 유지해 주세요. 제가 돈 내는 지점이에요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_quality_029",
   "text": "어려우시더라도 불량으로 내보내시면 다시 오기 어렵습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_quality_030",
   "text": "첫 인상이 오래갑니다. 조금 늦어도 제대로 된 걸 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_quality_031",
   "text": "이제는 익숙해서 대충 하시나 싶으면, 그때부터 발길이 뜸해집니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_quality_032",
   "text": "오래 쓰다 보니 처음의 정성이 어디 갔는지가 보여요. 그 선을 지켜 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_quality_033",
   "text": "잘 팔리신다고 구성이 엉성해지면, 단골부터 먼저 알아챕니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "customer_quality_034",
   "text": "손님이 늘어도 저 같은 사람은 이 품질 때문에 옵니다. 희석되지 않았으면 해요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "customer_quality_035",
   "text": "이번엔 좋았어요. 이 지점만 유지해 주시면 주변에도 말하겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_quality_036",
   "text": "이번엔 기대에 못 미쳤어요. 같은 일이 반복되면 다른 곳을 찾아봅니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_quality_037",
   "text": "사장님이 지쳐 보이면 결과물에도 티가 납니다. 쉬는 편이 나을 때도 있어요.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_quality_038",
   "text": "처음 써 보는 입장에서는, 자랑보다 실제로 어떤 완성도인지가 중요합니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_quality_039",
   "text": "사정이 어려워도 품질만 지키시면 저는 계속 옵니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "customer_trust_040",
   "text": "미리 알려 주면 이해합니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "customer_trust_041",
   "text": "솔직하게 말해 주는 곳을 믿어요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "customer_trust_042",
   "text": "약속한 날짜가 바뀌면 빨리 알려 주세요. 늦는 것보다 침묵이 더 힘듭니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "customer_trust_043",
   "text": "작은 안내가 정확하면, 큰 문제도 믿게 됩니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "customer_trust_044",
   "text": "여유 있으실 때 지킨 안내가, 나중에 어려운 순간에도 믿음을 남깁니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_trust_045",
   "text": "빠듯하셔도 일정은 사실대로 말해 주세요. 맞춰 보겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_trust_046",
   "text": "어려운 상황이면 어려운 대로 말씀해 주세요. 숨기시면 더 불안합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_trust_047",
   "text": "처음 몇 번의 안내가 이 회사를 얼마나 믿을지 정합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_trust_048",
   "text": "이제 단골인데, 예외가 늘면 기준이 흔들려 보여요.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_trust_049",
   "text": "오래 거래할수록 예전에 하신 말씀을 기억합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_trust_050",
   "text": "아직 자리를 잡는 중이어도, 과장된 안내는 믿고 싶지가 않습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "customer_trust_051",
   "text": "손님이 줄었더라도 상황을 포장하지 마세요. 사실이면 기다릴 수 있습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "customer_trust_052",
   "text": "지치셨을 때는 즉답보다 정확한 답을 내일 주셔도 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_trust_053",
   "text": "처음이라 잘 모릅니다. 지킬 수 있는 약속만 해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_trust_054",
   "text": "지난번에 말씀하신 일정, 기다리고 있었습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_trust_055",
   "text": "좋았을 때도 하신 말씀을 그대로 지켜 주시면 더 믿음이 갑니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_trust_056",
   "text": "문제가 있으면 빨리 인정해 주세요. 변명보다 그게 낫습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_trust_057",
   "text": "사정이 복잡하셔도 결제나 일정 안내만은 명확했으면 합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "customer_cash_058",
   "text": "비용 줄이는 게 손님한테 보이면 끝이에요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "customer_cash_059",
   "text": "아끼는 티가 나면 발길이 끊깁니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "customer_cash_060",
   "text": "가격은 이해합니다. 다만 무엇에 돈을 내는지가 보여야 합니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "customer_cash_061",
   "text": "갑자기 구성이 얇아지면, 할인이 있어도 손이 안 가요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "customer_cash_062",
   "text": "여유 있으실 때 구성을 키웠다면, 사정이 달라져도 그 선을 기억해 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_cash_063",
   "text": "아끼셔야 하는 상황은 이해합니다. 어디에 손을 댔는지는 미리 알려 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_cash_064",
   "text": "급하시더라도 손님에게 그 부담이 그대로 넘어오면 견디기 어렵습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_cash_065",
   "text": "사정이 어려워 보여도, 결제 조건만큼은 처음에 말한 대로였으면 합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "customer_cash_066",
   "text": "이제 시작하는 곳은 가격보다 정직함이 더 오래 남아요.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "customer_cash_067",
   "text": "잘되신다고 가격만 올리고 내용은 그대로면, 단골이 먼저 멈칫합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "customer_cash_068",
   "text": "어려운 달에도 가격 대비 내용만 지키시면 계속 옵니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "customer_cash_069",
   "text": "첫 거래에서는 비싼 패키지보다 솔직한 기본이 좋습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_cash_070",
   "text": "오래 다니다 보면 몰래 줄어드는 구성이 보여요. 그건 설명해야 합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_cash_071",
   "text": "이번 손해 보시겠다고 손님 쪽을 깎으면, 그 손님이 안 옵니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_cash_072",
   "text": "연말에 급하게 끼워 팔기는 부담스러워요. 필요한 것만 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_cash_073",
   "text": "처음 오는 손님은 가격표보다 설명의 정직함을 봅니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_cash_074",
   "text": "사람이 바뀌어도 가격과 구성 안내가 같았으면 합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "customer_growth_075",
   "text": "커지는 건 좋은데 지금 이 느낌은 남겨 주세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "customer_growth_076",
   "text": "손님이 늘면 저 같은 단골은 밀리겠네요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "customer_growth_077",
   "text": "규모가 커져도 제가 처음 온 이유가 사라지지 않았으면 합니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "customer_growth_078",
   "text": "새 메뉴, 새 기능보다 지금 쓰는 것이 흔들리지 않는 게 중요해요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "customer_growth_079",
   "text": "여유 있게 키우시되, 기존 손님 응대가 밀리지 않으면 좋겠습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_growth_080",
   "text": "빠듯하신데 새 일을 벌이면 지금 서비스가 먼저 얇아집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_growth_081",
   "text": "지금은 새로 키우기보다, 지금 손님을 지키는 쪽이 더 고마워요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_growth_082",
   "text": "시작하는 마음은 좋습니다. 한 가지를 제대로 하는 쪽이 믿음이 갑니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_growth_083",
   "text": "이제 자리를 잡으셨다면, 안 할 일도 정해 주세요. 다 하면 다 흔들려요.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "customer_growth_084",
   "text": "오래 커 오신 뒤에는 속도보다 안정이 더 소중합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_growth_085",
   "text": "잘되실 때 응대가 거칠어지면 단골부터 떠납니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "customer_growth_086",
   "text": "줄었다고 새로운 것을 잔뜩 얹으면 기존 손님이 혼란스럽습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "customer_growth_087",
   "text": "손님이 많아도 저와의 약속은 같은 무게였으면 합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "customer_growth_088",
   "text": "잘되신 건 기쁘지만, 그걸 다음 달의 당연한 속도로 만들지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_growth_089",
   "text": "혼자 주문을 많이 받으시면 품질이 먼저 떨어져요. 양을 조절해 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "customer_growth_090",
   "text": "사장님이 지치신 채 일을 늘리시면 손님도 불안합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_growth_091",
   "text": "처음 온 손님에게는 앞으로의 큰 그림보다 오늘 받을 것이 중요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_speed_092",
   "text": "빨리 나오는 건 좋아요. 그래도 주문한 대로 해 주셔야죠.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "customer_speed_093",
   "text": "서두른 티가 나면 불안해요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "customer_speed_094",
   "text": "오늘 안에 못 주시면 미리 말해 주세요. 대충 빨리 주는 것보다 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "customer_speed_095",
   "text": "속도보다 빠진 항목이 없는지가 중요합니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "customer_speed_096",
   "text": "여유 있으실 때 일정만 당기시면 완성도가 떨어져요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_speed_097",
   "text": "급하셔도 한 번만 더 확인해 주세요. 다시 받는 시간이 더 깁니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_speed_098",
   "text": "급하신 건 알겠지만, 확인 없는 진행은 손님에게 위험이 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_speed_099",
   "text": "시작하는 조급함은 이해합니다. 첫 결과물은 하루 더 보시는 편이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_speed_100",
   "text": "오래 하셨다고 단계를 건너뛰면 실수가 납니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_speed_101",
   "text": "지치신 날의 빠른 진행은 다음 주에 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_speed_102",
   "text": "주문이 늘어도 제 일정까지 밀리면 곤란합니다. 가능한 날짜를 사실대로 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "customer_speed_103",
   "text": "잘된 흐름을 이어 가되, 다음 건은 하루 쉬고 해 주셔도 기다립니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_speed_104",
   "text": "만회하시겠다고 서두르시면 같은 실수가 납니다. 천천히 다시 해 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_speed_105",
   "text": "우선순위를 알려 주세요. 다 급하면 제 건이 어디로 가는지 모르겠습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "customer_speed_106",
   "text": "연말 실적 때문에 밀어붙인 결과물은 완성도가 떨어져 보여요.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_speed_107",
   "text": "처음 주문하는 입장에서는, 빠른 약속 말고 지킬 수 있는 날짜가 좋습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_speed_108",
   "text": "손님이 적어도 서두른 티가 나면 첫인상이 나빠요.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "customer_people_109",
   "text": "직원이 자주 바뀌면 불편해요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "customer_people_110",
   "text": "일하는 분들 표정을 보면 어떤 곳인지 알겠더라고요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "customer_people_111",
   "text": "응대하는 사람이 바뀌어도 이야기는 이어졌으면 합니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "customer_people_112",
   "text": "사람을 함부로 다루는 곳은, 손님도 그렇게 다뤄질까 봐 걱정됩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "customer_people_113",
   "text": "팀이 있으면 담당이 누군지 알려 주세요. 매번 처음부터 설명하기 힘듭니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "customer_people_114",
   "text": "혼자 하시더라도 연락이 끊기지 않으면 기다릴 수 있습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "customer_people_115",
   "text": "분위기가 안 좋아 보이면 손님도 오래 머물기 어렵습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "customer_people_116",
   "text": "사정이 어려워도 응대가 차가워지면 발길이 줄어듭니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_people_117",
   "text": "위급해 보이셔도 손님에게는 차분한 안내가 필요합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_people_118",
   "text": "처음 만나는 직원의 태도가 이 회사의 인상입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_people_119",
   "text": "오래 본 직원이 떠나면 아쉽습니다. 인수인계만 잘 되어도 마음은 남아요.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_people_120",
   "text": "잘된 일의 공을 현장에서 일한 분들과 나누시는 모습이 보기 좋았습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_people_121",
   "text": "문제가 생겼을 때 직원만 앞에 세우시면 믿음이 떨어집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_people_122",
   "text": "사장님이 지쳐 날카로우시면 응대하는 분들도 힘들어 보여요.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_people_123",
   "text": "처음 온 손님에게는 친절한 설명 한 번이 큰 결정이 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_people_124",
   "text": "다시 왔는데 담당이 바뀌었더라도, 지난 이야기의 기록만 있으면 편합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_people_125",
   "text": "여유 있으실 때 사람들을 잘 챙기시면, 손님 응대도 자연히 좋아집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_safety_126",
   "text": "오래 했으면 좋겠어요. 무리하지 마세요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "customer_safety_127",
   "text": "어느 날 갑자기 문을 닫으면 손님도 난처해요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "customer_safety_128",
   "text": "안정적으로 운영하시는 모습이 제일 안심됩니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "customer_safety_129",
   "text": "큰 모험보다, 내일도 이곳에 있는 게 저에게는 중요합니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "customer_safety_130",
   "text": "여유가 있어도 한 번에 너무 바꾸시면 단골은 길을 잃습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_safety_131",
   "text": "빠듯할 때는 새 일보다 지금 서비스를 지키는 편이 고맙습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "customer_safety_132",
   "text": "위급해 보이시면 손님도 불안합니다. 운영 계획만 알려 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_safety_133",
   "text": "시작하는 마음은 응원합니다. 무리해서 일찍 닫히는 게 제일 아쉬워요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_safety_134",
   "text": "오래 해 오신 만큼, 익숙하다고 점검을 빼놓지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_safety_135",
   "text": "사정이 복잡하셔도, 서비스가 갑자기 멈추지만 않았으면 합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "customer_safety_136",
   "text": "사장님 몸이 먼저입니다. 무리하다 문을 닫는 게 손님에게도 손해예요.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_safety_137",
   "text": "잘된 한 번을 바로 규모로 키우시면 준비되지 않은 느낌이 납니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "customer_safety_138",
   "text": "다친 다음에는 같은 속도로 바로 가기보다, 빈틈부터 메워 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_safety_139",
   "text": "올해 큰 목표보다, 꾸준히 열어 두시겠다는 말이 더 안심됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "customer_safety_140",
   "text": "팀에 설명이 안 된 변경은 손님에게도 실수로 나타납니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "customer_safety_141",
   "text": "처음 이용하는 입장에서는, 무리한 확신보다 꾸준함이 믿음이 갑니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_safety_142",
   "text": "손님이 적어도, 준비하는 자세가 흔들리지 않으면 다시 오고 싶어집니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "customer_self_143",
   "text": "사장님이 지쳐 보이면 손님도 압니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "customer_self_144",
   "text": "쉬는 날을 정해 두세요. 맞춰서 올게요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "customer_self_145",
   "text": "사장님이 건강해야 제품도 일정대로 나옵니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "customer_self_146",
   "text": "밤늦게까지 답장이 오면 오히려 걱정됩니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "customer_self_147",
   "text": "오늘은 무리하지 마세요. 제 건은 하루 미뤄도 됩니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_self_148",
   "text": "그 상태로 응대하시면 실수가 나기 쉽습니다. 쉬고 연락 주셔요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "customer_self_149",
   "text": "조금씩 지쳐 보이십니다. 이번 주 하루는 문을 닫으셔도 이해합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_mid"
   ]
  },
  {
   "id": "customer_self_150",
   "text": "컨디션이 좋으실 때 쉬는 날도 미리 공지해 주세요. 맞춰 가겠습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "customer_self_151",
   "text": "초반이라 열심이신 건 압니다. 잠을 줄이시면 안내가 흔들립니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "customer_self_152",
   "text": "이제 사장님이 모든 야근을 직접 하실 필요는 없어 보입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "customer_self_153",
   "text": "급하셔도 밤새운 안내보다 아침의 정확한 답이 낫습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "customer_self_154",
   "text": "사장님이 안 쉬시면 응대하는 분들도 먼저 가기가 어려워 보여요.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "customer_self_155",
   "text": "만회하시겠다고 밤을 새우시면 다음 실수가 납니다. 낮에 해 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "customer_self_156",
   "text": "다시 보니 더 지쳐 보입니다. 일정 이야기 전에 좀 쉬셨으면 해요.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "customer_self_157",
   "text": "연말에 몰아서 하시면 결과물이 지친 티가 납니다. 나눠 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "customer_self_158",
   "text": "여유가 생겼다고 일정을 가득 채우지 마세요. 그 여유는 쉬라고 있는 겁니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "customer_self_159",
   "text": "처음 뵙는 사장님께 감히 말씀드리면, 쉬는 시간이 있어야 응대가 정확해집니다.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "customer_self_160",
   "text": "이쯤 되면 사장님 일정이 회사 일정입니다. 빈칸을 남겨 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  }
 ],
 "public_officer": [
  {
   "id": "public_officer_trust_001",
   "text": "지원 조건과 할 수 있는 일을 먼저 맞춰 봐요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "public_officer_trust_002",
   "text": "공문에 적힌 기한이 곧 평가 기준이에요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "public_officer_trust_003",
   "text": "구두 약속만으로는 정산이 안 됩니다. 기록을 남겨 주세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "public_officer_trust_004",
   "text": "빠듯하셔도 집행 조건을 건너뛰면 환수 이야기가 먼저 나옵니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "public_officer_trust_005",
   "text": "위급하셔도 서류와 사실이 다르면 도와드릴 방법이 없어요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "public_officer_trust_006",
   "text": "처음 신청하실 때는 화려한 계획보다 증빙 가능한 범위가 중요해요.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "public_officer_trust_007",
   "text": "탈락이나 보완 요청은 숨기지 마시고 항목별로 다시 맞춰 봐요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "public_officer_trust_008",
   "text": "처음 상담이니, 지원받을 수 있는 것과 없는 것을 분명히 나눌게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "public_officer_trust_009",
   "text": "지난번에 보완하기로 한 자료부터 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "public_officer_quality_010",
   "text": "지원 목적에 맞는 결과물이 있어야 다음 단계로 갑니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "public_officer_quality_011",
   "text": "형식만 채운 보고서는 심의에서 오래 못 버텨요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "public_officer_quality_012",
   "text": "좋은 결과가 나왔으니 증빙 사진과 숫자를 바로 남겨 두세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "public_officer_quality_013",
   "text": "중간 점검을 형식적으로 넘기시면 마지막에 정산이 막힙니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "public_officer_quality_014",
   "text": "초기 결과물은 작아도 됩니다. 다만 계획과 같아야 해요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "public_officer_quality_015",
   "text": "급하셔도 산출물을 부풀려 적으면 나중에 더 힘듭니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "public_officer_quality_016",
   "text": "지난 점검에서 지적된 품질 항목이 반영됐는지 볼게요.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "public_officer_cash_017",
   "text": "지원금은 매출이 아니에요. 사용 계획과 자부담을 구분해 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "public_officer_cash_018",
   "text": "집행 가능한 항목부터 예산표를 다시 볼까요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "public_officer_cash_019",
   "text": "여유가 있으실 때 자부담 비율을 맞추는 게 나중에 더 수월해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "public_officer_cash_020",
   "text": "위급하다고 용도를 바꾸시면 정산에서 막힙니다. 변경 절차를 먼저 밟아요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "public_officer_cash_021",
   "text": "연말 집행 몰아넣기는 증빙이 가장 많이 틀어지는 지점이에요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "public_officer_cash_022",
   "text": "부채가 있어도 지원금 통장은 구분해서 관리해 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "public_officer_cash_023",
   "text": "흑자가 나도 지원금 사용 보고는 별도로 남습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "public_officer_safety_024",
   "text": "규정 밖의 빠른 처리는 도와드릴 수 없어요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "public_officer_safety_025",
   "text": "리스크가 큰 사업 계획은 작은 범위로 나눠 신청하는 편이 낫습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "public_officer_safety_026",
   "text": "현금이 빠듯할수록 선지출 한도를 먼저 확인하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "public_officer_safety_027",
   "text": "부채가 있으면 가점보다 결격 사유가 없는지가 먼저입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "public_officer_safety_028",
   "text": "선정되셨어도 협약 범위를 넘기면 위험이 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "public_officer_safety_029",
   "text": "처음부터 큰 금액을 신청하기보다 소화 가능한 규모가 안전해요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "public_officer_safety_030",
   "text": "오랜 수혜 이력이 있어도 같은 항목의 중복 지원은 안 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "public_officer_self_031",
   "text": "대표님이 모든 서류를 밤에 쓰시면 실수가 납니다. 일정표로 나눠요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "public_officer_self_032",
   "text": "점검 전날 밤샘은 보완 사항을 늘릴 뿐입니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "public_officer_self_033",
   "text": "지치신 상태로 면담하시면 중요한 조건을 놓치기 쉬워요. 날짜를 조정하죠.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "public_officer_self_034",
   "text": "연말 정산 철야는 오탈자를 만듭니다. 나눠서 제출하세요.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "public_officer_self_035",
   "text": "대표님이 혼자 쓰지 마시고 증빙 담당을 지정해 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "public_officer_self_036",
   "text": "보완 통보를 만회하겠다고 밤을 새우시면 다음 실수가 납니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "public_officer_self_037",
   "text": "여유가 있을 때 서류 일정을 앞당겨 두세요. 급할 때보다 정확합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "public_officer_people_038",
   "text": "담당자가 바뀌어도 기록만 있으면 업무는 이어집니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "public_officer_people_039",
   "text": "실무자 한 사람에게만 자료를 맡기시면 인수인계에서 공백이 납니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "public_officer_people_040",
   "text": "팀에서 증빙 담당을 정해 두시면 정산이 훨씬 수월해요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "public_officer_people_041",
   "text": "혼자 준비하시면 마감 전에 제가 확인 가능한 항목을 나눠 드릴게요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "public_officer_people_042",
   "text": "처음이니 실무 담당자와 대표님의 역할을 구분해 두시면 좋겠어요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "public_officer_people_043",
   "text": "팀이 지친 상태의 급작스러운 자료 요청은 완성도를 떨어뜨립니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "public_officer_people_044",
   "text": "지난번 담당이 바뀌었더라도 기록만 있으면 이어서 보시면 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "public_officer_growth_045",
   "text": "지원사업으로 한 번에 키우기보다, 검증된 범위만 넓히는 계획이 설득력 있어요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "public_officer_growth_046",
   "text": "성장 수치만 적고 방법이 없으면 심의에서 점수가 깎입니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "public_officer_growth_047",
   "text": "초기에는 큰 고용 계획보다 실제 할 수 있는 실험을 적어 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "public_officer_growth_048",
   "text": "빠듯한 상태에서 과한 고용 계획은 실행 가능성에서 감점됩니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "public_officer_growth_049",
   "text": "성과가 나왔다면 그 범위를 기반으로 다음 단계를 적어 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "public_officer_growth_050",
   "text": "중간 단계에서는 목표를 늘리기보다 달성 근거를 보강하는 편이 낫습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "public_officer_growth_051",
   "text": "고객이 적은데 급성장 수치만 적으면 설득이 어렵습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "public_officer_speed_052",
   "text": "마감 하루 전의 급신청은 완성도가 떨어집니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "public_officer_speed_053",
   "text": "보완 기한은 늘어나지 않아요. 오늘 할 항목부터 고르세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "public_officer_speed_054",
   "text": "연말 마감에 몰리면 오탈자만으로도 탈락하는 경우가 있습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "public_officer_speed_055",
   "text": "급하셔도 미완성 제출보다 기한 내 정확한 보완이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "public_officer_speed_056",
   "text": "첫 신청을 서두르면 자격 요건부터 놓치기 쉬워요.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "public_officer_speed_057",
   "text": "지치신 날의 급작성은 보완 통보를 부릅니다. 하루를 조정하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "public_officer_speed_058",
   "text": "선정 소식이 반가워도 협약 서류는 천천히 정확히 준비하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  }
 ],
 "rival": [
  {
   "id": "rival_growth_001",
   "text": "남의 속도보다 고객이 무엇을 선택하는지 보죠.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "rival_growth_002",
   "text": "같은 시장이니, 숫자가 아니라 선택 이유로 겨뤄요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "rival_growth_003",
   "text": "제가 늘리는 지점을 따라오기보다, 당신 쪽 손님을 깊게 봐요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "rival_growth_004",
   "text": "오르는 중에도 한 번의 행사인지를 가려야 합니다. 저나 당신이나요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "rival_growth_005",
   "text": "줄어들 때 가격만 깎으면 시장이 먼저 상해요. 이유를 보죠.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "rival_growth_006",
   "text": "초반에 서로를 적으로만 보면 시장 전체가 작아집니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "rival_growth_007",
   "text": "자금이 있을 때 광고만 키우면, 저는 제품으로 빈틈을 노립니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "rival_growth_008",
   "text": "손님이 늘수록 응대가 거칠어지는 쪽이 먼저 단골을 잃어요.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "rival_speed_009",
   "text": "먼저 내놓는 쪽이 유리할 때도 있지만, 허술한 출시는 제게 기회를 줍니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "rival_speed_010",
   "text": "서두르는 티가 나면 고객은 바로 알아요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "rival_speed_011",
   "text": "잘 나갔다면 다음 버전을 급하게 내지 마요. 제가 그 빈틈을 노리니까요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "rival_speed_012",
   "text": "급한 출시는 실수로 이어집니다. 저라도 그런 날에는 하루를 둡니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "rival_speed_013",
   "text": "첫 출시를 당기는 건 자유죠. 다만 완성도가 낮으면 제가 받습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "rival_speed_014",
   "text": "수요가 있을 때 서두르면 클레임이 오고, 그 손님이 제게 옵니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "rival_speed_015",
   "text": "익숙하다고 단계를 건너뛰는 오래된 회사도 한 번에 흔들립니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "rival_safety_016",
   "text": "무리한 확장은 저나 당신이나 같은 구덩이예요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "rival_safety_017",
   "text": "시장을 태우는 경쟁은 둘 다 남는 게 없습니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "rival_safety_018",
   "text": "현금이 급한 상대와는 무리한 가격 전쟁 하지 않습니다. 그건 승리가 아니에요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "rival_safety_019",
   "text": "빚을 끌어 확장하는 상대는 오래 못 갑니다. 저라도 그 수는 안 둡니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "rival_safety_020",
   "text": "다친 다음에는 보복성 할인보다 제품 보강이 이득입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "rival_safety_021",
   "text": "시작부터 전면전을 걸면 시장만 작아져요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "rival_safety_022",
   "text": "올해는 서로를 깎기보다 각자 실험을 키우는 해가 낫습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "rival_self_023",
   "text": "대표가 지치면 제품에 티가 납니다. 저쪽도 예외는 아니죠.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "rival_self_024",
   "text": "쉬는 날을 정한 경쟁자가 오히려 오래 가더군요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "rival_self_025",
   "text": "그 얼굴로 신제품을 내면 제가 반박할 점이 늘어납니다. 하루 미루세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "rival_self_026",
   "text": "잘된 뒤에 자축은 하되, 다음 주를 비우면 제가 그 자리를 갑니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "rival_self_027",
   "text": "이쯤 되면 대표의 체력이 회사의 천장입니다. 저나 당신이나요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "rival_self_028",
   "text": "팀에 맡기지 못하면 속도에서 밀립니다. 그건 제가 노리는 지점이에요.",
   "themes": [
    "self"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "rival_self_029",
   "text": "다시 보니 일정 밀도가 높군요. 과로하는 상대는 실수가 납니다.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "rival_trust_030",
   "text": "시장에서 한 말과 제품이 다르면, 그 소문은 경쟁사보다 빨리 퍼집니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "rival_trust_031",
   "text": "약속을 어긴 상대와는 협업도 어렵죠.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "rival_trust_032",
   "text": "실수는 솔직한 쪽이 고객을 덜 잃어요. 그건 저도 겪어 봤습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "rival_trust_033",
   "text": "같은 시장에서 만났으니, 과장 없이 제품으로 겨루죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "rival_trust_034",
   "text": "줄어든 숫자를 포장하면 고객이 먼저 알아챕니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "rival_trust_035",
   "text": "지난번에 공개한 일정, 시장은 기억하고 있습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "rival_trust_036",
   "text": "빠듯할수록 허위 할인을 남발하면 평판이 먼저 깎입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "rival_cash_037",
   "text": "단가를 무너뜨리는 경쟁은 결국 둘 다 숨이 찹니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "rival_cash_038",
   "text": "어디에 돈을 쓰는지가 전략이에요. 저나 당신이나.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "rival_cash_039",
   "text": "빠듯할 때 광고만 키우면 저와의 격차가 가격으로만 남아요. 그건 위험합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "rival_cash_040",
   "text": "여유 있을 때 가격 전쟁을 걸면, 저는 품질로 받아칩니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "rival_cash_041",
   "text": "적자 할인으로 점유율을 사면 나중에 둘 다 힘듭니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "rival_cash_042",
   "text": "초기에 단가를 너무 낮추면 시장 눈높이가 내려갑니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "rival_cash_043",
   "text": "연말 덤핑은 다음 해 가격을 스스로 깎는 일입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "rival_people_044",
   "text": "팀을 갈아 넣는 성장은 금방 티가 나요. 손님도 압니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "rival_people_045",
   "text": "사람 떠나는 회사의 속도는 오래가지 않죠.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "rival_people_046",
   "text": "사기가 낮은 조직은 신제품이 나와도 설득력이 떨어집니다. 저쪽도 마찬가지고요.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "rival_people_047",
   "text": "좋은 사람을 남겨 두는 회사가 결국 제품을 지킵니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "rival_people_048",
   "text": "성과를 혼자 가져가면 팀이 흔들리고, 그때 빈틈이 생깁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "rival_people_049",
   "text": "오래된 동료를 잃으면 경쟁에서 회복이 느립니다.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "rival_people_050",
   "text": "팀을 소개할 때 경력보다 무엇을 끝냈는지를 보죠. 저도 그렇게 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "rival_quality_051",
   "text": "완성도가 낮은 출시는 제가 따라잡기 가장 쉬운 기회입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "rival_quality_052",
   "text": "고객이 돈 내는 지점의 품질만은 서로 낮추지 말죠.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "rival_quality_053",
   "text": "손님이 늘수록 기준이 흔들립니다. 그때 단골이 옮깁니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "rival_quality_054",
   "text": "호평이 나온 지점을 더 가는 쪽이 이깁니다. 이상한 추가는 독이에요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "rival_quality_055",
   "text": "급해도 불량을 내면 그 손님이 제게 옵니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "rival_quality_056",
   "text": "첫 제품의 흠은 시장이 오래 기억합니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "rival_quality_057",
   "text": "지친 날의 검수는 빈틈을 남깁니다. 저는 그날을 기다리지 않아도 됩니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  }
 ],
 "private_lender": [
  {
   "id": "private_lender_cash_001",
   "text": "빨리 쓸 수 있는 돈일수록 갚을 조건부터 확인해야죠.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "private_lender_cash_002",
   "text": "이자가 낮아 보여도 연체 조항을 먼저 읽으세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "private_lender_cash_003",
   "text": "오늘 필요한 금액과 갚을 날짜를 한 장에 적고 이야기합시다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "private_lender_cash_004",
   "text": "여유가 있는데 이런 돈을 쓰는 건, 비용이 비싸다는 뜻입니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "private_lender_cash_005",
   "text": "빠듯할 때일수록 상환 시뮬레이션을 먼저 보죠. 희망이 아니라 날짜로요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "private_lender_cash_006",
   "text": "위급하다고 조건 없이 받으시면, 다음 달이 더 좁아집니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_cash_007",
   "text": "지금은 빌릴 금액보다 이번 달 나갈 이자부터 계산하세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_cash_008",
   "text": "이미 빚이 있으면 겹친 상환일이 가장 위험해요. 달력을 펴 보죠.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "private_lender_speed_009",
   "text": "급할수록 서명 전에 하룻밤을 두세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "private_lender_speed_010",
   "text": "당일 실행은 가능합니다. 다만 당일 이해는 별개예요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "private_lender_speed_011",
   "text": "손실을 만회하겠다고 바로 빌리면, 그 속도의 대가가 남습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "private_lender_speed_012",
   "text": "오늘 안에 받는 돈은 조건이 더 무겁습니다. 그 무게를 읽고 결정하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_speed_013",
   "text": "연말에 급하게 받은 돈은 1월 상환과 세금이 겹칩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "private_lender_speed_014",
   "text": "지치신 날의 서명은 다음 주에 더 비싸게 느껴집니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "private_lender_speed_015",
   "text": "초기에 급한 자금은 한도가 작을수록 안전합니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "private_lender_safety_016",
   "text": "담보와 연대 범위를 모호하게 두면 나중에 집까지 이야기가 갑니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "private_lender_safety_017",
   "text": "작은 한도부터 쓰는 편이 안전합니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "private_lender_safety_018",
   "text": "위급할수록 큰 한도를 한 번에 열지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_safety_019",
   "text": "기존 빚 위에 담보를 겹치면 위험이 한 곳으로 몰립니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "private_lender_safety_020",
   "text": "가족 보증은 가장 비싼 안전장치입니다. 다른 길을 먼저 보죠.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "private_lender_safety_021",
   "text": "잘된 김에 한도를 늘리자는 제안은, 지금 거절해도 늦지 않습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "private_lender_safety_022",
   "text": "오래 거래했어도 계약 문구는 매번 다시 읽으세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "private_lender_trust_023",
   "text": "숨긴 부채는 나중에 이자보다 비싸게 돌아옵니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "private_lender_trust_024",
   "text": "상환이 늦을 것 같으면 당일이 아니라 사전에 연락하세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "private_lender_trust_025",
   "text": "처음이니 필요한 돈의 사용처를 사실대로 말씀해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "private_lender_trust_026",
   "text": "지난 상환이 어땠는지부터 보고 다음 한도를 이야기합시다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "private_lender_trust_027",
   "text": "손실을 숨기고 한도를 청하면 다음 조건이 더 나쁩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "private_lender_trust_028",
   "text": "중간쯤 되면 실적이 아니라 지킨 날짜로 신용을 봅니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "private_lender_trust_029",
   "text": "적자인 달을 포장하지 마세요. 현금 일정만 정확하면 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "private_lender_self_030",
   "text": "급한 마음에 밤새 조건을 읽으면 놓치는 조항이 생깁니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "private_lender_self_031",
   "text": "서명 전 한숨만 고르셔도 실수가 줄어듭니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "private_lender_self_032",
   "text": "그 상태로 계약하지 마세요. 내일 아침 머리가 더 쌉니다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "private_lender_self_033",
   "text": "위기일수록 대표가 혼자 서명하지 말고, 믿을 사람과 한 줄이라도 같이 보세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_self_034",
   "text": "연말 피로로 조항을 대충 넘기면 다음 해 전체가 묶입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "private_lender_self_035",
   "text": "처음 빌리는 밤일수록 서두르지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "private_lender_self_036",
   "text": "다시 보니 급해 보입니다. 급한 얼굴의 서명은 제가 더 조심스러워집니다.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "private_lender_people_037",
   "text": "보증인을 쉽게 올리면 관계까지 담보가 됩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "private_lender_people_038",
   "text": "직원이나 가족에게 부담을 지우기 전에 한도를 줄이는 편이 낫습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "private_lender_people_039",
   "text": "팀에게 알리지 않은 차입은 나중에 내부 신뢰부터 깎습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "private_lender_people_040",
   "text": "사이가 나쁜 보증은 돈이 되기 전에 분쟁부터 납니다.",
   "themes": [
    "people"
   ],
   "when": [
    "relation_risk"
   ]
  },
  {
   "id": "private_lender_people_041",
   "text": "처음 이야기의 보증 범위는 가능한 한 좁게 두죠.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "private_lender_people_042",
   "text": "실패한 뒤에 주변에 보증을 청하면 관계가 먼저 상합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "private_lender_people_043",
   "text": "여유 있을 때 사람 담보를 정리해 두는 게 나중에 덜 아픕니다.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "private_lender_growth_044",
   "text": "빌린 돈으로 키우는 성장은 가능합니다. 다만 회수 계획이 먼저죠.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "private_lender_growth_045",
   "text": "확장 슬라이드보다 상환 달력이 먼저입니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "private_lender_growth_046",
   "text": "초기의 큰 확장을 이런 자금으로 열면 숨이 가쁩니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "private_lender_growth_047",
   "text": "성장 자금이 필요하면 조건이 나은 길을 먼저 찾으세요. 저는 빠른 길입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "private_lender_growth_048",
   "text": "잘된 실험을 빚으로 한 번에 키우지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "private_lender_growth_049",
   "text": "매출이 오른다고 한도를 바로 올리면 고정비가 먼저 늘어요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "private_lender_growth_050",
   "text": "오래 운영한 회사일수록 이런 돈의 비율이 낮을수록 좋습니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "private_lender_quality_051",
   "text": "급하게 받은 돈으로 품질을 깎으면 상환 재원부터 줄어듭니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "private_lender_quality_052",
   "text": "내놓을 기준을 낮춰 가며 갚는 구조는 오래가지 않아요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "private_lender_quality_053",
   "text": "위급해도 불량으로 현금을 만들면 다음 달이 더 어렵습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "private_lender_quality_054",
   "text": "품질 사고 뒤에 빚으로 메우기보다, 범위부터 줄이세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "private_lender_quality_055",
   "text": "손님이 적은데 빚으로 재고만 늘리면 품질보다 재고가 남습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "private_lender_quality_056",
   "text": "첫 제품에 급한 돈을 넣어 완성도를 건너뛰지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "private_lender_quality_057",
   "text": "지난번에 말한 사용처가 품질이 아니라 메움이었다면, 조건을 다시 보죠.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  }
 ],
 "foreign_investor": [
  {
   "id": "foreign_investor_growth_001",
   "text": "다른 시장에서도 같은 가설이 통할지 작은 실험부터 보죠.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_growth_002",
   "text": "성장은 한 나라의 이야기만으로 설득되지 않습니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_growth_003",
   "text": "확장 전에 단위 경제가 같은 방향으로 움직이는지 보여 주세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_growth_004",
   "text": "오른 매출이 특정 채널의 일회성인지, 반복 가능한지 구분해 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "foreign_investor_growth_005",
   "text": "초기라면 큰 시장 규모보다 첫 고객 행동이 더 중요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "foreign_investor_growth_006",
   "text": "자금이 있을 때 두 번째 시장을 작게 시험해 볼 시점입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "foreign_investor_growth_007",
   "text": "오래 운영한 뒤에는 국내 성장의 천장을 숫자로 보여 주세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "foreign_investor_growth_008",
   "text": "좋은 결과가 나왔으니 같은 실험을 다른 시장에서 재현해 보죠.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "foreign_investor_trust_009",
   "text": "보고가 늦는 것보다 숨기는 쪽이 조건을 더 나쁘게 만듭니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_trust_010",
   "text": "가정과 사실을 같은 표에 섞지 마세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_trust_011",
   "text": "처음 뵙는 자리니 비전보다 앞으로 세 달의 증명 계획을 듣겠습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "foreign_investor_trust_012",
   "text": "지난번에 약속한 지표가 어떻게 됐는지부터 보죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "foreign_investor_trust_013",
   "text": "위기 보고는 빠르고 구체적이어야 합니다. 낙관만으로는 부족해요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "foreign_investor_trust_014",
   "text": "하락을 평균으로 가리지 마세요. 원인과 다음 실험을 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "foreign_investor_trust_015",
   "text": "나쁜 소식은 당일에 공유하는 대표를 더 신뢰합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "foreign_investor_cash_016",
   "text": "런웨이와 소진 이유를 같이 보여 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_cash_017",
   "text": "현금은 성장을 위해 쓰되, 쓴 만큼 배움이 남아야 합니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_cash_018",
   "text": "런웨이가 짧아지면 다음 유입 시점을 주 단위로 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "foreign_investor_cash_019",
   "text": "이 상태로는 협상력이 약합니다. 지출 동결과 유입 계획을 오늘 보죠.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "foreign_investor_cash_020",
   "text": "여유가 있을 때 성장 투자와 예비비를 나눠 표를 만들어 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "foreign_investor_cash_021",
   "text": "매출 전의 현금은 학습비입니다. 무엇을 배웠는지가 필요합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "foreign_investor_cash_022",
   "text": "연말 잔고만 보지 않습니다. 다음 분기 세금과 미지급을 빼 주세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "foreign_investor_speed_023",
   "text": "시장은 기다려 주지 않습니다. 다만 일정 없는 속도는 신뢰가 안 됩니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_speed_024",
   "text": "다음 주 안에 확인할 실험을 정하세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_speed_025",
   "text": "초기일수록 배움의 회전이 가치입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "foreign_investor_speed_026",
   "text": "반응이 왔으면 다음 버전 일정을 이번 주 안에 고정하죠.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "foreign_investor_speed_027",
   "text": "대표의 과로는 이해합니다. 의사결정이 멈추는 것은 별개입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "foreign_investor_speed_028",
   "text": "이 무렵 결재가 늘어나면 기업가치에 속도 저하로 반영됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "foreign_investor_speed_029",
   "text": "고객이 적을 때가 가장 빠르게 배워도 되는 때입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "foreign_investor_safety_030",
   "text": "리스크를 피하는 것만으로는 이 투자 이야기의 이유가 약해집니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_safety_031",
   "text": "작은 실패를 계획한 회사가 오히려 안전합니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_safety_032",
   "text": "지금은 생존이 먼저입니다. 살린 뒤의 반등 계획만 같이 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "foreign_investor_safety_033",
   "text": "부채 비율이 높으면 해외 확장의 레버리지를 더 얹기 어렵습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "foreign_investor_safety_034",
   "text": "다친 뒤의 과한 위축도 할인의 이유가 됩니다. 작은 재도전을 설계하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "foreign_investor_safety_035",
   "text": "초기에는 큰 베팅보다 작은 실험의 안전이 설득력 있습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "foreign_investor_safety_036",
   "text": "연초 계획은 성장 실험과 완충 현금을 같이 남겨 두세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "foreign_investor_self_037",
   "text": "대표의 공백이 곧 영업 중단이면 확장에 한계가 보입니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_self_038",
   "text": "휴식이 필요하면 위임 체계를 같이 가져오세요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_self_039",
   "text": "쓰러지면 회사 가치가 먼저 흔들립니다. 짧게라도 회복 일정을 넣으세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "foreign_investor_self_040",
   "text": "혼자 운영이면 대체 절차를 만들어 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "foreign_investor_self_041",
   "text": "이제 대표 한 사람의 시간에 회사가 묶여 있으면 다음 단계가 안 보입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "foreign_investor_self_042",
   "text": "잘된 뒤에는 자축보다 다음 주 실행 일정을 고정하세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "foreign_investor_self_043",
   "text": "처음 뵙는 대표에게는 이번 주에 끝낼 일 세 가지를 묻습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "foreign_investor_people_044",
   "text": "핵심 인력의 이탈은 제품 지연보다 먼저 가치를 깎습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_people_045",
   "text": "팀을 숫자로만 소개하지 말고 무엇을 끝냈는지 말해 주세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_people_046",
   "text": "인원이 늘었는데 출시 속도가 그대로면 채용의 이유를 설명해야 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "foreign_investor_people_047",
   "text": "사기가 낮은 조직의 성장 전망은 할인합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "foreign_investor_people_048",
   "text": "현금이 빠듯할 때의 채용은 매출과 직접 연결되는 역할만 남기세요.",
   "themes": [
    "people"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "foreign_investor_people_049",
   "text": "초기의 지분과 역할은 문서로 남아 있어야 실사에서 버팁니다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "foreign_investor_people_050",
   "text": "실패의 책임을 실무자에게만 지우면 다음 실험이 올라오지 않습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "foreign_investor_quality_051",
   "text": "완성도는 고객이 돈을 내는 지점까지만 필요합니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_quality_052",
   "text": "완벽을 위해 출시를 미루는 동안 다른 시장이 배웁니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "foreign_investor_quality_053",
   "text": "아직 안 팔리는데 완성도만 올리는 시간은 학습을 미루는 시간입니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "foreign_investor_quality_054",
   "text": "잘 팔릴 때 품질 사고는 성장 곡선을 한 번에 꺾습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "foreign_investor_quality_055",
   "text": "호평이 나온 지점을 더 갈고, 안 쓰는 기능은 멈추세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "foreign_investor_quality_056",
   "text": "초기 제품은 부끄러워도 됩니다. 돈 받는 지점의 신뢰만은 지키세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "foreign_investor_quality_057",
   "text": "빠듯하면 범위를 줄이고 핵심 한 가지의 기준만 높이세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  }
 ],
 "creator": [
  {
   "id": "creator_quality_001",
   "text": "보여 줄 장점과 말해야 할 한계를 함께 정해요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "creator_quality_002",
   "text": "실제로 써 본 이야기만 콘텐츠가 됩니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "creator_quality_003",
   "text": "예쁘게만 보이면 댓글에서 바로 티가 나요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "creator_quality_004",
   "text": "반응이 좋았던 지점을 더 깊게 찍어요. 새 포장만 덧붙이지 말고요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_quality_005",
   "text": "실망한 반응이 있으면 변명보다 수정한 모습을 보여주는 편이 낫습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "creator_quality_006",
   "text": "첫 영상일수록 과한 연출보다 정직한 사용기가 오래가요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "creator_quality_007",
   "text": "예산이 없어도 조명보다 내용의 정직함이 먼저예요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "creator_quality_008",
   "text": "아직 손님이 적어도, 한 사람의 실제 사용을 잘 담는 게 좋아요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_few"
   ]
  },
  {
   "id": "creator_trust_009",
   "text": "숨긴 협찬은 나중에 채널 전체를 흔들어요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "creator_trust_010",
   "text": "기대치를 낮게 말하고 그 이상을 보여주는 편이 안전합니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "creator_trust_011",
   "text": "처음 협업이니 보여줄 수 있는 것과 없는 것을 먼저 나눠요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "creator_trust_012",
   "text": "지난번에 말했던 일정과 스크립트 범위, 그대로인지 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "creator_trust_013",
   "text": "급하셔도 사실과 다른 멘트는 못 넣어요. 그게 제 신뢰예요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "creator_trust_014",
   "text": "잘 나갔어도 과장된 후속 안내는 하지 말아요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_trust_015",
   "text": "판매가 줄었다고 후기를 꾸미면 더 오래 남아요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "creator_self_016",
   "text": "촬영 일정을 밤새 이어 가면 표정이 먼저 지쳐 보여요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "creator_self_017",
   "text": "쉬는 컷이 있어야 다음 콘텐츠의 호흡이 살아요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "creator_self_018",
   "text": "대표님이 지쳐 보이면 영상에도 그대로 나와요. 하루 미루죠.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "creator_self_019",
   "text": "연말 콘텐츠를 몰아 찍으면 완성도가 떨어져요. 나눠요.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "creator_self_020",
   "text": "만회 촬영을 바로 하자고 하시면 실수가 반복됩니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "creator_self_021",
   "text": "초반 열정은 좋지만, 매일 올리면 금방 지쳐요.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "creator_self_022",
   "text": "여유가 있을 때 편집 여유 일정도 남겨 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "creator_people_023",
   "text": "출연하는 사람 동의를 먼저 받아요. 그게 기본이에요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "creator_people_024",
   "text": "스태프가 지친 촬영은 화면에 다 남아요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "creator_people_025",
   "text": "팀 촬영이면 역할과 촬영 시간을 미리 정해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "creator_people_026",
   "text": "분위기 안 좋은 날의 하이라이트만 올리면 나중에 더 어색해요.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "creator_people_027",
   "text": "처음 같이 찍는 거니 서로 편한 범위부터 정해요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "creator_people_028",
   "text": "잘된 영상의 공은 같이 찍은 사람들 이름도 남겨 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_people_029",
   "text": "다시 찍을 때는 지난 피드백을 반영한 포인트부터 이야기해요.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "creator_cash_030",
   "text": "제작비와 광고비를 한 덩어리로 보면 효율이 안 보여요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "creator_cash_031",
   "text": "조회수만으로 회수를 단정하지 말아요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "creator_cash_032",
   "text": "빠듯하면 촬영 규모를 줄이고, 메시지 한 줄만 분명하게 해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "creator_cash_033",
   "text": "위급할 때 유료 광고부터 키우는 건 보통 낭비가 됩니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "creator_cash_034",
   "text": "여유 있을 때 테스트 예산을 작게 나눠 쓰는 편이 나아요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "creator_cash_035",
   "text": "잘 나왔다고 예산을 한 번에 올리지 말고, 같은 형식을 한 번 더 검증해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_cash_036",
   "text": "연말 광고 단가가 비쌀 때는 콘텐츠 유기 유입을 먼저 봐요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "creator_growth_037",
   "text": "구독자 수보다 실제로 사는 사람의 반응이 성장이에요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "creator_growth_038",
   "text": "채널을 키우는 일과 회사를 키우는 일의 속도를 같게 두지 마세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "creator_growth_039",
   "text": "처음에는 모든 플랫폼을 열지 말고 한곳에서 깊게 가요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "creator_growth_040",
   "text": "판매가 올랐을 때 콘텐츠만 늘리면 메시지가 흩어져요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "creator_growth_041",
   "text": "손님이 늘면 자주 묻는 질문부터 콘텐츠로 남기면 좋아요.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "creator_growth_042",
   "text": "한 번의 바이럴을 기본값으로 잡지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_growth_043",
   "text": "이쯤에서 안 할 콘텐츠 형식을 정해야 브랜드가 남아요.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "creator_speed_044",
   "text": "빨리 올리는 것보다 사실 확인이 먼저예요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "creator_speed_045",
   "text": "당일 유행에 맞추다 제품 설명이 빠지면 손해가 더 커요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "creator_speed_046",
   "text": "반응이 왔다고 바로 다음을 올리면 완성도가 떨어져요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "creator_speed_047",
   "text": "급해도 자막과 고지부터 확인하고 올려요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "creator_speed_048",
   "text": "지친 날의 라이브는 실수가 화면에 남아요.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "creator_speed_049",
   "text": "첫 업로드를 서두르지 마세요. 소개 한 줄이 오래갑니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "creator_speed_050",
   "text": "연말 특집을 급하게 붙이면 브랜드만 흔들려요.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "creator_safety_051",
   "text": "검증 안 된 효능을 단정하면 저와 회사 둘 다 위험해요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "creator_safety_052",
   "text": "작은 실험 콘텐츠부터 반응이 안전한지 봐요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "creator_safety_053",
   "text": "급한 홍보성 과장보다, 지금 가진 사실을 짧게 말하는 편이 안전해요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "creator_safety_054",
   "text": "사고 난 뒤에는 바로 다음 캠페인보다 정정 안내가 먼저예요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "creator_safety_055",
   "text": "시작부터 큰 타깃에 광고를 태우지 말고 작은 테스트로 가요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "creator_safety_056",
   "text": "부채가 있는 상황에서 고비용 캠페인은 부담이 커요.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "creator_safety_057",
   "text": "아직 실제 사용자가 없으면 체험 없는 홍보는 위험해요.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  }
 ],
 "freelancer": [
  {
   "id": "freelancer_quality_001",
   "text": "어디까지 만들고 언제 끝낼지부터 맞추면 좋아요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "freelancer_quality_002",
   "text": "범위가 흔들리면 완성도가 먼저 떨어져요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "freelancer_quality_003",
   "text": "마감 전 하루의 검수 시간을 꼭 남겨 주세요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "freelancer_quality_004",
   "text": "잘 나온 부분은 남기고, 욕심 난 추가는 다음 견적으로 미뤄요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "freelancer_quality_005",
   "text": "이번 수정은 원인을 남기고 같은 실수가 없게 체크리스트를 고칠게요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "freelancer_quality_006",
   "text": "첫 작업일수록 레퍼런스와 통과 기준을 구체적으로 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "freelancer_quality_007",
   "text": "예산이 빠듯하면 가짓수를 줄이고 남은 면의 마감을 지키죠.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "freelancer_quality_008",
   "text": "지난 피드백이 반영된 버전부터 이어서 볼게요.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "freelancer_speed_009",
   "text": "오늘 안으로는 한 가지만 주시면 정확히 끝낼 수 있어요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "freelancer_speed_010",
   "text": "급하게 시킨 일은 다시 손보는 시간이 더 깁니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "freelancer_speed_011",
   "text": "급하신 건 알겠어요. 그래도 확인 없는 진행은 나중에 더 큰 수습이 돼요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "freelancer_speed_012",
   "text": "주문이 늘면 제 일정도 밀립니다. 가능한 날짜를 사실대로 말할게요.",
   "themes": [
    "speed"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "freelancer_speed_013",
   "text": "대표님이 지친 날의 급한 추가는 다음 주에 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "freelancer_speed_014",
   "text": "연말 일정을 밀어 넣으면 완성도가 떨어져요. 나눠 주세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "freelancer_speed_015",
   "text": "처음 일정이니 여유 있는 기한이 서로를 지켜 줘요.",
   "themes": [
    "speed"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "freelancer_cash_016",
   "text": "추가 범위는 추가 견적으로 가야 서로가 덜 다쳐요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "freelancer_cash_017",
   "text": "착수금과 잔금 일정을 먼저 맞춰 주세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "freelancer_cash_018",
   "text": "지급이 밀릴 것 같으면 미리 말씀해 주세요. 기다림이 더 불안하거든요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "freelancer_cash_019",
   "text": "위급하셔도 작업만 받고 정산이 없으면 다음 일정을 열 수가 없어요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "freelancer_cash_020",
   "text": "여유가 있을 때 잔금을 맞춰 주시면 다음 일정을 더 잘 열어 드려요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "freelancer_cash_021",
   "text": "이번 손실을 제 보수에서 맞추자고 하시면 관계가 먼저 상해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "freelancer_cash_022",
   "text": "첫 거래일수록 작은 금액이라도 일정대로 정산되는 게 중요해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "freelancer_trust_023",
   "text": "범위를 중간에 바꾸면 일정과 견적을 다시 열어야 해요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "freelancer_trust_024",
   "text": "구두로만 추가하면 나중에 기억이 달라져요. 한 줄만 남겨 주세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "freelancer_trust_025",
   "text": "처음이니 결과물의 사용 범위와 수정 횟수를 분명히 적어요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "freelancer_trust_026",
   "text": "지난 계약에서 애매했던 조항부터 고치고 시작하죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "freelancer_trust_027",
   "text": "잘 끝났을 때도 인수 기준을 문서 그대로 남겨 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "freelancer_trust_028",
   "text": "빠듯하셔도 일정 변경은 바로 공유해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "freelancer_trust_029",
   "text": "오래 같이할수록 예외가 늘면 기준이 흐려져요.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "freelancer_people_030",
   "text": "피드백은 한 창구로 모아 주세요. 여러 곳에서 오면 충돌합니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "freelancer_people_031",
   "text": "중간에 담당이 바뀌면 기존 기록을 넘겨 주세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "freelancer_people_032",
   "text": "팀 의견이 갈리면 대표님이 우선순위를 한 가지만 정해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "freelancer_people_033",
   "text": "분위기 급한 날의 피드백은 날카로워져서 수정이 늘어요. 하루 미뤄도 돼요.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "freelancer_people_034",
   "text": "문제의 책임을 외주에게만 돌리시면 다음 작업의 정보가 줄어듭니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "freelancer_people_035",
   "text": "같이 일하는 사람들의 역할을 알려 주시면 커뮤니케이션이 줄어요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "freelancer_people_036",
   "text": "대표님이 예민하신 날은 큰 방향만 주시고 디테일은 내일 하죠.",
   "themes": [
    "people"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "freelancer_safety_037",
   "text": "무리한 일정은 품질 사고 위험이 커요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "freelancer_safety_038",
   "text": "법적 검수가 필요한 문구는 제가 단정하지 않아요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "freelancer_safety_039",
   "text": "급한 작업도 최소 검수는 남기죠. 그게 서로를 지켜요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "freelancer_safety_040",
   "text": "사고 난 다음에는 같은 일정을 바로 다시 넣지 말아요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "freelancer_safety_041",
   "text": "첫 프로젝트는 작게 닫고 다음을 여는 편이 안전해요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "freelancer_safety_042",
   "text": "정산이 불안정하면 큰 작업을 먼저 쪼개는 게 맞아요.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "freelancer_safety_043",
   "text": "올해 큰 작업보다, 반복 가능한 작은 단위부터 맞추죠.",
   "themes": [
    "safety"
   ],
   "when": [
    "year_start"
   ]
  },
  {
   "id": "freelancer_self_044",
   "text": "저도 끝나는 시간이 있어야 다음 작업의 집중이 남아요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "freelancer_self_045",
   "text": "밤샘 요청은 가능하지만, 그다음 날 검수 질이 떨어져요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "freelancer_self_046",
   "text": "대표님이 지치셨으면 오늘 추가는 내일로 미루죠.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "freelancer_self_047",
   "text": "연말 몰아 의뢰는 둘 다 지칩니다. 나눠 주세요.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "freelancer_self_048",
   "text": "잘 끝났으면 하루는 쉬고 다음 범위를 이야기해요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "freelancer_self_049",
   "text": "여유가 있을 때 일정을 가득 채우지 마세요. 검수 공백이 없어집니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "freelancer_self_050",
   "text": "다시 보니 요청 속도가 빨라요. 이번엔 호흡을 맞추죠.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "freelancer_growth_051",
   "text": "일을 늘리기 전에 지금 범위를 안정시키는 게 맞아요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "freelancer_growth_052",
   "text": "같은 작업을 반복 가능하게 만드는 쪽이 성장이에요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "freelancer_growth_053",
   "text": "주문이 늘면 제 가용량을 먼저 말씀드릴게요. 다 받지는 못해요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "freelancer_growth_054",
   "text": "처음에는 모든 기능을 넣지 말고, 핵심만 제대로 닫아요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "freelancer_growth_055",
   "text": "내부 인력이 없는데 범위를 두 배로 하면 품질이 먼저 무너져요.",
   "themes": [
    "growth"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "freelancer_growth_056",
   "text": "한 번 잘 됐다고 기본 범위를 바로 올리지 말아요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "freelancer_growth_057",
   "text": "이쯤에서 안 할 작업을 정해야 일정이 버텨요.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  }
 ],
 "expert": [
  {
   "id": "expert_quality_001",
   "text": "가장 위험한 가설 하나를 먼저 확인해 봐요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "expert_quality_002",
   "text": "실험을 여러 개 동시에 하면 무엇이 효과인지 모릅니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "expert_quality_003",
   "text": "측정할 수 없는 개선은 취향일 뿐입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "expert_quality_004",
   "text": "잘된 이유를 적지 않으면 다음번에 재현되지 않아요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "expert_quality_005",
   "text": "실패는 데이터가 됩니다. 같은 설계만 반복하지 않으면요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "expert_quality_006",
   "text": "초기일수록 완벽한 설계보다 작은 검증이 품질을 올립니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "expert_quality_007",
   "text": "아직 안 팔릴 때일수록 가설을 더 작게 쪼개야 해요.",
   "themes": [
    "quality"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "expert_quality_008",
   "text": "빠듯하면 실험 범위를 줄이세요. 기준까지 낮추지는 말고요.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "expert_safety_009",
   "text": "큰 베팅 전에 뒤집히면 치명적인 가정부터 시험하세요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "expert_safety_010",
   "text": "모르면 모른다고 적는 게 가장 안전한 시작입니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "expert_safety_011",
   "text": "위급할 때는 새로운 가설보다 지금 구멍부터 막아요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "expert_safety_012",
   "text": "시작하자마자 모든 기능을 열 필요는 없습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "expert_safety_013",
   "text": "갚을 일정이 있는 상태에서 검증 안 된 확장은 위험이 큽니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "expert_safety_014",
   "text": "한 번의 성공을 운명으로 여기고 판을 키우지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "expert_safety_015",
   "text": "사용자가 없으면 내부 취향만으로 결정을 굳히지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_none"
   ]
  },
  {
   "id": "expert_growth_016",
   "text": "성장은 검증된 한 줄을 반복할 때 생깁니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "expert_growth_017",
   "text": "시장을 넓히기 전에 같은 고객이 다시 오는지 봐요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "expert_growth_018",
   "text": "오른 숫자를 추세라고 단정하기 전에 한 주기만 더 보세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "expert_growth_019",
   "text": "줄어들 때 광고를 늘리기 전에 이탈 이유부터 듣죠.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "expert_growth_020",
   "text": "첫해에는 모든 세그먼트를 가지려 하지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "expert_growth_021",
   "text": "자금이 있을 때 작은 채널 실험을 숫자로 남기세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "expert_growth_022",
   "text": "이 단계에서 하지 않을 실험을 지워야 속도가 납니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "expert_speed_023",
   "text": "빠르게 배우되, 설계 없는 속도는 소음만 늘립니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "expert_speed_024",
   "text": "오늘 확인할 것과 이번 주에 확인할 것을 나누세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "expert_speed_025",
   "text": "만회하려고 서두르면 변수를 통제하지 못합니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "expert_speed_026",
   "text": "지친 날의 실험 설계는 내일로 미루는 편이 쌉니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "expert_speed_027",
   "text": "급하셔도 한 줄짜리 실험 계획만은 적고 시작하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "expert_speed_028",
   "text": "첫 실험을 당기는 것보다 측정 항목을 정하는 게 먼저입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "expert_speed_029",
   "text": "연말 실적을 위해 실험을 생략하면 내년에 다시 치릅니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "expert_cash_030",
   "text": "검증 비용은 배움의 단가입니다. 무엇을 사는지 적으세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "expert_cash_031",
   "text": "효과 없는 항목을 끊는 것이 가장 싼 투자입니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "expert_cash_032",
   "text": "빠듯하면 가장 위험한 가설 하나에만 돈을 쓰세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "expert_cash_033",
   "text": "여유 있을 때 실험 예산을 나눠 두면 충동적 지출이 줄어듭니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "expert_cash_034",
   "text": "매출 전의 돈은 학습비입니다. 배운 것이 없는 소진은 곤란해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "no_revenue"
   ]
  },
  {
   "id": "expert_cash_035",
   "text": "잘된 실험에 예산을 한 번에 올리지 말고 한 단계만 키우세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "expert_cash_036",
   "text": "적자여도 학습이 쌓이면 다음 달의 낭비를 줄일 수 있습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "expert_trust_037",
   "text": "실험 결과를 입맛대로 해석하면 다음 결정이 틀립니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "expert_trust_038",
   "text": "실패한 수치도 공유해야 팀이 같은 지도를 봅니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "expert_trust_039",
   "text": "처음이니 어떤 가설을 시험 중인지 한 문장으로 말해 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "expert_trust_040",
   "text": "지난 실험의 결론이 실제 결정에 반영됐는지 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "expert_trust_041",
   "text": "나쁜 결과를 숨기면 같은 비용을 한 번 더 쓰게 됩니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "expert_trust_042",
   "text": "하락 데이터를 포장하지 마세요. 원인 후보를 같이 적어 보죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "expert_trust_043",
   "text": "정기적으로 같은 형식의 실험 로그를 남기는 게 신뢰입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "expert_people_044",
   "text": "실험 주인을 정하지 않으면 아무도 결과를 책임지지 않습니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "expert_people_045",
   "text": "현장의 관찰이 설문보다 먼저일 때가 많아요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "expert_people_046",
   "text": "팀에 가설과 측정 방법을 공유해야 실행이 흔들리지 않습니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "expert_people_047",
   "text": "혼자여도 실험 일지를 남기세요. 나중에 들어올 사람의 지도가 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "expert_people_048",
   "text": "사기가 낮을 때 큰 실험을 얹으면 대충 실행됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "expert_people_049",
   "text": "잘된 실험의 공을 실행한 사람 이름부터 부르세요.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "expert_people_050",
   "text": "같이 보려면 이 회사에서 이미 확인한 것과 아닌 것을 나눠 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "expert_self_051",
   "text": "대표의 직감은 소중하지만, 검증 없는 직감은 비용입니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "expert_self_052",
   "text": "지친 상태의 결론은 하루를 미루세요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "expert_self_053",
   "text": "몸이 기울면 데이터보다 희망이 먼저 보입니다. 오늘은 설계만 하죠.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "expert_self_054",
   "text": "실패를 만회하려는 밤에 새로운 가설을 만들지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "expert_self_055",
   "text": "초기의 열정으로 실험을 한꺼번에 열면 아무것도 배우지 못합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "expert_self_056",
   "text": "돈 급할수록 직감으로 큰돈을 쓰지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "expert_self_057",
   "text": "다시 보니 결론이 빨라요. 이번엔 근거부터 맞춰 보죠.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  }
 ],
 "lawyer": [
  {
   "id": "lawyer_trust_001",
   "text": "좋을 때도 지킬 수 있는 약속을 문서로 남겨요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "lawyer_trust_002",
   "text": "말과 계약서가 다르면 나중에 말이 남지 않습니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "lawyer_trust_003",
   "text": "모호한 조항은 지금은 편해도 분쟁 때 비용이 됩니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "lawyer_trust_004",
   "text": "처음 상담이니 지금 맺은 약속 중에 문서가 없는 것부터 볼까요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "lawyer_trust_005",
   "text": "지난번에 보완하기로 한 조항이 반영됐는지 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "lawyer_trust_006",
   "text": "문제가 생겼을 때 당시 합의를 증명할 기록이 있는지가 갈립니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "lawyer_trust_007",
   "text": "초기의 구두 약속일수록 나중에 해석이 갈립니다. 짧게라도 남기세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "lawyer_trust_008",
   "text": "위급하셔도 서명 전에 한 줄은 읽으세요. 급한 계약이 가장 오래 남습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "lawyer_safety_009",
   "text": "책임 범위와 해지 조건을 먼저 맞춰 두는 게 위험 관리예요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "lawyer_safety_010",
   "text": "상대가 급해 보여도 불리한 조항을 그대로 두지 마세요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "lawyer_safety_011",
   "text": "담보와 연대보증 범위는 가능한 한 좁게 남겨요.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "lawyer_safety_012",
   "text": "빠듯할수록 위약금과 선금 조항을 더 자세히 봐야 합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "lawyer_safety_013",
   "text": "잘된 거래일수록 다음 계약을 느슨하게 쓰기 쉬워요. 기준은 유지하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "lawyer_safety_014",
   "text": "오래된 계약의 자동 갱신과 만기를 다시 점검할 때입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "lawyer_safety_015",
   "text": "직원 계약의 경업과 비밀유지 범위가 과도하면 나중에 분쟁이 됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "lawyer_cash_016",
   "text": "법률 비용을 아끼려다 분쟁 비용이 더 큰 경우가 많습니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "lawyer_cash_017",
   "text": "선금·잔금·지체상금이 현금 흐름과 맞는지 볼까요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "lawyer_cash_018",
   "text": "여유가 있을 때 표준 계약 템플릿을 정리해 두면 나중에 쌉니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "lawyer_cash_019",
   "text": "급하게 받은 돈의 조건이 지분이나 담보로 이어지지 않는지 확인하세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "lawyer_cash_020",
   "text": "이익이 나기 시작할 때 정산 조항이 애매하면 분배가 흔들립니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "lawyer_cash_021",
   "text": "연말 계약 몰아 서명은 조항 누락이 잦습니다. 나눠서 검토해요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "lawyer_cash_022",
   "text": "손실 뒤에 성급히 합의서를 쓰면 청구권을 잃는 수가 있어요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "lawyer_people_023",
   "text": "역할과 의사결정 권한을 적지 않으면 사람 사이 갈등이 법 문제가 됩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "lawyer_people_024",
   "text": "퇴사와 인수인계 조항은 사이가 좋을 때 정해 두세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "lawyer_people_025",
   "text": "근로 조건과 지분 약속을 섞어 구두로 두면 둘 다 애매해집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "lawyer_people_026",
   "text": "첫 동료와의 역할 합의를 지금 남겨 두면 나중에 비용이 줄어듭니다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "lawyer_people_027",
   "text": "갈등 국면에서는 새 약속 대신 기존 문서를 먼저 펼치세요.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "lawyer_people_028",
   "text": "관계가 나빠진 상태의 추가 합의는 증인을 두고 기록하세요.",
   "themes": [
    "people"
   ],
   "when": [
    "relation_risk"
   ]
  },
  {
   "id": "lawyer_people_029",
   "text": "같이 일할 사람들의 법적 지위부터 구분해 볼게요. 직원인지, 외주인지.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "lawyer_quality_030",
   "text": "계약서의 완성도는 미사여구가 아니라 빠짐없는 정의입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "lawyer_quality_031",
   "text": "애매한 품질 기준은 검수 분쟁을 부릅니다. 인수 조건을 적어 두세요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "lawyer_quality_032",
   "text": "첫 공급 계약일수록 하자의 범위와 수정 기한을 분명히 해요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "lawyer_quality_033",
   "text": "좋은 납품이 반복돼도 검수 절차를 건너뛰는 문구는 넣지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "lawyer_quality_034",
   "text": "고객이 늘면 약관과 개별 약속이 충돌하기 쉽습니다. 우선순위를 정하세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "lawyer_quality_035",
   "text": "비용을 줄이려고 품질 보증을 과도하게 걸면 나중에 더 비쌉니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "lawyer_quality_036",
   "text": "지난 계약의 하자 조항이 실제 운영과 맞는지 다시 보죠.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "lawyer_self_037",
   "text": "밤늦은 서명은 조항을 놓치기 쉽습니다. 아침으로 미뤄요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "lawyer_self_038",
   "text": "대표님이 혼자 모든 계약을 쥐면 병목이 법률 리스크가 됩니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "lawyer_self_039",
   "text": "지치신 날의 협상은 불리한 양보로 이어집니다. 일정을 조정하세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "lawyer_self_040",
   "text": "위기일수록 혼자 서명하지 말고 한 사람이라도 같이 읽으세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "lawyer_self_041",
   "text": "연말 몰아서 검토하면 실수가 납니다. 우선순위만 남기죠.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "lawyer_self_042",
   "text": "잘된 뒤에는 들뜬 상태로 다음 계약에 서명하지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "lawyer_self_043",
   "text": "이 단계에서는 반복 계약을 위임할 기준을 만들어 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "lawyer_growth_044",
   "text": "빠르게 키울수록 계약이 따라가지 못하면 그 틈이 위험이 됩니다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "lawyer_growth_045",
   "text": "새 시장에 나가기 전에 준거법과 관할부터 확인하세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "lawyer_growth_046",
   "text": "초기의 확장 약속은 작게 적고, 달성 후 다시 여는 편이 안전합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "lawyer_growth_047",
   "text": "주문이 늘 때 자동으로 불리해지는 조항이 있는지 보세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "lawyer_growth_048",
   "text": "한 번의 큰 거래를 기본 조건으로 일반화하지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "lawyer_growth_049",
   "text": "자금이 있을 때 표준 계약을 정비해 두면 성장 속도를 받칩니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "lawyer_growth_050",
   "text": "고객이 늘면 예외 약정이 늘어요. 기본 약관을 단순화하세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "lawyer_speed_051",
   "text": "오늘 안의 서명은 가능합니다. 다만 읽지 않은 페이지가 없어야 해요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "lawyer_speed_052",
   "text": "급한 상대의 속도를 그대로 따를 필요는 없습니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "lawyer_speed_053",
   "text": "급하다고 빈칸을 남겨 두면 그 빈칸이 상대의 해석이 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "lawyer_speed_054",
   "text": "만회하려고 성급히 합의하면 더 큰 조항을 놓칩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "lawyer_speed_055",
   "text": "첫 계약일수록 하루를 더 보는 편이 싸게 끝납니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "lawyer_speed_056",
   "text": "잠이 부족한 날의 빠른 검토는 비용을 남깁니다. 내일 하죠.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "lawyer_speed_057",
   "text": "연말 기한에 몰린 계약은 우선 연장 합의부터 검토하세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  }
 ],
 "tax_advisor": [
  {
   "id": "tax_advisor_cash_001",
   "text": "실제 거래와 증빙을 제때 맞춰 두는 게 먼저예요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_cash_002",
   "text": "세금은 이익이 난 뒤에만 오지 않습니다. 일정부터 달력에 두세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_cash_003",
   "text": "공제 항목을 나중에 모으면 이미 기한이 지난 경우가 많아요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_cash_004",
   "text": "여유가 있을 때 예상 세액을 나눠 두면 다음 분기가 덜 급합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "tax_advisor_cash_005",
   "text": "위급하셔도 원천과 부가세 기한은 미루면 가산세가 먼저 붙어요.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "tax_advisor_cash_006",
   "text": "흑자가 나기 시작했으면 중간예납과 법인세 일정을 같이 보죠.",
   "themes": [
    "cash"
   ],
   "when": [
    "profit_on"
   ]
  },
  {
   "id": "tax_advisor_cash_007",
   "text": "연말 절세는 12월에 몰아 만들기보다 증빙이 있는 것만 남기세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "tax_advisor_cash_008",
   "text": "대출과 이자 증빙을 구분해 두면 비용 처리가 명확해집니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "tax_advisor_safety_009",
   "text": "애매한 처리로 세금을 줄이면 나중에 더 큰 추징이 됩니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_safety_010",
   "text": "회색 구간은 피하고 안전한 해석으로 가요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_safety_011",
   "text": "처음부터 통장과 거래를 구분해 두는 게 가장 싼 위험 관리예요.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "tax_advisor_safety_012",
   "text": "빠듯할수록 기한을 놓치지 않는 쪽이 이자를 아끼는 길입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "tax_advisor_safety_013",
   "text": "누락이 발견되면 숨기지 말고 수정신고 일정을 잡아요.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "tax_advisor_safety_014",
   "text": "오래 운영할수록 과거 처리의 일관성이 조사에서 중요합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "tax_advisor_safety_015",
   "text": "경비 처리 권한을 여러 사람이 쓰면 기준을 문서로 남겨 주세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "tax_advisor_trust_016",
   "text": "장부와 실제가 다르면 설명에 시간이 더 듭니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_trust_017",
   "text": "추정으로 넣은 숫자는 표시를 남겨 주세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_trust_018",
   "text": "처음이니 매출 발생 시점과 증빙 방식을 사실대로 들려주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "tax_advisor_trust_019",
   "text": "지난번 보완하기로 한 증빙부터 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "tax_advisor_trust_020",
   "text": "지원금이나 큰 입금이 있으면 성격부터 구분해 기록하세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "tax_advisor_trust_021",
   "text": "매출이 줄어도 신고 숫자를 맞추려고 다른 달을 옮기지 마세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "rev_down"
   ]
  },
  {
   "id": "tax_advisor_trust_022",
   "text": "어려우실수록 숨긴 거래가 더 위험합니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "tax_advisor_quality_023",
   "text": "증빙의 품질은 영수증 더미가 아니라 거래와의 연결입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_quality_024",
   "text": "메모 없는 카드 내역은 나중에 설명이 안 됩니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_quality_025",
   "text": "첫 매출부터 품목과 거래처를 정확히 남겨 두세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "tax_advisor_quality_026",
   "text": "잘된 프로젝트의 비용을 한꺼번에 뭉개지 말고 건별로 남기세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "tax_advisor_quality_027",
   "text": "익숙해져 증빙을 미루면 기한에 품질이 떨어집니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "tax_advisor_quality_028",
   "text": "연말 몰아 정리하면 누락이 생깁니다. 월별로 닫아 주세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "tax_advisor_quality_029",
   "text": "지난 달 애매했던 항목이 정리됐는지 볼게요.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "tax_advisor_people_030",
   "text": "경비 사용 기준을 팀과 공유해야 증빙이 모입니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_people_031",
   "text": "세무 자료를 한 사람에게만 맡기면 퇴사 때 공백이 납니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_people_032",
   "text": "직원 급여와 원천 일정을 달력에 같이 두세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "tax_advisor_people_033",
   "text": "혼자여도 개인 카드와 사업 카드를 나누는 것부터 시작해요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "tax_advisor_people_034",
   "text": "누가 증빙을 모으는지부터 정해 두면 상담이 빨라집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "tax_advisor_people_035",
   "text": "누락의 책임을 실무자에게만 돌리기 전에 기준이 있었는지 보죠.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "tax_advisor_people_036",
   "text": "오래된 업이면 담당자 변경 이력을 자료와 같이 남겨 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "tax_advisor_self_037",
   "text": "신고 전날 밤샘은 오탈자를 만듭니다. 일정표로 나눠요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_self_038",
   "text": "대표님이 모든 증빙을 머리에 두면 병이 납니다. 폴더로 옮기세요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_self_039",
   "text": "지치신 상태로 숫자를 맞추지 마세요. 기한 조정이 가능한지 먼저 볼게요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "tax_advisor_self_040",
   "text": "연말 정산을 12월 하순에 몰지 마세요. 지금 시작하죠.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "tax_advisor_self_041",
   "text": "잘된 달일수록 증빙을 미루기 쉽습니다. 오늘 한 묶음만 닫아요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "tax_advisor_self_042",
   "text": "초반 습관이 이후 몇 해를 편하게 합니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "tax_advisor_self_043",
   "text": "여유가 있을 때 기장을 밀리지 않게 주기를 정해 두세요.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "tax_advisor_growth_044",
   "text": "규모가 커지면 세금 일정도 같이 커집니다. 미리 나누죠.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_growth_045",
   "text": "새 사업 라인을 열기 전에 과세 구분을 먼저 확인하세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_growth_046",
   "text": "매출이 오르면 납부 여력도 같이 보셔야 합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "tax_advisor_growth_047",
   "text": "초기 성장 계획에 세금 일정을 빠져 있는 경우가 많아요.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "tax_advisor_growth_048",
   "text": "거래처가 늘면 세금계산서 누락이 늘어요. 발행 규칙을 단순화하세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "tax_advisor_growth_049",
   "text": "큰 계약이 성사되면 부가세 납부 시점을 미리 계산해 두세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "tax_advisor_growth_050",
   "text": "이 단계에서는 추정 기장에서 정확한 기장으로 옮길 시점입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "tax_advisor_speed_051",
   "text": "마감 하루 전의 자료 전달은 검토 시간을 없앱니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_speed_052",
   "text": "급하게 처리하면 가산세를 피하려다 더 큰 실수를 합니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "tax_advisor_speed_053",
   "text": "연말 마감에 몰리면 공제 항목을 놓칩니다. 오늘 목록부터 보죠.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "tax_advisor_speed_054",
   "text": "급하셔도 잘못된 신고를 서두르는 것보다 정확한 기한이 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "tax_advisor_speed_055",
   "text": "추징을 만회하겠다고 급하게 수정하면 또 다른 오류가 납니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "tax_advisor_speed_056",
   "text": "첫 신고를 서두르지 마세요. 기본 설정이 오래갑니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "tax_advisor_speed_057",
   "text": "지친 날의 급기장은 다음날 다시 고치게 됩니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  }
 ],
 "accountant": [
  {
   "id": "accountant_trust_001",
   "text": "손익과 통장 잔액이 다른 이유를 하나씩 확인해요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "accountant_trust_002",
   "text": "숫자는 맞추는 것이 아니라 설명 가능하게 남기는 것입니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "accountant_trust_003",
   "text": "추정과 확정을 같은 칸에 두지 마세요.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "accountant_trust_004",
   "text": "처음이니 장부와 통장을 같이 펼쳐 차이를 표시해 보죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "accountant_trust_005",
   "text": "지난번에 설명하지 못한 차이부터 이어서 볼게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "accountant_trust_006",
   "text": "손실이 난 달을 가리기보다 원인을 계정으로 남기는 편이 낫습니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "accountant_trust_007",
   "text": "위급할수록 장부를 숨기지 마세요. 현금 일정이 먼저입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "accountant_trust_008",
   "text": "적자는 부끄러운 숫자가 아닙니다. 구성이 안 보이는 게 문제입니다.",
   "themes": [
    "trust"
   ],
   "when": [
    "profit_off"
   ]
  },
  {
   "id": "accountant_cash_009",
   "text": "매출이 늘어도 미수금이 묶이면 현금은 그대로입니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "accountant_cash_010",
   "text": "고정비 목록을 월 단위로 닫아야 런웨이가 설득력을 갖습니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "accountant_cash_011",
   "text": "여유가 보일 때 예비비와 운영비를 구분해 두면 나중에 덜 흔들립니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "accountant_cash_012",
   "text": "빠듯하면 미지급부터 만기순으로 정렬해 보죠.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "accountant_cash_013",
   "text": "지금은 손익 보고서보다 이번 주 나갈 돈의 목록이 필요합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "accountant_cash_014",
   "text": "이자와 원금 상환이 손익과 현금에서 어떻게 다른지 표로 볼게요.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "accountant_cash_015",
   "text": "연말 잔고를 예쁘게 만드는 것보다 1월 유출을 빼는 게 정직합니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "accountant_quality_016",
   "text": "장부의 품질은 계정 수가 아니라 거래의 추적 가능성입니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "accountant_quality_017",
   "text": "증빙 없는 조정은 나중에 설명이 안 됩니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "accountant_quality_018",
   "text": "첫 달부터 계정 체계를 단순하고 일관되게 두세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "accountant_quality_019",
   "text": "익숙해져 월 마감을 미루면 숫자의 품질이 떨어집니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "accountant_quality_020",
   "text": "큰 입금이 있어도 성격이 다른 돈을 한 계정에 넣지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "accountant_quality_021",
   "text": "지난 달 미결 항목이 정리됐는지 확인하겠습니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "accountant_quality_022",
   "text": "오래된 장부일수록 예외 처리가 쌓입니다. 기준을 다시 적죠.",
   "themes": [
    "quality"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "accountant_safety_023",
   "text": "장부와 실제가 어긋난 채로 투자를 받으면 나중에 더 큰 수정이 납니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "accountant_safety_024",
   "text": "내부 통제가 없으면 작은 누락이 큰 위험이 됩니다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "accountant_safety_025",
   "text": "처음부터 개인 경비와 회사 경비를 나누는 게 가장 싼 방어입니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "accountant_safety_026",
   "text": "위기일수록 추정치로 안심하지 말고 통장을 기준으로 보세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "accountant_safety_027",
   "text": "약정 조항의 재무 비율을 깨지 않는지 월말에 점검하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "accountant_safety_028",
   "text": "사고 난 달의 충당과 손실 인식을 미루면 다음 달이 왜곡됩니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "accountant_safety_029",
   "text": "결제 권한과 기록 권한을 한 사람에게만 두지 마세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "accountant_people_030",
   "text": "숫자를 혼자만 알면 팀이 같은 결정을 못 합니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "accountant_people_031",
   "text": "월 마감 역할을 나눠야 대표님의 밤이 줄어듭니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "accountant_people_032",
   "text": "부서별 예산을 공유해야 현장에서 낭비를 줄입니다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "accountant_people_033",
   "text": "혼자여도 월말 점검 체크리스트를 남겨 두세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "accountant_people_034",
   "text": "누가 입출금을 실행하고 누가 기록하는지부터 구분해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "accountant_people_035",
   "text": "사기가 낮을 때 숫자만 독촉하면 보고가 부정확해집니다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "accountant_people_036",
   "text": "잘된 달의 성과를 계정으로 나누면 보상의 근거가 됩니다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "accountant_self_037",
   "text": "마감 전야의 철야는 실수를 늘립니다. 일정을 앞당기죠.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "accountant_self_038",
   "text": "대표님이 모든 전표를 확인하면 결정이 늦어집니다. 기준을 위임하세요.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "accountant_self_039",
   "text": "지치신 날에는 큰 조정 전표를 만들지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "accountant_self_040",
   "text": "결산을 12월 말에 몰지 말고 지금부터 월 마감을 닫아요.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "accountant_self_041",
   "text": "여유가 있을 때 보고 주기를 정해 두면 급할 때 흔들리지 않습니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "accountant_self_042",
   "text": "손실을 만회하려고 숫자를 다시 만지지 마세요. 설명부터 남깁니다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "accountant_self_043",
   "text": "초기의 장부 습관이 이후 실사의 시간을 줄입니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "accountant_growth_044",
   "text": "커질수록 같은 방식으로는 마감이 무너집니다. 체계를 한 단계 올리죠.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "accountant_growth_045",
   "text": "새 사업 라인을 열면 계정과 손익 구분을 먼저 정하세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "accountant_growth_046",
   "text": "매출이 오를 때 원가와 미수금이 같이 오르는지 봐야 합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "accountant_growth_047",
   "text": "거래처가 늘면 채권 연령 표가 필요합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "accountant_growth_048",
   "text": "한 번의 큰 성과를 모든 달의 기본값으로 잡지 마세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "accountant_growth_049",
   "text": "이 단계에서는 관리 회계와 세무 기장을 구분해 사용할 때입니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "accountant_growth_050",
   "text": "자금이 있을 때 시스템을 정비하는 편이 나중에 사람 뽑는 것보다 쌉니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "accountant_speed_051",
   "text": "빠른 보고보다 재작업 없는 보고가 더 빠릅니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "accountant_speed_052",
   "text": "당일 추정 숫자를 확정처럼 공유하지 마세요.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "accountant_speed_053",
   "text": "연말 실적 마감을 서두르면 수정 분개가 늘어납니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "accountant_speed_054",
   "text": "급한 숫자일수록 출처를 한 줄 적으세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "accountant_speed_055",
   "text": "좋은 소식을 당일 공유할 때도 잠정이라는 표시를 남기세요.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "accountant_speed_056",
   "text": "첫 월 마감을 하루 미루는 게, 잘못된 출발보다 낫습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "accountant_speed_057",
   "text": "잠이 부족한 날의 빠른 마감은 다음 주 재작업입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  }
 ],
 "patent_attorney": [
  {
   "id": "patent_attorney_quality_001",
   "text": "공개하기 전에 기존 권리와 보호할 범위를 살펴봐요.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_quality_002",
   "text": "차별 지점이 명세서에 담기지 않으면 권리로 남기 어렵습니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_quality_003",
   "text": "비슷한 이름이 있는지 먼저 조사하는 시간이 나중에 싸게 끝납니다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_quality_004",
   "text": "첫 제품 공개 전에 핵심 아이디어의 표현을 정리해 두세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_quality_005",
   "text": "반응이 좋은 기능을 바로 넓게 알리기 전에 보호 범위를 볼까요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_quality_006",
   "text": "분쟁 연락이 왔다면 사용 현황과 자료부터 모읍니다. 성급히 답하지 마세요.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "patent_attorney_quality_007",
   "text": "제품이 바뀌었는데 명세서가 그대로면 공백이 생깁니다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "patent_attorney_quality_008",
   "text": "지난번 조사에서 걸린 선행을 회피하는 설계가 반영됐는지 볼게요.",
   "themes": [
    "quality"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "patent_attorney_safety_009",
   "text": "공개 후 출원은 선택지가 줄어듭니다. 순서를 지키세요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_safety_010",
   "text": "침해 가능성이 보이면 회피 설계와 의견을 먼저 받아요.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_safety_011",
   "text": "시작부터 큰 분쟁을 각오하기보다 조사로 위험을 줄이죠.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_safety_012",
   "text": "빠듯하면 모든 나라를 한 번에 가기보다 핵심 시장부터 보호하세요.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "patent_attorney_safety_013",
   "text": "경고장을 받고 혼자 답하면 입장이 불리해질 수 있습니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "patent_attorney_safety_014",
   "text": "유통이 늘수록 상표 사용 형태를 통일하는 편이 안전합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "patent_attorney_safety_015",
   "text": "오래 쓴 브랜드일수록 갱신과 실제 사용 증거가 중요합니다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "patent_attorney_trust_016",
   "text": "공개 범위와 비밀 범위를 팀과 맞춰 두지 않으면 새어 나갑니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_trust_017",
   "text": "출원 내용을 과장해서 홍보하면 나중에 그 문장이 불리해집니다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_trust_018",
   "text": "처음이니 이미 공개된 것과 아직 비밀인 것을 사실대로 나눠 주세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "patent_attorney_trust_019",
   "text": "지난번에 공개하지 않기로 한 부분이 지켜졌는지 확인할게요.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "patent_attorney_trust_020",
   "text": "좋은 기사를 낼 때도 미출원 기술을 구체적으로 쓰지 마세요.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_trust_021",
   "text": "침해 주장의 근거를 숨기지 말고 자료를 같이 보죠.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "patent_attorney_trust_022",
   "text": "초기 피칭 자료에 핵심 도면을 넣는 습관부터 점검해요.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_cash_023",
   "text": "권리 비용은 한 번의 출원료가 전부가 아닙니다. 유지 일정도 보세요.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_cash_024",
   "text": "분쟁 비용과 출원 비용을 비교하면 조사가 상대적으로 쌉니다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_cash_025",
   "text": "여유가 있을 때 핵심 권리부터 확보하는 편이 나중에 협상력이 됩니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "patent_attorney_cash_026",
   "text": "빠듯하면 범위를 줄이더라도 핵심 한 건을 제대로 쓰는 편이 낫습니다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "patent_attorney_cash_027",
   "text": "위급하다고 출원을 포기하기 전에, 공개만 미룰 수 있는지 보죠.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "patent_attorney_cash_028",
   "text": "투자 유치가 보여도 권리 양도 범위를 급하게 넓히지 마세요.",
   "themes": [
    "cash"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_cash_029",
   "text": "연말 예산으로 몰아 출원하면 명세서 품질이 떨어집니다. 나눠요.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "patent_attorney_growth_030",
   "text": "시장을 넓히기 전에 브랜드와 기술이 그 시장에서 보호 가능한지 봐요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_growth_031",
   "text": "수출이나 입점을 앞두고 상표 충돌을 점검하세요.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_growth_032",
   "text": "첫 확장 전에 쓸 이름부터 조사하면 나중에 간판을 안 바꿉니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_growth_033",
   "text": "잘 팔릴 때 모방도 늘어납니다. 사용 증거를 모아 두세요.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "patent_attorney_growth_034",
   "text": "고객이 늘면 브랜드 노출이 늘고, 선사용 증거도 같이 늘려야 합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "patent_attorney_growth_035",
   "text": "한 번의 히트를 낸 이름을 바로 라이선스하기 전에 권리 관계를 봐요.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_growth_036",
   "text": "이 단계에서 제품군이 늘면 상표 지정상품도 맞춰야 합니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "patent_attorney_speed_037",
   "text": "출시 일정에 맞춰 급하게 쓰면 범위가 좁아지거나 거절이 납니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_speed_038",
   "text": "조사 없는 빠른 공개가 가장 비싼 속도입니다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_speed_039",
   "text": "반응이 좋다고 당일 상세 공개를 하지 마세요. 하루만 조사가 필요합니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_speed_040",
   "text": "급하셔도 핵심만 가리고 나머지를 나누는 전략이 있습니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "patent_attorney_speed_041",
   "text": "첫 데모 전에 공개 범위를 정하는 시간이 나중입니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_speed_042",
   "text": "연말 출원 몰아넣기는 심사 품질을 떨어뜨립니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "patent_attorney_speed_043",
   "text": "지치신 날의 급공개는 나중에 권리 범위를 좁힙니다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "patent_attorney_people_044",
   "text": "아이디어를 낸 사람과 권리 귀속을 미리 정해 두지 않으면 분쟁이 됩니다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_people_045",
   "text": "외주 개발 계약에 성과물 조항이 있는지 확인하세요.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_people_046",
   "text": "팀과 프리랜서의 비밀유지·양도 조항을 같은 기준으로 맞추죠.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "patent_attorney_people_047",
   "text": "첫 동료와의 지분 이야기와 지식재산 귀속은 같이 적어야 합니다.",
   "themes": [
    "people"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_people_048",
   "text": "내부 유출이 의심되면 감정보다 접근 기록과 계약부터 봐요.",
   "themes": [
    "people"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "patent_attorney_people_049",
   "text": "누가 발명자이고 누가 출원인인지부터 구분해 주세요.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "patent_attorney_people_050",
   "text": "혼자 개발 중이어도 실험 노트와 날짜를 남겨 두세요.",
   "themes": [
    "people"
   ],
   "when": [
    "team_off"
   ]
  },
  {
   "id": "patent_attorney_self_051",
   "text": "대표님이 모든 공개를 즉흥적으로 하시면 보호 순서가 깨집니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_self_052",
   "text": "발표 전날 밤 수정은 위험한 문장을 넣기 쉽습니다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "patent_attorney_self_053",
   "text": "지치신 상태로 경고장에 답하지 마세요. 제가 초안을 먼저 볼게요.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "patent_attorney_self_054",
   "text": "들뜬 상태의 인터뷰에서 미공개 기술을 말하지 마세요.",
   "themes": [
    "self"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "patent_attorney_self_055",
   "text": "초기의 열정적인 공개가 나중에 가장 아쉬운 선택이 됩니다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "patent_attorney_self_056",
   "text": "다시 보니 출시 일정이 당겨졌군요. 공개 전에 한 번만 더 점검하죠.",
   "themes": [
    "self"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "patent_attorney_self_057",
   "text": "여유가 있을 때 권리 포트폴리오를 정리해 두면 급할 때 덜 흔들립니다.",
   "themes": [
    "self"
   ],
   "when": [
    "cash_ok"
   ]
  }
 ],
 "pet": [
  {
   "id": "pet_self_001",
   "text": "두부가 문 앞에서 꼬리를 흔든다. 잠시 산책할 시간일지도.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "pet_self_002",
   "text": "두부가 키보드 앞에 앉는다. 잠깐 자리에서 일어나는 게 맞아 보인다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "pet_self_003",
   "text": "두부가 하품을 크게 한다. 대표의 하루도 슬슬 접을 때다.",
   "themes": [
    "self"
   ],
   "when": []
  },
  {
   "id": "pet_self_004",
   "text": "두부가 발목을 가만히 친다. 오늘은 회의보다 짧은 낮잠이 필요해 보인다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "pet_self_005",
   "text": "두부가 현관에서 기다린다. 몸을 풀어 줄 시간이 이미 지났다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "pet_self_006",
   "text": "두부가 장난감을 가져온다. 컨디션 좋은 날의 짧은 놀이도 일과다.",
   "themes": [
    "self"
   ],
   "when": [
    "health_ok"
   ]
  },
  {
   "id": "pet_self_007",
   "text": "연말에도 두부의 식사 시간은 미루지 않는다. 그 시간은 비워 두는 편이 맞다.",
   "themes": [
    "self"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "pet_self_008",
   "text": "일이 잘 안 된 날에도 두부는 식기를 보고 있다. 먼저 채워 주는 게 순서다.",
   "themes": [
    "self"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "pet_self_009",
   "text": "창업 초반의 바쁜 밤에도 두부의 하루는 같은 길이로 끝난다.",
   "themes": [
    "self"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "pet_people_010",
   "text": "두부가 손님 발치에 앉는다. 잠시 말투가 부드러워지는 이유가 된다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "pet_people_011",
   "text": "두부가 팀 회의실 문턱에서 기다린다. 사람 사이 휴식의 신호다.",
   "themes": [
    "people"
   ],
   "when": []
  },
  {
   "id": "pet_people_012",
   "text": "두부가 사무실을 한 바퀴 돈다. 자리에 오래 앉은 사람을 일으킨다.",
   "themes": [
    "people"
   ],
   "when": [
    "team_on"
   ]
  },
  {
   "id": "pet_people_013",
   "text": "분위기가 무거운 날, 두부가 공을 굴린다. 잠깐의 웃음이 필요해 보인다.",
   "themes": [
    "people"
   ],
   "when": [
    "morale_low"
   ]
  },
  {
   "id": "pet_people_014",
   "text": "두부가 처음 온 사람 앞에서 꼬리를 흔든다. 긴장된 자리의 짧은 숨이다.",
   "themes": [
    "people"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "pet_people_015",
   "text": "두부가 낯익은 발소리를 알아듣고 일어선다. 다시 만나도 이 인사는 같다.",
   "themes": [
    "people"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "pet_people_016",
   "text": "잘된 날의 두부는 더 시끄럽게 운다. 축하보다 산책이 먼저다.",
   "themes": [
    "people"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "pet_safety_017",
   "text": "두부가 출입문 앞에서 멈춘다. 급하게 나가기 전에 한 번 더 돌아보게 한다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "pet_safety_018",
   "text": "두부가 전선 근처에서 물러난다. 위험한 쪽을 먼저 치우는 편이 맞다.",
   "themes": [
    "safety"
   ],
   "when": []
  },
  {
   "id": "pet_safety_019",
   "text": "급한 날에도 두부의 목줄과 물은 그대로다. 미루면 안 되는 일이 있다.",
   "themes": [
    "safety"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "pet_safety_020",
   "text": "지친 대표를 두부가 막아서듯 눕는다. 더 나가는 길이 안전하지 않아 보인다.",
   "themes": [
    "safety"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "pet_safety_021",
   "text": "아직 일이 불안정해도 두부의 일과는 일정한 편이 모두를 안심시킨다.",
   "themes": [
    "safety"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "pet_safety_022",
   "text": "사고가 있던 날, 두부는 평소보다 가까이 붙어 앉는다. 오늘은 무리하지 않는 날이다.",
   "themes": [
    "safety"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "pet_safety_023",
   "text": "오래 함께한 두부의 습관이 변하면, 회사의 리듬도 한번 돌아볼 때다.",
   "themes": [
    "safety"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "pet_cash_024",
   "text": "두부가 사료 봉투를 들여다본다. 작은 고정비도 매달의 약속이다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "pet_cash_025",
   "text": "두부의 병원 달력이 책상 모서리에 있다. 미룰 수 없는 지출이 있다.",
   "themes": [
    "cash"
   ],
   "when": []
  },
  {
   "id": "pet_cash_026",
   "text": "빠듯한 달에도 두부의 밥은 줄지 않는다. 줄여도 되는 항목이 따로 있다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_tight"
   ]
  },
  {
   "id": "pet_cash_027",
   "text": "여유가 생긴 날, 두부는 새 장난감보다 함께 있는 시간을 더 오래 끈다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_ok"
   ]
  },
  {
   "id": "pet_cash_028",
   "text": "위급한 달에도 두부는 같은 시각에 식기를 본다. 그 시간은 남겨 두는 편이 맞다.",
   "themes": [
    "cash"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "pet_cash_029",
   "text": "연말 정산 옆에서 두부가 잔다. 숫자 사이에도 돌봄 항목은 남아 있다.",
   "themes": [
    "cash"
   ],
   "when": [
    "year_end"
   ]
  },
  {
   "id": "pet_cash_030",
   "text": "갚을 일이 쌓여도 두부의 병원비는 목록의 위쪽에 두는 게 맞다.",
   "themes": [
    "cash"
   ],
   "when": [
    "has_debt"
   ]
  },
  {
   "id": "pet_trust_031",
   "text": "두부가 시간을 기억하고 현관에 선다. 작은 약속도 이렇게 쌓인다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "pet_trust_032",
   "text": "두부는 거짓말보다 발소리를 믿는다. 말한 시간에 일어나는 편이 맞다.",
   "themes": [
    "trust"
   ],
   "when": []
  },
  {
   "id": "pet_trust_033",
   "text": "처음 온 자리에서도 두부는 익숙한 루틴을 기다린다. 기본은 그대로다.",
   "themes": [
    "trust"
   ],
   "when": [
    "first_meet"
   ]
  },
  {
   "id": "pet_trust_034",
   "text": "다시 온 사람의 손을 두부가 먼저 맡는다. 지난번 만남의 기록이 남아 있다.",
   "themes": [
    "trust"
   ],
   "when": [
    "return_visit"
   ]
  },
  {
   "id": "pet_trust_035",
   "text": "잘된 날에도 두부의 산책 시간은 미루지 않는 편이, 다른 약속도 지키게 한다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "pet_trust_036",
   "text": "일이 틀린 날, 두부는 그래도 같은 시간에 온다. 최소한의 약속은 남는다.",
   "themes": [
    "trust"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "pet_trust_037",
   "text": "초반의 바쁜 변명이 늘어져도 두부의 시간은 그대로다. 그 정직함이 남는다.",
   "themes": [
    "trust"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "pet_quality_038",
   "text": "두부가 밥그릇을 깨끗이 비운다. 대충 채운 하루와는 티가 다르다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "pet_quality_039",
   "text": "두부가 장난감을 고른다. 아무거나 내놓으면 곧 관심이 사라진다.",
   "themes": [
    "quality"
   ],
   "when": []
  },
  {
   "id": "pet_quality_040",
   "text": "잘 만든 하루의 끝에서 두부가 발치에 앉는다. 마무리가 좋다는 신호다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "pet_quality_041",
   "text": "결과물이 아쉬운 날에도 두부의 식사는 대충 넘어가지 않는다.",
   "themes": [
    "quality"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "pet_quality_042",
   "text": "첫 사무실에서도 두부의 자리는 정해져 있다. 기본을 먼저 두는 일이다.",
   "themes": [
    "quality"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "pet_quality_043",
   "text": "익숙해진 돌봄을 건너뛰면 두부가 먼저 알려 준다. 점검의 신호다.",
   "themes": [
    "quality"
   ],
   "when": [
    "mid"
   ]
  },
  {
   "id": "pet_quality_044",
   "text": "지친 손으로 대충 챙기면 두부가 남긴다. 오늘은 제대로 한 가지만 해도 된다.",
   "themes": [
    "quality"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "pet_growth_045",
   "text": "회사가 커져도 두부의 하루 길이는 같다. 모든 것을 키울 필요는 없다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "pet_growth_046",
   "text": "새 사무실을 알아봐도 두부가 걸을 길이 있는지가 빠지지 않는다.",
   "themes": [
    "growth"
   ],
   "when": []
  },
  {
   "id": "pet_growth_047",
   "text": "숫자가 오른 날에도 두부는 같은 시간에 문을 본다. 속도만 올릴 일은 아니다.",
   "themes": [
    "growth"
   ],
   "when": [
    "rev_up"
   ]
  },
  {
   "id": "pet_growth_048",
   "text": "손님이 늘어도 두부가 쉬는 구석 하나는 남겨 두는 편이 맞다.",
   "themes": [
    "growth"
   ],
   "when": [
    "customers_many"
   ]
  },
  {
   "id": "pet_growth_049",
   "text": "큰 성과가 있던 날, 두부는 평소와 같은 산책을 원한다. 기본값을 올리지 않는다.",
   "themes": [
    "growth"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "pet_growth_050",
   "text": "일을 넓히기 전에 두부가 이미 이 집의 리듬을 만들고 있다.",
   "themes": [
    "growth"
   ],
   "when": [
    "early"
   ]
  },
  {
   "id": "pet_growth_051",
   "text": "오래 운영한 회사의 저녁에도 두부는 같은 길로 안내한다.",
   "themes": [
    "growth"
   ],
   "when": [
    "late"
   ]
  },
  {
   "id": "pet_speed_052",
   "text": "두부가 목을 늘여 시계 쪽을 본다. 서두르기 전에 한 끼가 먼저다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "pet_speed_053",
   "text": "급히 나가는 발소리를 두부가 막아서듯 선다. 한 번 숨 고를 시간이다.",
   "themes": [
    "speed"
   ],
   "when": []
  },
  {
   "id": "pet_speed_054",
   "text": "급한 전화 사이에서도 두부의 식사는 정해진 속도로 온다.",
   "themes": [
    "speed"
   ],
   "when": [
    "cash_crisis"
   ]
  },
  {
   "id": "pet_speed_055",
   "text": "잘된 흐름을 이어 가려는 발길을 두부가 현관에서 잠시 세운다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_ok"
   ]
  },
  {
   "id": "pet_speed_056",
   "text": "만회하러 뛰쳐나가려는 순간에 두부가 목줄을 물고 온다. 천천히 가는 편이 맞다.",
   "themes": [
    "speed"
   ],
   "when": [
    "event_bad"
   ]
  },
  {
   "id": "pet_speed_057",
   "text": "지친 채 서두르면 두부가 더 천천히 걷는다. 그 속도가 맞다.",
   "themes": [
    "speed"
   ],
   "when": [
    "health_low"
   ]
  },
  {
   "id": "pet_speed_058",
   "text": "연말 마감 중에도 두부의 저녁은 정각에 가깝다. 밀린 일의 기준이 된다.",
   "themes": [
    "speed"
   ],
   "when": [
    "year_end"
   ]
  }
 ]
};
export const ORIGINAL_DIALOGUE_COUNTS = {
 "mentor": 16,
 "investor": 16,
 "cofounder": 16,
 "staff": 16,
 "friend": 16,
 "partner": 16,
 "family": 16,
 "customer": 16,
 "public_officer": 1,
 "rival": 1,
 "private_lender": 1,
 "foreign_investor": 1,
 "creator": 1,
 "freelancer": 1,
 "expert": 1,
 "lawyer": 1,
 "tax_advisor": 1,
 "accountant": 1,
 "patent_attorney": 1,
 "pet": 1
};
