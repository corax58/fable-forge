import { Story } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import noImage from "@/public/image/no_image.jpg";

interface Props {
  story: Story;
}

const StoryCard = ({ story }: Props) => {
  return (
    <Link
      href={`/stories/${story.id}`}
      className=" break-inside-avoid-column  flex    w-80  h-72 shadow-md  p-4 space-y-2 hover:bg-slate-100 hover:scale-105"
    >
      <div className=" ">
        <div className=" w-72 h-48">
          <Image
            width={288}
            height={192}
            src={
              story.imageUrl! ? story.imageUrl! : (noImage as unknown as string)
            }
            alt={"story image"}
            className=" object-cover rounded-xl h-full "
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
