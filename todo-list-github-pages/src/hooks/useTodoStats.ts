import { useMemo } from "react";
import { useTodoContext } from "../context/TodoContext";

export function useTodoStats() {
  const { todos } = useTodoContext();

  return useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.status === "done").length;
    const urgent = todos.filter((todo) => todo.priority === "high" && todo.status !== "done").length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
    const byCategory = todos.reduce<Record<string, number>>((acc, todo) => {
      acc[todo.category] = (acc[todo.category] ?? 0) + 1;
      return acc;
    }, {});

    return { byCategory, completed, progress, total, urgent };
  }, [todos]);
}
