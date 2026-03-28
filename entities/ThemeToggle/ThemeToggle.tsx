"use client";

import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { cn } from "@/shared/utils";

type Theme = "dark" | "light";
type TProps = { defaultTheme?: Theme };

export const ThemeToggle = ({ defaultTheme }: TProps) => {
  const [pending, startTransition] = React.useTransition();
  const [theme, setTheme] = React.useState<Theme>(defaultTheme || "dark");

  const applyTheme = (next: Theme) => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");
    if (next === "dark") root.classList.add("dark");

    setTheme(next);

    startTransition(async () => {
      try {
        await fetch("/api/theme", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ theme: next }),
        });
      } catch {}
    });
  };

  const toggle = () => applyTheme(theme === "dark" ? "light" : "dark");

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={cn(
        "relative inline-flex h-8 w-18 items-center rounded-full p-1",

        "bg-background border border-border/70 shadow-inner",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2",
        "ring-offset-background",
        "motion-reduce:transition-none",
        pending && "opacity-80",
        isDark && "  border-border/50",
      )}
    >
      <span className="pointer-events-none absolute inset-1 flex items-center justify-between px-1.5">
        <Moon
          className={cn(
            "size-4 transition-opacity duration-300",
            isDark ? "opacity-0 text-header-fg/80" : "opacity-70 text-header-fg/80",
          )}
        />
        <Sun
          className={cn(
            "size-4 transition-opacity duration-300",
            isDark ? "opacity-70 text-header-fg/80" : "opacity-0 text-header-fg/80",
          )}
        />
      </span>

      <span
        className={cn(
          "absolute left-1 top-0.75 grid h-6 w-6 place-items-center rounded-full",
          "bg-foreground text-background shadow-sm",
          "border border-border/60",
          "transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] will-change-transform",
          isDark ? "-translate-x-px bg-chip-icon/60 text-foreground" : "translate-x-9.75",
        )}
        aria-hidden="true"
      >
        <Moon
          className={cn(
            "absolute size-4 transition-all duration-300",
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-90",
          )}
        />
        <Sun
          className={cn(
            "absolute size-4 transition-all duration-300",
            isDark ? "opacity-0 scale-90" : "opacity-100 scale-100",
          )}
        />
      </span>
    </button>
  );
};
