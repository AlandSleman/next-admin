"use client";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { product: "Electronics", sales: 25000 },
  { product: "Clothing", sales: 18000 },
  { product: "Home Goods", sales: 30000 },
  { product: "Sports Equipment", sales: 22000 },
  { product: "Books", sales: 15000 },
  { product: "Toys", sales: 20000 },
  { product: "Furniture", sales: 28000 },
  { product: "Kitchen Appliances", sales: 24000 },
  { product: "Beauty Products", sales: 19000 },
];

const sortedData = [...data].sort((a, b) => b.sales - a.sales);

const topProductsData = sortedData.slice(0, 5);

const colors = ["#FF6B6B", "#E768D1", "#72C94C", "#118AB2", "#EF8340"];

export function TopCategoriesPieChart() {
  return (
    <Card className="2xl:w-[800px] w-full">
      <CardHeader>
        <CardTitle>Top Categories</CardTitle>
        <CardDescription>
          Illustrating the top 5 categories with a Pie chart.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="99%" height="100%">
            <PieChart>
              <Pie
                data={topProductsData}
                dataKey="sales"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                label={(entry) => entry.product}
                className="font-bold"
              >
                <LabelList
                  dataKey="sales"
                  position="left"
                  className="text-sm font-normal"
                />
                {topProductsData.map((entry, index) => (
                  <Cell key={entry.product} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex flex-col">
                          <span className="font-bold text-muted-foreground">
                            {payload[0].payload.product}
                          </span>
                          <span className="font-bold">
                            Sales: {payload[0].value}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                formatter={(_, entry) => (
                  // @ts-ignore
                  <span className="font-bold">{entry?.payload?.product}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
