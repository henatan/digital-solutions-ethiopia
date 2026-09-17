"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Clock,
  MapPin,
  Plus,
  Minus,
  Calendar,
  Check,
  Search,
  ShoppingCart,
  Scissors,
  Stethoscope,
  Coffee,
  Bed,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import type { Demo } from "@/data/demos";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    name: "Doro Wat",
    nameAm: "ዶሮ ወጥ",
    price: 320,
    tag: "Chef's Special",
    desc: "Slow-cooked spicy chicken stew served with injera.",
    descAm: "በእንጀራ የሚቀርብ ቀስ ብሎ የበሰለ ቅመም የዶሮ ወጥ።",
    image: "/food/doro-wat.jpg",
  },
  {
    name: "Tibs Platter",
    nameAm: "ጥብስ",
    price: 380,
    tag: "Popular",
    desc: "Sautéed beef with rosemary, onions, and peppers.",
    descAm: "ከሮዝመሪ፣ ሽንኩርት እና በርበሬ ጋር የተጠበሰ የበሬ ሥጋ።",
    image: "/food/tibs.jpg",
  },
  {
    name: "Vegetarian Combo",
    nameAm: "የጾም ኮምቦ",
    price: 260,
    tag: "Vegan",
    desc: "A colorful mix of lentils, cabbage, and greens.",
    descAm: "ከምስር፣ ጎመን እና አትክልት የተዘጋጀ ባለቀለም ድብልቅ።",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fresh Juice",
    nameAm: "ትኩስ ጭማቂ",
    price: 120,
    tag: "Refreshing",
    desc: "Seasonal fruit juice made fresh to order.",
    descAm: "ትኩስ የወቅት ፍራፍሬ ጭማቂ በትዕዛዝ የሚዘጋጅ።",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
  },
];

const rooms = [
  {
    name: "Deluxe City View",
    nameAm: "ደሉክስ የከተማ እይታ",
    price: 4200,
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Executive Suite",
    nameAm: "ኤክስክዩቲቭ ስዊት",
    price: 6800,
    guests: 3,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Family Room",
    nameAm: "የቤተሰብ ክፍል",
    price: 5400,
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
  },
];

const galleryTiles = [
  {
    label: "Lobby",
    labelAm: "አዳራሽ",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Pool",
    labelAm: "ገንዳ",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Suite",
    labelAm: "ስዊት",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Restaurant",
    labelAm: "ምግብ ቤት",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Skyline View",
    labelAm: "የከተማ እይታ",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Spa",
    labelAm: "ስፓ",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
  },
];

const doctors = [
  {
    name: "Dr. Selam Girma",
    specialty: "General Practitioner",
    specialtyAm: "ጠቅላላ ሐኪም",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Yonas Mekonnen",
    specialty: "Dentist",
    specialtyAm: "የጥርስ ሐኪም",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Dr. Hana Assefa",
    specialty: "Pediatrician",
    specialtyAm: "የህጻናት ሐኪም",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80",
  },
];

const services = [
  {
    name: "Classic Haircut",
    nameAm: "ክላሲክ ፀጉር ቅንድብ",
    price: 250,
    duration: "30 min",
  },
  { name: "Beard Trim", nameAm: "ጺም ማስተካከያ", price: 150, duration: "20 min" },
  { name: "Full Grooming", nameAm: "ሙሉ እንክብካቤ", price: 450, duration: "60 min" },
];

const products = [
  {
    name: "Organic Honey 500g",
    nameAm: "ኦርጋኒክ ማር 500ግ",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ethiopian Coffee 1kg",
    nameAm: "የኢትዮጵያ ቡና 1ኪግ",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fresh Vegetables Box",
    nameAm: "ትኩስ አትክልት ሳጥን",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Household Essentials Kit",
    nameAm: "የቤት ውስጥ አስፈላጊ ዕቃዎች",
    price: 510,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=400&q=80",
  },
];

