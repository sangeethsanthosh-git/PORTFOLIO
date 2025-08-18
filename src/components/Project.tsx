"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description:"The soft hum of the city blended with the tapping of keys as Alex worked late into the night. The glow from the screen cast long shadows on the walls, reflecting lines of code and ambition. Outside, the rain painted the pavement in silver streaks, while inside, ideas took shape—some fragile, some fierce. Every error message was a puzzle, every breakthrough a quiet victory. In that small, cluttered room, time blurred, and creation felt infinite. It wasn’t just another project—it was a step closer to something real.",
    bg: "/images/Glomatic-28.jpeg",
    before: "/images/before.jpeg",
    after: "/images/after.jpg",
    github: "https://github.com/your/project1",
    live: "https://yourproject1.com",
  },
  {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/images/glomatic-30.jpeg",
    image: "/images/youtube.gif",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
   {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/images/glomatic_21.jpg",
    image: "/images/static-photo.jpg",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
   {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/images/glomatic_08.jpg",
    image: "/images/static-photo.jpg",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
   {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/images/glomatic_27.jpg",
    image: "/images/static-photo.jpg",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
   {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/images/glomatic_01.jpg",
    image: "/images/static-photo.jpg",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const activeProject = projects[current];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

const handleTouchStart = (e: React.TouchEvent) => {
  if (!isTouchDevice) return;
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchMove = (e: React.TouchEvent) => {
  if (!isTouchDevice) return;
  touchEndX.current = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (!isTouchDevice) return;
  const distance = touchStartX.current - touchEndX.current;
  if (distance > 50) next(); // Swipe left
  if (distance < -50) prev(); // Swipe right
};
  return (
    <section
      id="project"
      className="relative min-h-[100svh] lg:h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage: `url(${activeProject.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-20 py-16 gap-6">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl order-2 lg:order-1 mt-10 lg:mt-0"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {activeProject.title}
            </h2>
            <p className="text-lg text-white/80 mb-8">{activeProject.description}</p>

            <div className="flex gap-4 mb-8">
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition"
              >
                View Live
              </a>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition"
              >
                GitHub Repo
              </a>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full border border-white ${
                    index === current ? "bg-white" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Media Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-media"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md mt-10 lg:mt-0 order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg"
          >
            {current === 0 && activeProject.before && activeProject.after ? (
              <BeforeAfterSlider
                before={activeProject.before}
                after={activeProject.after}
              />
            ) : (
              <Image
                src={activeProject.image || "/images/default.jpg"}
                alt="Project"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons (desktop) + Swipe Indicator (mobile) */}
      <motion.div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
        <div className="hidden sm:flex gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-sm text-white/80 font-mono sm:hidden">Swipe to navigate</p>
      </motion.div>
    </section>
  );
}

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newPos = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, newPos)));
  };

  return (
    <div
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden select-none"
    >
      <Image
        src={before}
        alt="Before"
        fill
        className="object-cover rounded-xl"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%`, zIndex: 2 }}
      >
        <Image
          src={after}
          alt="After"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position}%`, zIndex: 3 }}
      />
    </div>
  );
}
