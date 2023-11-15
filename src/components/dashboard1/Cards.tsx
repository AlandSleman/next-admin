"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CircleDollarSign,
  Package,
  TrendingUp,
  TrendingDown,
  Users,
  Meh,
  SmilePlus,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useAppState } from "@/state/appState";
import { themes } from "@/registry/themes";

export function SalesCard() {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex p-4 px-8 justify-center h-full flex-col">
        <CircleDollarSign className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
        <span className="text-2xl text-muted-foreground font-bold">Sales</span>
        <span className="text-4xl font-bold">$ 100,000</span>
        <span className="text-green-500 font-semibold ml-1 flex gap-2">
          Over the last year 21%
          <TrendingUp />
        </span>
      </CardContent>
    </Card>
  );
}

export function ExpensesCard() {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex p-4 px-8 justify-center h-full flex-col">
        <Meh className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
        <span className="text-2xl text-muted-foreground font-bold">Complaints</span>
        <span className="text-4xl font-bold">15,000</span>
        <span className="text-red-500 font-semibold ml-1 flex gap-2">
          Over the last year 21%
          <TrendingDown />
        </span>
      </CardContent>
    </Card>
  );
}
export function SatisfactionCard() {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex p-4 px-8 justify-center h-full flex-col">
        <SmilePlus className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
        <span className="text-2xl text-muted-foreground font-bold">C.Satisfaction</span>
        <span className="text-4xl font-bold">15,000</span>
        <span className="text-green-500 font-semibold ml-1 flex gap-2">
          Over the last year +2100
          <TrendingUp />
        </span>
      </CardContent>
    </Card>
  );
}

export function ProductsCard() {
  return (
    <Card className="w-[300px]">
      <CardContent className="flex p-4 px-8 justify-center h-full flex-col">
        <Users className="w-16 text-primary h-16 bg-primary/20 rounded-full p-2" />
        <span className="text-2xl text-muted-foreground font-bold">Customers</span>
        <span className="text-4xl font-bold">24,000</span>
        <span className="text-green-500 font-semibold ml-1 flex gap-2">
          Over the last year +2100
          <TrendingUp />
        </span>
      </CardContent>
    </Card>
  );
}
