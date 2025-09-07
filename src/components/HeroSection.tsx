"use client";
import { useEffect, useState, useMemo } from "react";

export default function HeroSection() {
  const lines = useMemo(() => ["Hi I'M", "SANGEETH SANTHOSH", "WEB DEVELOPER"], []);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (charIndex < lines[currentLine].length) {
        // Type characters one by one
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + lines[currentLine][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Delay before moving to next line
        const timeout = setTimeout(() => {
          if (currentLine < lines.length - 1) {
            setCurrentLine((prev) => prev + 1);
            setDisplayedText("");
            setCharIndex(0);
          } else {
            // Restart loop when last line is done
            setCurrentLine(0);
            setDisplayedText("");
            setCharIndex(0);
          }
        }, 1200);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine, lines]);

  return (
    <section className="relative h-[100svh] w-full bg-[#faecd2] flex flex-col items-center justify-center text-green-900 px-6">
      <div className="text-center leading-snug">
        {/* Background Portfolio Text */}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[17vw] md:text-[17vw] lg:text-[16rem] font-bold text-green-900 opacity-5 select-none pointer-events-none">
          PORTFOLIO
        </span>

        {/* Line 1 */}
        <h1 className="text-lg font-poppins font-light tracking-widest">
          {currentLine === 0 ? displayedText : lines[0]}
        </h1>

        {/* Line 2 */}
        <h2 className="text-4xl md:text-6xl font-bold font-nanum mt-4 tracking-wide">
          {currentLine === 1 ? displayedText : currentLine > 1 ? lines[1] : ""}
        </h2>

        {/* Line 3 */}
        <h3 className="text-lg md:text-xl font-poppins mt-4 tracking-widest">
          {currentLine === 2 ? displayedText : currentLine > 2 ? lines[2] : ""}
        </h3>
      </div>

      {/* Bottom-left introduction */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10">
        <h2 className="text-2xl md:text-[2.5rem] font-bold text-[#225424] opacity-80 font-poppins">
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
