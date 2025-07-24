"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "This is a description for the first project.",
    bg: "/images/proj1.jpg",
    video: "/images/hero-bg.mp4",
    github: "https://github.com/your/project1",
    live: "https://yourproject1.com",
  },
  {
    title: "Project Two",
    description: "This is a description for the second project.",
    bg: "/bg/project2.jpg",
    video: "/videos/project2.mp4",
    github: "https://github.com/your/project2",
    live: "https://yourproject2.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const activeProject = projects[current];

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="project" className="relative min-h-[100svh] lg:h-screen w-full text-white overflow-hidden"
      style={{ backgroundImage: `url(${activeProject.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-20 py-16">
        {/* Left Text Area */}
        <div className="max-w-xl order-2 lg:order-1">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {activeProject.title}
          </h2>
          <p className="text-lg text-white/80 mb-6">
            {activeProject.description}
          </p>

          {/* Overlay Buttons */}
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

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full border border-white ${index === current ? "bg-white" : "bg-transparent"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Video */}
        <div className="relative w-full max-w-md mt-10 lg:mt-0 order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg">
          <video
            src={activeProject.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Center Arrows */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center space-y-2"
      >
        <div className="flex gap-4">
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
        <p className="text-sm text-white/80 font-mono">Scroll to next</p>
      </motion.div>
    </section>
  );
}
