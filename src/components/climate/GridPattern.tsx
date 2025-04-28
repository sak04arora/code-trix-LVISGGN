
import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 climate-grid-pattern opacity-30",
        className
      )}
      aria-hidden="true"
    />
  );
}
