import { StatsPanel } from "../components/StatsPanel";
import { useTodoStats } from "../hooks/useTodoStats";

export function StatsPage() {
  const { byCategory, progress } = useTodoStats();
  const categories = Object.entries(byCategory);

  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <span className="eyebrow">통계</span>
          <h1>이번 주 일정 흐름을 확인하세요.</h1>
        </div>
      </header>
      <StatsPanel />
      <section className="progress-section">
        <div className="progress-heading">
          <span>완료율</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>
      </section>
      <section className="category-list" aria-label="분류별 일정 수">
        {categories.map(([category, count]) => (
          <div key={category} className="category-row">
            <span>{category}</span>
            <strong>{count}개</strong>
          </div>
        ))}
      </section>
    </div>
  );
}