export function DemoExperience({ demo }: { demo: Demo }) {
  const [active, setActive] = useState(demo.pages[0].key);
  const [cartCount, setCartCount] = useState(0);
  const [step, setStep] = useState<"idle" | "confirmed">("idle");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Link
        href="/#demos"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} /> Back to all demos
      </Link>

      <div className="glass overflow-hidden rounded-[2rem] shadow-2xl">
        <div
          className="flex flex-col gap-4 p-6 text-white sm:flex-row sm:items-center sm:justify-between"
          style={{ background: `linear-gradient(135deg, ${demo.color}, ${demo.color}CC)` }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-white/80">{demo.industry} Demo</p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{demo.name}</h1>
            <p className="mt-1 text-sm text-white/85">{demo.tagline}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
            <Star size={14} className="fill-current" /> 4.9 · Live Demo
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-border-color/70 bg-surface/60 px-4 py-3">
          {demo.pages.map((page) => (
            <button
              key={page.key}
              onClick={() => setActive(page.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                active === page.key
                  ? "bg-primary text-white"
                  : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {page.label}
            </button>
          ))}
        </div>

        <div className="min-h-[420px] bg-background/60 p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {active === "menu" && demo.industry.startsWith("Restaurant") && (
                <MenuPage color={demo.color} onAdd={() => setCartCount((c) => c + 1)} cartCount={cartCount} />
              )}
              {active === "menu" && demo.industry.startsWith("Cafe") && (
                <CafeMenuPage color={demo.color} onAdd={() => setCartCount((c) => c + 1)} cartCount={cartCount} />
              )}
              {active === "ordering" && <OrderStatusPage color={demo.color} />}
              {active === "status" && <OrderStatusPage color={demo.color} />}
              {active === "reservations" && <ReservationsPage color={demo.color} step={step} setStep={setStep} />}
              {active === "dashboard" && <MiniDashboardPage color={demo.color} />}
              {active === "rooms" && <RoomsPage color={demo.color} />}
              {active === "gallery" && <GalleryPage color={demo.color} />}
              {active === "appointments" && <AppointmentsPage color={demo.color} step={step} setStep={setStep} />}
              {active === "doctors" && <DoctorsPage color={demo.color} />}
              {active === "booking" && <BarberBookingPage color={demo.color} step={step} setStep={setStep} />}
              {active === "services" && <ServicesPage color={demo.color} />}
              {active === "shop" && <ShopPage color={demo.color} onAdd={() => setCartCount((c) => c + 1)} />}
              {active === "cart" && <CartPage color={demo.color} cartCount={cartCount} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title, color }: { icon: React.ElementType; title: string; color: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
        style={{ background: color }}
      >
        <Icon size={18} />
      </span>
      <h2 className="text-lg font-bold text-foreground sm:text-xl">{title}</h2>
    </div>
  );
}

