import React from "react";
import CreateStory from "./_components/CreateStory";
import { StoryCard } from "../components";

const MyStoriesPage = () => {
  return (
    <div className=" w-full px-16 pt-10 flex gap-5 ">
      <CreateStory />
      <StoryCard />
    </div>
  );
};

export default MyStoriesPage;
