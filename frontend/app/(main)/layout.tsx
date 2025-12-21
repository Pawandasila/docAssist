import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";
import { RightSidebar } from "@/components/custom/right-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <AppSidebar />
      <main className="flex-1 h-full overflow-y-auto custom-scrollbar w-full p-4">
        {children}
      </main>
      <RightSidebar />
    </SidebarProvider>
  );
}
