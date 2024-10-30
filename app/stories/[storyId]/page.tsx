import { StoryIntroPreview } from "@/app/components";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { TbHierarchy3 } from "react-icons/tb";
import { LiaStarSolid } from "react-icons/lia";
import Rating from "@/app/components/Rating";

interface Props {
  params: {
    storyId: string;
  };
}
const StoryPage = async ({ params }: Props) => {
  const Story = await prisma.story.findUnique({
    where: {
      id: params.storyId,
    },
  });

  if (!Story) notFound();
  return (
    <div className=" flex gap-5 py-5">
      <div className=" w-2/3 ">
        <StoryIntroPreview story={Story} />
      </div>
      <div className=" w-1/3 flex flex-col gap-5 items-center p-5 ">
        <div className=" flex flex-col w-full  gap-5">
          <button className="btn btn-wide text-lg">
            <TbHierarchy3 />
            Node editor
          </button>
          <button className="btn btn-wide text-lg">
            <FaRegEdit />
            Edit
          </button>
          <button className="btn btn-error btn-wide text-lg ">
            <FaTrashAlt />
            Delete
          </button>
        </div>
        <div className=" w-full h-px bg-slate-300"></div>
        <Rating />
      </div>
    </div>
  );
};

export default StoryPage;
