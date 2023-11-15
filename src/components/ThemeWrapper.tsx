"use client";

import { cn } from "@/lib/utils";
import { useAppState } from "@/state/appState";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const appState = useAppState();
  return (
    <div
      className={cn(
        `theme-${defaultTheme || appState.theme}`,
        "w-full h-full",
        className,
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : 0.5}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
