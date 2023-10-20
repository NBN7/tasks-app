"use client";

import { useRouter } from "next/navigation";

import { MdDelete } from "react-icons/md";

type DeleteTaskButtonProps = {
  id: Number;
};

export const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
  const router = useRouter();

  const handleDeleteClick = async (id: Number) => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
    } catch (error) {
      console.error(error);
    }

    router.refresh();
  };

  return (
    <MdDelete
      className="cursor-pointer"
      onClick={() => handleDeleteClick(id)}
      size="22px"
    />
  );
};
