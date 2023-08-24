import { create } from "zustand";
import { StatusTypeProps } from "../components/task";

export type TaskType = {
  title: string;
  state: StatusTypeProps;
};

export type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  deleteTask: (title: string) => void;
  setDraggedTask: (title?: string) => void;
  draggedTask: string | undefined;
  moveTask: (title: string, state: StatusTypeProps) => void;
};

export const useStore = create<TaskStore>((set) => ({
  tasks: [{ title: "Test Task", state: "ONGOING" }],
  draggedTask: undefined,
  addTask: (task: TaskType) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (title: string) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.title !== title),
    })),
  setDraggedTask: (title?: string) => set({ draggedTask: title }),
  moveTask: (title: string, state: StatusTypeProps) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
}));
