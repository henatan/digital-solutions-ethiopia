"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, ShoppingBag, CalendarCheck, DollarSign } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const salesData = [
  { day: "Mon", sales: 3200 },
  { day: "Tue", sales: 4100 },
  { day: "Wed", sales: 3800 },
  { day: "Thu", sales: 5200 },
  { day: "Fri", sales: 6900 },
  { day: "Sat", sales: 8400 },
  { day: "Sun", sales: 7100 },
];

const bookingsData = [
  { day: "Mon", bookings: 12 },
  { day: "Tue", bookings: 18 },
  { day: "Wed", bookings: 15 },
  { day: "Thu", bookings: 22 },
  { day: "Fri", bookings: 30 },
  { day: "Sat", bookings: 38 },
  { day: "Sun", bookings: 27 },
];

const customerSplit = [
  { name: "New", value: 62, color: "#2563EB" },
  { name: "Returning", value: 38, color: "#06B6D4" },
];

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass mt-16 overflow-hidden rounded-[2rem] p-4 shadow-2xl sm:p-8"
        >
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

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-border-color/60 bg-background/40 p-5 lg:col-span-2">
              <p className="text-sm font-semibold text-foreground">Sales Report</p>
              <div className="mt-4 h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stroke="#2563EB"
                      strokeWidth={2}
                      fill="url(#salesGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border-color/60 bg-background/40 p-5">
              <p className="text-sm font-semibold text-foreground">Customer Insights</p>
              <div className="mt-2 flex h-56 w-full items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={customerSplit}
                      dataKey="value"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={4}
                    >
                      {customerSplit.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-color)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 flex items-center justify-center gap-4 text-xs">
                {customerSplit.map((c) => (
                  <span key={c.name} className="flex items-center gap-1.5 text-muted">
                    <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                    {c.name} {c.value}%
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-border-color/60 bg-background/40 p-5">
            <p className="text-sm font-semibold text-foreground">Booking Management</p>
            <div className="mt-4 h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingsData}>
                  <XAxis dataKey="day" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--surface)",
                      border: "1px solid var(--border-color)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="bookings" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
