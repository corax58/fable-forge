"use client";
import prisma from "@/prisma/db";
import { firstNodeImage } from "@/public/image";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import NodeForm from "./components/NodeForm";
import NodeView from "../_components/NodeView";
import { notFound } from "next/navigation";
import { useFetchNode } from "@/app/hooks/nodes/useFetchNode";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Spinner } from "@/app/components";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    storyId: string;
  };
  searchParams: {
    nodeId: string;
  };
}

const NodeEditorPage = ({ params, searchParams: { nodeId } }: Props) => {
  if (nodeId == "")
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
          >
            <Button className=" rounded-full px-5">Create Node</Button>
          </NodeForm>
        </div>
      </div>
    );

  const { data: Node, isLoading, error } = useFetchNode(nodeId);

  console.log("the node", Node);
  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  if (!Node) return notFound();
  return (
    <div>
      <NodeView node={Node!} />
    </div>
  );
};

export default NodeEditorPage;
