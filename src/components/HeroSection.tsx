"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-195  overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered floating text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
          Hi, I&apos;m Sangeeth.
        </h1>
      </div>

      {/* Bottom-left introduction */}
      <div className="absolute block lg:hidden bottom-10 left-6">
  <h2 className="text-lg font-bold">Explore</h2>
</div>
      <div className="absolute bottom-6 left-6 md:left-12 z-10 hidden lg:flex">
        <h2 className="lg:block text-6xl font-bold">Explore</h2>
      </div>

      {/* Bottom-right short description */}
      <div className="absolute block lg:hidden bottom-10 right-6 md:right-12 z-10 max-w-sm text-sm md:text-base text-gray-200 text-right">
        <p className="font-bold">
          Web Developer.
        </p>
      </div>
      <div className="absolute bottom-6 right-6 md:right-12 z-10 max-w-sm text-sm md:text-base text-gray-200 text-right hidden lg:flex">
        <p className="font-bold">
          Web Developer.
        </p>
      </div>
      {/* Scroll Down mouse icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 block lg:hidden">
  <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
    <div className="w-1 h-2 bg-white animate-bounce rounded-full" />
  </div>
  <span className="text-sm text-white/80">Scroll Down</span>
</div>

       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden lg:flex">
  <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
    <div className="w-1 h-2 bg-white animate-bounce rounded-full" />
  </div>
  <span className="text-sm text-white/80">Scroll Down</span>
</div>

    </section>
  );
}
