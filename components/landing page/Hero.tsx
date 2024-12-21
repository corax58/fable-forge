import { heroImage } from "@/public/image";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="  w-full items-end relative  ">
      <div className="absolute w-full h-screen z-10 ">
        <div className=" w-full h-full   flex  items-center justify-center">
          <div className=" flex flex-col items-center   gap-5   px-5  pt-40 md:pt-60 ">
            <p className=" ~text-4xl/7xl  font-black text-white ">
              Forge Your Own Adventure
            </p>
            <p className=" ~text-base/4xl md:w-2/3 md:text-center  font-light  text-white">
              Create stories that come to life. Explore worlds crafted by
              others. Every choice is yours to make.
            </p>
            <div className="flex gap-5">
              <Link href="/stories" className="w-min">
                <Button className=" rounded-full bg-white text-black hover:bg-neutral-200 hover:scale-100 group ">
                  <Search className="text-black " />
                  Explore Stories
                </Button>
              </Link>
              <Link className="w-min" href="/sign-in">
                <Button className="rounded-full bg-black text-white hover:bg-neutral-900  ">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  w-full h-full">
        <div className="absolute opacity-60 w-full h-screen  bg-black"></div>
        <Image
          src={heroImage}
          alt="hero section image"
          className=" h-screen w-full object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
