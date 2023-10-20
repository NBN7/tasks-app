"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

import type { NewTask } from "@/types/newTask";

import { createNewTask } from "@/utils/createNewTask";

export const NewTaskModal = () => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    description: "",
  });

  const [isError, setIsError] = useState(true);

  const handleAddClick = async () => {
    createNewTask(newTask);

    router.refresh();

    onOpenChange();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, title: e.target.value });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, description: e.target.value });
  };

  useEffect(() => {
    if (!newTask.title || !newTask.description) {
      setIsError(true);
      return;
    }
    setIsError(false);
  }, [newTask]);

  return (
    <>
      <Button onPress={onOpen} radius="md" color="default" variant="bordered">
        New Task
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>New Task</ModalHeader>

          <ModalBody>
            <Input
              onChange={handleTitleChange}
              label="Title"
              type="text"
              placeholder="My task"
            />
            <Input
              onChange={handleDescriptionChange}
              label="Description"
              type="text"
              placeholder="Do somethihg"
            />
          </ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onClick={onOpenChange}>
              Cancel
            </Button>

            <Button
              isDisabled={isError}
              color="primary"
              variant="solid"
              onClick={handleAddClick}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
