"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ArchitectureBreakProps {
  imageSrc: string;
  eyebrow: string;
  title: string;
  height?: string;
}

export const ArchitectureBreak = ({ 
  imageSrc, 
  eyebrow, 
  title, 
  height = "h-[480px]" 
}: ArchitectureBreakProps) => {
  return (
    <section className={`relative w-full ${height} overflow-hidden flex items-center justify-center border-y border-border-subtle`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Technical architecture"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.35) grayscale(0.5) sepia(0.2) hue-rotate(-20deg)" }} // gives it a subtle dark/redish tint
        />
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-mesh-glow opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-bg-primary/40" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <p className="font-mono text-accent-primary font-bold uppercase tracking-[0.1em] text-sm mb-4">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
          {title}
        </h2>
      </motion.div>
    </section>
  );
};

/* 
  SUGGESTED UNSPLASH URLs FOR PLACEHOLDERS (To be used in page.tsx):
  Break 1 (Data/Tech): "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  Break 2 (Corporate/Dark): "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
*/
