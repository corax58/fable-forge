import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Bookmark,
  Notebook,
  LibraryBig,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Logo, noImage } from "@/public/image";
import UserCard from "./UserCard";

// Menu items.
const items = [
  {
    title: "Browse stories",
    url: "/stories",
    icon: LibraryBig,
  },
  {
    title: "My stories",
    url: "/my-stories",
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
          <UserCard />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
