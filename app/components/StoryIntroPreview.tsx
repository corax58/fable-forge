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
      className=" w-1/2 h-max  p-4"
      style={{ backgroundColor: story.primaryColor! }}
    >
      <div
        className=" border-2 rounded-xl p-4 flex flex-col space-y-2"
        style={{
          color: story.secondaryColor!,
          borderColor: story.secondaryColor!,
        }}
      >
        <p className=" text-2xl font-bold">{story.title}</p>
        <div
          className=" h-px w-full "
          style={{ backgroundColor: story.secondaryColor! }}
        ></div>
        {story.imageUrl && <img src={story.imageUrl} alt="image" />}

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
            className="  border-2 rounded-full p-1 pl-4 space-x-2 flex items-center justify-center w-max h-max"
            style={{
              borderColor: story.secondaryColor!,
              color: story.secondaryColor!,
            }}
          >
            <p className=" font-semibold text-lg">Start</p>
            <div
              className="  rounded-full p-px"
              style={{ backgroundColor: story.secondaryColor! }}
            >
              <GoArrowRight size={20} style={{ color: story.primaryColor! }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryIntroPreview;
