import { Node } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useCreateNode = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (data: Node) =>
      axios.post("/api/node", data).then((res) => res.data),
    mutationKey: ["Node"],
    onSuccess: (data) => {
      if (data.node.firstNode) {
        router.push(
          `/stories/${data.node.storyId}/node-editor?nodeId=${data.node.id}`
        );
      }
      queryClient.invalidateQueries({ queryKey: ["node"] });
    },
  });
};
