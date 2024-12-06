import StoryCard from "@/components/story/StoryCard";
import prisma from "@/prisma/db";

const BrowseStoriesPage = async () => {
  const Stories = await prisma.story.findMany();

  return (
    <div className=" grid  grid-cols-4 gap-5 w-full ">
      {Stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default BrowseStoriesPage;
