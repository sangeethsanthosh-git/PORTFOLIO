import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-[#2a2a2a] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#faecd2]/80 sm:text-sm sm:tracking-[0.35em]">
            Education
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-[#f9f5ed] sm:text-3xl">Academic Journey</h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {education.map((item) => (
            <div
              key={`${item.year}-${item.degree}`}
              className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:gap-4 md:flex-row md:items-center md:justify-between"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#faecd2]/80 sm:text-sm">
                {item.year}
              </span>

              <div className="text-left md:text-right">
                <p className="text-base font-medium text-[#f9f5ed] sm:text-lg">{item.degree}</p>
                <p className="mt-1 text-sm text-white/60">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
