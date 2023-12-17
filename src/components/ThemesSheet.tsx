"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CheckIcon } from "lucide-react";
import { updateAppState, useAppState } from "@/state/appState";
import { themes } from "@/registry/themes";
import { useTheme } from "next-themes";
import React from "react";

export function ThemesSheet() {
  const appState = useAppState();

  const { resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // React.useEffect(() => {
  //   setMounted(true);
  // }, []);
  // if (!mounted) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Theme</Button>
      </SheetTrigger>
      <SheetContent className="flex-col" bgTransparent side="right">
        <SheetHeader>
          <SheetTitle>Change Theme</SheetTitle>
          <SheetDescription className="text-lg font-bold">Select Theme</SheetDescription>
        </SheetHeader>
        <div className="flex gap-2">
          {["slate", "rose", "blue", "green", "orange"].map((color) => {
            const theme = themes.find((theme) => theme.name === color);
            const isActive = appState.theme === color;

            if (!theme) {
              return null;
            }
            return (
              <div key={color}>
                {color}

                <button
                  onClick={() => updateAppState({ theme: theme.name })}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                    isActive
                      ? "border-[--theme-primary]"
                      : "border-transparent",
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${theme?.activeColor[
                        mode === "dark" ? "dark" : "light"
                      ]})`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]",
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
