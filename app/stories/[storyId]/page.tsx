"use client";
import BookMark from "@/components/Bookmark";
import Rating from "@/components/Rating";
import DeleteStory from "@/components/story/DeleteStory";
import StoryIntroPreview from "@/components/story/StoryIntroPreview";
import { Button } from "@/components/ui/button";
import useFetchASingleStory from "@/hooks/stories/useFetchASingleStory";
import { useSession } from "@/lib/auth-client";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { TbHierarchy3 } from "react-icons/tb";

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

  if (isLoading)
    return (
      <div className="w-full flex pt-20 justify-center">
        <LoaderCircle className="animate-spin text-slate-500" size={35} />
      </div>
    );
  if (!Story) notFound();

  let firstNodeId = "";

  if (Story?.nodes.length >= 1) {
    firstNodeId = Story.nodes[0].id;
  }
  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-5 py-5">
      <div className=" w-full lg:w-2/3 ">
        <StoryIntroPreview story={Story} firstNodeId={firstNodeId} />
      </div>
      <div className=" lg:w-1/3 flex flex-col gap-5 items-center lg:p-5 ">
        <div className=" flex lg:flex-col lg:items-start items-center justify-between w-full   gap-5">
          {data && (
            <>
              <BookMark
                IsBookMarked={Story.bookmarks.length == 1}
                storyId={Story.id}
                userId={data?.user.id}
              />

              <Link
                href={`/stories/${Story.id}/node-editor/?nodeId=${firstNodeId}`}
                className="w-min"
              >
                <Button className=" w-min">
                  <TbHierarchy3 />
                  <span className="hidden md:block">Node editor</span>
                </Button>
              </Link>
              <Link href={`/stories/${Story.id}/edit`} className=" w-min ">
                <Button className="w-min">
                  <FaRegEdit />
                  <span className="hidden md:block">Edit</span>
                </Button>
              </Link>
              <DeleteStory storyId={Story.id} />
            </>
          )}
        </div>
        <div className=" w-full h-px bg-slate-300"></div>
        <div className=" hidden lg:block">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
