"use client";

import { MdDelete } from "react-icons/md";

type DeleteTaskButtonProps = {
  id: Number;
};

import { deleteTask } from "@/utils/deleteTask";

export const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
  const handleDeleteClick = async () => {
    deleteTask(id);
  };

  return (
    <MdDelete
      className="cursor-pointer"
      onClick={handleDeleteClick}
      size="22px"
    />
  );
};
