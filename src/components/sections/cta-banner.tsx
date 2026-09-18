"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner({
  title = "Ready to bring your business online? · ንግድዎን ኦንላይን ለማድረግ ዝግጁ ነዎት?",
  description = "Book a free 20-minute consultation and see exactly how a digital upgrade can grow your revenue.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <Reveal className="animated-gradient-bg relative overflow-hidden rounded-[2rem] px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-white/90" />
          <h3 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="secondary" className="!bg-white !text-secondary hover:!bg-white/90 border-0">
              Get Free Consultation · ነጻ ምክክር ያግኙ
              <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
