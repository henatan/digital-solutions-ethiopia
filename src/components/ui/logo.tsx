import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="text-[0.95rem] font-extrabold tracking-tight text-foreground sm:text-base">
        Digital <span className="font-light text-foreground/80">Solutions</span>
      </span>
      <span
        className="-mt-0.5 gradient-text text-lg font-bold italic tracking-wide sm:text-xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Ethiopia
      </span>
    </span>
  );
}
