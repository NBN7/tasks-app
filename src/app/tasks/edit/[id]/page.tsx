"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getOneTask } from "@/utils/getOneTask";
import { Task } from "@/types/task";

type TaskEditPageProps = {
  params: Params;
};

export default function TaskEditPage({ params }: TaskEditPageProps) {
  const { id } = params;
  const router = useRouter();

  const [task, setTask] = useState<Task>({} as Task);
  const [updatedTask, setUpdatedTask] = useState<Task>({} as Task);

  const getTask = async () => {
    const data: Task = await getOneTask(id);

    if (!data.id) {
      router.push("/");
      return;
    }

    setTask(data);
  };

  const handleSaveClick = async () => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        cache: "no-cache",
      });
    } catch (error) {
      console.error(error);
    }
    router.refresh();

    router.push("/");
  };

  const handleCancelClick = () => {
    router.push("/");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask((prev) => ({ ...prev, description: e.target.value }));
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <main className="w-full sm:min-h-screen flex justify-center">
      <section className="flex flex-col w-[400px]">
        <h1 className="text-4xl font-semibold">Update task</h1>

        <Divider className="my-6" />

        <div className="flex flex-col gap-4 items-center">
          <Input
            placeholder={task.title}
            onChange={handleTitleChange}
            label="Title"
            size="lg"
          />
          <Input
            placeholder={task.description}
            onChange={handleDescriptionChange}
            label="Description"
            size="lg"
          />

          <div className="w-full flex justify-between mt-6">
            <Button onClick={handleCancelClick} color="danger" variant="light">
              Cancel
            </Button>

            <Button onClick={handleSaveClick} color="primary">
              Save
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
