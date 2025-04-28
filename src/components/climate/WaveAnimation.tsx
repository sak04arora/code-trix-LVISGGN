
import React from "react";
import { cn } from "@/lib/utils";

interface WaveAnimationProps {
  className?: string;
}

export function WaveAnimation({ className }: WaveAnimationProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center`}
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div
              className="h-[2px] w-full animate-wave bg-gradient-to-r from-transparent via-climate-blue to-transparent"
              style={{
                top: `${10 + i * 20}%`,
                opacity: 1 - i * 0.15,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
