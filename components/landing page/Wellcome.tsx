import {
  wellcome_image_1,
  wellcome_image_2,
  wellcome_image_3,
} from "@/public/image";
import { LibraryBig, Pointer } from "lucide-react";
import Image from "next/image";

const Wellcome = () => {
  return (
    <section
      id="about"
      className=" pt-10 md:h-screen w-full bg-slate-200 md:bg-slate-300 flex  items-center"
    >
      <div className=" h-max  xl:pl-40  w-full flex flex-col md:flex-row">
        <div className="   md:relative h-max md:w-[375px] md:h-[476px] ">
          <div className="md:absolute h-max  md:left-[10%] lg:left-[30%] xl:left-[40%] ">
            <div className=" overflow-x-scroll no-scrollbar gap-5 md:relative  flex h-max md:w-[375px] md:h-[476px]  ">
              <Image
                src={wellcome_image_3}
                alt="welcome image"
                width={250}
                height={280}
                objectFit="cover"
                className="md:absolute right-0 border-8 border-white hover:z-10 transition-all  rounded-[36px]"
              />
              <Image
                src={wellcome_image_2}
                alt="welcome image"
                width={250}
                height={280}
                className="md:absolute bottom-0   left-0 border-8 border-white hover:z-10  transition-all rounded-[36px]"
              />
              <Image
                src={wellcome_image_1}
                alt="welcome image"
                width={250}
                height={280}
                className="md:absolute  top-[10%] left-[15%] border-8 border-white  hover:z-10  transition-all  rounded-[36px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[476px] lg:pl-[300px] lg:pr-14 flex items-end lg:items-start justify-center flex-col bg-slate-200">
          <div className="md:w-96 text-justify flex flex-col gap-5 px-5 md:px-10 lg:px-0 ">
            <p className="  text-sm text-slate-700 tracking-tight  font-medium ">
              A World of Infinite Stories at Your Fingertips
            </p>
            <p className=" ~text-xl/3xl font-black">Welcome to Fable Forge</p>
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
