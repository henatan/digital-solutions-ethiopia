"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyDigital } from "@/data/content";

export function WhyGoDigital() {
  return (
    <section id="why-digital" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Go Digital · ለምን ዲጂታል?"
          title="Digital transformation is no longer optional"
          description="Ethiopian businesses that modernize see faster growth, more repeat customers, and stronger trust — here's why it matters."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyDigital.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-border-color bg-surface/40 p-8 text-center"
            >
              <p className="gradient-text text-4xl font-extrabold sm:text-5xl">
                {item.stat}
              </p>
              <p className="mt-3 text-sm text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: "Increased Customer Trust",
              description: "A polished digital presence signals professionalism and reliability to new customers.",
            },
            {
              title: "Easier Management",
              description: "Manage bookings, orders, and staff from one dashboard instead of juggling notebooks and calls.",
            },
            {
              title: "Higher Visibility & Sales",
              description: "Show up on Google Search & Maps and convert visits into orders, bookings, and repeat sales.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
