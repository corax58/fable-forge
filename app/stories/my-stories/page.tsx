"use client";
import React from "react";
import CreateStory from "./_components/CreateStory";
import prisma from "@/prisma/db";
import StoryCard from "@/components/story/StoryCard";
import { useSession } from "@/lib/auth-client";
import MyStoriesGrid from "./_components/MyStoriesGrid";

const MyStoriesPage = async () => {
  const { data } = useSession();

  return <MyStoriesGrid userId={data?.user.id!} />;
};

export default MyStoriesPage;
