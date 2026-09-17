"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={cn(
        "glass group relative overflow-hidden rounded-3xl p-6 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
