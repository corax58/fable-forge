"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import noImage from "@/public/image/no_image.jpg";
import { StoryWithAuthor } from "@/lib/types";
import { Bookmark, BookmarkCheck, BookmarkIcon } from "lucide-react";
import Badge from "../Badge";
import BookMark from "../Bookmark";

interface Props {
  story: StoryWithAuthor;
}

const StoryCard = ({ story }: Props) => {
  console.log(story.status);
  return (
    <div className=" break-inside-avoid-column  flex flex-col w-80 h-max p-4 space-y-2 bg-white  rounded-3xl">
      <Link href={`/stories/${story.id}`} className="">
        <div className=" flex flex-col space-y-3 ">
          <div className=" w-72 h-48">
            <Image
              width={288}
              height={192}
              src={
                story.imageUrl!
                  ? story.imageUrl!
                  : (noImage as unknown as string)
              }
              alt={"story image"}
              className=" object-cover rounded-xl h-full "
            />
          </div>
          <div className=" truncate   ">
            <p className=" text-xl  ">{story.title}</p>
            <p className=" font-light text-base">
              by <span className=" underline ">{story.author.name}</span>
            </p>
          </div>
        </div>
      </Link>
      <div className=" w-full flex justify-between ">
        <Badge status={"jkk"} />
        <BookMark storyId={story.id} />
      </div>
    </div>
  );
};

// type bagdeStatus = "InProgress" | "Completed";

export default StoryCard;
