"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";


// -------------------- Types --------------------
type Project = {
  title: string;
  description: string | JSX.Element;
  bgDesktop: string;
  bgMobile: string;
  before?: string;
  after?: string;
  github?: string;
  live?: string;
  image?: string;
  status: "completed" | "working";
};

// -------------------- Projects Data --------------------
const projects: Project[] = [
  {
    title: "Cartoonizer",
    description:
      "Cartoonizer is a Python-based web application that transforms images, GIFs, and short videos (up to 60 seconds or 100 MB) into cartoon-style visuals. It’s designed to work efficiently even on systems without GPU support, though GPU acceleration is optional for faster processing",
    bgDesktop: "/images/cartoon.gif",
    bgMobile: "/images/cartoon-mb.gif",
    before: "/images/before.jpeg",
    after: "/images/after.jpg",
    github: "https://github.com/sangeethsanthosh-git/Cartoonizer",
    status: "completed",
  },
  {
    title: "Gistify",
    description:"Transform long documents into clear, actionable insights.Gistify is an elegant, fast, AI-powered document intelligence tool that converts PDFs and raw text into summaries, extracted entities, and action plans all using a smooth, conversational interface. Built for developers, students, researchers, and teams who deal with overwhelming documents every day.",
    bgDesktop: "/images/gistify.gif",
    bgMobile: "/images/gistify-mb.gif",
    image: "/images/gistify.gif",
    live: "https://gistify-c.vercel.app/",
    status: "completed",
  },
  {
    title: "VidScoop",
    description: (
      <>
        Vidscoop is a simple yet powerful Flask web application built with Python that allows users to download YouTube videos and audio in multiple formats.  
        <br />
        <span className="mt-3 block p-2 text-sm font-semibold bg-yellow-100 text-yellow-800 rounded-md">
          ⚠️ CAUTION: This project is for educational purposes only. Downloading copyrighted 
          content without permission may violate YouTube&apos;s terms of service.
        </span>
      </>
    ),
    bgDesktop: "/images/youtube.gif",
    bgMobile: "/images/youtube-mb.gif",
    image: "/images/youtube.gif",
    //github: "https://github.com/your/project2",
    status: "working",
  },
  {
    title: "AeroSense",
    description:
      "Aerosense is a Python-based web application built using Django that predicts weather conditions, air quality index(AQI) and provides real-time weather updates via the OpenWeather API.",
    bgDesktop: "/images/aerosense.gif",
    bgMobile: "/images/aerosense-mb.gif",
    image: "/images/aerosense.gif",
    github: "https://github.com/sangeethsanthosh-git/AEROSENSE",
    status: "completed",
  },
  {
    title: "EchoNotes",
    description:
      "EchoNotes is a Flask/Django-based web application that converts speech into text notes. Users can either record live audio through their browser microphone or upload audio files (MP3/WAV), and EchoNotes will instantly transcribe them into clean, readable notes.",
    bgDesktop: "/images/echonotes.gif",
    bgMobile: "/images/echonotes-mb.gif",
    image: "/images/echonotes.gif",
    status: "working",
  },
  {
    title: "Portfolio",
    description:
      "This project is a personal portfolio website built to showcase my skills, projects, services, and experience as a web developer and designer. The website is modern, responsive, and interactive, designed to provide a smooth user experience while highlighting my work and capabilities.",
    bgDesktop: "/images/portfolio.gif",
    bgMobile: "/images/portfolio-mb.gif",
    image: "/images/portfolio.gif",
    live: "https://sangeethsanthoshsa.vercel.app",
    status: "completed",
  },
];

// -------------------- Component --------------------
export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeProject = projects[current];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

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
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <section
      id="project"
      className="relative min-h-[100svh] lg:h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage: `url(${
          isMobile
            ? activeProject.bgMobile || activeProject.bgDesktop
            : activeProject.bgDesktop
        })`,
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
            {activeProject.status === "working" && (
              <span className="inline-block text-xs font-semibold tracking-wide text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full mb-2">
                🚧 Currently Working On
              </span>
            )}

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {activeProject.title}
            </h2>
            <p className="text-lg text-white/80 mb-8">{activeProject.description}</p>

            <div className="flex gap-4 mb-8">
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition"
                >
                  View Live
                </a>
              )}
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition"
                >
                  GitHub Repo
                </a>
              )}
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {projects.map((proj, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full border ${
                    proj.status === "working" ? "border-orange-400" : "border-white"
                  } ${index === current ? (proj.status === "working" ? "bg-orange-400" : "bg-white") : "bg-transparent"}`}
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
              <BeforeAfterSlider before={activeProject.before} after={activeProject.after} />
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

      {/* Nav buttons + swipe hint */}
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
        <p className="text-sm text-white/80 font-mono sm:hidden">Swipe to navigate</p>
      </motion.div>
    </section>
  );
}

// -------------------- BeforeAfterSlider --------------------
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
      <Image src={before} alt="Before" fill className="object-cover rounded-xl" />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image src={after} alt="After" fill className="object-cover rounded-xl" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position}%` }}
      />
    </div>
  );
}
