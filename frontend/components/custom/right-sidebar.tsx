"use client";

import * as React from "react";
import {
  Bookmark,
  Gift,
  Wrench,
  CircleDollarSign,
  Flag,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function RightSidebar() {
  return (
    <Sidebar
      side="right"
      collapsible="none"
      className="w-[60px] border-l border-border/50 hidden md:flex flex-col items-center py-4 bg-sidebar h-full"
    >
      <SidebarContent className="flex flex-col items-center gap-4 w-full px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <Bookmark className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <Gift className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <Wrench className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <CircleDollarSign className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <Flag className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto flex flex-col items-center gap-4 px-2 w-full">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <LifeBuoy className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="justify-center rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/70 aspect-square h-10 w-10"
            >
              <HelpCircle className="size-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
