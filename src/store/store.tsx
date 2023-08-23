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
};

export const useStore = create<TaskStore>((set) => ({
  tasks: [{ title: "Test Task", state: "ONGOING" }],
  addTask: (task: TaskType) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (title: string) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.title !== title),
    })),
}));
