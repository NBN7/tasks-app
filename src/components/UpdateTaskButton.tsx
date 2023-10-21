"use client";

import { MdEdit } from "react-icons/md";

export const UpdateTaskButton = () => {
  const handleEditClick = () => {};

  return (
    <MdEdit
      className="cursor-pointer hover:text-[#0070f0] transition-all"
      onClick={handleEditClick}
      size="22px"
    />
  );
};
