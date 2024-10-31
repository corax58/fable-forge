import { Story } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useUpdateStory = ({ storyId }: { storyId?: string }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Story) => axios.patch("/api/story/" + storyId, data),
    mutationKey: ["story"],
    onSuccess: () => {
      if (storyId) router.push("/stories/" + storyId);
      queryClient.invalidateQueries({ queryKey: ["story"] });
    },
  });
};
