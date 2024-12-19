import {
  wellcome_image_1,
  wellcome_image_2,
  wellcome_image_3,
} from "@/public/image";
import {
  BookCheck,
  BookUser,
  Library,
  LibraryBig,
  LibraryBigIcon,
  Pointer,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Wellcome = () => {
  return (
    <section className=" h-screen w-full bg-slate-300 flex  items-center">
      <div className=" h-max pl-40  w-full flex">
        <div className=" relative w-[375px] h-[476px] ">
          <div className="absolute left-[40%] ">
            <div className="relative  w-[375px] h-[476px]  ">
              <Image
                src={wellcome_image_3}
                alt="welcome image"
                width={250}
                height={280}
                objectFit="cover"
                className="absolute right-0 border-8 border-white hover:z-10 transition-all  rounded-[36px]"
              />
              <Image
                src={wellcome_image_2}
                alt="welcome image"
                width={250}
                height={280}
                className="absolute bottom-0   left-0 border-8 border-white hover:z-10  transition-all rounded-[36px]"
              />
              <Image
                src={wellcome_image_1}
                alt="welcome image"
                width={250}
                height={280}
                className="absolute  top-[10%] left-[15%] border-8 border-white  hover:z-10  transition-all  rounded-[36px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[476px] pl-[300px] pr-14 flex justify-center flex-col bg-slate-100">
          <div className="w-96 text-justify flex flex-col gap-5 ">
            <p className="  text-sm">
              A World of Infinite Stories at Your Fingertips
            </p>
            <p className=" text-3xl font-black">Welcome to Fable Forge</p>
            <p className="  text-wrap ">
              Step into a world where creativity knows no bounds. Fable Forge is
              an innovative platform for storytellers and adventurers alike,
              enabling you to create and explore interactive stories.
            </p>
            <p className=" text-wrap">
              With every choice you make, a new path unfolds—crafted by you or
              by creators around the globe.
            </p>
            <div className=" h-20 w-full gap-10   flex ">
              <div className=" flex flex-col items-center w-max">
                <div className=" bg-slate-400 p-3 rounded-full size-max">
                  <LibraryBig size={30} />
                </div>
                <p className=" font-semibold pt-2 text-sm">Vast Library</p>
              </div>
              <div className=" flex flex-col items-center w-max">
                <div className=" bg-slate-400 p-3 rounded-full size-max">
                  <Pointer size={30} />
                </div>
                <p className=" font-semibold pt-2 text-sm">
                  Interactive Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
