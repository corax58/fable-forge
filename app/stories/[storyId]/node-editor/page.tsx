import prisma from "@/prisma/db";
import { firstNodeImage } from "@/public/image";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import NodeForm from "./components/NodeForm";
import NodeView from "../_components/NodeView";
import { notFound } from "next/navigation";

interface Props {
  params: {
    storyId: string;
  };
  searchParams: {
    node: string;
  };
}

const NodeEditorPage = async ({ params, searchParams: { node } }: Props) => {
  if (node == "")
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
          <NodeForm
            storyId={params.storyId}
            firstNode
            text={"Create first Node"}
          ></NodeForm>
        </div>
      </div>
    );

  const Node = await prisma.node.findFirst({
    where: {
      id: node,
    },
    include: {
      nextNodes: true,
      story: {
        select: {
          primaryColor: true,
          secondaryColor: true,
        },
      },
    },
  });
  if (!Node) return notFound();
  return (
    <div>
      <NodeView node={Node!} />
    </div>
  );
};

export default NodeEditorPage;
