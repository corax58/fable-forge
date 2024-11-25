import { Button } from "@/components/ui/button";
import { FetchedNodes } from "@/lib/types";
import { Node } from "@prisma/client";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  node: FetchedNodes;
}
const NodeView = ({ node }: Props) => {
  return (
    <div>
      <div
        className=" border-2 rounded-xl p-4 flex flex-col space-y-2"
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
        <div className="w-full flex justify-center">
          <Button className=" rounded-full">Add a Node</Button>
        </div>
      </div>
    </div>
  );
};

export default NodeView;
