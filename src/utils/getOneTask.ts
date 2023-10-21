import { Task } from "@/types/task";

export const getOneTask = async (id: Number) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
  const data: Task[] = await res.json();

  return data;
};
