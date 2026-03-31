"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { work } from "@/data/portfolio";

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="relative bg-[#2a2a2a] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]/80">Work</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#f9f5ed]">Recent Work Themes</h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll work cards left"
              className="rounded-full bg-white p-3 text-black transition-transform duration-200 hover:scale-[1.02]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll work cards right"
              className="rounded-full bg-white p-3 text-black transition-transform duration-200 hover:scale-[1.02]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="scrollbar-hide overflow-x-auto scroll-smooth">
          <div className="flex gap-6 pb-2">
            {work.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative min-h-[440px] min-w-[80vw] snap-start overflow-hidden rounded-[2rem] border border-white/10 shadow-lg md:min-w-[380px] lg:min-w-[420px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: `rgba(0, 0, 0, ${item.overlayOpacity})` }}
                />

                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/80">{item.subtitle}</p>

                  <div>
                    <h3 className="text-3xl font-medium text-white">{item.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{item.info}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
