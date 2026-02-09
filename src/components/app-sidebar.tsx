import * as React from "react";
import { PieChart } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import bgSvg from "@/assets/logo-vertical-coloured-blue.svg";

const data = {
  user: {
    name: "John Doe",
    email: "john@novapioneer.com",
  },

  navItems: [
    {
      name: "My Dashboard",
      url: "/",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuItem className="">
          <div
            className="h-20 bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${bgSvg})`,
            }}
          ></div>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects navItems={data.navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
