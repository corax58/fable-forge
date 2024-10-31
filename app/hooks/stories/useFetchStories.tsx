import prisma from "@/prisma/db";
import { useQuery } from "@tanstack/react-query";

const useFetchStories = () => {
  return useQuery({
    queryKey: ["stories"],
    queryFn: () => prisma.story.findMany().then((res) => res),
  });
};

export default useFetchStories;
