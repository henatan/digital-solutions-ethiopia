"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { demos } from "@/data/demos";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio · ስራዎቻችን"
          title="A snapshot of businesses we've digitized"
          description="Each project is designed with the same premium quality bar — clean UI, fast performance, and real business impact."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {demos.slice(0, 4).map((demo, i) => (
            <Reveal
              key={demo.slug}
              delay={(i % 2) * 0.1}
              className="glass group flex flex-col overflow-hidden rounded-3xl shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] sm:flex-row"
            >
              <div className="relative h-44 w-full sm:h-auto sm:w-56">
                <Image
                  src={demo.image}
                  alt={demo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{ background: demo.color }}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {demo.industry}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{demo.tagline}</p>
                </div>
                <Link
                  href={`/demos/${demo.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary group-hover:underline"
                >
                  View case study · ይመልከቱ →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
