"use client";
import MarkDownEditor from "@/app/my-stories/_components/MarkDownEditor";
import UploadWidget from "@/app/my-stories/_components/UploadWidget";
import { Node } from "@prisma/client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const NodeForm = ({ storyId }: { storyId: string }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Node>();
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          let myModal: any = document.getElementById("my_modal_3");
          myModal.showModal();
        }}
      >
        Create Node
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box"></form>
        <form className="modal-box flex flex-col space-y-1">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className=" input input-bordered input-md"
            {...register("title", { required: "Title is required" })}
          />
          <label htmlFor="descriptoin">Text</label>
          <Controller
            control={control}
            name={"text"}
            rules={{
              required: "Description is required",
            }}
            render={({ field }) => <MarkDownEditor id="text" field={field} />}
          />
          <button className="btn"> Create Node</button>
        </form>
      </dialog>
    </div>
  );
};

export default NodeForm;
