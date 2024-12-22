import Image from "next/image";
import React from "react";
import NodeForm from "./NodeForm";
import { Button } from "@/components/ui/button";
import { firstNodeImage } from "@/public/image";

const NoFirstNode = ({ storyId }: { storyId: string }) => {
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
        <NodeForm storyId={storyId} firstNode text={"Create first Node"}>
          <Button className=" rounded-full px-5">Create Node</Button>
        </NodeForm>
      </div>
    </div>
  );
};

export default NoFirstNode;
