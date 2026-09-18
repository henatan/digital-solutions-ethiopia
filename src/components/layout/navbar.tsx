"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { href: "#about", label: "About", am: "ስለ እኛ" },
  { href: "#services", label: "Services", am: "አገልግሎቶች" },
  { href: "#demos", label: "Demos", am: "ናሙናዎች" },
  { href: "#pricing", label: "Pricing", am: "ዋጋ" },
  { href: "#contact", label: "Contact", am: "አግኙን" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center text-xs font-medium text-foreground/70 transition-colors hover:text-primary sm:text-sm"
              >
                <span>{link.label}</span>
                {link.am && (
                  <span className="text-[10px] font-normal text-muted/70 group-hover:text-primary/70">
                    {link.am}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" className="!px-5 !py-2.5 text-xs">
              Free Consultation
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-color text-foreground"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden">
          <Container>
            <div className="mobile-menu-panel glass mt-3 flex flex-col gap-1 rounded-2xl p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary/5 hover:text-primary"
                >
                  <span>{link.label}</span>
                  {link.am && <span className="text-xs text-muted">{link.am}</span>}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Free Consultation
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
