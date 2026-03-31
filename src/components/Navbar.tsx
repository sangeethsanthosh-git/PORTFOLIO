"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  about: "text-[#225424]",
  education: "text-[#f9f5ed]",
  skills: "text-[#f9f5ed]",
  project: "text-[#f9f5ed]",
  services: "text-[#f9f5ed]",
  experience: "text-[#225424]",
  work: "text-[#f9f5ed]",
  contact: "text-[#f9f5ed]",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof navigation)[number]["id"]>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as (typeof navigation)[number]["id"]);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeColor = colorMap[activeSection] ?? "text-[#225424]";

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-lg backdrop-blur-md">
      <a href="#top" className={`text-xl font-semibold transition-colors duration-300 ${activeColor}`}>
        S.S
      </a>

      <nav className="hidden items-center gap-6 text-sm md:flex">
        {navigation.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`transition-colors duration-300 ${
              activeSection === id ? `${colorMap[id]} font-semibold` : "text-[#225424] hover:text-[#173d1a]"
            }`}
          >
            {label}
          </Link>
        ))}

        <a
          href="/pdf/Sangeeth_Santhosh_Resume.pdf"
          download
          className="rounded-full border border-[#225424]/20 px-4 py-2 font-medium text-[#225424] transition-transform duration-200 hover:scale-[1.02]"
        >
          Resume
        </a>
      </nav>

      <button
        type="button"
        className={`z-50 transition-colors md:hidden ${activeColor}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen ? (
        <div className="absolute right-4 top-16 flex w-56 flex-col gap-3 rounded-2xl border border-[#225424]/15 bg-[#faecd2] p-4 text-sm text-[#225424] shadow-xl md:hidden">
          {navigation.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                activeSection === id ? `${colorMap[id]} font-semibold` : "text-[#225424]"
              }`}
            >
              {label}
            </Link>
          ))}

          <a
            href="/pdf/Sangeeth_Santhosh_Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-[#225424]/20 px-4 py-2 text-center font-medium transition-transform duration-200 hover:scale-[1.02]"
          >
            Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
