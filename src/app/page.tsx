import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import SchoolPartnership from "@/components/SchoolPartnership";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MouseGlow from "@/components/MouseGlow";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal delay={60}>
        <Programs />
      </Reveal>
      <Reveal delay={90}>
        <SchoolPartnership />
      </Reveal>
      <Reveal delay={120}>
        <Portfolio />
      </Reveal>
      <Reveal delay={150}>
        <Testimonials />
      </Reveal>
      <Reveal delay={180}>
        <FAQ />
      </Reveal>
      <Reveal delay={210}>
        <CTA />
      </Reveal>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
