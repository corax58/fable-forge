import { Button } from "@/components/ui/button";
import { FetchedNodes } from "@/lib/types";
import { Node } from "@prisma/client";
import React from "react";
import ReactMarkdown from "react-markdown";
import NodeForm from "../node-editor/components/NodeForm";
import NodeNavButton from "./NodeNavButton";
import Link from "next/link";

interface Props {
  node: FetchedNodes;
}
const NodeView = ({ node }: Props) => {
  return (
    <div className="flex w-full h-full gap-2">
      {!node.firstNode && (
        <Link
          href={`/stories/${node.storyId}/node-editor?node=${node.previousNodeId}`}
        >
          <Button>Go Back</Button>
        </Link>
      )}

      <div
        className="w-full h-full border-2 rounded-xl p-4 flex flex-col space-y-2"
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
            <Link
              href={`/stories/${node.storyId}/node-editor?node=${nextNode.id}`}
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
          ))}

          <Button className=" rounded-full w-max ">
            <NodeForm
              previousNodeId={node.id}
              storyId={node.storyId}
              firstNode={false}
              text="Add a node"
            ></NodeForm>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeView;
