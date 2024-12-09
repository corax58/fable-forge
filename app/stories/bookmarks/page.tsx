"use client";
import useFetchBookmarks from "@/hooks/bookmark/useFetchBookmarks";
import StoryCard from "@/components/story/StoryCard";
import ErrorMessage from "@/components/ErrorMessage";

const BookmarksPage = () => {
  const { data: stories, error, isPending } = useFetchBookmarks();

  if (isPending) return <p>Loading...</p>;

  if (error) return <ErrorMessage text="Error please try again" />;

  return (
    <div className=" grid  grid-cols-4 gap-5 w-full ">
      {stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default BookmarksPage;
