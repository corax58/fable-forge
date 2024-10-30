import { Story } from "@prisma/client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

interface Props {
  story: Story;
}

const StoryIntroPreview = ({ story }: Props) => {
  const imglink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/269px-Felis_catus-cat_on_snow.jpg";

  const desc = "# hlllo\n1. hiiilkjlak";

  return (
    <div
      className=" border-2 rounded-xl p-4 flex flex-col space-y-2"
      style={{
        color: story.secondaryColor!,
        borderColor: story.secondaryColor!,
        backgroundColor: story.primaryColor!,
      }}
    >
      <p className=" text-3xl font-bold">{story.title}</p>
      <div
        className=" h-px w-full "
        style={{ backgroundColor: story.secondaryColor! }}
      ></div>
      {story.imageUrl && (
        <img src={story.imageUrl} alt="image" className=" rounded-2xl" />
      )}

      <div
        className=" h-px w-full "
        style={{ backgroundColor: story.secondaryColor! }}
      ></div>
      <div
        className=" prose  text-left"
        style={{ color: story.secondaryColor! }}
      >
        <ReactMarkdown className={" text-inherit"}>
          {story.description}
        </ReactMarkdown>
      </div>
      <div className="w-full flex justify-center">
        <button
          className=" hover:scale-105 hover:shadow-md  border-2 rounded-full p-2  pl-4 space-x-2 flex items-center justify-center w-max h-max"
          style={{
            borderColor: story.secondaryColor!,
            color: story.secondaryColor!,
          }}
        >
          <p className=" font-semibold text-2xl">Start</p>
          <div
            className="  rounded-full p-px"
            style={{ backgroundColor: story.secondaryColor! }}
          >
            <GoArrowRight
              size={30}
              className=" w-full h-full"
              style={{ color: story.primaryColor! }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default StoryIntroPreview;
