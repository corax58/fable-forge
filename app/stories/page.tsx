import prisma from "@/prisma/db";
import React from "react";
import { ErrorMessage, StoryCard } from "../components";
import useFetchStories from "../hooks/stories/useFetchStories";

const BrowseStoriesPage = async () => {
  const Stories = await prisma.story.findMany();

  // console.log(stories);

  // if (isLoading)
  //   return (
  //     <div className=" w-full h-full flex justify-center items-center">
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // if (isError)
  //   return <ErrorMessage text="Something happened please reload the page." />;
  return (
    <div className=" grid  grid-cols-4 gap-5 w-full ">
      {Stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default BrowseStoriesPage;
