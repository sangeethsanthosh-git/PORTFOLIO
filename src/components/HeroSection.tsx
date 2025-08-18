"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] lg:h-screen w-full overflow-hidden bg-black text-white">
      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block md:hidden absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/images/hero-bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Tablet, Laptop, Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/images/hero-bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Bottom-left introduction */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#225424] opacity-80 ">Explore</h2>
      </div>

      {/* Bottom-right short description */}
      <div className="absolute bottom-12 right-6 md:right-12 z-10 max-w-sm text-sm md:text-base text-[#225424] text-right">
        <p>DEV</p>
      </div>

      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-[#225424] rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#225424] animate-bounce rounded-full" />
        </div>
        <span className="text-sm text-[#225424]">Scroll Down</span>
      </div>
    </section>
  );
}
