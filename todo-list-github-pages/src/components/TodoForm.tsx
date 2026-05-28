import { FormEvent, useState } from "react";
import { Plus } from "lucide-react";
import { useTodoContext } from "../context/TodoContext";
import { TodoPriority } from "../types/todo";

const today = new Date().toISOString().slice(0, 10);

export function TodoForm() {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [category, setCategory] = useState("개인");
  const [priority, setPriority] = useState<TodoPriority>("medium");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTodo({
      title: title.trim(),
      memo: memo.trim() || "메모 없음",
      dueDate,
      category: category.trim() || "개인",
      priority
    });

    setTitle("");
    setMemo("");
    setCategory("개인");
    setPriority("medium");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        할 일
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="예: 병원 예약하기" />
      </label>
      <label>
        메모
        <input value={memo} onChange={(event) => setMemo(event.target.value)} placeholder="짧은 설명" />
      </label>
      <div className="form-grid">
        <label>
          날짜
          <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        </label>
        <label>
          분류
          <input value={category} onChange={(event) => setCategory(event.target.value)} />
        </label>
        <label>
          중요도
          <select value={priority} onChange={(event) => setPriority(event.target.value as TodoPriority)}>
            <option value="low">낮음</option>
            <option value="medium">보통</option>
            <option value="high">높음</option>
          </select>
        </label>
      </div>
      <button type="submit" className="primary-button">
        <Plus aria-hidden="true" />
        추가
      </button>
    </form>
  );
}
