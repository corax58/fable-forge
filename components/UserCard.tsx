"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { noImage } from "@/public/image";
import Image from "next/image";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { User as UserType } from "better-auth";
import { Separator } from "./ui/separator";

const UserCard = () => {
  const session = useSession();

  return (
    <div>
      {session.data ? (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-between p-2  h-min  w-full "
            >
              <User user={session.data.user} />
              <ChevronsUpDown strokeWidth={1} size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="flex flex-col gap-2 h-max py-2 "
            side="right"
          >
            <User user={session.data.user} />
            <Separator />
            <Button
              className="flex gap-2 items-center justify-start px-0"
              variant="ghost"
              onClick={() => signOut()}
            >
              <LogOut />
              Logout
            </Button>
            <div></div>
          </PopoverContent>
        </Popover>
      ) : (
        <Button variant="outline" className="w-full">
          <Link href="/sign-in">Login</Link>
        </Button>
      )}
    </div>
  );
};

const User = ({ user }: { user: UserType }) => {
  return (
    <div className="flex gap-2 items-center  ">
      <Image
        src={user.image!}
        alt="user image"
        width={35}
        height={35}
        className=" rounded-md"
        quality={100}
      />
      <div className="flex flex-col items-start">
        <p className="font-medium h-min">{user.name}</p>
        <p className=" font-light text-xs ">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
