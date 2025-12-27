import React from "react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const EmptyState = ({
  title,
  description,
  icon,
  action,
  className,
  iconClassName,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-full p-8 text-center animate-in fade-in-50 zoom-in-95 duration-500",
        className
      )}
    >
      {icon && (
        <div className="relative mb-6 group cursor-default">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div
            className={cn(
              "relative w-24 h-24 bg-secondary/30 backdrop-blur-sm rounded-3xl flex items-center justify-center ring-1 ring-border/50 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-secondary/40 group-hover:shadow-lg dark:shadow-none",
              iconClassName
            )}
          >
            <div className="text-primary/80 group-hover:text-primary transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[320px] space-y-2">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      </div>

      {action && <div className="mt-8">{action}</div>}
    </div>
  );
};

export default EmptyState;
