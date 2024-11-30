import { StoryIntroPreview } from "@/app/components";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { TbHierarchy3 } from "react-icons/tb";
import { LiaStarSolid } from "react-icons/lia";
import Rating from "@/app/components/Rating";
import DeleteStory from "@/app/components/DeleteStory";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    storyId: string;
  };
}
const StoryPage = async ({ params }: Props) => {
  const Story = await prisma.story.findFirst({
    where: {
      id: params.storyId,
    },
    include: {
      nodes: {
        where: {
          firstNode: true,
        },
      },
    },
  });

  if (!Story) notFound();

  let firstNodeId = "";

  if (Story?.nodes.length >= 1) {
    console.log("hello");
    firstNodeId = Story.nodes[0].id;
  }
  console.log("el first node", firstNodeId);
  return (
    <div className=" flex gap-5 py-5">
      <div className=" w-2/3 ">
        <StoryIntroPreview story={Story} />
      </div>
      <div className=" w-1/3 flex flex-col gap-5 items-center p-5 ">
        <div className=" flex flex-col w-full  gap-5">
          <Link
            href={`/stories/${Story.id}/node-editor/?nodeId=${firstNodeId}`}
            className=""
          >
            <Button className=" w-1/2">
              <TbHierarchy3 />
              Node editor
            </Button>
          </Link>
          <Link href={`/stories/${Story.id}/edit`} className=" w-full ">
            <Button className="w-1/2">
              <FaRegEdit />
              Edit
            </Button>
          </Link>
          <DeleteStory storyId={Story.id} />
        </div>
        <div className=" w-full h-px bg-slate-300"></div>
        <Rating />
      </div>
    </div>
  );
};

export default StoryPage;
