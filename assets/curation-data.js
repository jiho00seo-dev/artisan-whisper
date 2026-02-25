/**
 * Artisan's Whisper: Curation Data Engine
 * Centralized database for persona-based product curation.
 */

const curationData = {
    "all": [
        {
            id: "leather_desk",
            persona: "men30",
            title: "[각인가능] 프리미엄 가죽 데스크매트",
            tag: "#서재의_품격",
            desc: "이탈리아 베지터블 가죽의 묵직함이 당신의 업무 공간을 정돈합니다. 시간이 흐를수록 깊어지는 에이징의 멋을 느껴보세요.",
            img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
            url: "junction.html?id=leather_desk"
        },
        {
            id: "ceramic_tea",
            persona: "natural",
            title: "연못 다관 | 비정형의 미학, 수제 다구 세트",
            tag: "#오후의_쉼표",
            desc: "똑같은 모양이 하나도 없는, 흙의 숨결을 그대로 담은 다기입니다. 거친 질감 사이로 흐르는 차 한 잔의 평온함을 선물하세요.",
            img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200",
            url: "junction.html?id=ceramic_tea"
        }
    ],
    "men30": [
        {
            id: "leather_desk",
            persona: "#30대_남성",
            title: "[각인가능] 프리미엄 가죽 데스크매트",
            tag: "Workplace",
            desc: "장인의 손길로 태어난 프리미엄 가죽 매트입니다. 당신의 데스크에 품격을 더합니다.",
            img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
            url: "junction.html?id=leather_desk"
        },
        {
            id: "brass_pen",
            persona: "#30대_남성",
            title: "LOG 우드 황동 만년필",
            tag: "Stationery",
            desc: "나무와 황동의 조화가 아름다운 수제 만년필입니다. 기록의 가치를 아는 당신을 위해.",
            img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80",
            url: "junction.html?id=brass_pen"
        },
    ],
    "natural": [
        {
            id: "ceramic_tea",
            persona: "#내추럴_감성",
            title: "연못 다관 (도자기 수제 다구)",
            tag: "Tea Time",
            desc: "정적이면서도 우아한 선을 가진 수제 다도 세트입니다. 일상의 쉼표를 찍어보세요.",
            img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200",
            url: "junction.html?id=ceramic_tea"
        },
        {
            id: "gold_bookmark",
            persona: "#내추럴_감성",
            title: "황동 금속 책갈피 (이니셜 각인)",
            tag: "Reading",
            desc: "당신의 문장 사이를 비추는 황금빛 기록. 황동 소재의 클래식한 책갈피입니다.",
            img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
            url: "junction.html?id=gold_bookmark"
        }
    ],
    "gift": [
        {
            id: "wood_diffuser",
            persona: "gift",
            title: "쿤달 블렌딩 수제 화산석 디퓨저 (편백)",
            tag: "Nature",
            desc: "전기 없이 화산석의 미세한 기공으로 스며드는 자연의 향. 공간에 숲의 평온함을 더해주는 프리미엄 디퓨저입니다.",
            img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=400",
            url: "junction.html?id=wood_diffuser"
        },
        {
            id: "gold_bookmark",
            persona: "gift",
            title: "황금비율 금속 책갈피",
            tag: "#당신의_문장을_기억합니다",
            desc: "책을 사랑하는 이에게 이보다 더 정교한 존중은 없습니다. 얇지만 단단한, 장인의 세밀한 가공이 돋보입니다.",
            img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
            url: "junction.html?id=gold_bookmark"
        }
    ]
};

// Global function to update the storage for Junction
window.getCurationData = (persona) => curationData[persona] || curationData["all"];
