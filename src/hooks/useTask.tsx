import { useStore } from "../store/store";

export const useTask = ({ state }: { state: string }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
  );

  return { tasks };
};
