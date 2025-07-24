// app/components/Work.tsx
"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  {
    title: "nomad",
    subtitle: "SWISS CABIN",
    info: "BOOKINGS START MAY 5TH",
    bg: "/images/proj1.jpg",
    textColor: "text-white",
    overlay: "bg-black/40",
  },
  {
    title: "nomad",
    subtitle: "FIND • REFUGE • IN • SOLITUDE",
    info: "HIDE • SEEK",
    bg: "/images/mountain.jpg",
    textColor: "text-white",
    overlay: "bg-[#d8a87a]/90",
  },
  {
    title: "nomad",
    subtitle: "NEW LISTING",
    info: "SWISS • CABIN",
    bg: "/images/fern.jpg",
    textColor: "text-white",
    overlay: "bg-black/30",
  },
  {
    title: "nomad",
    subtitle: "SINCE 1985",
    info: "46°N 08°E",
    bg: "/images/tree-texture.jpg",
    textColor: "text-white",
    overlay: "bg-black/30",
  },
];

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="w-full py-16 bg-[#f4f1ec] relative">
      <div className="max-w-6xl mx-auto px-4">

        {/* Slide Arrows (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div ref={scrollRef} className="overflow-x-auto scroll-smooth scrollbar-hide">
          <div className="flex gap-6 snap-x snap-mandatory">
            {works.map((work, index) => (
              <div
                key={index}
                className="min-w-[80vw] md:min-w-[400px] h-[500px] snap-start shrink-0 rounded-3xl relative overflow-hidden shadow-lg"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${work.bg})` }}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 ${work.overlay}`} />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className={`${work.textColor} text-xs tracking-widest uppercase`}>
                    {work.subtitle}
                  </div>
                  <div>
                    <h3 className={`text-4xl font-light ${work.textColor}`}>{work.title}</h3>
                    <p className={`mt-1 text-sm tracking-wide ${work.textColor}`}>
                      {work.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
