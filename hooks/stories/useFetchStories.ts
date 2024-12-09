import axiosInstance from "@/lib/axiosInstance";
import { StoryWithAuthor } from "@/lib/types";
import prisma from "@/prisma/db";
import { useQuery } from "@tanstack/react-query";

const useFetchStories = () => {
  return useQuery<StoryWithAuthor[]>({
    queryKey: ["my stories"],
    queryFn: () =>
      axiosInstance.get("/story/myStories").then((res) => res.data),
  });
};

export default useFetchStories;
