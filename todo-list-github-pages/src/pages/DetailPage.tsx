import { CalendarClock } from "lucide-react";
import { useTodoContext } from "../context/TodoContext";
import { TodoStatus } from "../types/todo";

const statusLabels: Record<TodoStatus, string> = {
  todo: "예정",
  doing: "진행 중",
  done: "완료"
};

export function DetailPage() {
  const { setTodoStatus, todos } = useTodoContext();

  return (
    <div className="page-stack">
      <header className="page-header">
        <div>
          <span className="eyebrow">상세페이지</span>
          <h1>일정별 상태와 마감일을 조정하세요.</h1>
        </div>
      </header>
      <section className="detail-table" aria-label="일정 상세 목록">
        {todos.map((todo) => (
          <article className="detail-row" key={todo.id}>
            <CalendarClock aria-hidden="true" />
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.memo}</p>
              <span>
                {todo.dueDate} · {todo.category}
              </span>
            </div>
            <select value={todo.status} onChange={(event) => setTodoStatus(todo.id, event.target.value as TodoStatus)}>
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </article>
        ))}
      </section>
    </div>
  );
}
