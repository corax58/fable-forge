import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchNode = (nodeId: string, isFirstNode: boolean) => {
  return useQuery({
    queryKey: ["node", nodeId],
    queryFn: () =>
      axios
        .post(`/api/nodes/${nodeId}`, { isFirstNode })
        .then((res) => res.data),
  });
};
