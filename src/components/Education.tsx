import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-[#2a2a2a] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]/80">Education</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#f9f5ed]">Academic Journey</h2>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={`${item.year}-${item.degree}`}
              className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-[#faecd2]/80">{item.year}</span>

              <div className="text-left md:text-right">
                <p className="text-lg font-medium text-[#f9f5ed]">{item.degree}</p>
                <p className="mt-1 text-sm text-white/60">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
