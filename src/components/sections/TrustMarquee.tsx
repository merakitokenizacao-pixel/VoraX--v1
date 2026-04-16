"use client";

import { motion } from "framer-motion";

const placeholders1 = ["NovaMed", "LogTrack", "ImóveisPro", "EsteticaLab", "VarejoAI", "ConectaFin", "RotaCerta"];
const placeholders2 = ["SolaresBR", "CargaMais", "DermaFlow", "TechCorp", "AgroData", "SalesMachine", "PrimeEstate"];

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden w-full group py-4">
      <motion.div
        className="flex whitespace-nowrap min-w-full shrink-0 gap-8 items-center px-4"
        animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed here
        }}
      >
        {/* Render items twice to create the infinite loop effect seamlessly */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-[180px] h-[60px] rounded border border-border-subtle bg-bg-elevated/50 text-text-muted hover:text-white hover:border-accent-primary hover:bg-bg-elevated transition-colors duration-300 group-hover:opacity-100 opacity-50"
          >
            <span className="font-mono text-sm tracking-widest uppercase">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TrustMarquee = () => {
  return (
    <section className="py-20 bg-bg-secondary border-y border-border-subtle relative overflow-hidden">
      {/* Decorative gradients for smooth fading on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-12">
        <h3 className="text-center font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
          Empresas que confiaram no processo VoraX
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {/* TODO: Substituir arrays placeholders por logos reais no futuro */}
        <MarqueeRow items={placeholders1} />
        <MarqueeRow items={placeholders2} reverse />
      </div>
    </section>
  );
};
