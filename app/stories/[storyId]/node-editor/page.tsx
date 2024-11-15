import prisma from "@/prisma/db";
import { firstNodeImage } from "@/public/image";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import NodeForm from "./components/NodeForm";

interface Props {
  params: {
    storyId: string;
  };
}

const NodeEditorPage = async ({ params }: Props) => {
  const firstNode = await prisma.node.findFirst({
    where: {
      storyId: params.storyId,
      firstNode: true,
    },
  });

  if (!firstNode)
    return (
      <div className=" w-full  flex ">
        <div className=" flex flex-col w-full items-center  gap-10">
          <Image
            width={300}
            height={150}
            src={firstNodeImage}
            alt="no first node image"
            className=" rounded-lg"
          />
          No first node found, Start by creating the first story point.
          <NodeForm storyId={params.storyId} firstNode></NodeForm>
        </div>
      </div>
    );
  return <div>NodeEditorPage</div>;
};

export default NodeEditorPage;
