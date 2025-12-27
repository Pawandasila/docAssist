"use client";

import { Button } from "@/components/ui/button";
import {
  Code2,
  Globe,
  GraduationCap,
  Lightbulb,
  Mic,
  Paperclip,
} from "lucide-react";

export function InputBar() {
  return (
    <div className="p-2 sm:p-4 bg-background/95 backdrop-blur-md pb-4 sm:pb-6 sticky bottom-0 z-10 w-full mb-2 sm:mb-6">
      <div className="max-w-4xl mx-auto w-full bg-secondary/30 border border-border/50 rounded-[1.5rem] sm:rounded-3xl p-2 sm:p-3 flex flex-col gap-2 sm:gap-3 shadow-lg transition-all focus-within:shadow-xl focus-within:ring-1 focus-within:ring-ring/20">
        <textarea
          placeholder="Ask anything..."
          className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[24px] px-2 py-1 text-sm sm:text-base outline-none placeholder:text-muted-foreground"
          rows={1}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mask-gradient-right">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full h-8 px-3 gap-2 bg-background/50 hover:bg-background border-border/50 text-xs font-normal"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              Web search
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full h-8 px-3 gap-2 bg-background/50 hover:bg-background border-border/50 text-xs font-normal"
            >
              <GraduationCap className="w-3.5 h-3.5 text-pink-500" />
              Get Advice
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full h-8 px-2 text-xs font-normal text-muted-foreground"
            >
              More
            </Button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground rounded-full"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            <div className="bg-white rounded-full p-1 cursor-pointer hover:opacity-90 transition-opacity">
              <Mic className="w-5 h-5 text-black m-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
