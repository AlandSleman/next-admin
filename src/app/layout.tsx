import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./themes.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Sidebar } from "@/layout/Sidebar";
import { SiteHeader } from "@/layout/SiteHeader";
import { TailwindIndicator } from "@/components/TailwndIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ThemeWrapper>
            <Sidebar />
            <div className="relative  lg:ml-[240px] flex min-h-screen flex-col">
              <SiteHeader />
              <main className="p-8 bg-muted/50">{children}</main>
            </div>
            <ThemeSwitcher />
            <TailwindIndicator />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
