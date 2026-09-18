"use client";

import dynamic from "next/dynamic";
import { Users, ShoppingBag, CalendarCheck, DollarSign } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { LazyMount } from "@/components/ui/lazy-mount";
import { Reveal } from "@/components/ui/reveal";

// Recharts is a large dependency — split it into its own chunk and only
// fetch/parse it once this section is about to enter the viewport instead
// of bundling it with the initial page load (big win on mobile).
const DashboardCharts = dynamic(() => import("./dashboard-charts"), {
  ssr: false,
  loading: () => (
    <div className="mt-6 h-[420px] w-full animate-pulse rounded-2xl border border-border-color/60 bg-background/40" />
  ),
});

const stats = [
  { icon: DollarSign, label: "Total Revenue", value: "ETB 312,400", delta: "+22%" },
  { icon: CalendarCheck, label: "Bookings", value: "162", delta: "+14%" },
  { icon: ShoppingBag, label: "Orders", value: "480", delta: "+31%" },
  { icon: Users, label: "New Customers", value: "94", delta: "+9%" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Admin Dashboard Preview"
          title="One dashboard to manage your entire business"
          description="Track sales, manage bookings and menus, and understand your customers — all from a single, elegant control center."
        />

        <Reveal className="glass mt-16 overflow-hidden rounded-[2rem] p-4 shadow-2xl sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color/70 pb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">Business Overview</h3>
              <p className="text-sm text-muted">Bella Vita Restaurant · Last 7 days</p>
            </div>
            <Button variant="secondary" className="!px-4 !py-2 text-xs">
              Export Report
            </Button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border-color/60 bg-background/40 p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon size={16} />
                </span>
                <p className="mt-4 text-xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
                <p className="mt-1 text-xs font-semibold text-emerald-500">
                  {stat.delta} this week
                </p>
              </div>
            ))}
          </div>

          <LazyMount minHeight={420}>
            <DashboardCharts />
          </LazyMount>
        </Reveal>
      </Container>
    </section>
  );
}
