"use client";

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

const tooltipStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border-color)",
  borderRadius: 12,
  fontSize: 12,
};

export default function DashboardCharts() {
  return (
    <>
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
                <Tooltip contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#2563EB"
                  strokeWidth={2}
                  fill="url(#salesGradient)"
                  isAnimationActive={false}
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
                  isAnimationActive={false}
                >
                  {customerSplit.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
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
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="bookings" fill="#06B6D4" radius={[6, 6, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
