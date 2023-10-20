"use client";

import { MdEdit } from "react-icons/md";

export const UpdateTaskButton = () => {
  const handleEditClick = () => {};

  return (
    <MdEdit
      onClick={handleEditClick}
      style={{ cursor: "pointer" }}
      size="22px"
    />
  );
};
