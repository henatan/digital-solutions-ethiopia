"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A simple, transparent path to going digital"
          description="From first call to launch day, we keep the process clear, fast, and stress-free."
        />

        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-border-color lg:block" />
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-start gap-4"
            >
              <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.6)]">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
