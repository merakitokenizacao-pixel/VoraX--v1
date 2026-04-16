"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";

const Counter = ({ from, to, duration, prefix = "", suffix = "" }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  // Adjust for floating or non-integers where needed based on suffix, simplistic approach:
  const displayCount = prefix === "< " && to === 200 ? count : (suffix === "%" && to === 99.9 ? "99.9" : count);

  return <span ref={nodeRef}>{prefix}{displayCount}{suffix}</span>;
};

export const Infrastructure = () => {
  const metrics = [
    { label: "Uptime das automações", value: 99.9, suffix: "%", duration: 1.5 },
    { label: "Latência média de resposta dos agentes", value: 200, prefix: "< ", suffix: "ms", duration: 2 },
    { label: "Integrações disponíveis", value: 150, prefix: "+", duration: 2.5 },
    { label: "Monitoramento e suporte", value: 24, suffix: "/7", duration: 1 }, // 24/7 is static conceptually, but animating to 24 is fun
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden border-y border-border-subtle">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
        
        {/* Left Stats Side */}
        <div className="w-full lg:w-2/3">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">
              Infraestrutura de nível enterprise. <br className="hidden md:block"/> Entrega no prazo.
            </h2>
            <p className="text-lg text-text-secondary">
              Detectamos problemas antes que eles cheguem na sua operação. Clientes escalam sem quebrar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 bg-bg-elevated border border-border-subtle rounded-sm"
              >
                <div className="text-3xl lg:text-4xl font-mono block text-accent-primary font-bold mb-3 tracking-tight">
                  <Counter from={0} to={m.value} duration={m.duration} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="text-sm text-text-muted leading-tight font-medium">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Callout Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <div className="p-8 md:p-10 bg-bg-primary border border-border-subtle rounded-sm relative group hover:border-accent-primary hover:shadow-[0_0_30px_rgba(255,59,31,0.1)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-primary/20 transition-all duration-500" />
            
            <h3 className="text-2xl font-bold font-heading mb-4 text-white relative z-10">
              Solução sob medida para seu negócio
            </h3>
            <p className="text-text-secondary mb-8 relative z-10">
              Cada operação é única. Agende uma conversa de 30 minutos com nosso time e recebe um plano customizado — sem compromisso.
            </p>
            <Button variant="outline" className="w-full relative z-10 hover:bg-accent-primary hover:border-transparent">
              Agendar conversa &rarr;
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
