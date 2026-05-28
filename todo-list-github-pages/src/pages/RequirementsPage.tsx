export function RequirementsPage() {
  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <span className="eyebrow">개발 노트</span>
          <h1>구현 요구 사항 반영 내역</h1>
        </div>
      </header>
      <section className="requirements-list">
        <article>
          <strong>5개 이상의 컴포넌트</strong>
          <p>AppShell, TodoForm, TodoList, StatsPanel, FilterBar 등으로 화면을 구성했습니다.</p>
        </article>
        <article>
          <strong>React Router 화면 3개 이상</strong>
          <p>오늘, 상세페이지, 통계, 로그인, 오류 화면 URL을 제공합니다.</p>
        </article>
        <article>
          <strong>Hook 함수 3개 이상</strong>
          <p>useFilteredTodos, useTodoStats, useTodayLabel로 검색, 통계, 현재 시간 갱신을 분리했습니다.</p>
        </article>
        <article>
          <strong>전역 상태 적용</strong>
          <p>TodoContext와 useReducer로 일정 추가, 삭제, 상태 변경을 모든 화면에서 공유합니다.</p>
        </article>
        <article>
          <strong>TypeScript 적용</strong>
          <p>Todo 타입, 상태 타입, 입력 데이터 타입을 TypeScript로 정의했습니다.</p>
        </article>
      </section>
    </div>
  );
}
