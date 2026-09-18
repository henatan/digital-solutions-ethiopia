"use client";

import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight, dependency-free "reveal" used instead of framer-motion.
 *
 * IMPORTANT: this used to wait for an IntersectionObserver to add a
 * "visible" class before fading content in. On many mobile browsers
 * (iOS Safari especially, combined with font-loading layout shifts) that
 * observer can fail to ever fire for sections further down the page,
 * leaving them permanently stuck at opacity:0 — which is exactly the bug
 * that made most of the site "disappear" on phones. To guarantee content
 * is always visible and there is zero risk of it silently staying
 * hidden, we now just play a one-time CSS fade-in-up animation on mount
 * (same technique as the hero) instead of depending on scroll position.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction: _direction = "up",
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: ElementType;
  once?: boolean;
  margin?: string;
  [key: string]: unknown;
}) {
  const Tag = as;

  return (
    <Tag
      className={cn("hero-fade-in", className)}
      style={{ animationDelay: delay ? `${delay}s` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
