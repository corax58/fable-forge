import { Story } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  story: Story;
}

const StoryCard = ({ story }: Props) => {
  return (
    <Link href={`/stories/${story.id}`}>
      <div className=" w-64 h-66  shadow-md  p-4 space-y-2 hover:bg-slate-100 hover:scale-105">
        <div>
          <img
            src={story.imageUrl!}
            alt={"story image"}
            width={300}
            height={200}
            className=" rounded-xl h-full"
          />
        </div>
        <div className=" truncate  ">
          <p className="text-lg  ">{story.title}</p>
          <p className=" font-light text-sm">
            by <span className=" underline ">{"User"}</span>
          </p>
          <div className=" w-full flex justify-end">
            <div>Completed</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
