import React from "react";
import Image from "next/image";
import { heroImage } from "@/public/image";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="  w-full items-end relative  ">
      <div className="absolute w-full h-screen z-10 ">
        <div className=" flex flex-col  items-center  gap-5 mt-72 ">
          <p className=" text-[90px] font-black text-white ">
            Forge Your Own Adventure
          </p>
          <p className=" text-4xl w-2/3 text-center font-base  text-white">
            Create stories that come to life. Explore worlds crafted by others.
            Every choice is yours to make.
          </p>
          <div className="flex gap-5">
            <Button className=" rounded-full bg-white text-black hover:bg-white group hover:text-base">
              <Search className="text-black " />
              Explore Stories
            </Button>
            <Button className="rounded-full bg-black text-white hover:bg-black  hover:text-base">
              Sign in
            </Button>
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
