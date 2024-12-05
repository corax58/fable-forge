"use client";
import { Spinner } from "@/components";
import { useFetchNode } from "@/hooks/nodes/useFetchNode";
import { notFound } from "next/navigation";
import React from "react";
import NodeView from "../_components/NodeView";

const ReadNodesPage = ({
  searchParams: { nodeId },
}: {
  searchParams: { nodeId: string };
}) => {
  const { data: Node, isLoading, error } = useFetchNode(nodeId);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner />
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
