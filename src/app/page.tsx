import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { IndustryDemos } from "@/components/sections/industry-demos";
import { Portfolio } from "@/components/sections/portfolio";
import { WhyGoDigital } from "@/components/sections/why-go-digital";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <CtaBanner
          title="See how a digital menu could transform your restaurant · ንግድዎን ወደ ዘመናዊ ዲጂታል ተሞክሮ እንቀይራለን።"
          description="From QR ordering to real-time dashboards — explore what's possible in minutes."
        />
        <IndustryDemos />
        <Portfolio />
        <WhyGoDigital />
        <DashboardPreview />
        <Process />
        <Testimonials />
        <Pricing />
        <CtaBanner
          title="Not sure which plan fits your business? · የትኛው ዕቅድ ለንግድዎ እንደሚስማማ እርግጠኛ አይደሉም?"
          description="Talk to us for free and we'll recommend the right digital solution for your goals and budget."
        />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
