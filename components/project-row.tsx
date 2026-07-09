"use client";

import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MacbookMockup } from "@/components/macbook-mockup";
import { getTechByName, type Project } from "@/data/portfolio";

type ProjectRowProps = {
  project: Project;
  index: number;
};

export function ProjectRow({ project, index }: ProjectRowProps) {
  const isReversed = index % 2 === 1;
  const reduceMotion = useReducedMotion();

  return (
    <article
      className={`grid gap-8 border-t border-neutral-200 py-12 lg:grid-cols-2 lg:items-center lg:gap-14 ${
        isReversed ? "lg:[&>.macbook-mockup-wrap]:order-2" : ""
      }`}
    >
      <div className="macbook-mockup-wrap">
        <MacbookMockup src={project.screenshot} alt={`${project.title} screenshot`} />
      </div>
      <div className="project-copy">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
          0{index + 1} / Selected work
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-8 text-neutral-600">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((item) => {
            const tech = getTechByName(item);

            return (
              <motion.span
                key={item}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-white"
              >
                {tech ? (
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="h-3.5 w-3.5 grayscale transition group-hover:grayscale-0"
                  />
                ) : null}
                {item}
              </motion.span>
            );
          })}
        </div>
        <h4 className="mt-8 text-sm font-semibold text-black">Key Features</h4>
        <ul className="mt-4 grid gap-3">
          {project.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <li key={feature.title} className="flex items-center gap-3 text-sm text-neutral-700">
                <FeatureIcon aria-hidden="true" size={16} strokeWidth={1.75} className="text-neutral-500" />
                {feature.title}
              </li>
            );
          })}
        </ul>
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={reduceMotion ? undefined : { y: -1 }}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black underline underline-offset-4 transition hover:text-neutral-600"
        >
          View Project
          <span className="inline-flex transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ExternalLink aria-hidden="true" size={16} strokeWidth={1.75} />
          </span>
        </motion.a>
      </div>
    </article>
  );
}
