import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="bg-black py-20 text-[#f9f5ed] sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#faecd2]/80 sm:text-sm sm:tracking-[0.35em]">
            Services
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">What I Can Help With</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform duration-200 hover:scale-[1.02] sm:p-6"
            >
              <h3 className="text-lg font-medium text-[#f9f5ed]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
