"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const lines = ["Hi I'M", "SANGEETH SANTHOSH", "WEB DEVELOPER"];
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (charIndex < lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + lines[currentLine][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else if (currentLine < lines.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setDisplayedText("");
          setCharIndex(0);
        }, 800);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine, lines]);

  return (
    <section className="relative min-h-screen w-full bg-neutral-50 flex flex-col items-center justify-center text-green-900 px-6">
      <div className="text-center leading-snug">
        {/* Line 1 */}
        <h1 className="text-lg font-poppins font-light tracking-widest">
          {currentLine === 0 ? displayedText : lines[0]}
        </h1>

        {/* Line 2 */}
        <h2 className="text-5xl md:text-7xl font-bold font-nanum mt-4 tracking-wide">
          {currentLine === 1 ? displayedText : currentLine > 1 ? lines[1] : ""}
        </h2>

        {/* Line 3 */}
        <h3 className="text-xl md:text-2xl font-rubik mt-4 tracking-widest">
          {currentLine === 2 ? displayedText : currentLine > 2 ? lines[2] : ""}
        </h3>
      </div>

      {/* Bottom-left introduction */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#225424] opacity-80 font-poppins">
          Explore
        </h2>
      </div>

      {/* Bottom-right description */}
      <div className="absolute bottom-12 right-6 md:right-12 z-10 max-w-sm text-sm md:text-base text-[#225424] text-right font-rubik">
        <p>DEV</p>
      </div>

      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-[#225424] rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#225424] animate-bounce rounded-full" />
        </div>
        <span className="text-sm text-[#225424] font-poppins">Scroll Down</span>
      </div>
    </section>
  );
}
