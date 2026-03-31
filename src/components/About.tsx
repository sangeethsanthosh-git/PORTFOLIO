import Image from "next/image";
import { about, type TextSegment } from "@/data/portfolio";

function segmentClass(tone: TextSegment["tone"]) {
  if (tone === "accent") {
    return "font-semibold text-[#225424]";
  }

  if (tone === "strong") {
    return "font-semibold text-white";
  }

  return "";
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-24 text-white">
      <Image
        src={about.backgroundImage}
        alt="Portrait background"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]">About</p>

        <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight md:text-4xl">
          {about.intro.map((segment, index) => (
            <span key={`${segment.text}-${index}`} className={segmentClass(segment.tone)}>
              {segment.text}
            </span>
          ))}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
          {about.summary.map((segment, index) => (
            <span key={`${segment.text}-${index}`} className={segmentClass(segment.tone)}>
              {segment.text}
            </span>
          ))}
        </p>

        <a
          href={about.ctaHref}
          className="mt-8 inline-flex rounded-full border border-white/30 bg-[#faecd2] px-6 py-3 text-sm font-medium text-[#225424] transition-transform duration-200 hover:scale-[1.02]"
        >
          {about.ctaLabel}
        </a>
      </div>
    </section>
  );
}
