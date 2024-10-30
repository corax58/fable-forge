import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" flex border-b justify-between py-3 px-16 items-center ">
      <div className=" flex space-x-5 items-center ">
        <Link href={"/"} className="text-xl font-semibold">
          Fable Forge
        </Link>
        <div className=" flex space-x-5">
          <Link href={"/my-stories"}>My Stories</Link>
          <Link href={"/stories"}>Browse Stories</Link>
        </div>
      </div>
      <div>Login</div>
    </div>
  );
};

export default NavBar;
