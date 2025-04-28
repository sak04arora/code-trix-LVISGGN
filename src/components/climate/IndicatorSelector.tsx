
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface IndicatorOption {
  value: string;
  label: string;
  category: string;
}

interface IndicatorSelectorProps {
  indicators: IndicatorOption[];
  value: string;
  onValueChange: (value: string) => void;
}

export function IndicatorSelector({
  indicators,
  value,
  onValueChange,
}: IndicatorSelectorProps) {
  // Group indicators by category
  const groupedIndicators: Record<string, IndicatorOption[]> = {};
  indicators.forEach((indicator) => {
    if (!groupedIndicators[indicator.category]) {
      groupedIndicators[indicator.category] = [];
    }
    groupedIndicators[indicator.category].push(indicator);
  });

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full md:w-[280px]">
        <SelectValue placeholder="Select an indicator" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(groupedIndicators).map((category) => (
          <React.Fragment key={category}>
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              {category}
            </div>
            {groupedIndicators[category].map((indicator) => (
              <SelectItem key={indicator.value} value={indicator.value}>
                {indicator.label}
              </SelectItem>
            ))}
          </React.Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}
