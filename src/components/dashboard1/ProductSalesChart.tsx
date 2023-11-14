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
  { product: "Electronics", sales: 25000, salesPrevYear: 22000 },
  { product: "Clothing", sales: 18000, salesPrevYear: 15000 },
  { product: "Home Goods", sales: 30000, salesPrevYear: 28000 },
  { product: "Sports Equipment", sales: 22000, salesPrevYear: 20000 },
  { product: "Books", sales: 15000, salesPrevYear: 12000 },
  { product: "Toys", sales: 20000, salesPrevYear: 18000 },
  { product: "Furniture", sales: 28000, salesPrevYear: 25000 },
  { product: "Kitchen Appliances", sales: 24000, salesPrevYear: 21000 },
  { product: "Beauty Products", sales: 19000, salesPrevYear: 16000 },
];

export function ProductSalesChart() {
  const { theme: mode } = useTheme();
  const state = useAppState();

  const theme = themes.find((theme) => theme.name === state.theme);

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Product Sales</CardTitle>
        <CardDescription>
          Track monthly sales and expenses trends over the past year to identify
          peak months.
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
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <YAxis />
              {/* <Legend /> */}
              <Bar
                dataKey="salesPrevYear"
                fill={`hsla(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
                  .primary})`}
                opacity={0.7}
              />
              <Bar
                dataKey="sales"
                fill={`hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"]
                  .primary})`}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className=" flex flex-col rounded-lg border bg-background p-2 shadow-sm">
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
