"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { demos } from "@/data/demos";

export function IndustryDemos() {
  return (
    <section id="demos" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Interactive Industry Demos · ናሙናዎች"
          title="Explore real, working demos — not just screenshots"
          description="Click into any industry below to experience a fully designed, multi-page mock website like the ones we build for real clients. እያንዳንዱን ንግድ ይጫኑ እና ዝግጁ የሆነ ተሞክሮ ይመልከቱ።"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <Reveal key={demo.slug} delay={(i % 3) * 0.1}>
              <Link
                href={`/demos/${demo.slug}`}
                className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.3)]"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={demo.image}
                    alt={demo.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: demo.color }}
                  >
                    {demo.industry}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="absolute right-4 top-4 text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{demo.tagline}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {demo.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border-color bg-background/40 px-3 py-1 text-xs text-foreground/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Launch demo · ይክፈቱ
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
