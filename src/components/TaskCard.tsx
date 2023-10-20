import type { Task } from "@/types/task";

type TaskCardProps = {
  task: Task;
};

import { UpdateTaskButton } from "./UpdateTaskButton";
import { DeleteTaskButton } from "./DeleteTaskButton";

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="w-full flex items-center justify-between gradient p-4 rounded-md">
      <section>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <p>{task.description}</p>
      </section>

      <section className="flex gap-4">
        <UpdateTaskButton />
        <DeleteTaskButton id={task.id} />
      </section>
    </div>
  );
};
