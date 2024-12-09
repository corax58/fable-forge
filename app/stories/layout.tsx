import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { PropsWithChildren } from "react";

const layout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <>
          <div className="bg-neutral-100 w-full">
            <SidebarTrigger />
            <div className="px-10">{children}</div>
          </div>
        </>
      </SidebarProvider>
    </>
  );
};

export default layout;
