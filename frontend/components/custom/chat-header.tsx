"use client";

import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  PenLine,
  Puzzle,
  Share,
  MessageSquare,
} from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between lg:p-4 md:p-2 p-1 border-b border-border/40 bg-primary/80 rounded-2xl backdrop-blur-md sticky top-0 z-10 w-full">
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex items-center gap-2 p-0 hover:bg-transparent">
          <SidebarTrigger />
        </div>
        <div className="flex items-center gap-2 p-0 hover:bg-transparent">
          <h2 className="text-sm font-medium truncate">
            Find a good sci-fi movie tonight
          </h2>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <PenLine className="w-4 h-4 text-primary cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex h-8 gap-2 border border-primary/30 hover:border-primary/60 hover:bg-primary/20"
        >
          <Share className="w-4 h-4" />
          Share
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-primary/60"
        >
          <Puzzle className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-primary/60"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
