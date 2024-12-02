"use client";
import MarkDownEditor from "@/app/my-stories/_components/MarkDownEditor";
import UploadWidget from "@/app/my-stories/_components/UploadWidget";
import { Node } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { ReactNode, useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateNode } from "@/app/hooks/nodes/useCreateNode";
import { ErrorMessage, Spinner } from "@/app/components";
import { boolean } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useUpdateNode } from "@/app/hooks/nodes/useUpdateNode";

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
  const updateNode = useUpdateNode(Node?.id!, currentNodeId);

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
