import { Story } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useDeleteStory = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (storyId: string) => axios.delete("/api/story/" + storyId),
    mutationKey: ["story"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["story"] });
      router.push("/stories/my-stories");
    },
  });
};
