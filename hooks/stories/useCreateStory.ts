import axiosInstance from "@/lib/axiosInstance";
import { Story } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateStory = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Story) =>
      axiosInstance.post("/api/story", data, { withCredentials: true }),
    mutationKey: ["story"],
    onSuccess: () => {
      router.push("/stories/my-stories");
      queryClient.invalidateQueries({ queryKey: ["story"] });
    },
  });
};
