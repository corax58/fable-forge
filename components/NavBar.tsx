"use client";
import { useSession } from "@/lib/auth-client";
import { Logo } from "@/public/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import UserCard from "./UserCard";

const NavBar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = useSession();
  console.log(session);
  return (
    <div className="  flex border-b justify-between py-3 px-16 items-center ">
      <div className=" w-full flex space-x-5 items-center  ">
        <Link href={"/"} className="text-xl font-semibold flex w-max gap-5">
          <Image src={Logo} alt="logo" width={30} height={30} />
          Fable Forge
        </Link>
        <div className=" flex space-x-5">
          <Link href={"/my-stories"}>My Stories</Link>
          <Link href={"/stories"}>Browse Stories</Link>
          {/* <Link href={"/stories"}>Search</Link> */}
          <Link href={"/stories"}>Bookmarks</Link>
        </div>
        <div className="w-1/2 ">
          <Input className="w-full rounded-full" placeholder="Search" />
        </div>
      </div>
      <div className="">
        {session ? (
          <UserCard></UserCard>
        ) : (
          // <div className="w-max">{session.user.name}</div>
          <div>Login</div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
