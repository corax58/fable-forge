import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useDeleteNode = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (nodeId: string) =>
      axios.delete("/api/node/" + nodeId).then((res) => res.data),
    mutationKey: ["node"],
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["node"] });
      if (data.node.firstNode) {
        router.push(`/stories/${data.node.storyId}/node-editor?nodeId=`);
      } else {
        router.push(
          `/stories/${data.node.storyId}/node-editor?nodeId=${data.node.previousNodeId}`
        );
      }
    },
  });
};
