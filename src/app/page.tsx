import { NewTask } from "@/components/NewTask";
import { TaskCard } from "@/components/TaskCard";
import type { Task } from "@/types/task";

import { Divider } from "@nextui-org/divider";

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-cache",
  });
  const data = await res.json();

  return data;
};

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="w-full sm:min-h-screen flex justify-center">
      <section className="flex flex-col w-[400px]">
        <h1 className="text-4xl font-semibold">Tasks</h1>

        <Divider className="my-6" />

        <div className="flex flex-col gap-4">
          <NewTask />

          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
}
