"use client";

import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials · ምስክርነት"
          title="Loved by business owners across Ethiopia · በኢትዮጵያ ውስጥ በንግድ ባለቤቶች የተወደደ"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.1}
              className="glass rounded-3xl p-8"
            >
              <Quote className="text-primary/40" size={28} />
              <p className="mt-4 text-base text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
