export type Demo = {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  color: string;
  image: string;
  features: string[];
  pages: { key: string; label: string }[];
};

export const demos: Demo[] = [
  {
    slug: "bella-vita-restaurant",
    name: "Bella Vita Restaurant",
    industry: "Restaurant · ምግብ ቤት",
    tagline: "QR menus, online ordering & table reservations in one system.",
    color: "#EF4444",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    features: ["QR Menu", "Online Ordering", "Reservations", "Admin Dashboard"],
    pages: [
      { key: "menu", label: "QR Menu" },
      { key: "ordering", label: "Ordering" },
      { key: "reservations", label: "Reservations" },
      { key: "dashboard", label: "Dashboard" },
    ],
  },
  {
    slug: "skyline-hotel",
    name: "Skyline Hotel",
    industry: "Hotel · ሆቴል",
    tagline: "Effortless room booking with a stunning visual gallery.",
    color: "#2563EB",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    features: ["Room Booking", "Gallery", "Reservation System"],
    pages: [
      { key: "rooms", label: "Room Booking" },
      { key: "gallery", label: "Gallery" },
      { key: "reservations", label: "Reservations" },
    ],
  },
  {
    slug: "prime-medical-center",
    name: "Prime Medical Center",
    industry: "Clinic · ክሊኒክ",
    tagline: "Simple, trustworthy appointment booking for patients.",
    color: "#06B6D4",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    features: ["Appointment Booking", "Doctor Profiles", "Patient Reminders"],
    pages: [
      { key: "appointments", label: "Appointment Booking" },
      { key: "doctors", label: "Our Doctors" },
    ],
  },
  {
    slug: "urban-barbers",
    name: "Urban Barbers",
    industry: "Salon · ሳሎን",
    tagline: "Online booking that keeps every chair full.",
    color: "#0F172A",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    features: ["Online Booking", "Stylist Selection", "Service Menu"],
    pages: [
      { key: "booking", label: "Online Booking" },
      { key: "services", label: "Services" },
    ],
  },
  {
    slug: "addis-coffee-house",
    name: "Addis Coffee House",
    industry: "Cafe · ካፌ",
    tagline: "Scan, order, sip — zero waiting in line.",
    color: "#92400E",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    features: ["QR Ordering", "Loyalty Points", "Live Order Status"],
    pages: [
      { key: "menu", label: "QR Ordering" },
      { key: "status", label: "Order Status" },
    ],
  },
  {
    slug: "greenmart",
    name: "GreenMart",
    industry: "Retail · ችርቻሮ",
    tagline: "A full ecommerce storefront for a local retail chain.",
    color: "#16A34A",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    features: ["Ecommerce Storefront", "Inventory Sync", "Delivery Tracking"],
    pages: [
      { key: "shop", label: "Shop" },
      { key: "cart", label: "Cart & Checkout" },
    ],
  },
];

export function getDemoBySlug(slug: string) {
  return demos.find((d) => d.slug === slug);
}
