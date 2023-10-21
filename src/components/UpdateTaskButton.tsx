"use client";

import { useRouter } from "next/navigation";

import { MdEdit } from "react-icons/md";

type UpdateTaskButtonProps = {
  id: Number;
};

export const UpdateTaskButton = ({ id }: UpdateTaskButtonProps) => {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/tasks/edit/${id}`);
  };

  return (
    <MdEdit
      className="cursor-pointer hover:text-[#0070f0] transition-all"
      onClick={handleEditClick}
      size="22px"
    />
  );
};
