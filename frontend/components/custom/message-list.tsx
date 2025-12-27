"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Star } from "lucide-react";
import Image from "next/image";

export function MessageList() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-8 max-w-5xl mx-auto w-full">
      {/* User Message */}
      <div className="flex justify-end gap-3 sm:gap-4">
        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 sm:p-4 text-xs sm:text-sm max-w-[85%] sm:max-w-[75%] shadow-sm leading-relaxed">
          <p>Find a good sci-fi movie tonight.</p>
        </div>
        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
          <AvatarImage src="https://picsum.photos/seed/user/100/100" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* AI Message - Movie Cards */}
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0 mt-1">
          <span className="text-white font-bold text-xs">AI</span>
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
            Here are some great sci-fi picks for your evening:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              {
                id: 1,
                title: "The Creator",
                rating: "7.2",
                year: "2023",
                color: "bg-zinc-800",
                img: "https://picsum.photos/seed/creator/300/400",
              },
              {
                id: 2,
                title: "Dune: Part Two",
                rating: "8.7",
                year: "2024",
                color: "bg-orange-600",
                img: "https://picsum.photos/seed/dune/300/400",
              },
              {
                id: 3,
                title: "Everything Everywhere All At Once",
                rating: "7.2",
                year: "2022",
                color: "bg-red-600",
                img: "https://picsum.photos/seed/eeaao/300/400",
              },
              {
                id: 4,
                title: "Blade Runner 2049",
                rating: "8.0",
                year: "2017",
                color: "bg-amber-600",
                img: "https://picsum.photos/seed/blade/300/400",
              },
              {
                id: 5,
                title: "Ex Machina",
                rating: "6.9",
                year: "2014",
                color: "bg-purple-600",
                img: "https://picsum.photos/seed/exmachina/300/400",
              },
            ].map((movie) => (
              <div
                key={movie.id}
                className="relative aspect-2/3 sm:aspect-3/4 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md text-xs font-medium text-white z-10">
                  {movie.id}
                </div>
                <Image
                  src={movie.img}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-3 pt-12">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs mb-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="font-medium text-white">
                      {movie.rating}
                    </span>
                    <span className="text-white/60">• {movie.year}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm truncate">
                    {movie.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 rounded-lg"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 rounded-lg"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Try again
            </Button>
          </div>
        </div>
      </div>

      {/* User Message - Follow up */}
      <div className="flex justify-end gap-3 sm:gap-4">
        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 sm:p-4 text-xs sm:text-sm max-w-[85%] sm:max-w-[75%] shadow-sm leading-relaxed">
          <p>
            Thank you and tell me, please. How can I reverse a string in Python?
          </p>
        </div>
        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
          <AvatarImage src="https://picsum.photos/seed/user/100/100" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* AI Message - Code Block */}
      <div className="flex gap-4 pb-4">
        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center shrink-0 mt-1">
          <span className="text-white font-bold text-xs">AI</span>
        </div>
        <div className="flex-1 space-y-4 max-w-3xl">
          <p className="text-sm text-foreground/90">
            No problem! Here&apos;s a simple way to reverse a string in Python:
          </p>
          <div className="bg-zinc-950 rounded-xl overflow-hidden border border-border/50">
            <div className="flex items-center justify-end px-4 py-2 bg-zinc-900/50 border-b border-white/5">
              <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Copy className="w-3.5 h-3.5" />
                Copy code
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-zinc-100">
                  <span className="text-zinc-500">1</span> my_string ={" "}
                  <span className="text-green-400">&quot;hello&quot;</span>
                  {"\n"}
                  <span className="text-zinc-500">2</span> reversed_string =
                  my_string[<span className="text-orange-400">::-1</span>]{"\n"}
                  <span className="text-zinc-500">3</span>{" "}
                  <span className="text-yellow-400">print</span>
                  (reversed_string){" "}
                  <span className="text-zinc-500">
                    # Output: &quot;olleh&quot;
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 rounded-lg"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 rounded-lg"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
