"use client";
import ErrorMessage from "@/components/ErrorMessage";
import StoryCard from "@/components/story/StoryCard";
import useFetchStories from "@/hooks/stories/useFetchStories";
import { LoaderCircle } from "lucide-react";
import CreateStory from "./_components/CreateStory";

const MyStoriesPage = () => {
  const { data: stories, error, isPending } = useFetchStories();
  if (isPending)
    return (
      <div className="w-full flex pt-20 justify-center">
        <LoaderCircle className="animate-spin text-slate-500" size={35} />
      </div>
    );
  if (error) return <ErrorMessage text="Error please try again" />;
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full  ">
      <CreateStory />
      {stories.map((story) => (
        <StoryCard story={story} key={story.id} />
      ))}
    </div>
  );
};

export default MyStoriesPage;
