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
      className={`project-row ${
        isReversed ? "lg:[&>.macbook-mockup-wrap]:order-2" : ""
      }`}
    >
      <div className="macbook-mockup-wrap">
        <MacbookMockup src={project.screenshot} alt={`${project.title} screenshot`} />
      </div>
      <div className="project-copy">
        <p className="project-index">
          0{index + 1} / Selected work
        </p>
        <h3 className="project-row-title">
          {project.title}
        </h3>
        <p className="project-row-description">
          {project.description}
        </p>
        <div className="project-tech-list">
          {project.techStack.map((item) => {
            const tech = getTechByName(item);

            return (
              <motion.span
                key={item}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="project-tech-pill group"
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
        <h4 className="project-feature-heading">Key Features</h4>
        <ul className="project-feature-list">
          {project.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <li key={feature.title}>
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
          className="project-view-link group"
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
