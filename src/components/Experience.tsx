import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#faecd2] py-24 text-[#225424]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#225424]/70">Experience</p>
        <h2 className="mt-4 text-5xl font-semibold tracking-[0.08em]">{experience.title}</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#225424]/70">
          {experience.summary}
        </p>
      </div>
    </section>
  );
}
