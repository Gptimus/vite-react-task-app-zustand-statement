import { useTask } from "../hooks/useTask";
import { Task } from "./task";

export const Column = ({ state }: { state: string }) => {
  const { tasks } = useTask({ state });

  return (
    <div className="bg-gray-900 text-white h-[20rem] w-[33%] max-w-xs mx-2 rounded-md p-2">
      <p className="mb-2">{state}</p>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
};
