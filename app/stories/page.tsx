import StoryCard from "@/components/story/StoryCard";
import { FetchedStories } from "@/lib/types";
import prisma from "@/prisma/db";

export async function getServerSideProps() {
  const Stories = await prisma.story.findMany({
    include: {
      author: true,
      bookmarks: true,
    },
  });

  return {
    props: { Stories },
  };
}

const BrowseStoriesPage = ({ Stories }: { Stories: FetchedStories[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
      {Stories.map((story) => (
        <StoryCard story={story} key={story.id} />
      ))}
    </div>
  );
};

export default BrowseStoriesPage;
