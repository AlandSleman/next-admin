import { CardsMetric } from "@/components/charts/CardMetrics";
import { BalanceBarChart } from "@/components/charts/LineChart";
import {
  ExpensesCard,
  ProductsCard,
  SalesCard,
  SatisfactionCard,
} from "@/components/dashboard1/Cards";
import { ProductSalesChart } from "@/components/dashboard1/ProductSalesChart";
import { SalesChart } from "@/components/dashboard1/SalesChart";
import { TopCountriesCard } from "@/components/dashboard1/TopCountriesCard";
import { TopProductsPieChart } from "@/components/dashboard1/TopProductsPieChart";

export default function Home() {
  return (
    <main className="bg-background p-4 space-y-2 rounded-lg">
      <div className="flex gap-12">
        <SalesCard />
        <ProductsCard />
        <SatisfactionCard/>
        <ExpensesCard />
      </div>
      <div className="flex gap-6">
        <ProductSalesChart />
        <TopCountriesCard />
      </div>
        <SalesChart />
      <div className="flex gap-6">
        <ProductSalesChart />
        <SalesChart />
      </div>
      <TopProductsPieChart />
      <CardsMetric />
      <BalanceBarChart />
    </main>
  );
}
