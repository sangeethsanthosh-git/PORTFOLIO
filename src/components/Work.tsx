// components/Work.tsx
"use client";

import Image from "next/image";

const workItems = [
  {
    title: "Student Portfolio Website",
    description: "A responsive personal website built for a final-year CS student.",
    image: "/images/proj1.jpg",
    link: "https://example.com",
    date: "July 2025",
    type: "Portfolio",
  },
  {
    title: "College Event Site",
    description: "Landing page for an inter-college tech fest built with animations.",
    image: "/images/proj2.jpg",
    link: "https://example.com",
    date: "June 2025",
    type: "Landing Page",
  },
  {
    title: "Blog Platform",
    description: "Simple blog with admin panel using Next.js & MySQL.",
    image: "/images/proj3.jpg",
    link: "https://example.com",
    date: "May 2025",
    type: "CMS",
  },
];

export default function Work() {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#f9f9f9] text-black">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10">
        <span className="text-neutral-400">Recent</span>{" "}
        <span className="italic font-light">work</span>{" "}
        <span className="text-neutral-400">delivered</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden relative shadow-xl group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs">{item.date}</span>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-xs px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
