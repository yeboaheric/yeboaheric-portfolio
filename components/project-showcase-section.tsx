"use client";

import { type RefCallback, useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MacbookMockup } from "@/components/macbook-mockup";
import { FeatureGrid } from "@/components/feature-grid";
import { ImpactStats } from "@/components/impact-stats";
import { ProjectMeta } from "@/components/project-meta";
import { TechPills } from "@/components/tech-pills";
import { softEase } from "@/components/motion-tokens";
import type { Project } from "@/data/portfolio";

type ProjectShowcaseSectionProps = {
  project: Project;
  index: number;
  total: number;
  sectionRef: RefCallback<HTMLElement>;
};

export function ProjectShowcaseSection({
  project,
  index,
  total,
  sectionRef,
}: ProjectShowcaseSectionProps) {
  const reduceMotion = useReducedMotion();
  const localRef = useRef<HTMLElement | null>(null);

  const setRefs: RefCallback<HTMLElement> = (node) => {
    localRef.current = node;
    sectionRef(node);
  };

  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start end", "end start"],
  });

  const contentX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5, 0.72, 1],
    reduceMotion ? [0, 0, 0, 0, 0] : [-140, -44, 0, 24, 72]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    reduceMotion ? [1, 1, 1, 1, 1] : [0.12, 0.5, 1, 0.72, 0.22]
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.98, 1, 0.985]
  );
  const mockupX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5, 0.72, 1],
    reduceMotion ? [0, 0, 0, 0, 0] : [-110, -28, 0, 16, 54]
  );
  const mockupOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    reduceMotion ? [1, 1, 1, 1, 1] : [0.1, 0.45, 1, 0.84, 0.3]
  );
  const mockupScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.965, 1, 0.99]
  );

  return (
    <section
      ref={setRefs}
      id={`project-${slugify(project.title)}`}
      data-project-panel
      className="relative min-h-[180svh] lg:min-h-[210svh]"
    >
      <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,0.92fr)] lg:gap-16">
          <motion.div
            style={{ x: contentX, opacity: contentOpacity, scale: contentScale }}
            transition={{ duration: 0.4, ease: softEase }}
            className="max-w-3xl"
          >
            <ProjectMeta project={project} />

            <h1 className="mt-6 text-balance text-[clamp(3.2rem,7vw,6.6rem)] font-medium uppercase leading-[0.9] tracking-[-0.07em] text-black">
              {project.title}
            </h1>

            <p className="mt-4 text-2xl font-medium tracking-[-0.03em] text-neutral-500 sm:text-3xl">
              {project.category}
            </p>

            <p className="mt-7 max-w-2xl text-balance text-lg leading-[1.6] text-neutral-700 sm:text-xl">
              {project.description}
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Technologies
              </p>
              <TechPills items={project.techStack} />
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Key Features
              </p>
              <FeatureGrid items={project.features} />
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Impact
              </p>
              <ImpactStats items={project.impact} />
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition hover:bg-neutral-800"
              >
                View Live Site
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
              </motion.a>

              {project.repoUrl ? (
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(0,0,0,0.03)] transition hover:border-black"
                >
                  <Code2 aria-hidden="true" size={16} strokeWidth={1.75} />
                  View Code
                </motion.a>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            style={{ x: mockupX, opacity: mockupOpacity, scale: mockupScale }}
            transition={{ duration: 0.4, ease: softEase }}
            className="relative lg:pl-4"
          >
            <div className="pointer-events-none absolute right-0 top-6 z-10 rounded-[2rem] border border-neutral-200 bg-white px-7 py-5 text-3xl font-medium tracking-[-0.04em] text-black shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              {project.year}
            </div>

            <div className="pointer-events-none absolute bottom-6 left-0 z-10 rounded-[1.4rem] border border-neutral-200 bg-white px-6 py-4 text-lg font-semibold tracking-[-0.03em] text-black shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              {project.role}
            </div>

            <div className="mx-auto w-full max-w-[48rem] pr-2 sm:pr-8 lg:pr-0">
              <MacbookMockup
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
