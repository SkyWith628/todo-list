import { Search } from "lucide-react";
import { TodoFilter } from "../hooks/useFilteredTodos";

const filters: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "todo", label: "예정" },
  { value: "doing", label: "진행" },
  { value: "done", label: "완료" }
];

type FilterBarProps = {
  filter: TodoFilter;
  query: string;
  onFilterChange: (filter: TodoFilter) => void;
  onQueryChange: (query: string) => void;
};

export function FilterBar({ filter, onFilterChange, onQueryChange, query }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <Search aria-hidden="true" />
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="검색" />
      </div>
      <div className="segmented-control" aria-label="상태 필터">
        {filters.map((item) => (
          <button
            className={filter === item.value ? "active" : ""}
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
