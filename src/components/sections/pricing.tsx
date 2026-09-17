"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/content";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing for every stage of growth · ለእያንዳንዱ የዕድገት ደረጃ ቀላል ዋጋ"
          description="All prices are shown in Ethiopian Birr (ETB). Custom quotes available for multi-branch businesses."
        />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm font-medium text-accent">
          We never ask for payment before your project is finished. · ስራችንን ከመጨረሳችን በፊት ክፍያ አንጠይቅም።
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "animated-gradient-bg text-white shadow-2xl lg:-translate-y-4"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/85" : "text-muted"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span
                  className={`text-3xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price !== "Custom" ? `ETB ${plan.price}` : "Custom"}
                </span>
                <span
                  className={`pb-1 text-xs ${
                    plan.highlighted ? "text-white/70" : "text-muted"
                  }`}
                >
                  / {plan.period}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={plan.highlighted ? "text-white" : "text-primary"}
                    />
                    <span className={plan.highlighted ? "text-white/90" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.highlighted ? "secondary" : "primary"}
                className={`mt-8 w-full ${
                  plan.highlighted ? "!bg-white !text-secondary hover:!bg-white/90 border-0" : ""
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
