import { useState } from "react";
import { useTask } from "../hooks/useTask";
import { useStore } from "../store/store";
import { StatusTypeProps, Task } from "./task";
import { XCircle } from "lucide-react";

export const Column = ({ state }: { state: StatusTypeProps }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const { tasks } = useTask({ state });
  const handleAddTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className="bg-gray-900 text-white h-[20rem] w-[33%] max-w-xs mx-2 rounded-md p-2 overflow-hidden overflow-y-scroll"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        moveTask(draggedTask!, state);
        setDraggedTask(undefined);
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <p>{state}</p>
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 hover:bg-purple-800 duration-200 text-white px-5 py-1 rounded-md h-fit uppercase text-sm font-bold"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        {tasks.map((task) => (
          <Task key={task.title} title={task.title} />
        ))}
      </div>
      {open && (
        <div className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur duration-300">
          <div className="flex flex-col justify-center bg-black p-6 rounded-lg shadow-lg space-y-2 h-52 w-72 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-0 right-0 mr-6 mt-2"
            >
              <XCircle />
            </button>

            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="bg-transparent border-2 border-purple-600 py-1 px-2 focus:outline-none rounded-md"
            />
            <button
              onClick={() => {
                handleAddTask({ title: text, state });
                setText("");
                setOpen(false);
              }}
              className="bg-purple-600 hover:bg-purple-800 duration-200 text-white px-5 py-1 rounded-md h-fit uppercase text-sm font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
