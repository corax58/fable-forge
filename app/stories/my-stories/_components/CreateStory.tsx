import { GoPlus } from "react-icons/go";
import Link from "next/link";

const CreateStory = () => {
  return (
    <Link
      href={"/stories/my-stories/new"}
      className="group transition-colors w-full  h-64 md:h-full rounded-3xl flex gap-2 flex-col justify-center items-center bg-slate-200 hover:bg-slate-300 border-2 border-black border-dashed"
    >
      <div className=" bg-slate-300 group-hover:bg-slate-200  transition-all  rounded-full">
        <GoPlus size={70} />
      </div>
      <p className=" font-semibold text-lg">New Story</p>
    </Link>
  );
};

export default CreateStory;
