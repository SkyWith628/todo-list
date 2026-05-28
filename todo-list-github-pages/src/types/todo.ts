export type TodoPriority = "low" | "medium" | "high";
export type TodoStatus = "todo" | "doing" | "done";

export type Todo = {
  id: string;
  title: string;
  memo: string;
  dueDate: string;
  priority: TodoPriority;
  category: string;
  status: TodoStatus;
  createdAt: string;
};

export type TodoDraft = Omit<Todo, "id" | "createdAt" | "status"> & {
  status?: TodoStatus;
};
