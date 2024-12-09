'use client'
import prisma from "@/prisma/db";
import StoryCard from "./story/StoryCard";
import { fetchAllStories } from "@/actions/fetchStories";
import { useEffect ,useState} from "react";

const StoriesGrid = async ({ userId }: { userId?: string }) => 
    const [Stories,setStories]=useState()

    {
    useEffect(async()=>{
    const stories = await fetchAllStories();
    setStories(stories)

},)
  return (
    <div className=" grid  grid-cols-4 gap-5 w-full  ">
      {Stories.map((story) => (
        <StoryCard story={story} userId={userId} />
      ))}
    </div>
  );
};

export default StoriesGrid;
