"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolio";

const fadeTransition = { duration: 0.4 };
const isAnimatedAsset = (src: string) => src.endsWith(".webp") || src.endsWith(".gif");

export default function Project() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeProject = projects[current];

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeProject.title}-background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fadeTransition}
          className="absolute inset-0"
        >
          <Image
            src={activeProject.backdropDesktop}
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            unoptimized={isAnimatedAsset(activeProject.backdropDesktop)}
            sizes="100vw"
            className="hidden object-cover lg:block"
          />
          <Image
            src={activeProject.backdropMobile ?? activeProject.backdropDesktop}
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            unoptimized={isAnimatedAsset(
              activeProject.backdropMobile ?? activeProject.backdropDesktop
            )}
            sizes="100vw"
            className="object-cover lg:hidden"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#faecd2]/80 sm:text-sm sm:tracking-[0.35em]">
              Projects
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Selected Build Highlights
            </h2>
          </div>

          <div className="flex gap-3 self-start">
            <button
              type="button"
              onClick={prev}
              aria-label="Show previous project"
              className="rounded-full border border-white/20 bg-white/10 p-3 transition-transform duration-200 hover:scale-[1.02]"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Show next project"
              className="rounded-full border border-white/20 bg-white/10 p-3 transition-transform duration-200 hover:scale-[1.02]"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.title}-copy`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={fadeTransition}
              >
                {activeProject.status === "working" ? (
                  <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-300 sm:text-xs sm:tracking-[0.2em]">
                    Currently Working On
                  </span>
                ) : null}

                <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {activeProject.description}
                </p>

                {activeProject.notice ? (
                  <p className="mt-4 rounded-2xl bg-yellow-100/95 px-4 py-3 text-sm font-medium text-yellow-900">
                    {activeProject.notice}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  {activeProject.live ? (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02]"
                    >
                      View Live
                    </a>
                  ) : null}

                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02]"
                    >
                      GitHub Repo
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:justify-start">
              {projects.map((project, index) => {
                const isActive = index === current;
                const isWorking = project.status === "working";

                return (
                  <button
                    key={project.title}
                    type="button"
                    aria-label={`Show ${project.title}`}
                    onClick={() => setCurrent(index)}
                    className={`h-3 w-3 rounded-full border transition-transform duration-200 hover:scale-110 ${
                      isWorking ? "border-orange-300" : "border-white"
                    } ${isActive ? (isWorking ? "bg-orange-300" : "bg-white") : "bg-transparent"}`}
                  />
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-md"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.title}-media`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeTransition}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl"
              >
                {activeProject.before && activeProject.after ? (
                  <BeforeAfterSlider before={activeProject.before} after={activeProject.after} />
                ) : (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={activeProject.preview}
                      alt={`${activeProject.title} preview`}
                      fill
                      loading="lazy"
                      unoptimized={isAnimatedAsset(activeProject.preview)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-center text-sm text-white/60 sm:text-left">
              Swipe on mobile or use the controls to browse projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSlider({ after, before }: { after: string; before: string }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, nextPosition)));
  };

  return (
    <div
      className="relative aspect-[4/3] cursor-col-resize overflow-hidden select-none"
      style={{ touchAction: "none" }}
      onPointerDown={(event) => {
        setIsDragging(true);
        updatePosition(event.clientX, event.currentTarget);
      }}
      onPointerMove={(event) => {
        if (isDragging) {
          updatePosition(event.clientX, event.currentTarget);
        }
      }}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
    >
      <Image
        src={before}
        alt="Original preview"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image
          src={after}
          alt="Processed preview"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-y-0 w-[2px] bg-white" style={{ left: `${position}%` }} />

      <div className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white sm:right-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
        After
      </div>
    </div>
  );
}
