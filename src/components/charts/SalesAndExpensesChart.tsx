"use client";

import {
  ResponsiveContainer,
  AreaChart,
  YAxis,
  Tooltip,
  Legend,
  Area,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export function SalesAndExpensesChart() {
  return (
    <Card className="2xl:w-[800px] w-full">
      <CardHeader>
        <CardTitle>Sales and Expenses</CardTitle>
        <CardDescription>
          Track monthly sales and expenses trends over the past year to identify
          peak months.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              width={600}
              height={300}
              data={monthlySalesData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="expensesColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E33730" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#E33730" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="salesColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis />
              <XAxis dataKey="month" />
              <Area
                type="monotone"
                dataKey="sales"
                name="Sales"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#salesColor)"
              />
              <Area
                type="monotone"
                stroke="#E33730"
                dataKey="expenses"
                fillOpacity={1}
                fill="url(#expensesColor)"
                name="Expenses"
              />
              <Legend />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase text-muted-foreground">
                              Sales
                            </span>
                            <span className="font-bold">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase text-muted-foreground">
                              Expenses
                            </span>
                            <span className="font-bold">
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
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
