import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";
import { Todo, TodoDraft, TodoStatus } from "../types/todo";

type TodoState = {
  todos: Todo[];
};

type TodoAction =
  | { type: "add"; payload: TodoDraft }
  | { type: "toggle"; payload: string }
  | { type: "remove"; payload: string }
  | { type: "setStatus"; payload: { id: string; status: TodoStatus } };

type TodoContextValue = TodoState & {
  addTodo: (draft: TodoDraft) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  setTodoStatus: (id: string, status: TodoStatus) => void;
};

const initialTodos: Todo[] = [
  {
    id: "todo-1",
    title: "월간 일정 정리",
    memo: "중요 회의와 개인 약속을 한 번에 확인하기",
    dueDate: "2026-05-29",
    priority: "high",
    category: "업무",
    status: "doing",
    createdAt: "2026-05-27"
  },
  {
    id: "todo-2",
    title: "운동 루틴 예약",
    memo: "퇴근 후 40분 근력 운동",
    dueDate: "2026-05-30",
    priority: "medium",
    category: "건강",
    status: "todo",
    createdAt: "2026-05-27"
  },
  {
    id: "todo-3",
    title: "장보기 목록 업데이트",
    memo: "주말 식단 재료 확인",
    dueDate: "2026-05-28",
    priority: "low",
    category: "생활",
    status: "done",
    createdAt: "2026-05-26"
  }
];

const TodoContext = createContext<TodoContextValue | null>(null);

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "add":
      return {
        todos: [
          {
            ...action.payload,
            id: crypto.randomUUID(),
            status: action.payload.status ?? "todo",
            createdAt: new Date().toISOString().slice(0, 10)
          },
          ...state.todos
        ]
      };
    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, status: todo.status === "done" ? "todo" : "done" }
            : todo
        )
      };
    case "remove":
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case "setStatus":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
        )
      };
    default:
      return state;
  }
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, { todos: initialTodos });

  const value = useMemo<TodoContextValue>(
    () => ({
      todos: state.todos,
      addTodo: (draft) => dispatch({ type: "add", payload: draft }),
      toggleTodo: (id) => dispatch({ type: "toggle", payload: id }),
      removeTodo: (id) => dispatch({ type: "remove", payload: id }),
      setTodoStatus: (id, status) => dispatch({ type: "setStatus", payload: { id, status } })
    }),
    [state.todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodoContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoProvider 안에서만 useTodoContext를 사용할 수 있습니다.");
  }

  return context;
}
