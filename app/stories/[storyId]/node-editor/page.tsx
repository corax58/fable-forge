"use client";
import { Button } from "@/components/ui/button";
import { useFetchNode } from "@/hooks/nodes/useFetchNode";
import { firstNodeImage } from "@/public/image";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import NodeView from "../_components/NodeView";
import NodeForm from "./components/NodeForm";

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

  if (isLoading)
    return (
      <div className="w-full flex pt-20 justify-center">
        <LoaderCircle className="animate-spin text-slate-500" size={35} />
      </div>
    );
  if (!Node) return notFound();
  return (
    <div>
      <NodeView node={Node!} editable={true} />
    </div>
  );
};

export default NodeEditorPage;
