import { Logo } from "@/public/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <section className=" fixed  w-full p-5 z-50">
      <div className=" bg-white p-2 px-10 flex justify-between rounded-full items-center">
        <div className=" flex gap-3 items-center">
          <Image src={Logo} alt="logo" quality={10} className=" w-14" />
          <p className=" text-2xl font-bold">Fable Forge</p>
        </div>
        <div className=" flex gap-3 items-center font-semibold">
          <p>Contact</p>
          <p>About</p>
          <Button className="h-min p-2 px-4 rounded-full">Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
