"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#faecd2]/80">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#f9f5ed]">Tools I Use to Build</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-medium text-[#f9f5ed]">{group.category}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-full bg-[#f9f5ed] px-4 py-3 text-sm font-medium text-[#2a2a2a] transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      sizes="32px"
                      className="h-8 w-8 rounded-full object-contain"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
