"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const pillars = [
  {
    icon: Rocket,
    title: "Built for Growth",
    titleAm: "ለዕድገት የተገነባ",
    description:
      "Every platform we build is designed to scale with your business — from one branch to many.",
    descriptionAm: "የምንገነባው እያንዳንዱ ስርዓት ከንግድዎ ጋር አብሮ እንዲያድግ ተደርጎ የተሰራ ነው — ከአንድ ቅርንጫፍ ወደ ብዙ።",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    titleAm: "የታመነ እና አስተማማኝ",
    description:
      "Secure, fast, and dependable systems that your customers and staff can count on daily.",
    descriptionAm: "ደንበኞችዎ እና ሰራተኞችዎ በየቀኑ ሊተማመኑበት የሚችሉ ደህንነቱ የተጠበቀ እና ፈጣን ስርዓቶች።",
  },
  {
    icon: HeartHandshake,
    title: "Local Partnership",
    titleAm: "የአካባቢ አጋርነት",
    description:
      "We understand Ethiopian businesses and design solutions that fit real, local needs.",
    descriptionAm: "የኢትዮጵያን ንግዶች እንረዳለን እና ለእውነተኛ የአካባቢ ፍላጎቶች የሚስማሙ መፍትሄዎችን እንነድፋለን።",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Us · ስለ እኛ"
          title="We turn traditional businesses into digital-first brands"
          description="Digital Solutions Ethiopia partners with restaurants, hotels, cafes, clinics, salons, and retail stores across Ethiopia to design premium digital systems that build trust, save time, and increase revenue."
        />
        <p
          className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted/80"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ባህላዊ ንግዶችን ወደ ዲጂታል-መር ብራንዶች እንቀይራለን
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <GlassCard key={pillar.title} delay={i * 0.1}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted/80">{pillar.titleAm}</p>
              <p className="mt-2 text-sm text-muted">{pillar.description}</p>
              <p className="mt-1 text-xs text-muted/70">{pillar.descriptionAm}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-8 rounded-3xl border border-border-color bg-surface/40 p-8 sm:grid-cols-3 sm:p-12"
        >
          {[
            { value: "60+", label: "Businesses digitized" },
            { value: "6", label: "Industries served" },
            { value: "98%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gradient-text text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
