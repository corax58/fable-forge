import prisma from "@/prisma/db";
import React from "react";
import CreateStory from "./CreateStory";
import StoryCard from "@/components/story/StoryCard";

const MyStoriesGrid = async ({ userId }: { userId: string }) => {
  const stories = await prisma.story.findMany({
    where: {
      authorId: userId,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className=" grid  grid-cols-4 gap-5 w-full ">
      <CreateStory />
      {stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default MyStoriesGrid;
