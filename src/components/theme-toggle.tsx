"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-full" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border-color bg-surface/60 text-foreground transition-colors hover:border-primary/50"
    >
      <span key={isDark ? "moon" : "sun"} className="hero-fade-in inline-flex" style={{ animationDuration: "0.3s" }}>
        {isDark ? <Moon size={17} /> : <Sun size={17} />}
      </span>
    </button>
  );
}
