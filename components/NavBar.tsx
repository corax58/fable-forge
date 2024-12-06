"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = useSession();
  console.log(session);
  return (
    <div className="  flex border-b justify-between py-3 px-16 items-center ">
      <div className=" flex space-x-5 items-center ">
        <Link href={"/"} className="text-xl font-semibold">
          Fable Forge
        </Link>
        <div className=" flex space-x-5">
          <Link href={"/my-stories"}>My Stories</Link>
          <Link href={"/stories"}>Browse Stories</Link>
        </div>
      </div>
      {session ? <div>{session.user.name}</div> : <div>Login</div>}
    </div>
  );
};

export default NavBar;
