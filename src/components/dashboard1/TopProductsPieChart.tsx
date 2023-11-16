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

const colors = ["#FF6B6B", "#E768D1", "green", "#118AB2", "#EF8340"];

export function TopProductsPieChart() {
  const topProducts = [
    "Electronics",
    "Home Goods",
    "Furniture",
    "Clothing",
    "Toys",
  ];

  const topProductsData = data.filter((entry) =>
    topProducts.includes(entry.product),
  );

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Top Categories</CardTitle>
        <CardDescription>
          Illustrating the top 5 categories with a Pie chart.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
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
              <Tooltip />
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
