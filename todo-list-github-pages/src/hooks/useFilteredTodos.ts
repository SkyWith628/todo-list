import { useMemo, useState } from "react";
import { TodoStatus } from "../types/todo";
import { useTodoContext } from "../context/TodoContext";

export type TodoFilter = "all" | TodoStatus;

export function useFilteredTodos() {
  const { todos } = useTodoContext();
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [query, setQuery] = useState("");

  const filteredTodos = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return todos.filter((todo) => {
      const matchesStatus = filter === "all" || todo.status === filter;
      const matchesKeyword =
        !keyword ||
        todo.title.toLowerCase().includes(keyword) ||
        todo.memo.toLowerCase().includes(keyword) ||
        todo.category.toLowerCase().includes(keyword);

      return matchesStatus && matchesKeyword;
    });
  }, [filter, query, todos]);

  return { filter, filteredTodos, query, setFilter, setQuery };
}
