import { useStore } from "../store/store";
import { Trash2 } from "lucide-react";
import { clsx } from "clsx";
export type StatusTypeProps = "PLANNED" | "ONGOING" | "DONE";

const statusClasses = {
  PLANNED: "bg-red-600",
  ONGOING: "bg-orange-500",
  DONE: "bg-green-600",
};

export const Task = ({ title }: { title: string }) => {
  const task = useStore((store) => store.tasks.find((t) => t.title === title));

  const classes = statusClasses[task!.state];
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div
      className="bg-white rounded-md h-[5rem] text-gray-800 p-2 flex justify-between flex-col cursor-move"
      draggable
      onDragStart={() => setDraggedTask(task!.title)}
    >
      <div>{task?.title}</div>
      <div className="flex justify-between items-center">
        <div>
          <button className="" onClick={() => deleteTask(task!.title)}>
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
        <div
          className={clsx(
            "text-xs bg-gray-400 text-white px-2 py-1 rounded-md",
            classes
          )}
        >
          {task?.state}
        </div>
      </div>
    </div>
  );
};
