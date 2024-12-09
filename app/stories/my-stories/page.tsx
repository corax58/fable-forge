"use client";
import ErrorMessage from "@/components/ErrorMessage";
import StoryCard from "@/components/story/StoryCard";
import useFetchStories from "@/hooks/stories/useFetchStories";
import CreateStory from "./_components/CreateStory";

const MyStoriesPage = () => {
  const { data: stories, error, isPending } = useFetchStories();
  if (isPending) return <p>Loading...</p>;
  if (error) return <ErrorMessage text="Error please try again" />;
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
