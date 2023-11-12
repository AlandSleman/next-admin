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

export function ThemesSheet() {
  const appState = useAppState();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent bgTransparent side="right">
        <SheetHeader>
          <SheetTitle>Change Theme</SheetTitle>
          <SheetDescription>Select Theme</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          {["red", "blue"].map((theme) => {
            const isActive = appState.theme === theme;
            return (
              <div key={theme}>
                {theme}
                <p></p>

                <button
                  onClick={() => updateAppState({ theme:theme })}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                    isActive
                      ? "border-[--theme-primary]"
                      : "border-transparent",
                  )}
                  // style={
                  //   {
                  //     "--theme-primary": `hsl(${theme?.activeColor[
                  //       mode === "dark" ? "dark" : "light"
                  //     ]})`,
                  //   } as React.CSSProperties
                  // }
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]",
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  <span>{theme}</span>
                </button>
              </div>
            );
          })}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}