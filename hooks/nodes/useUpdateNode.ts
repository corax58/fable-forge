import { Node } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateNode = (nodeId?: string, currentNodeId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Node) => axios.patch("/api/node/" + nodeId, data),
    mutationKey: ["node", nodeId],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["node", currentNodeId] });
    },
  });
};
