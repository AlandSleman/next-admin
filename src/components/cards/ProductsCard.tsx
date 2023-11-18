"use client";
import { TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProductsCard() {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex p-4 px-8 justify-center h-full flex-col">
        <Users className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
        <span className="text-2xl text-muted-foreground font-bold">
          Customers
        </span>
        <span className="text-4xl font-bold">24,000</span>
        <span className="text-green-500 font-semibold ml-1 flex gap-2">
          Over the last year +2100
          <TrendingUp />
        </span>
      </CardContent>
    </Card>
  );
}
