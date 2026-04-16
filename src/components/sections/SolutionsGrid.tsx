"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, ShoppingCart, Briefcase, Truck, HeartPulse } from "lucide-react";

const solutions = [
  {
    num: "01",
    title: "Imobiliárias & Corretores",
    desc: "Automação de captação, CRM com scoring de leads e agentes de IA que respondem anúncios 24/7.",
    icon: Building2
  },
  {
    num: "02",
    title: "Clínicas & Estética",
    desc: "Agendamento, follow-up, WhatsApp automatizado e retenção de pacientes com IA.",
    icon: Stethoscope
  },
  {
    num: "03",
    title: "E-commerce & Varejo",
    desc: "Recomendação, recuperação de carrinho, SAC automatizado e previsão de demanda.",
    icon: ShoppingCart
  },
  {
    num: "04",
    title: "Serviços B2B",
    desc: "Qualificação de leads, prospecção outbound automatizada e CRM integrado.",
    icon: Briefcase
  },
  {
    num: "05",
    title: "Logística & Operações",
    desc: "Roteirização inteligente, dashboards em tempo real e automação de back-office.",
    icon: Truck
  },
  {
    num: "06",
    title: "Saúde & Bem-estar",
    desc: "Prontuário inteligente, triagem por IA e comunicação multicanal com pacientes.",
    icon: HeartPulse
  }
];

export const SolutionsGrid = () => {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Soluções para qualquer operação
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Plataforma flexível desenhada para o coração do seu problema, seja ele qual for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 bg-bg-elevated border border-border-subtle rounded-sm hover:-translate-y-2 transition-transform duration-500 overflow-hidden cursor-default"
              >
                {/* Hover Glow Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary rounded-sm transition-colors duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Number Watermark */}
                <div className="absolute top-4 right-6 font-mono text-6xl font-bold text-[#1F1F22] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none">
                  {item.num}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 text-accent-glow">
                    <IconComponent strokeWidth={1.5} className="w-full h-full" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-accent-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
