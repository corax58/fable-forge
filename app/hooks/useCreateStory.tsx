import { Story } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useCreateStroy = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: Story) =>
      axios.post("/api/story", data).then((res) => res.data),
    mutationKey: ["story"],
    onSuccess: () => {
      router.push("/my-stories");
    },
  });
};
