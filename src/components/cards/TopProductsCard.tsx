"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { index: 1, name: "Laptop", sales: 50000 },
  { index: 2, name: "Smartphone", sales: 44000 },
  { index: 3, name: "Headphones", sales: 35000 },
  { index: 4, name: "Tablet", sales: 30000 },
  { index: 5, name: "Smartwatch", sales: 25000 },
];

export function TopProductsCard() {

  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>
          A table of top products and their sales.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Popularity</TableHead>
              <TableHead>Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((country) => (
              <TableRow key={country.index}>
                <TableCell>{country.index}</TableCell>
                <TableCell>{country.name}</TableCell>
                <TableCell>
                  <Progress value={(country.sales / 50000) * 100} />
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
