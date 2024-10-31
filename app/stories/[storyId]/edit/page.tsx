import StoryForm from "@/app/my-stories/_components/StoryForm";
import prisma from "@/prisma/db";
import { Story } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    storyId: string;
  };
}

const EditStoryPage = async ({ params }: Props) => {
  const story = await prisma.story.findUnique({
    where: { id: params.storyId },
  });
  if (!story) return notFound();
  return <StoryForm Story={story} />;
};

export default EditStoryPage;
