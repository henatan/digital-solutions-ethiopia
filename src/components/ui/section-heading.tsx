"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal
          as="span"
          className="rounded-full border border-border-color bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={0.05}
        className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={0.1}
          className="max-w-2xl text-base text-muted sm:text-lg"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
