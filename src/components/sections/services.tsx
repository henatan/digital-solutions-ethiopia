"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services · አገልግሎቶች"
          title="Everything you need to go digital"
          description="From QR menus to full ecommerce platforms — we build the complete digital toolkit for modern businesses."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <GlassCard key={service.title} delay={(i % 4) * 0.08} className="p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <service.icon size={20} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
