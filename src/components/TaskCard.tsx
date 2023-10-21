import type { Task } from "@/types/task";

type TaskCardProps = {
  task: Task;
};

import { UpdateTaskButton } from "./UpdateTaskButton";
import { DeleteTaskButton } from "./DeleteTaskButton";

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="w-full flex items-center justify-between bg-[#212121] border border-[#303030] p-4 rounded-md">
      <section className="pointer-events-none flex flex-col gap-2 overflow-hidden">
        <h2 className="text-[#0070f0] text-xl font-semibold truncate">
          {task.title}
        </h2>

        <p className="truncate">{task.description}</p>

        <p className="text-[#707070] text-xs">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </section>

      <section className="flex gap-4 m-3">
        <abbr title="Update">
          <UpdateTaskButton id={task.id} />
        </abbr>

        <abbr title="Delete">
          <DeleteTaskButton id={task.id} />
        </abbr>
      </section>
    </div>
  );
};
