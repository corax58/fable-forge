import { GoPlus } from "react-icons/go";
import Link from "next/link";

const CreateStory = () => {
  return (
    <Link
      href={"/my-stories/new"}
      className=" group transition-all  w-64 h-66 space-y-4  border-dashed border-2 bg-gray-200  border-black  flex items-center flex-col justify-center"
    >
      <div className=" bg-slate-300 transition-all  rounded-full">
        <GoPlus size={70} />
      </div>
      <p>New Story</p>
    </Link>
  );
};

export default CreateStory;
