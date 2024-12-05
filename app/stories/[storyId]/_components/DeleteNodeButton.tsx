"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteNode } from "@/hooks/nodes/useDeleteNode";
import { useToast } from "@/hooks/toast/use-toast";
import { ReactNode, useEffect } from "react";

interface Props {
  nodeId: string;
  children: ReactNode;
}

const DeleteNodeButton = ({ nodeId, children }: Props) => {
  const deleteNode = useDeleteNode();

  const { toast } = useToast();

  useEffect(() => {
    if (deleteNode.isSuccess) {
      toast({
        title: "Node deleted successfully!",
      });
    }
  }, [deleteNode.isSuccess]);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this node? This will delete all
            subsequent nodes.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
          <DialogClose>
            <Button
              variant={"destructive"}
              onClick={() => deleteNode.mutate(nodeId)}
            >
              Delete Node
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteNodeButton;
