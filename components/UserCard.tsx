"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { noImage } from "@/public/image";
import Image from "next/image";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const UserCard = () => {
  const session = useSession();
  console.log(session);
  const user = {
    name: "Abubeker",
    image: noImage,
    email: "abubekera87@gmail.com",
  };
  return (
    <div>
      {session.data ? (
        <Popover>
          <PopoverTrigger>
            <div className=" flex items-center gap-2 hover:bg-neutral-200 transition-all rounded-full p-2 pr-4">
              <Image
                src={user.image}
                alt="user image"
                width={45}
                height={45}
                className=" rounded-full"
                quality={100}
              />
              <div className="flex flex-col items-start">
                <p className="font-medium h-min">{session.data.user.name}</p>
                <p className=" font-light text-xs ">
                  {session.data.user.email}
                </p>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <Button onClick={() => signOut()}>Logout</Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Link href="/signin">Login</Link>
      )}
    </div>
  );
};

export default UserCard;
