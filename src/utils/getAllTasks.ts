import type { Task } from "@/types/task";

export const getAllTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-cache",
  });
  const data: Task[] = await res.json();

  return data;
};
