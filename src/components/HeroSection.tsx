"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-[#faecd2] px-4 pb-24 pt-28 text-[#225424] sm:px-6 sm:pb-28 sm:pt-32 lg:px-8"
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[24vw] font-semibold text-[#225424] opacity-5 sm:text-[18vw] lg:text-[15rem]">
        {hero.backgroundWord}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-[#225424]/80 sm:text-sm sm:tracking-[0.45em]">
          {hero.eyebrow}
        </p>
        <h1 className="mt-5 text-[clamp(2.8rem,12vw,5.5rem)] font-semibold leading-[0.95] tracking-[0.04em] sm:mt-6 sm:tracking-[0.08em]">
          {hero.title}
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#225424]/80 sm:text-sm sm:tracking-[0.4em] md:text-base">
          {hero.subtitle}
        </p>
      </motion.div>

      <div className="absolute inset-x-4 bottom-14 z-10 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-16 lg:inset-x-12">
        <p className="text-lg font-semibold text-[#225424]/80 sm:text-2xl md:text-[2.5rem]">
          {hero.sideLabel}
        </p>
        <p className="max-w-[7rem] text-right text-xs uppercase tracking-[0.25em] text-[#225424]/80 sm:max-w-sm sm:text-sm md:text-base">
          {hero.sideNote}
        </p>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#225424] p-1">
          <div className="h-2 w-1 rounded-full bg-[#225424]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.24em] text-[#225424]/80 sm:text-xs sm:tracking-[0.3em]">
          {hero.scrollLabel}
        </span>
      </div>
    </section>
  );
}
