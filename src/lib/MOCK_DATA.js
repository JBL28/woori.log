export const USER =[
  {
    "user_id": "user001",
    "user_name": "우리",
    "user_intro": "꾸준히 배우는 개발자입니다.",
    "user_profile_url": "https://example.com/profiles/user001.png"
  },
  {
    "user_id": "user002",
    "user_name": "피사",
    "user_intro": "기술 블로그 운영 중",
    "user_profile_url": "https://example.com/profiles/user002.png"
  },
  {
    "user_id": "user003",
    "user_name": "유노코드",
    "user_intro": "TS/JS 마스터가 목표입니다.",
    "user_profile_url": "https://example.com/profiles/user003.png"
  }
]

export const GROUP = [
  {
    "group_id": "group001",
    "group_name": "프론트연합",
    "group_intro": "프론트엔드 기술을 연구하는 개발자 모임입니다.",
    "group_member": ["user001", "user003"]
  },
  {
    "group_id": "group002",
    "group_name": "백엔드스쿼드",
    "group_intro": "서버, 데이터베이스를 사랑하는 사람들의 모임!",
    "group_member": ["user002"]
  }
]

export const POST = [
  {
    "post_id": "post001",
    "post_title": "Next.js 14에서의 App Router 완벽 가이드",
    "post_docs": "# App Router란?\nNext.js 14에서 App Router는...",
    "author_id": "user001",
    "group_id": "group001",
    "post_date": "2025-07-01",
    "update_date": "2025-07-02",
    "post_tag": ["nextjs", "react", "routing"]
  },
  {
    "post_id": "post002",
    "post_title": "JWT와 세션의 차이를 한눈에!",
    "post_docs": "JWT는 JSON Web Token의 약자로...",
    "author_id": "user002",
    "group_id": null,
    "post_date": "2025-07-05",
    "update_date": "2025-07-05",
    "post_tag": ["auth", "jwt", "session"]
  },
  {
    "post_id": "post003",
    "post_title": "게임 동작 분석",
    "post_docs": "우리가 플레이하는 게임은 어떤 식으로 동작하는지...",
    "author_id": "user002",
    "group_id": "group002",
    "post_date": "2025-07-07",
    "update_date": "2025-07-08",
    "post_tag": ["game", "data-analysis"]
  },
  {
    "post_id": "post004",
    "post_title": "TS로 타입 안전하게 Redux 쓰기",
    "post_docs": "Redux를 타입스크립트와 함께 사용할 때 주의할 점들...",
    "author_id": "user003",
    "group_id": null,
    "post_date": "2025-07-10",
    "update_date": "2025-07-12",
    "post_tag": ["typescript", "redux", "frontend"]
  }
]
