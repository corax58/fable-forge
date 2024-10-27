import { Story } from "@prisma/client";
import Image from "next/image";
import React from "react";

const StoryCard = () => {
  const story = {
    title: "demo story",
    description: "this is a demo story",
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
    author: "corax",
  };
  return (
    <div className="w-52 h-56 bg-slate-100 shadow-md rounded-2xl p-4 space-y-5">
      <div>
        <img
          src={story.imageUrl}
          alt={"story image"}
          width={300}
          height={200}
          className=" rounded-xl h-full"
        />
      </div>
      <div className=" space-y-2">
        <p className="text-lg">{story.title}</p>
        <p>
          by <span className=" underline">{story.author}</span>
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