function MenuPage({ color, onAdd, cartCount }: { color: string; onAdd: () => void; cartCount: number }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle icon={UtensilsCrossed} title="Scan & Order — QR Menu" color={color} />
        <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
          <ShoppingCart size={14} /> {cartCount} items
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {menuItems.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-2xl border border-border-color bg-surface/60">
            <div className="relative h-36 w-full">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="300px" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 font-semibold text-foreground">{item.name}</h3>
                  <p className="text-xs text-muted/80">{item.nameAm}</p>
                  <p className="mt-1 text-xs text-muted">{item.desc}</p>
                  <p className="text-[11px] text-muted/70">{item.descAm}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-foreground">ETB {item.price}</span>
                <button
                  onClick={onAdd}
                  className="flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                  style={{ background: color }}
                >
                  <Plus size={13} /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CafeMenuPage({ color, onAdd, cartCount }: { color: string; onAdd: () => void; cartCount: number }) {
  const drinks = [
    {
      name: "Macchiato",
      nameAm: "ማኪያቶ",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Buna Special",
      nameAm: "ልዩ ቡና",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Cappuccino",
      nameAm: "ካፑቺኖ",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Iced Latte",
      nameAm: "አይስ ላቲ",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80",
    },
  ];
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <SectionTitle icon={Coffee} title="Scan & Order" color={color} />
        <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
          <ShoppingCart size={14} /> {cartCount} items
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {drinks.map((drink, i) => (
          <div key={drink.name} className="flex items-center gap-4 overflow-hidden rounded-2xl border border-border-color bg-surface/60 p-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src={drink.image} alt={drink.name} fill className="object-cover" sizes="64px" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{drink.name}</h3>
              <p className="text-xs text-muted/80">{drink.nameAm}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">ETB {90 + i * 20}</span>
              <button onClick={onAdd} className="rounded-full p-2 text-white" style={{ background: color }}>
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderStatusPage({ color }: { color: string }) {
  const stages = ["Order Placed", "Preparing", "Ready", "Served"];
  return (
    <div>
      <SectionTitle icon={Clock} title="Live Order Status" color={color} />
      <div className="rounded-2xl border border-border-color bg-surface/60 p-6">
        <div className="flex items-center justify-between">
          {stages.map((stage, i) => (
            <div key={stage} className="flex flex-1 flex-col items-center text-center">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                  i <= 2 ? "text-white" : "bg-border-color text-muted"
                }`}
                style={i <= 2 ? { background: color } : {}}
              >
                {i <= 2 ? <Check size={14} /> : i + 1}
              </span>
              <span className="mt-2 text-[11px] text-muted">{stage}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Estimated time remaining: <span className="font-semibold text-foreground">6 minutes</span>
        </p>
      </div>
    </div>
  );
}

function ReservationsPage({
  color,
  step,
  setStep,
}: {
  color: string;
  step: "idle" | "confirmed";
  setStep: (s: "idle" | "confirmed") => void;
}) {
  return (
    <div>
      <SectionTitle icon={Calendar} title="Table Reservations" color={color} />
      {step === "confirmed" ? (
        <ConfirmedCard color={color} message="Your table for 4 is reserved for 7:30 PM tonight." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-color bg-surface/60 p-5">
            <label className="text-xs font-medium text-muted">Date</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-border-color bg-background/50 px-3 py-2 text-sm text-foreground" />
            <label className="mt-4 block text-xs font-medium text-muted">Time</label>
            <input type="time" className="mt-2 w-full rounded-xl border border-border-color bg-background/50 px-3 py-2 text-sm text-foreground" />
            <label className="mt-4 block text-xs font-medium text-muted">Guests</label>
            <input type="number" defaultValue={4} className="mt-2 w-full rounded-xl border border-border-color bg-background/50 px-3 py-2 text-sm text-foreground" />
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border-color bg-surface/60 p-5">
            <div>
              <p className="text-sm text-muted">Available tonight</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"].map((time) => (
                  <span key={time} className="rounded-full border border-border-color px-3 py-1.5 text-xs text-foreground/80">
                    {time}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setStep("confirmed")}
              className="mt-6 rounded-full py-2.5 text-sm font-semibold text-white"
              style={{ background: color }}
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MiniDashboardPage({ color }: { color: string }) {
  const rows = [
    { label: "Today's Revenue", value: "ETB 48,200" },
    { label: "Active Orders", value: "6" },
    { label: "Reservations Tonight", value: "12" },
    { label: "Avg Rating", value: "4.9 / 5" },
  ];
  return (
    <div>
      <SectionTitle icon={UtensilsCrossed} title="Admin Dashboard" color={color} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((row) => (
          <div key={row.label} className="rounded-2xl border border-border-color bg-surface/60 p-5">
            <p className="text-xs text-muted">{row.label}</p>
            <p className="mt-2 text-xl font-bold text-foreground">{row.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-border-color bg-surface/60 p-5">
        <p className="text-sm font-semibold text-foreground">Menu Management</p>
        <div className="mt-3 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-xl bg-background/40 px-4 py-2 text-sm">
              <span className="text-foreground/80">{item.name}</span>
              <span className="font-semibold text-foreground">ETB {item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoomsPage({ color }: { color: string }) {
  return (
    <div>
      <SectionTitle icon={Bed} title="Room Booking" color={color} />
      <div className="grid gap-4 sm:grid-cols-3">
        {rooms.map((room) => (
          <div key={room.name} className="overflow-hidden rounded-2xl border border-border-color bg-surface/60">
            <div className="relative h-28 w-full">
              <Image src={room.image} alt={room.name} fill className="object-cover" sizes="300px" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground">{room.name}</h3>
              <p className="text-xs text-muted/80">{room.nameAm}</p>
              <p className="mt-1 text-xs text-muted">Up to {room.guests} guests</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-foreground">ETB {room.price}/night</span>
                <button className="rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ background: color }}>
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryPage({ color }: { color: string }) {
  return (
    <div>
      <SectionTitle icon={MapPin} title="Hotel Gallery" color={color} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryTiles.map((tile) => (
          <div key={tile.label} className="relative h-32 overflow-hidden rounded-2xl">
            <Image src={tile.image} alt={tile.label} fill className="object-cover" sizes="200px" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3">
              <p className="text-xs font-semibold text-white">{tile.label}</p>
              <p className="text-[10px] text-white/80">{tile.labelAm}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppointmentsPage({
  color,
  step,
  setStep,
}: {
  color: string;
  step: "idle" | "confirmed";
  setStep: (s: "idle" | "confirmed") => void;
}) {
  return (
    <div>
      <SectionTitle icon={Stethoscope} title="Book an Appointment" color={color} />
      {step === "confirmed" ? (
        <ConfirmedCard color={color} message="Your appointment with Dr. Selam Girma is booked for tomorrow at 10:00 AM." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border-color bg-surface/60 p-5">
            <label className="text-xs font-medium text-muted">Select Doctor</label>
            <select className="mt-2 w-full rounded-xl border border-border-color bg-background/50 px-3 py-2 text-sm text-foreground">
              {doctors.map((d) => (
                <option key={d.name}>{d.name} — {d.specialty}</option>
              ))}
            </select>
            <label className="mt-4 block text-xs font-medium text-muted">Preferred Date</label>
            <input type="date" className="mt-2 w-full rounded-xl border border-border-color bg-background/50 px-3 py-2 text-sm text-foreground" />
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border-color bg-surface/60 p-5">
            <div>
              <p className="text-sm text-muted">Available slots</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["9:00 AM", "10:00 AM", "11:30 AM", "2:00 PM"].map((time) => (
                  <span key={time} className="rounded-full border border-border-color px-3 py-1.5 text-xs text-foreground/80">
                    {time}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={() => setStep("confirmed")} className="mt-6 rounded-full py-2.5 text-sm font-semibold text-white" style={{ background: color }}>
              Confirm Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function DoctorsPage({ color }: { color: string }) {
  return (
    <div>
      <SectionTitle icon={Stethoscope} title="Our Doctors" color={color} />
      <div className="grid gap-4 sm:grid-cols-3">
        {doctors.map((d) => (
          <div key={d.name} className="overflow-hidden rounded-2xl border border-border-color bg-surface/60 text-center">
            <div className="relative h-32 w-full">
              <Image src={d.image} alt={d.name} fill className="object-cover" sizes="300px" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground">{d.name}</h3>
              <p className="text-xs text-muted">{d.specialty}</p>
              <p className="text-xs text-muted/70">{d.specialtyAm}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarberBookingPage({
  color,
  step,
  setStep,
}: {
  color: string;
  step: "idle" | "confirmed";
  setStep: (s: "idle" | "confirmed") => void;
}) {
  return (
    <div>
      <SectionTitle icon={Scissors} title="Online Booking" color={color} />
      {step === "confirmed" ? (
        <ConfirmedCard color={color} message="Your Full Grooming session is booked for 3:00 PM today." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            {services.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-2xl border border-border-color bg-surface/60 p-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted/80">{s.nameAm}</p>
                  <p className="text-xs text-muted">{s.duration}</p>
                </div>
                <span className="font-bold text-foreground">ETB {s.price}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border-color bg-surface/60 p-5">
            <div>
              <p className="text-sm text-muted">Available times today</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["1:00 PM", "2:00 PM", "3:00 PM", "4:30 PM"].map((time) => (
                  <span key={time} className="rounded-full border border-border-color px-3 py-1.5 text-xs text-foreground/80">
                    {time}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={() => setStep("confirmed")} className="mt-6 rounded-full py-2.5 text-sm font-semibold text-white" style={{ background: color }}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesPage({ color }: { color: string }) {
  return (
    <div>
      <SectionTitle icon={Scissors} title="Our Services" color={color} />
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="rounded-2xl border border-border-color bg-surface/60 p-5">
            <h3 className="font-semibold text-foreground">{s.name}</h3>
            <p className="text-xs text-muted/80">{s.nameAm}</p>
            <p className="mt-1 text-xs text-muted">{s.duration}</p>
            <p className="mt-4 font-bold" style={{ color }}>ETB {s.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopPage({ color, onAdd }: { color: string; onAdd: () => void }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-3">
        <SectionTitle icon={ShoppingCart} title="Shop" color={color} />
        <div className="hidden items-center gap-2 rounded-full border border-border-color px-3 py-1.5 text-xs text-muted sm:flex">
          <Search size={14} /> Search products...
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.name} className="overflow-hidden rounded-2xl border border-border-color bg-surface/60 p-4">
            <div className="relative h-24 w-full overflow-hidden rounded-xl">
              <Image src={p.image} alt={p.name} fill className="object-cover" sizes="200px" />
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">{p.name}</p>
            <p className="text-xs text-muted/70">{p.nameAm}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-bold text-foreground">ETB {p.price}</span>
              <button onClick={onAdd} className="rounded-full p-2 text-white" style={{ background: color }}>
                <Plus size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartPage({ color, cartCount }: { color: string; cartCount: number }) {
  const items = products.slice(0, Math.max(cartCount, 1));
  const total = items.reduce((sum, p) => sum + p.price, 0);
  return (
    <div>
      <SectionTitle icon={ShoppingCart} title="Cart & Checkout" color={color} />
      <div className="rounded-2xl border border-border-color bg-surface/60 p-5">
        {items.map((p, i) => (
          <div key={p.name} className="flex items-center justify-between border-b border-border-color/60 py-3 last:border-0">
            <span className="text-sm text-foreground/80">{p.name}</span>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-border-color p-1"><Minus size={12} /></button>
              <span className="text-sm">1</span>
              <button className="rounded-full border border-border-color p-1"><Plus size={12} /></button>
              <span className="w-16 text-right text-sm font-semibold text-foreground">ETB {p.price}</span>
            </div>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Total</span>
          <span className="text-lg font-bold" style={{ color }}>ETB {total}</span>
        </div>
        <Button className="mt-4 w-full">Checkout Securely</Button>
      </div>
    </div>
  );
}

function ConfirmedCard({ color, message }: { color: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border-color bg-surface/60 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ background: color }}>
        <Check size={24} />
      </span>
      <p className="text-lg font-semibold text-foreground">Confirmed!</p>
      <p className="max-w-sm text-sm text-muted">{message}</p>
    </div>
  );
}
