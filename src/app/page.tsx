import OverviewCard from "@/components/Card";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemesSheet } from "@/components/ThemesSheet";
import { CardsMetric } from "@/components/charts/CardMetrics";
import { BalanceBarChart } from "@/components/charts/LineChart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-background">
      <Button>My Button</Button>
      <ModeToggle />
      <OverviewCard />
      <ThemesSheet />
      <CardsMetric/>
      <BalanceBarChart/>
    </main>
  );
}
