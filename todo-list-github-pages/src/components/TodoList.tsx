import { Check, Circle, Clock, Trash2 } from "lucide-react";
import { Todo } from "../types/todo";
import { useTodoContext } from "../context/TodoContext";

const priorityText = {
  low: "낮음",
  medium: "보통",
  high: "높음"
};

const statusIcon = {
  todo: Circle,
  doing: Clock,
  done: Check
};

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  const { removeTodo, toggleTodo } = useTodoContext();

  if (todos.length === 0) {
    return <div className="empty-state">조건에 맞는 일정이 없습니다.</div>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        const Icon = statusIcon[todo.status];

        return (
          <article className={`todo-item ${todo.status}`} key={todo.id}>
            <button className="icon-button" onClick={() => toggleTodo(todo.id)} aria-label={`${todo.title} 완료 전환`}>
              <Icon aria-hidden="true" />
            </button>
            <div className="todo-main">
              <div className="todo-title-row">
                <h3>{todo.title}</h3>
                <span className={`priority ${todo.priority}`}>{priorityText[todo.priority]}</span>
              </div>
              <p>{todo.memo}</p>
              <div className="todo-meta">
                <span>{todo.dueDate}</span>
                <span>{todo.category}</span>
              </div>
            </div>
            <button className="icon-button danger" onClick={() => removeTodo(todo.id)} aria-label={`${todo.title} 삭제`}>
              <Trash2 aria-hidden="true" />
            </button>
          </article>
        );
      })}
    </div>
  );
}
