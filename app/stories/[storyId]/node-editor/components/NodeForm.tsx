"use client";
import MarkDownEditor from "@/components/MarkDownEditor";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Node } from "@prisma/client";

import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateNode } from "@/hooks/nodes/useCreateNode";
import { useUpdateNode } from "@/hooks/nodes/useUpdateNode";
import { useToast } from "@/hooks/toast/use-toast";
import { ReactNode, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  storyId: string;
  firstNode: boolean;
  text: string;
  previousNodeId?: string;
  children: ReactNode;
  Node?: Node;
  currentNodeId?: string;
}
const NodeForm = ({
  storyId,
  firstNode,
  text,
  previousNodeId,
  children,
  Node,
  currentNodeId,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const defaultValues = Node ? Node : { firstNode, storyId };
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Node>({
    defaultValues,
  });

  const createNode = useCreateNode();

  const updateNode = Node?.id
    ? useUpdateNode(Node?.id!, currentNodeId)
    : useCreateNode();

  const onSubmit: SubmitHandler<Node> = async (data, e) => {
    e?.preventDefault();
    if (Node) {
      updateNode.mutate(data);
    } else if (previousNodeId) {
      createNode.mutate({ ...data, previousNodeId: previousNodeId });
    } else {
      createNode.mutate(data);
    }
  };

  useEffect(() => {
    if (createNode.isError || updateNode.isError) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again.",
      });
    }

    if (createNode.isSuccess) {
      setIsOpen(false);
      toast({
        variant: "success",
        title: "Node created successfully!",
      });
      reset();
    }
    if (updateNode.isSuccess) {
      setIsOpen(false);
      toast({
        variant: "success",
        title: "Node edited successfully!",
      });
      reset();
    }
  }, [
    createNode.isError,
    createNode.isSuccess,
    updateNode.isError,
    updateNode.isSuccess,
  ]);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className=" overflow-y-scroll max-h-screen">
          <DialogHeader>
            <DialogTitle>{text}</DialogTitle>
          </DialogHeader>
          <form
            className="modal-box flex flex-col space-y-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              className=" input input-bordered input-md"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && <ErrorMessage text={errors.title.message!} />}

            <label htmlFor="descriptoin">Text</label>
            <Controller
              control={control}
              name={"text"}
              rules={{
                required: "Description is required",
              }}
              render={({ field }) => <MarkDownEditor id="text" field={field} />}
            />
            {errors.text && <ErrorMessage text={errors.text.message!} />}

            <Button className="btn" type="submit">
              {createNode.isPending || updateNode.isPending ? (
                <Spinner />
              ) : (
                text
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NodeForm;
