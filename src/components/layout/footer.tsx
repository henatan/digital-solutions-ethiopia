import Link from "next/link";
import { Globe, MessageCircle, Send, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "QR Menus & Ordering", href: "#services" },
      { label: "Booking Systems", href: "#services" },
      { label: "Admin Dashboards", href: "#dashboard" },
      { label: "Ecommerce", href: "#services" },
    ],
  },
  {
    title: "Demos",
    links: [
      { label: "Bella Vita Restaurant", href: "/demos/bella-vita-restaurant" },
      { label: "Skyline Hotel", href: "/demos/skyline-hotel" },
      { label: "Prime Medical Center", href: "/demos/prime-medical-center" },
      { label: "GreenMart", href: "/demos/greenmart" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border-color/70">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Helping Ethiopian restaurants, hotels, clinics, salons, and retail
              stores transform into modern digital businesses.
              <br />
              ንግድዎን ወደ ዘመናዊ ዲጂታል ተሞክሮ እንቀይራለን።
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, MessageCircle, Send, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-color text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-color/70 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Digital Solutions Ethiopia. All rights reserved.</p>
          <p>Made with care in Addis Ababa, Ethiopia 🇪🇹</p>
        </div>
      </Container>
    </footer>
  );
}
