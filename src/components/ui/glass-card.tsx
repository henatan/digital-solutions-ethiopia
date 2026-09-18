"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "glass group relative overflow-hidden rounded-3xl p-6 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] transition-[box-shadow,transform] duration-300 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)]",
        hover && "hover:-translate-y-1.5 hover:scale-[1.01]",
        className
      )}
    >
      {children}
    </Reveal>
  );
}
