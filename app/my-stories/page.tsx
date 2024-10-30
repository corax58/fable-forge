import React from "react";
import CreateStory from "./_components/CreateStory";
import { StoryCard } from "../components";
import prisma from "@/prisma/db";

const MyStoriesPage = async () => {
  const stories = await prisma.story.findMany();

  console.log(stories);
  return (
    <div className=" w-full px-16 pt-10 flex gap-5 ">
      <CreateStory />
      <div>
        {stories.map((story) => (
          <StoryCard story={story} />
        ))}
      </div>
    </div>
  );
};

export default MyStoriesPage;
