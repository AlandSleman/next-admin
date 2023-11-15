"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useAppState } from "@/state/appState";

const topCountriesData = [
  { index: 1, name: "USA", sales: 50000 },
  { index: 2, name: "China", sales: 44000 },
  { index: 3, name: "Iraq", sales: 35000 },
  { index: 4, name: "France", sales: 30000 },
  { index: 5, name: "Russia", sales: 25000 },
];

export function TopCountriesCard() {
  // const { theme: mode } = useTheme();
  // const state = useAppState();

  // const theme = state.themes.find((t) => t.name === state.theme);

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>A table of top countries and their sales.</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Popularity</TableHead>
              <TableHead>Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topCountriesData.map((country) => (
              <TableRow key={country.index}>
                <TableCell>{country.index}</TableCell>
                <TableCell>{country.name}</TableCell>
                <TableCell>
                  <Progress value={(country.sales / 50000) * 100}  />
                </TableCell>
                <TableCell>{country.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
