import { FilterBar } from "../components/FilterBar";
import { StatsPanel } from "../components/StatsPanel";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

export function DashboardPage() {
  const { filter, filteredTodos, query, setFilter, setQuery } = useFilteredTodos();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <span className="eyebrow">오늘의 일정</span>
          <h1>해야 할 일을 또렷하게 정리하세요.</h1>
        </div>
      </header>
      <StatsPanel />
      <section className="workspace-layout">
        <TodoForm />
        <div className="list-panel">
          <FilterBar filter={filter} onFilterChange={setFilter} onQueryChange={setQuery} query={query} />
          <TodoList todos={filteredTodos} />
        </div>
      </section>
    </div>
  );
}
