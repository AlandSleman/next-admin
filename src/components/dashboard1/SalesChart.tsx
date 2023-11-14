"use client";
import { useTheme } from "next-themes";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { themes } from "@/registry/themes";
import { useAppState } from "@/state/appState";

const monthlySalesData = [
  { month: "Jan", sales: 12000, expenses: 8000 },
  { month: "Feb", sales: 19000, expenses: 11000 },
  { month: "Mar", sales: 18000, expenses: 9500 },
  { month: "Apr", sales: 13000, expenses: 8200 },
  { month: "May", sales: 20000, expenses: 11000 },
  { month: "Jun", sales: 22000, expenses: 12000 },
  { month: "Jul", sales: 25000, expenses: 13000 },
  { month: "Aug", sales: 18000, expenses: 9500 },
  { month: "Sep", sales: 21000, expenses: 11000 },
  { month: "Oct", sales: 24000, expenses: 12000 },
  { month: "Nov", sales: 20000, expenses: 10500 },
  { month: "Dec", sales: 28000, expenses: 14000 },
];

export function SalesChart() {
  const { theme: mode } = useTheme();
  const state = useAppState();

  const theme = themes.find((theme) => theme.name === state.theme);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Sales and Expenses</CardTitle>
        <CardDescription>
          Track monthly sales and expenses trends over the past year to identify
          peak months.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={600}
              height={300}
              data={monthlySalesData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <YAxis />
              <Line
                type="monotone"
                dataKey="sales"
                name="Sales"
                stroke={`hsl(${theme?.cssVars[
                  mode === "dark" ? "dark" : "light"
                ].primary})`}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                name="Expenses"
                stroke={`hsl(${theme?.cssVars[
                  mode === "dark" ? "dark" : "light"
                ].primary})`}
                opacity={0.45}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Sales
                            </span>
                            <span className="font-bold">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Expenses
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
