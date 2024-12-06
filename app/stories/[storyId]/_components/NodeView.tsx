import { Button } from "@/components/ui/button";
import { FetchedNodes } from "@/lib/types";
import Link from "next/link";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import NodeForm from "../node-editor/components/NodeForm";
import DeleteNodeButton from "./DeleteNodeButton";
import NodeNavButton from "./NodeNavButton";

interface Props {
  node: FetchedNodes;
  editable: boolean;
}
const NodeView = ({ node, editable }: Props) => {
  const { nextNodes, story, ...currentNode } = node;
  const backLink = node.firstNode
    ? `/stories/${node.storyId}`
    : editable
    ? `/stories/${node.storyId}/node-editor?nodeId=${node.previousNodeId}`
    : `/stories/${node.storyId}/read?nodeId=${node.previousNodeId}`;

  return (
    <div className="flex w-full h-full gap-2 justify-center">
      {" "}
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
          className="prose !max-w-none w-full h-max "
          style={{ color: node.story.secondaryColor! }}
        >
          <ReactMarkdown className={"w-full"}>{node.text}</ReactMarkdown>
        </div>
        <div className="  h-5 w-full"></div>
        <div className="w-full flex justify-center items-center flex-col gap-2 ">
          {node.nextNodes.map((nextNode) => (
            <div className="flex gap-2 items-center " key={nextNode.id}>
              {editable && (
                <DeleteNodeButton nodeId={nextNode.id}>
                  <Button
                    className="p-2 size-10 rounded-full hover:scale-110 transition-transform"
                    variant={"destructive"}
                  >
                    <FaTrashAlt className=" w-28 font-bold" />
                  </Button>
                </DeleteNodeButton>
              )}
              <Link
                href={
                  editable
                    ? `/stories/${node.storyId}/node-editor?nodeId=${nextNode.id}`
                    : `/stories/${node.storyId}/read?nodeId=${nextNode.id}`
                }
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
              {editable && (
                <NodeForm
                  storyId={nextNode.storyId}
                  firstNode={false}
                  text={"Edit node"}
                  Node={nextNode}
                  currentNodeId={node.id}
                >
                  <Button className=" rounded-full p-0 hover:scale-110 transition-all size-10 flex justify-center items-center">
                    <FaRegEdit size={50} />
                  </Button>
                </NodeForm>
              )}
            </div>
          ))}
          {editable && (
            <NodeForm
              previousNodeId={node.id}
              storyId={node.storyId}
              firstNode={false}
              text="Add a node"
            >
              <Button className=" rounded-full px-5">Create Node</Button>
            </NodeForm>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center h-96 w-max">
        <Button className="w-full">
          <Link href={backLink}>Go Back</Link>
        </Button>
        {editable && (
          <>
            <NodeForm
              storyId={node.storyId}
              firstNode={false}
              text={"Edit node"}
              Node={currentNode}
              currentNodeId={node.id}
            >
              <Button className=" w-48">
                <FaRegEdit />
                Edit this node
              </Button>
            </NodeForm>
            <DeleteNodeButton nodeId={node.id}>
              <Button className=" w-full" variant={"destructive"}>
                <FaTrashAlt className=" w-28 font-bold" />
                <span>Delete this node</span>
              </Button>
            </DeleteNodeButton>
          </>
        )}
      </div>
    </div>
  );
};

export default NodeView;
