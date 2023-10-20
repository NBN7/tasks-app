import { NewTaskModal } from "@/components/NewTaskModal";
import { TaskCard } from "@/components/TaskCard";
import type { Task } from "@/types/task";

import { Divider } from "@nextui-org/divider";

import { getAllTasks } from "@/utils/getAllTasks";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main className="w-full sm:min-h-screen flex justify-center">
      <section className="flex flex-col w-[400px]">
        <h1 className="text-4xl font-semibold">Tasks</h1>

        <Divider className="my-6" />

        <div className="flex flex-col gap-4">
          <NewTaskModal />

          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
}
