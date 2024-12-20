import axiosInstance from "@/lib/axiosInstance";
import { FetchedStories } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useFetchBookmarks = () => {
  return useQuery<FetchedStories[]>({
    queryKey: ["my bookmarks"],
    queryFn: () => axiosInstance.get("/api/bookmarks").then((res) => res.data),
  });
};

export default useFetchBookmarks;
