"use client";
import { Bookmark, LibraryBig, Notebook, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "@/public/image";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UserCard from "./UserCard";
import classnames from "classnames";
// Menu items.
const items = [
  {
    title: "Browse stories",
    url: "/stories",
    icon: LibraryBig,
  },
  {
    title: "My stories",
    url: "/stories/my-stories",
    icon: Notebook,
  },
  {
    title: "Bookmarks",
    url: "#",
    icon: Bookmark,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();
  const path = currentPath.split("/");
  console.log(path);
  return (
    <div className=" w-max h-max bg-white">
      <Sidebar className="">
        <SidebarHeader className="">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={70} height={70} />
            <p className=" text-lg  p-3 font-semibold">Fable Forge</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarRail />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon size={64} />
                        <span className="font-medium text-base">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="pb-5">
          {}
          <UserCard />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
