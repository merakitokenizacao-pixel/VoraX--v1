"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroNetworkSvg } from "@/components/ui/svgs";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-glow -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="font-mono text-accent-primary uppercase tracking-widest text-sm mb-6 flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
            Inteligência Artificial Aplicada a Resultado
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-[clamp(3rem,7vw,6rem)] font-heading font-bold leading-[1.05] tracking-tight mb-8">
            A IA que <span className="text-gradient">devora</span> gargalos e entrega crescimento.
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Agentes de IA sob medida, automações e inteligência de dados para transformar operação em vantagem competitiva. Sem firula, sem hype — só resultado mensurável.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <Button size="lg" className="w-full sm:w-auto">
              Agendar diagnóstico gratuito &rarr;
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ver como funciona
            </Button>
          </motion.div>

          {/* Minimal Social Proof */}
          <motion.p variants={itemVariants} className="text-sm text-text-muted mb-16">
            Operações ativas em logística, saúde estética, imobiliário e serviços.
          </motion.p>

          {/* Isometric Hero Visual */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-[900px] relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <HeroNetworkSvg className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,59,31,0.1)]" />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
