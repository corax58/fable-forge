"use client";
import StoryIntroPreview from "@/components/story/StoryIntroPreview";
import DeleteStory from "@/components/story/DeleteStory";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { TbHierarchy3 } from "react-icons/tb";
import useFetchASingleStory from "@/hooks/stories/useFetchASingleStory";
import BookMark from "@/components/Bookmark";
import { useSession } from "@/lib/auth-client";

interface Props {
  params: {
    storyId: string;
  };
}
const StoryPage = ({ params }: Props) => {
  const {
    data: Story,
    error,
    isLoading,
  } = useFetchASingleStory(params.storyId);
  const { data } = useSession();

  if (isLoading) return <p>Is Loading</p>;
  if (!Story) notFound();

  console.log(Story);

  let firstNodeId = "";

  if (Story?.nodes.length >= 1) {
    firstNodeId = Story.nodes[0].id;
  }
  return (
    <div className=" flex gap-5 py-5">
      <div className=" w-2/3 ">
        <StoryIntroPreview story={Story} firstNodeId={firstNodeId} />
      </div>
      <div className=" w-1/3 flex flex-col gap-5 items-center p-5 ">
        <div className=" flex flex-col w-full  gap-5">
          {data && (
            <>
              <BookMark
                IsBookMarked={Story.bookmarks.length == 1}
                storyId={Story.id}
                userId={data?.user.id}
              />

              <Link
                href={`/stories/${Story.id}/node-editor/?nodeId=${firstNodeId}`}
                className=""
              >
                <Button className=" w-1/2">
                  <TbHierarchy3 />
                  Node editor
                </Button>
              </Link>
              <Link href={`/stories/${Story.id}/edit`} className=" w-full ">
                <Button className="w-1/2">
                  <FaRegEdit />
                  Edit
                </Button>
              </Link>
              <DeleteStory storyId={Story.id} />
            </>
          )}
        </div>
        <div className=" w-full h-px bg-slate-300"></div>
        <Rating />
      </div>
    </div>
  );
};

export default StoryPage;
