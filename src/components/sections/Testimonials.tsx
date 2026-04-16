"use client";

import { motion } from "framer-motion";

// TODO: substituir por depoimentos reais no futuro
const testimonials = [
  {
    quote: "Reduzimos 70% do tempo de qualificação de leads no primeiro mês. O agente da VoraX responde melhor que metade do meu time comercial.",
    author: "Carla M.",
    role: "DIRETORA COMERCIAL, NOVAMED",
    initials: "CM"
  },
  {
    quote: "Conheço poucas empresas que entregam IA aplicada com essa praticidade. O que era promessa de consultoria virou operação rodando.",
    author: "Ricardo A.",
    role: "CEO, LOGTRACK",
    initials: "RA"
  },
  {
    quote: "A integração dos dados parou de ser um sonho distante e virou realidade. Nossas decisões hoje são baseadas no painel que a VoraX montou.",
    author: "Fernando P.",
    role: "OPERAÇÕES, IMÓVEISPRO",
    initials: "FP"
  },
  {
    quote: "Meu time de atendimento finalmente conseguiu respirar. O fluxo no WhatsApp absorveu toda a triagem inicial sem parecer um robô chato.",
    author: "Juliana R.",
    role: "CMO, ESTÉTICALAB",
    initials: "JR"
  }
];

export const Testimonials = () => {
  return (
    <section id="casos" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-white mb-16">
          O que nossos parceiros dizem
        </h2>

        {/* CSS-based horizontal scroll for carousel effect without heavy deps */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbars no-scrollbar">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-[320px] md:w-[400px] bg-bg-elevated border border-border-subtle p-8 rounded-sm snap-center group hover:border-border-accent transition-colors"
            >
              <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                {/* Simulated Logo Placeholder */}
                <div className="h-6 w-24 bg-border-subtle rounded-sm" />
              </div>

              <p className="text-text-primary text-lg mb-8 leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-border-subtle flex items-center justify-center text-text-muted font-bold tracking-widest uppercase text-sm border border-border-accent">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
