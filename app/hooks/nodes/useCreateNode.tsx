import { Node } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCreateNode = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Node) =>
      axios.post("/api/node", data).then((res) => res.data),
    mutationKey: ["Node"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["node"] });
    },
  });
};
