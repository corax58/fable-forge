import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteNode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nodeId: string) => axios.delete("/api/node/" + nodeId),
    mutationKey: ["node"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["node"] });
    },
  });
};
