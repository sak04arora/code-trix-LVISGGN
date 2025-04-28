
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
