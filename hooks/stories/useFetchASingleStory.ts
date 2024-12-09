import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const useFetchASingleStory = (storyId: string) => {
  return useQuery({
    queryKey: ["Story", storyId],
    queryFn: () =>
      axiosInstance.get(`/api/story/${storyId}`).then((res) => res.data),
  });
};

export default useFetchASingleStory;
