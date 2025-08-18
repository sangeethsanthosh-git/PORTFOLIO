"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills","project", "work", "footer"];

// Map each section to its active text color
const colorMap: Record<string, string> = {
  about: "text-[#225424]",
  project: "text-[#faecd2]",
  skills: "text-[#faecd2]",
  work: "text-[#faecd2]",
  footer: "text-[#225424]",
};

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50 px-6 py-4 flex items-center justify-between
      bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
    >
      {/* Logo */}
      <div
        className={`text-xl font-bold transition-colors duration-300 ${
          colorMap[active] || "text-[#225424]"
        }`}
      >
        Sangeeth
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-light">
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`hover:underline transition-colors ${
              active === id ? colorMap[id] : "text-[#225424]"
            }`}
          >
            {id === "work" ? "Services/Work" : id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}

        <a
          href="/pdf/resume.pdf"
          download
          className="hover:underline text-[#225424]"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className={`md:hidden z-50 transition-colors ${
          colorMap[active] || "text-[#225424]"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute top-16 right-4 w-[85%] bg-white/10 backdrop-blur-md border border-white/20
          text-[#225424] rounded-xl shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden"
        >
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                active === id ? colorMap[id] : "text-[#225424]"
              }`}
            >
              {id === "work" ? "Services/Work" : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}

          <a
            href="/pdf/resume.pdf"
            download
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
