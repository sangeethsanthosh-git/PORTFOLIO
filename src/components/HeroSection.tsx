"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tajawal, Hind, Roboto_Slab, Noto_Serif_Tamil, Noto_Serif_Malayalam, Noto_Sans_KR } from "next/font/google";

// Font imports
const tajawal = Tajawal({ subsets: ["arabic"], weight: "400" });
const hind = Hind({ subsets: ["devanagari"], weight: "400" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: "400" });
const tamil = Noto_Serif_Tamil({ subsets: ["latin"], weight: "400" });
const malayalam = Noto_Serif_Malayalam({ subsets: ["latin"], weight: "400" });
const korean = Noto_Sans_KR({ subsets: ["latin"], weight: "400" });

const letters = [
  { char: "S", font: robotoSlab.className },
  { char: "Σ", font: robotoSlab.className },
  { char: "س", font: tajawal.className },
  { char: "स", font: hind.className },
  { char: "ㅅ", font: korean.className },
  { char: "С", font: robotoSlab.className },
  { char: "ஸ", font: tamil.className },
  { char: "സ", font: malayalam.className },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % letters.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] lg:h-screen w-full overflow-hidden bg-red-600 text-white">
      {/* Animated Big Letter Center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={letters[index].char}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-[10rem] md:text-[15rem] font-bold ${letters[index].font}`}
          >
            {letters[index].char}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom-left introduction */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10">
        <h2 className="text-3xl md:text-6xl font-bold">Explore</h2>
      </div>

      {/* Bottom-right short description */}
      <div className="absolute bottom-12 right-6 md:right-12 z-10 max-w-sm text-sm md:text-base text-gray-100 text-right">
        <p>DEV</p>
      </div>

      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white animate-bounce rounded-full" />
        </div>
        <span className="text-sm text-white/80">Scroll Down</span>
      </div>
    </section>
  );
}
