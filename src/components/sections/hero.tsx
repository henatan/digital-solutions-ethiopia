"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle, TrendingUp, Star, Bell } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const floatingCards = [
  {
    icon: TrendingUp,
    title: "Sales Today",
    value: "ETB 48,200",
    trend: "+18%",
    className: "left-3 top-3 sm:left-5 sm:top-5",
    delay: 0,
  },
  {
    icon: Bell,
    title: "New Booking",
    value: "Table for 4 · 7:30 PM",
    trend: "Confirmed",
    className: "right-3 top-3 sm:right-5 sm:top-5",
    delay: 0.6,
  },
  {
    icon: Star,
    title: "Rating",
    value: "4.9 / 5.0",
    trend: "128 reviews",
    className: "right-3 top-24 sm:right-5 sm:top-28",
    delay: 1.1,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[300px] w-[500px] -translate-x-1/2 animated-gradient-bg rounded-full opacity-[0.12] blur-2xl sm:h-[500px] sm:w-[900px] sm:blur-[120px]" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="hero-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-border-color bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Trusted across Ethiopia
          </div>

          <h1
            className="hero-fade-in text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Transform Your Business Into a{" "}
            <span className="gradient-text">Digital Experience</span>
          </h1>

          <p
            className="hero-fade-in mt-3 text-xl font-semibold text-foreground/90 sm:text-2xl"
            style={{ fontFamily: "var(--font-display)", animationDelay: "0.15s" }}
          >
            ንግድዎን ወደ ዘመናዊ ዲጂታል ተሞክሮ ይቀይሩ
          </p>

          <p
            className="hero-fade-in mt-6 max-w-2xl text-base text-muted sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            We help Ethiopian businesses modernize with QR menus, online
            ordering, booking systems, websites, Google integration, and
            dashboards.
          </p>

          <p
            className="hero-fade-in mt-3 max-w-2xl text-sm font-medium text-accent sm:text-base"
            style={{ animationDelay: "0.25s" }}
          >
            We never ask for payment before your project is finished. · ስራችንን ከመጨረሳችን በፊት ክፍያ አንጠይቅም።
          </p>

          <div
            className="hero-fade-in mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button href="#demos">
              View Live Demos · ናሙናዎችን ይመልከቱ
              <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">
              <PlayCircle size={16} />
              Get Free Consultation · ነጻ ምክክር ያግኙ
            </Button>
          </div>
        </div>

        <div
          className="hero-fade-in relative mx-auto mt-20 max-w-5xl"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="glass relative mx-auto flex flex-col overflow-hidden rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-border-color/70 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-medium text-muted">
                dashboard.digitalsolutions.et
              </span>
              <span className="w-12" />
            </div>

            <div className="relative h-52 w-full sm:h-72">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
                alt="Ethiopian restaurant table with modern digital menu experience"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/70">Bella Vita Restaurant</p>
                  <p className="text-lg font-bold text-white">
                    QR Menu · Live Orders · Dashboard
                  </p>
                </div>
              </div>

              {floatingCards.map((card) => (
                <div
                  key={card.title}
                  className={`glass animate-float absolute z-10 hidden w-44 items-center gap-2.5 rounded-2xl p-3 shadow-xl md:flex ${card.className}`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] text-muted">{card.title}</p>
                    <p className="truncate text-xs font-semibold text-foreground">
                      {card.value}
                    </p>
                    <p className="text-[10px] font-medium text-accent">{card.trend}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
              {[
                { label: "Menu Scans", value: "128" },
                { label: "Bookings", value: "42" },
                { label: "Orders", value: "6" },
                { label: "Growth", value: "+24%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border-color/60 bg-background/40 p-4"
                >
                  <span className="text-xs text-muted">{stat.label}</span>
                  <span className="mt-2 block text-xl font-bold text-foreground sm:text-2xl">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
