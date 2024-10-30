import prisma from "@/prisma/db";
import React from "react";
import { StoryCard } from "../components";

const BrowseStoriesPage = async () => {
  const stories = await prisma.story.findMany();

  console.log(stories);
  return (
    <div className=" w-full px-16 pt-10 flex gap-5 ">
      <div className=" flex gap-5">
        {stories.map((story) => (
          <StoryCard story={story} />
        ))}
      </div>
    </div>
  );
};

export default BrowseStoriesPage;
