// app/components/Services.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = ["Web Dev", "UI Design", "SEO", "Branding", "Performance"];

export default function Services() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500); // flip every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-18 bg-black flex items-center justify-center" id="services">
      <div className="h-[100px] overflow-hidden text-[#f9f5ed] text-5xl font-bold tracking-widest flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            {services[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
