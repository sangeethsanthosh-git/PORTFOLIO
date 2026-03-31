import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 text-[#f9f5ed]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]/80">Services</p>
          <h2 className="mt-4 text-3xl font-semibold">What I Can Help With</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform duration-200 hover:scale-[1.02]"
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
