import { SalesCard } from "@/components/cards/SalesCard";
import { SatisfactionCard } from "@/components/cards/SatisfactionCard";
import { ExpensesCard } from "@/components/cards/ExpensesCard";
import { ProductsCard } from "@/components/cards/ProductsCard";
import { MonthlySalesChart } from "@/components/charts/ProductSalesChart";
import { SalesAndExpensesChart } from "@/components/charts/SalesAndExpensesChart";
import { TopProductsCard } from "@/components/cards/TopProductsCard";
import { TopCategoriesPieChart } from "@/components/charts/TopCategoriesPieChart";

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
        <MonthlySalesChart />
        <TopProductsCard />
      </div>
      <div className="flex gap-6">
        <SalesAndExpensesChart />
        <TopCategoriesPieChart />
      </div>
    </main>
  );
}
