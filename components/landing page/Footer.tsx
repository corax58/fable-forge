import { Logo } from "@/public/image";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegram } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className=" w-full  bg-slate-200 flex flex-col justify-center gap-2 pt-10">
      <div className="px-28 flex">
        <div className="w-full">
          <div className=" flex gap-3 items-center">
            <Image src={Logo} alt="logo" quality={10} className=" w-14" />
            <p className=" text-2xl font-bold">Fable Forge</p>
          </div>
        </div>
        <div className=" w-full flex gap-52 ">
          <div>
            <p className=" font-semibold mb-2 text-slate-700">Socials</p>
            <div className=" flex flex-col text-blue-950 underline">
              <Link href={""}>Facebook</Link>
              <Link href={""}>Instagram</Link>
              <Link href={""}>Telegram</Link>
              <Link href={""}>X</Link>
            </div>
          </div>
          <div>
            <p className=" font-semibold mb-2 text-slate-700">Contact</p>
            <div>
              <p>Phone: +25191611588</p>
              <p>Email: Abubekera87@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-400"></div>
      <p className="px-28">© 2024 Abubeker. All rights reserved.</p>
    </div>
  );
};

export default Footer;
