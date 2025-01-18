import StoryCard from "@/components/story/StoryCard";
import prisma from "@/prisma/db";
import { FetchedStories } from "@/lib/types";


export const dynamic = "force-dynamic";

// Fetch stories from the database
async function fetchStories(): Promise<FetchedStories[]> {
  const Stories = await prisma.story.findMany({
    include: {
      author: true,
      bookmarks: true,
    },
  });

  return Stories;
}

// Server component
const BrowseStoriesPage = async () => {
  const Stories = await fetchStories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
      {Stories.map((story) => (
        <StoryCard story={story} key={story.id} />
      ))}
    </div>
  );
};

export default BrowseStoriesPage;
