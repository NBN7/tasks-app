import type { NewTask } from "@/types/newTask";
import { useRouter } from "next/navigation";

export const createNewTask = async (newTask: NewTask) => {
  const router = useRouter();

  try {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      cache: "no-cache",
    });
    router.refresh();
  } catch (error) {
    console.error(error);
  }
};
