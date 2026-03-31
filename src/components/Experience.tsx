import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#faecd2] py-20 text-[#225424] sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#225424]/70 sm:text-sm sm:tracking-[0.35em]">
          Experience
        </p>
        <h2 className="mt-4 text-[clamp(2.5rem,10vw,4.5rem)] font-semibold tracking-[0.06em] sm:tracking-[0.08em]">
          {experience.title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#225424]/70 sm:mt-6 sm:text-base">
          {experience.summary}
        </p>
      </div>
    </section>
  );
}
