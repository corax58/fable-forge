"use client";
import NoFirstNode from "./components/NoFirstNode";
import NodeWraper from "./components/NodeWraper";

interface Props {
  params: {
    storyId: string;
  };
  searchParams: {
    nodeId: string;
  };
}

const NodeEditorPage = ({ params, searchParams: { nodeId } }: Props) => {
  if (nodeId == "") return <NoFirstNode storyId={params.storyId} />;

  return <NodeWraper nodeId={nodeId} />;
};

export default NodeEditorPage;
