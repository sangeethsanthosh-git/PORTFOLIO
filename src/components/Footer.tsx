import Image from "next/image";
import { socials } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]/80">Contact</p>
            <h2 className="mt-4 text-5xl font-semibold leading-none text-white">
              <span className="block">Get In</span>
              <span className="block">Touch</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">{socials.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#f9f5ed]">{socials.heading}</h3>
            <a
              href={socials.emailHref}
              className="mt-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Email Me
            </a>

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {socials.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={28}
                      height={28}
                      loading="lazy"
                      sizes="28px"
                      className="h-7 w-7"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/45">
          <p>&copy; {year} {socials.copyrightName}</p>
        </div>
      </div>
    </footer>
  );
}
