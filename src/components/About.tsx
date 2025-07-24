"use client";


export default function About() {
  return (
    <section id="about" className="bg-black text-white px-6  py-20">
      {/* Section Label */}
      

      {/* Main Intro */}
      <h2 className="text-2xl md:text-4xl font-light leading-snug max-w-4xl">
        I’m a <span className="font-semibold text-white">creative full-stack developer</span> who doesn’t just build websites — 
        <span className="text-red-500 font-semibold"> I design digital stories.</span>  
        From sleek UIs to rock-solid backends, I craft <span className="text-white font-semibold">experiences</span> that feel as good as they look.
      </h2>

      {/* Supporting Description */}
      <p className="text-gray-400 text-sm md:text-base mt-6 max-w-2xl">
        Every line of code I write is driven by <span className="text-white">curiosity</span>, 
        <span className="text-white"> clarity</span>, and the pursuit of <span className="text-white">meaningful design</span>.  
        I believe in <span className="text-white">clean code</span>, consistent rhythm, and bold ideas.  
        Let’s not just build products — <span className="text-red-500">let’s build experiences that stay with people.</span>
      </p>

      {/* CTA */}
      <a href="#project">
        <button className="mt-8 border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
        See My Work
      </button>
      </a>
    </section>
  );
}
