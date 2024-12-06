"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { noImage } from "@/public/image";
import Image from "next/image";
import { Button } from "./ui/button";

const UserCard = () => {
  const user = {
    name: "Abubeker",
    image: noImage,
    email: "abubekera87@gmail.com",
  };
  return (
    <div>
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
              <p className="font-medium h-min">{user.name}</p>
              <p className=" font-light text-xs ">{user.email}</p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Button onClick={() => console.log("hello")}>Logout</Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserCard;
