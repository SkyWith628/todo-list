# Todo List App

![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-latest-646cff?style=flat&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222?style=flat&logo=github&logoColor=white)

React + TypeScript로 구현한 할 일 관리 웹 앱입니다.

---

## 주요 기능

- 할 일 추가 / 수정 / 삭제
- 필터링 (전체 / 진행 중 / 완료)
- 통계 대시보드 (완료율, 카테고리별 현황)
- 로그인 페이지
- 반응형 UI

---

## 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | React 19 |
| 언어 | TypeScript |
| 빌드 도구 | Vite |
| 라우팅 | React Router DOM |
| 아이콘 | Lucide React |
| 배포 | GitHub Pages |

---

## 프로젝트 구조

```
todo-list-github-pages/
└── src/
    ├── components/
    │   ├── AppShell.tsx      # 레이아웃 쉘
    │   ├── FilterBar.tsx     # 필터 바
    │   ├── StatsPanel.tsx    # 통계 패널
    │   ├── TodoForm.tsx      # 할 일 입력 폼
    │   └── TodoList.tsx      # 할 일 목록
    ├── pages/
    │   ├── DashboardPage.tsx # 메인 대시보드
    │   ├── DetailPage.tsx    # 상세 페이지
    │   ├── LoginPage.tsx     # 로그인 페이지
    │   ├── StatsPage.tsx     # 통계 페이지
    │   └── NotFoundPage.tsx  # 404 페이지
    ├── context/
    │   └── TodoContext.tsx   # 전역 상태 관리
    ├── hooks/
    │   ├── useFilteredTodos.ts  # 필터링 훅
    │   ├── useTodayLabel.ts     # 날짜 레이블 훅
    │   └── useTodoStats.ts      # 통계 훅
    └── types/                   # 타입 정의
```

---

## 실행 방법

```bash
cd todo-list-github-pages
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

---

## 빌드 및 배포

```bash
npm run build
```

GitHub Pages로 자동 배포됩니다.

---

## 라이선스

MIT License
