"use client";
import { CircleDollarSign, TrendingUp } from "lucide-react";

import { useTheme } from "next-themes";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { themes } from "@/registry/themes";
import { useAppState } from "@/state/appState";

const data = [
  { month: "Jan", average: 400, target: 240 },
  { month: "Feb", average: 300, target: 139 },
  { month: "Mar", average: 200, target: 480 },
  { month: "Apr", average: 278, target: 390 },
  { month: "May", average: 189, target: 480 },
  { month: "Jun", average: 239, target: 380 },
  { month: "Jul", average: 349, target: 430 },
];

export function SalesCard() {
  const { theme: mode } = useTheme();
  const state = useAppState();

  const theme = themes.find((theme) => theme.name === state.theme);
  return (
    <Card className="w-[600px]">
      <CardContent className="flex p-4 justify-center h-full">
        <div className="flex justify-center h-full flex-col">
          <CircleDollarSign className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
          <span className="text-2xl text-muted-foreground font-bold">
            Sales
          </span>
          <span className="text-4xl font-bold">$ 100,000</span>
          <span className="text-green-500 font-semibold ml-1 flex gap-2">
            Over the last year 21%
            <TrendingUp />
          </span>
        </div>

        <div className="h-[200px] w-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis dataKey="month"/>
              <Tooltip
                cursor={{
                  fill: `hsl(${theme?.cssVars[
                    mode === "dark" ? "dark" : "light"
                  ].accent})`,
                  opacity: 0.5,
                }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="flex flex-col rounded-lg border bg-background p-3 shadow-sm">
                        <span className="font-bold">
                          {payload[0].payload.month}
                        </span>
                        <span className="font-bold">
                          {payload[0].payload.product}
                        </span>
                        <span className="font-bold">
                          Average: {payload[0].value}
                        </span>
                        <span className="font-bold">
                          Target: {payload[0].value}
                        </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="average"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    opacity: 0.25,
                    "--theme-primary": `hsl(${theme?.cssVars[
                      mode === "dark" ? "dark" : "light"
                    ].primary})`,
                  } as React.CSSProperties
                }
              />
              <Line
                type="monotone"
                dataKey="target"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "var(--theme-primary)" },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    "--theme-primary": `hsl(${theme?.cssVars[
                      mode === "dark" ? "dark" : "light"
                    ].primary})`,
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
