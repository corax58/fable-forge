"use client";
import { FetchedStories } from "@/lib/types";
import noImage from "@/public/image/no_image.jpg";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";

interface Props {
  story: FetchedStories;
  userId?: string;
}

const StoryCard = ({ story }: Props) => {
  return (
    <div className=" break-inside-avoid-column  flex flex-col w-full h-max p-4 space-y-2 bg-white  rounded-3xl">
      <Link href={`/stories/${story.id}`} className="">
        <div className=" flex flex-col space-y-3 ">
          <div className=" relative   w-full h-48">
            <Image
              src={
                story.imageUrl!
                  ? story.imageUrl!
                  : (noImage as unknown as string)
              }
              alt="Story Image"
              fill
              objectFit="cover"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="      ">
            <p className=" text-xl  truncate">{story.title}</p>
            <p className=" font-light text-base">
              by <span className=" underline ">{story.author.name}</span>
            </p>
          </div>
          <div className=" w-full flex justify-between ">
            <Badge status={story.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StoryCard;
