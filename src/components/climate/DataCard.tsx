
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title: string;
  value: string | number;
  metric?: string;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  icon?: React.ReactNode;
  color?: "blue" | "green" | "red" | "orange" | "purple";
  className?: string;
}

export function DataCard({
  title,
  value,
  metric,
  change,
  icon,
  color = "blue",
  className,
}: DataCardProps) {
  const colorClasses = {
    blue: "border-climate-blue/20 bg-climate-blue/10",
    green: "border-climate-green/20 bg-climate-green/10",
    red: "border-climate-red/20 bg-climate-red/10",
    orange: "border-climate-orange/20 bg-climate-orange/10",
    purple: "border-climate-purple/20 bg-climate-purple/10",
  };

  const colorText = {
    blue: "text-climate-blue",
    green: "text-climate-green",
    red: "text-climate-red",
    orange: "text-climate-orange",
    purple: "text-climate-purple",
  };

  return (
    <Card className={cn("border overflow-hidden", colorClasses[color], className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          {title}
          {icon && <span className={cn("p-1.5 rounded-full bg-background/50", colorText[color])}>{icon}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {metric && <span className="ml-1 text-sm font-normal text-muted-foreground">{metric}</span>}
        </div>
      </CardContent>
      {change && (
        <CardFooter className="pt-0">
          <div 
            className={cn(
              "text-xs font-medium",
              change.trend === "up" 
                ? change.value > 0 ? "text-climate-red" : "text-climate-green"
                : change.value > 0 ? "text-climate-green" : "text-climate-red"
            )}
          >
            {change.value > 0 ? "+" : ""}
            {change.value}% from previous
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
