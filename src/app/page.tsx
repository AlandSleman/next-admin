import { CardsMetric } from "@/components/charts/CardMetrics";
import { BalanceBarChart } from "@/components/charts/LineChart";
import { SalesCard } from "@/components/dashboard1/Cards";
import { SatisfactionCard } from "@/components/dashboard1/SatisfactionCard";
import { ExpensesCard } from "@/components/dashboard1/ExpensesCard";
import { ProductsCard } from "@/components/dashboard1/ProductsCard";
import { ProductSalesChart } from "@/components/dashboard1/ProductSalesChart";
import { SalesChart } from "@/components/dashboard1/SalesChart";
import { TopCountriesCard } from "@/components/dashboard1/TopCountriesCard";
import { TopProductsPieChart } from "@/components/dashboard1/TopProductsPieChart";

export default function Home() {
  return (
    <main className="bg-background p-4 space-y-2 rounded-lg">
      <div className="flex gap-8">
        <SalesCard />
        <ProductsCard />
        <SatisfactionCard />
        <ExpensesCard />
      </div>
      <div className="flex gap-6">
        <ProductSalesChart />
        <TopCountriesCard />
      </div>
      <div className="flex gap-6">
        <SalesChart />
        <TopProductsPieChart />
      </div>
    </main>
  );
}
