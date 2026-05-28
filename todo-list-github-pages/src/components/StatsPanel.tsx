import { AlertTriangle, CheckCircle2, ListTodo, TrendingUp } from "lucide-react";
import { useTodoStats } from "../hooks/useTodoStats";

export function StatsPanel() {
  const stats = useTodoStats();

  return (
    <section className="stats-grid" aria-label="일정 요약">
      <div className="stat-tile">
        <ListTodo aria-hidden="true" />
        <span>전체</span>
        <strong>{stats.total}</strong>
      </div>
      <div className="stat-tile">
        <CheckCircle2 aria-hidden="true" />
        <span>완료</span>
        <strong>{stats.completed}</strong>
      </div>
      <div className="stat-tile">
        <AlertTriangle aria-hidden="true" />
        <span>긴급</span>
        <strong>{stats.urgent}</strong>
      </div>
      <div className="stat-tile">
        <TrendingUp aria-hidden="true" />
        <span>진행률</span>
        <strong>{stats.progress}%</strong>
      </div>
    </section>
  );
}
