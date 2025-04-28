
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface IndicatorChartProps {
  title: string;
  data: any[];
  dataKey: string;
  color?: string;
  xAxisDataKey?: string;
  yAxisLabel?: string;
  height?: number;
  className?: string;
}

export function IndicatorChart({
  title,
  data,
  dataKey,
  color = "#0EA5E9",
  xAxisDataKey = "year",
  yAxisLabel,
  height = 300,
  className,
}: IndicatorChartProps) {
  return (
    <Card className={cn("border overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey={xAxisDataKey} 
                tick={{ fill: "rgba(255,255,255,0.6)" }} 
              />
              <YAxis 
                tick={{ fill: "rgba(255,255,255,0.6)" }} 
                label={yAxisLabel ? { 
                  value: yAxisLabel, 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: 'rgba(255,255,255,0.6)' } 
                } : undefined} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(20,20,20,0.9)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white'
                }} 
                labelStyle={{ color: 'white' }}
              />
              <Area 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                fillOpacity={1} 
                fill={`url(#color-${dataKey})`} 
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
