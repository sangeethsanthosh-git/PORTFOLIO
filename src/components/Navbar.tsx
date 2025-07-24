"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50 px-6 py-4 flex items-center justify-between
      bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-white">
      
      {/* Logo */}
      <div className="text-xl font-bold">Sangeeth</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-light">
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#projects" className="hover:underline">Projects</Link>
        <Link href="#skills" className="hover:underline">Skills</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
        <Link href="#blog" className="hover:underline">Blog</Link>
        <Link href="#resume" className="hover:underline">Resume</Link>
        <Link href="#testimonials" className="hover:underline">Testimonials</Link>
        
        {/* Get Started Button */}
       
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-[85%] bg-white/10 backdrop-blur-md border border-white/20
          text-white rounded-xl shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden">
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="#blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="#resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          
          {/* Close button */}
          
          {/* Get Started Button */}
          
        </div>
      )}
    </header>
  );
}
