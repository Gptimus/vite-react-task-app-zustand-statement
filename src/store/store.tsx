import { create } from "zustand";
import { StatusTypeProps } from "../components/task";

export type Task = {
  title: string;
  state: StatusTypeProps;
};

export type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export const useStore = create<TaskStore>((set) => ({
  tasks: [{ title: "Test Task", state: "PLANNED" }],
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
