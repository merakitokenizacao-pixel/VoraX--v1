import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { ArchitectureBreak } from "@/components/sections/ArchitectureBreak";
import { Pillars } from "@/components/sections/Pillars";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-primary font-sans text-text-primary selection:bg-accent-primary/30 selection:text-white">
      <Navbar />
      
      <Hero />
      
      <TrustMarquee />
      
      <ArchitectureBreak 
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
        eyebrow="O STACK COMPLETO"
        title="Uma plataforma. Três camadas. Resultado composto."
      />
      
      <Pillars />
      
      <Infrastructure />
      
      <SolutionsGrid />
      
      <ArchitectureBreak 
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        eyebrow="CONSTRUÍDO COM QUEM CONSTRÓI"
        title="Parceria técnica do diagnóstico à entrega."
        height="h-[400px]"
      />
      
      <Testimonials />
      
      <FinalCTA />
      
      <Footer />
    </main>
  );
}
