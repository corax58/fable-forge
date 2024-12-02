import { Button } from "@/components/ui/button";
import { FetchedNodes } from "@/lib/types";
import { Node } from "@prisma/client";
import React from "react";
import ReactMarkdown from "react-markdown";
import NodeForm from "../node-editor/components/NodeForm";
import NodeNavButton from "./NodeNavButton";
import Link from "next/link";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import DeleteNodeButton from "./DeleteNodeButton";

interface Props {
  node: FetchedNodes;
}
const NodeView = ({ node }: Props) => {
  return (
    <div className="flex w-full h-full gap-2 justify-center">
      <div className="flex justify-center h-96 w-1/6 ">
        <Button disabled={node.firstNode}>
          <Link
            href={`/stories/${node.storyId}/node-editor?nodeId=${node.previousNodeId}`}
          >
            Go Back
          </Link>
        </Button>
      </div>
      <div
        className=" w-2/3 h-full border-2 rounded-xl p-4 flex flex-col space-y-2"
        style={{
          color: node.story.secondaryColor!,
          borderColor: node.story.secondaryColor!,
          backgroundColor: node.story.primaryColor!,
        }}
      >
        <p className=" text-3xl font-bold">{node.title}</p>
        <div
          className=" h-px w-full "
          style={{ backgroundColor: node.story.secondaryColor! }}
        ></div>
        {node.imageLink && (
          <img src={node.imageLink} alt="image" className=" rounded-2xl" />
        )}
        <div
          className=" h-px w-full "
          style={{ backgroundColor: node.story.secondaryColor! }}
        ></div>

        <div
          className=" prose  text-left"
          style={{ color: node.story.secondaryColor! }}
        >
          <ReactMarkdown className={" text-inherit"}>{node.text}</ReactMarkdown>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2">
          {node.nextNodes.map((nextNode) => (
            <div className="flex gap-2 items-center ">
              <DeleteNodeButton nodeId={nextNode.id} />
              <Link
                href={`/stories/${node.storyId}/node-editor?nodeId=${nextNode.id}`}
              >
                <NodeNavButton
                  colors={{
                    primaryColor: node.story.primaryColor!,
                    secondaryColor: node.story.secondaryColor!,
                  }}
                >
                  {nextNode.title}
                </NodeNavButton>
              </Link>
              <NodeForm
                storyId={nextNode.storyId}
                firstNode={false}
                text={"Edit node"}
              >
                <Button className=" rounded-full p-0 hover:scale-110 transition-all size-10 flex justify-center items-center">
                  <FaRegEdit size={50} />
                </Button>
              </NodeForm>
            </div>
          ))}

          <NodeForm
            previousNodeId={node.id}
            storyId={node.storyId}
            firstNode={false}
            text="Add a node"
          >
            <Button className=" rounded-full px-5">Create Node</Button>
          </NodeForm>
        </div>
      </div>
      <div className="h-96 w-1/6"></div>
    </div>
  );
};

export default NodeView;
