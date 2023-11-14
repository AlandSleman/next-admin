import OverviewCard from "@/components/Card";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemesSheet } from "@/components/ThemesSheet";
import { CardsMetric } from "@/components/charts/CardMetrics";
import { BalanceBarChart } from "@/components/charts/LineChart";
import { ProductSalesChart } from "@/components/dashboard1/ProductSalesChart";
import { SalesChart } from "@/components/dashboard1/SalesChart";
import { TopCountriesCard } from "@/components/dashboard1/TopCountriesCard";
import { TopProductsPieChart } from "@/components/dashboard1/TopProductsPieChart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-background">
      <Button>My Button</Button>
      <ModeToggle />
      <OverviewCard />
      <ThemesSheet />
      <p>page 1</p>
      <div className="flex gap-6">
        <ProductSalesChart />
        <SalesChart />
        <TopCountriesCard />
      </div>
      <div className="flex gap-6">
        <ProductSalesChart />
        <SalesChart />
        <TopProductsPieChart />
      </div>
      <p>end page1</p>
      <CardsMetric />
      <BalanceBarChart />
    </main>
  );
}
