"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#faecd2]/80 sm:text-sm sm:tracking-[0.35em]">
            Skills
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-[#f9f5ed] sm:text-3xl">Tools I Use to Build</h2>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <h3 className="text-lg font-medium text-[#f9f5ed] sm:text-xl">{group.category}</h3>

              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex max-w-full items-center gap-2.5 rounded-full bg-[#f9f5ed] px-3 py-2.5 text-xs font-medium text-[#2a2a2a] transition-transform duration-200 hover:scale-[1.02] sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      sizes="32px"
                      className="h-7 w-7 rounded-full object-contain sm:h-8 sm:w-8"
                    />
                    <span className="truncate">{skill.name}</span>
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
