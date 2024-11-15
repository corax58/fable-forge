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

import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateNode } from "@/app/hooks/nodes/useCreateNode";
import { ErrorMessage } from "@/app/components";
import { boolean } from "zod";
import { useToast } from "@/hooks/use-toast";

const NodeForm = ({
  storyId,
  firstNode,
}: {
  storyId: string;
  firstNode: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Node>({
    defaultValues: {
      firstNode,
      storyId,
    },
  });

  const createNode = useCreateNode();
  const onSubmit: SubmitHandler<Node> = async (data, e) => {
    e?.preventDefault();
    console.log("hello");
    createNode.mutate(data);
  };

  useEffect(() => {
    if (createNode.isError) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again.",
      });
    }
  }, [createNode.isError]);

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Create Node</Button>
        </DialogTrigger>
        <DialogContent className=" overflow-y-scroll max-h-screen">
          <DialogHeader>
            <DialogTitle>Create a node</DialogTitle>
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
              Create Node
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NodeForm;
