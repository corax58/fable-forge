"use client";
import { FaTrashAlt } from "react-icons/fa";
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

const DeleteNodeButton = ({ nodeId }: { nodeId: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="p-2 size-max rounded-full hover:scale-110 transition-transform"
          variant={"destructive"}
        >
          <FaTrashAlt />
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
            <Button variant={"destructive"}>Delete Node</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteNodeButton;
