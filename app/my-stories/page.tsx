import React from "react";
import CreateStory from "./_components/CreateStory";
import prisma from "@/prisma/db";
import StoryCard from "@/components/story/StoryCard";

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
