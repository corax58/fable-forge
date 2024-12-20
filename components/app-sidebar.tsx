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
  useSidebar,
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
    url: "/stories/bookmarks",
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
  const { state } = useSidebar();
  console.log(state);
  return (
    <div className=" w-max h-max bg-white">
      <Sidebar className="bg-white" collapsible="icon">
        <SidebarHeader className="bg-white">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={70} height={70} />
            {state == "expanded" && (
              <p className=" text-lg  p-3 font-semibold">Fable Forge</p>
            )}
            {/* <p className=" text-lg  p-3 font-semibold">Fable Forge</p> */}
          </div>
        </SidebarHeader>
        <SidebarContent className="bg-white">
          <SidebarRail />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-gray-100">
                      <a href={item.url}>
                        <item.icon />
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
        <SidebarFooter className="bg-white pb-5">
          <UserCard sidebarState={state} />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
