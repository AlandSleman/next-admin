"use client";
import { useTheme } from "next-themes";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
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

const data = [
  { month: "Jan", sales: 25000, salesPrevYear: 22000 },
  { month: "Feb", sales: 18000, salesPrevYear: 15000 },
  { month: "Mar", sales: 30000, salesPrevYear: 28000 },
  { month: "Apr", sales: 22000, salesPrevYear: 20000 },
  { month: "May", sales: 15000, salesPrevYear: 12000 },
  { month: "Jun", sales: 20000, salesPrevYear: 18000 },
  { month: "Jul", sales: 28000, salesPrevYear: 25000 },
  { month: "Aug", sales: 24000, salesPrevYear: 21000 },
  { month: "Sep", sales: 19000, salesPrevYear: 16000 },
  { month: "Oct", sales: 22000, salesPrevYear: 18000 },
  { month: "Nov", sales: 28000, salesPrevYear: 25000 },
  { month: "Dec", sales: 24000, salesPrevYear: 21000 },
];

export function ProductSalesChart() {
  const { theme: mode } = useTheme();
  const state = useAppState();

  const theme = themes.find((theme) => theme.name === state.theme);

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Monthly Sales</CardTitle>
        <CardDescription>
          Track monthly sales trends over the past year to identify peak months.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <YAxis />
              <XAxis dataKey="month" />
              <Legend />
              <Bar
                dataKey="sales"
                name="This Year"
                fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
                  .primary})`}
              />
              <Bar
                dataKey="salesPrevYear"
                name="Previous Year"
                fill="#7AF3CD" 
              />
              <Tooltip
                cursor={{ fill: `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
                  .accent})`,opacity:0.5 }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    console.log("pp",payload)
                    return (
                      <div className="flex flex-col rounded-lg border bg-background p-3 shadow-sm">
                          <span className="font-bold">
                            {payload[0].payload.month}
                          </span>
                          <span className="font-bold">
                            {payload[0].payload.product}
                          </span>
                          <span className="font-bold">
                            This Year: {payload[0].value}
                          </span>
                          <span className="font-bold">
                            Previous Year: {payload[0].value}
                          </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
