"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { PillarAgentsSvg, PillarAutomationSvg, PillarDataSvg } from "@/components/ui/svgs";

interface PillarProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  imageSide: "left" | "right";
  SvgComponent: React.ComponentType<{ className?: string }>;
}

const PillarBlock = ({ eyebrow, title, description, bullets, imageSide, SvgComponent }: PillarProps) => {
  return (
    <div className={`py-20 md:py-32 flex flex-col items-center gap-16 md:gap-24 ${imageSide === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* Visual Side (40%) */}
      <motion.div 
        initial={{ opacity: 0, x: imageSide === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/5 flex justify-center"
      >
        <div className="relative w-full max-w-[400px] aspect-square rounded-full flex items-center justify-center">
          {/* Decorative glow behind SVG */}
          <div className="absolute inset-x-0 bottom-0 top-1/4 bg-radial-glow opacity-50 blur-xl" />
          <SvgComponent className="w-full h-full relative z-10 drop-shadow-2xl" />
        </div>
      </motion.div>

      {/* Text Side (60%) */}
      <motion.div 
        initial={{ opacity: 0, x: imageSide === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-3/5"
      >
        <div className="font-mono text-accent-primary uppercase tracking-widest text-sm mb-4 font-bold relative inline-block">
          <span className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse" />
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
          {title}
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-8">
          {description}
        </p>

        <ul className="flex flex-col gap-4 mb-10">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent-primary shrink-0 mt-0.5" />
              <span className="text-text-primary">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Button>Começar agora</Button>
          <Button variant="ghost">Ver em ação &rarr;</Button>
        </div>
      </motion.div>
    </div>
  );
};

export const Pillars = () => {
  return (
    <section id="agentes" className="bg-bg-primary overflow-hidden relative border-y border-border-subtle container mx-auto px-6 py-12">
      <PillarBlock 
        eyebrow="AGENTES AUTÔNOMOS"
        title="Funcionários digitais que não dormem."
        description="Agentes de IA integrados ao WhatsApp, CRM e canais da sua operação. Atendem, qualificam, vendem, agendam e fazem follow-up 24/7 — com a voz e o tom da sua marca."
        bullets={[
          "Integração nativa com WhatsApp, Instagram e e-mail",
          "Memória contextual de longo prazo por cliente",
          "Handoff inteligente para humano quando necessário"
        ]}
        imageSide="right"
        SvgComponent={PillarAgentsSvg}
      />

      <PillarBlock 
        eyebrow="WORKFLOWS INTELIGENTES"
        title="O trabalho repetitivo morre aqui."
        description="Integramos seus sistemas, scraping de dados, CRMs e pipelines em fluxos automatizados que rodam em background. Sua equipe volta a fazer o que importa."
        bullets={[
          "Integração com +200 ferramentas (N8N, APIs próprias)",
          "Scraping e enriquecimento de dados em tempo real",
          "Dashboards e relatórios gerados automaticamente"
        ]}
        imageSide="left"
        SvgComponent={PillarAutomationSvg}
      />

      <PillarBlock 
        eyebrow="DATA-DRIVEN DECISIONS"
        title="Seus dados parando de ser decoração."
        description="Transformamos dados brutos em decisão executiva. BI customizado, modelos preditivos e insights que respondem à pergunta que o CEO faz às 23h."
        bullets={[
          "Dashboards executivos sob medida",
          "Modelos preditivos de churn, venda e demanda",
          "Integração com Supabase, BigQuery, Postgres e afins"
        ]}
        imageSide="right"
        SvgComponent={PillarDataSvg}
      />
    </section>
  );
};
