import axiosInstance from "@/lib/axiosInstance";
import { FetchedStories } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useFetchStories = () => {
  return useQuery<FetchedStories[]>({
    queryKey: ["my stories"],
    queryFn: () =>
      axiosInstance.get("/api/story/myStories").then((res) => res.data),
  });
};

export default useFetchStories;
