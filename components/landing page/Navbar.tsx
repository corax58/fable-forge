"use client";
import { Logo } from "@/public/image";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" fixed  w-full p-5 z-50">
      <div className="md:rounded-full  bg-white p-2 px-5 md:px-10   ">
        <div className={" justify-between  items-center flex "}>
          <div
            className={` flex gap-3 items-center transition-all  ${
              isOpen ? "scale-0" : ""
            }`}
          >
            <Image src={Logo} alt="logo" quality={10} className=" w-14" />
            <p className=" ~text-lg/2xl font-bold">Fable Forge</p>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </div>

          <div className=" hidden  md:flex gap-5 items-center font-semibold">
            <Link href="/#contact">Contact</Link>
            <Link href="/#about">About</Link>
            <Link href="/sign-in">
              <Button className="h-min p-2 px-4 rounded-full">Login</Button>
            </Link>
          </div>
        </div>
        <div
          className={` gap-2 w-full flex flex-col  overflow-hidden items-center transition-all ${
            isOpen ? " h-28" : "h-0"
          }
          `}
        >
          <p>Contact</p>
          <p>About</p>
          <Button className="h-min w-full p-2 px-4 rounded-full">Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
