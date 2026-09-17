import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Digital Solutions Ethiopia | ንግድዎን ወደ ዲጂታል ይቀይሩ",
  description:
    "እኛ የኢትዮጵያ ንግዶችን በ QR ምናሌ፣ ኦንላይን ማዘዣ፣ ቦታ ማስያዣ ሥርዓቶች እና ድረ-ገጾች እናዘምናለን። We help Ethiopian restaurants, hotels, cafes, clinics, salons, and retail stores modernize with QR menus, online ordering, booking systems, websites, Google integration, and dashboards.",
  keywords: [
    "digital transformation Ethiopia",
    "ዲጂታል ትራንስፎርሜሽን",
    "QR menu Ethiopia",
    "restaurant online ordering",
    "hotel booking system",
    "clinic appointment booking",
    "Ethiopian business website",
  ],
  openGraph: {
    title: "Digital Solutions Ethiopia",
    description:
      "ንግድዎን ወደ ዘመናዊ ዲጂታል ተሞክሮ ይቀይሩ — Transform your business into a digital experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

