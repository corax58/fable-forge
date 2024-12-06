import StoryForm from "@/components/story/StoryForm";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";

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
