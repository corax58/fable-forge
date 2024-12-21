"use client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDeleteStory } from "../../hooks/stories/useDeleteStory";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  storyId: string;
}
const DeleteStory = ({ storyId }: Props) => {
  const deleteStory = useDeleteStory();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-min" variant="destructive">
          <FaTrashAlt />
          <span className="hidden md:block">Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this story? This action can not be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <DialogClose>
            <Button
              onClick={() => deleteStory.mutate(storyId)}
              variant={"destructive"}
            >
              Delete Story
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteStory;
