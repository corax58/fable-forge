"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { User as UserType } from "better-auth";
import { ChevronsUpDown, LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

interface Props {
  sidebarState: "expanded" | "collapsed";
}
const UserCard = ({ sidebarState }: Props) => {
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
              <User user={session.data.user} sidebarState={sidebarState} />
              {sidebarState === "expanded" && (
                <ChevronsUpDown strokeWidth={1} size={20} />
              )}
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
        <Link href="/sign-in">
          <Button variant="outline" className="w-full">
            {sidebarState === "expanded" ? (
              <>
                <LogIn />
                Login
              </>
            ) : (
              <LogIn />
            )}
          </Button>
        </Link>
      )}
    </div>
  );
};

const User = ({
  user,
  sidebarState,
}: {
  user: UserType;
  sidebarState?: string;
}) => {
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
      {(!sidebarState || sidebarState === "expanded") && (
        <div className="flex flex-col items-start">
          <p className="font-medium h-min">{user.name}</p>
          <p className=" font-light text-xs ">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
