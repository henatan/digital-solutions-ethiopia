"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const infoItems = [
  { icon: Mail, label: "Email", value: "digitalsolutionsethiopia@gmail.com" },
  { icon: MapPin, label: "Location · አድራሻ", value: "Addis Ababa, Ethiopia · አዲስ አበባ" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact · አግኙን"
          title="Get your free digital consultation"
          description="Tell us about your business and we'll show you exactly how to modernize it — no obligation. ስለ ንግድዎ ይንገሩን፤ እንዴት ማዘመን እንደሚቻል በነጻ እናሳይዎታለን።"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal direction="left" className="flex flex-col gap-4">
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
          </Reveal>

          <Reveal
            as="form"
            direction="right"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setError(null);
              setSubmitting(true);

              const form = e.currentTarget;
              const data = new FormData(form);
              const payload = {
                name: String(data.get("name") || ""),
                business: String(data.get("business") || ""),
                email: String(data.get("email") || ""),
                phone: String(data.get("phone") || ""),
                message: String(data.get("message") || ""),
              };

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });
                const json = await res.json();

                if (!res.ok) {
                  throw new Error(json.error || "Something went wrong. Please try again.");
                }

                setSubmitted(true);
              } catch (err) {
                setError(
                  err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
                );
              } finally {
                setSubmitting(false);
              }
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
                  <Field label="Full Name · ሙሉ ስም" name="name" />
                  <Field label="Business Name · የንግድ ስም" name="business" required={false} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone · ስልክ" name="phone" required={false} />
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-medium text-foreground/80">
                    Tell us about your business · ስለ ንግድዎ ይንገሩን
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="rounded-2xl border border-border-color bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </label>
                {error && (
                  <p className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Request · ላክ
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name,
  required = true,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-foreground/80">{label}</span>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="rounded-full border border-border-color bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
      />
    </label>
  );
}
