import React from "react";
import CreateStory from "./_components/CreateStory";
import { StoryCard } from "../components";
import prisma from "@/prisma/db";

const MyStoriesPage = async () => {
  const stories = await prisma.story.findMany();

  return (
    <div className=" grid  grid-cols-4 gap-5 w-full ">
      <CreateStory />
      {stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default MyStoriesPage;
