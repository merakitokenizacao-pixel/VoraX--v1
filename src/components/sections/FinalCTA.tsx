"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-t border-border-subtle bg-bg-primary">
      {/* Background with animated pulse glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow opacity-60 animate-[pulse_6s_ease-in-out_infinite]" />
        {/* Subtle grid to add texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Pronto para alimentar <br/> o <span className="text-gradient">crescimento</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl leading-relaxed">
            Diagnóstico gratuito de 30 min. Sem cartão, sem compromisso. Saia com um plano concreto.
          </p>
          
          <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto md:h-16 md:px-10 md:text-xl shadow-[0_0_50px_rgba(255,59,31,0.25)] hover:shadow-[0_0_80px_rgba(255,59,31,0.4)]">
              Agendar diagnóstico &rarr;
            </Button>
            
            <a href="#" className="font-mono text-sm text-text-muted hover:text-white underline decoration-text-muted/50 underline-offset-4 hover:decoration-white transition-all">
              Falar com o time no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
