"use client";

type DeleteTaskButtonProps = {
  id: Number;
};

import { useRouter } from "next/navigation";

import { deleteTask } from "@/utils/deleteTask";

import { MdDelete } from "react-icons/md";

export const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
  const router = useRouter();

  const handleDeleteClick = async () => {
    deleteTask(id);

    router.refresh();
  };

  return (
    <MdDelete
      className="cursor-pointer hover:text-[#0070f0] transition-all"
      onClick={handleDeleteClick}
      size="22px"
    />
  );
};
