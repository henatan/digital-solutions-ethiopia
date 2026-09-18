import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:opacity-50";

const variants = {
  primary:
    "bg-primary text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_40px_-6px_rgba(37,99,235,0.75)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass text-foreground hover:border-primary/50 hover:-translate-y-0.5",
  ghost:
    "text-foreground/80 hover:text-primary",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
