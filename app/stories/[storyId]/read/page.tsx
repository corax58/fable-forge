"use client";
import Spinner from "@/components/Spinner";
import { useFetchNode } from "@/hooks/nodes/useFetchNode";
import { notFound } from "next/navigation";
import React from "react";
import NodeView from "../_components/NodeView";
import { LoaderCircle } from "lucide-react";

const ReadNodesPage = ({
  searchParams: { nodeId },
}: {
  searchParams: { nodeId: string };
}) => {
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
      <NodeView node={Node!} editable={false} />
    </div>
  );
};

export default ReadNodesPage;
