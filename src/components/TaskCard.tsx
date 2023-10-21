import type { Task } from "@/types/task";

type TaskCardProps = {
  task: Task;
};

import { UpdateTaskButton } from "./UpdateTaskButton";
import { DeleteTaskButton } from "./DeleteTaskButton";

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div
      className={`w-full flex items-center justify-between gradient p-4 rounded-md`}
    >
      <section className="pointer-events-none flex flex-col gap-2 overflow-hidden">
        <h2 className="text-lg font-semibold truncate">{task.title}</h2>
        <p className="truncate">{task.description}</p>
        <p className="text-xs">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </section>

      <section className="flex gap-4 m-3">
        <abbr title="Update">
          <UpdateTaskButton />
        </abbr>

        <abbr title="Delete">
          <DeleteTaskButton id={task.id} />
        </abbr>
      </section>
    </div>
  );
};
