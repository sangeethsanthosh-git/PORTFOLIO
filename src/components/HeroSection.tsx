"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#faecd2] px-6 text-[#225424]"
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[18vw] font-semibold text-[#225424] opacity-5 md:text-[16vw] lg:text-[15rem]">
        {hero.backgroundWord}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-center"
      >
        <p className="text-sm uppercase tracking-[0.45em] text-[#225424]/80">{hero.eyebrow}</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[0.08em] md:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-[#225424]/80 md:text-base">
          {hero.subtitle}
        </p>
      </motion.div>

      <div className="absolute bottom-12 left-6 z-10 md:left-12">
        <p className="text-2xl font-semibold text-[#225424]/80 md:text-[2.5rem]">{hero.sideLabel}</p>
      </div>

      <div className="absolute bottom-12 right-6 z-10 max-w-sm text-right text-sm text-[#225424]/80 md:right-12 md:text-base">
        <p>{hero.sideNote}</p>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#225424] p-1">
          <div className="h-2 w-1 rounded-full bg-[#225424]" />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-[#225424]/80">{hero.scrollLabel}</span>
      </div>
    </section>
  );
}
