import { create } from "zustand";
import { devtools } from "zustand/middleware";
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

export const useStore = create<TaskStore, [["zustand/devtools", TaskStore]]>(
  devtools(
    (set) => ({
      tasks: [],
      draggedTask: undefined,
      addTask: (task) =>
        set((store) => ({ tasks: [...store.tasks, task] }), false, "addTask"),
      deleteTask: (title) =>
        set(
          (store) => ({
            tasks: store.tasks.filter((t) => t.title !== title),
          }),
          false,
          "deleteTask"
        ),
      setDraggedTask: (title) => set({ draggedTask: title }),
      moveTask: (title, state) =>
        set(
          (store) => ({
            tasks: store.tasks.map((task) =>
              task.title === title ? { title, state } : task
            ),
          }),
          false,
          "moveTask"
        ),
    }),
    { name: "TaskStore" }
  )
);
