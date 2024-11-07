"use client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDeleteStory } from "../hooks/stories/useDeleteStory";

interface Props {
  storyId: string;
}
const DeleteStory = ({ storyId }: Props) => {
  const deleteStory = useDeleteStory();
  return (
    <>
      <button
        className="btn btn-error btn-wide text-lg "
        onClick={() => {
          let myModal: any = document.getElementById("my_modal_2");
          myModal.showModal();
        }}
      >
        <FaTrashAlt />
        Delete
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm deletion</h3>
          <p className="py-4">
            Are you sure you want to delete this story? This action can not be
            undone.
          </p>
          <div className=" flex gap-3">
            <button
              className="btn"
              onClick={() => {
                let myModal: any = document.getElementById("my_modal_2");
                myModal.close();
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-error"
              onClick={() => deleteStory.mutate(storyId)}
            >
              Delete Story
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteStory;
