"use client";

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative bg-black text-white px-6 py-20"
      style={{
        backgroundImage: "url('/images/about.jpg')", // replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main Intro */}
        <h2 className="text-2xl md:text-4xl font-light leading-snug max-w-4xl">
          I’m a <span className="font-semibold text-[#225424]">Full-Stack Developer</span><span> with a passion for creating digital solutions that are both functional and visually engaging — </span>
          From <span className="text-[#225424] font-semibold"> sleek user interfaces to reliable backends,</span>  
          I focus on building products that deliver clarity, performance, and impact. <span className="text-white font-semibold">& focus on</span> delivering <span className="text-[#225424] font-semibold">clarity, performance, and impact.</span> 
        </h2>

        {/* Supporting Description */}
        <p className="text-gray-300 text-sm md:text-base mt-6 max-w-2xl">
          My approach blends <span className="text-white"> clean code, thoughtful design, and curiosity-driven problem solving.</span> 
          For me development isn’t just about building websites—   
          <span className="text-[#225424]">it’s about crafting digital experiences that matter.</span>
        </p>

        {/* CTA */}
        <a href="#project">
          <button className="mt-8 bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white border border-white transition">
            See My Work
          </button>
        </a>
      </div>
    </section>
  );
}
