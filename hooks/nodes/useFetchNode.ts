import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchNode = (nodeId: string) => {
  return useQuery({
    queryFn: async () => {
      console.log("client nodeId: ", nodeId);
      return axios.get("/api/node/" + nodeId).then((res) => res.data);
    },
    queryKey: ["node", nodeId],
  });
};
