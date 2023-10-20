import type { NewTask } from "@/types/newTask";

export const createNewTask = async (newTask: NewTask) => {
  try {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      cache: "no-cache",
    });
  } catch (error) {
    console.error(error);
  }
};
