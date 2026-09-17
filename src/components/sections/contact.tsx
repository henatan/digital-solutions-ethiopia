"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const infoItems = [
  { icon: Mail, label: "Email", value: "digitalsolutionsethiopia@gmail.com" },
  { icon: MapPin, label: "Location · አድራሻ", value: "Addis Ababa, Ethiopia · አዲስ አበባ" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact · አግኙን"
          title="Get your free digital consultation"
          description="Tell us about your business and we'll show you exactly how to modernize it — no obligation. ስለ ንግድዎ ይንገሩን፤ እንዴት ማዘመን እንደሚቻል በነጻ እናሳይዎታለን።"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {infoItems.map((item) => (
              <div key={item.label} className="glass flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="animated-gradient-bg rounded-2xl p-5 text-white">
              <p className="text-sm font-semibold">Free consultation includes:</p>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>• A review of your current online presence</li>
                <li>• Custom digital transformation roadmap</li>
                <li>• No-obligation pricing estimate</li>
              </ul>
              <p className="mt-4 border-t border-white/20 pt-4 text-xs text-white/85">
                We never ask for payment before your project is complete. · ስራችንን ከመጨረሳችን በፊት ክፍያ አንጠይቅም።
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="glass flex flex-col gap-5 rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="text-primary" size={40} />
                <p className="text-lg font-semibold text-foreground">Thank you!</p>
                <p className="max-w-sm text-sm text-muted">
                  We received your request and will reach out within 24 hours to schedule
                  your free consultation.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name · ሙሉ ስም" />
                  <Field label="Business Name · የንግድ ስም" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" type="email" />
                  <Field label="Phone · ስልክ" />
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-medium text-foreground/80">
                    Tell us about your business · ስለ ንግድዎ ይንገሩን
                  </span>
                  <textarea
                    required
                    rows={4}
                    className="rounded-2xl border border-border-color bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </label>
                <Button type="submit" className="w-full">
                  Send Request · ላክ
                  <Send size={16} />
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/80">{label}</span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="rounded-full border border-border-color bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
      />
    </label>
  );
}
