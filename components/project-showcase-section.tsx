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
    reduceMotion
      ? [0, 0, 0, 0, 0]
      : index === 0
        ? [0, 0, 0, 24, 72]
        : [-140, -44, 0, 24, 72]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    reduceMotion
      ? [1, 1, 1, 1, 1]
      : index === 0
        ? [1, 1, 1, 0.72, 0.22]
        : [0.12, 0.5, 1, 0.72, 0.22]
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [0.98, 1, 0.985]
  );
  const mockupX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.5, 0.72, 1],
    reduceMotion
      ? [0, 0, 0, 0, 0]
      : index === 0
        ? [0, 0, 0, 16, 54]
        : [-110, -28, 0, 16, 54]
  );
  const mockupOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    reduceMotion
      ? [1, 1, 1, 1, 1]
      : index === 0
        ? [1, 1, 1, 0.84, 0.3]
        : [0.1, 0.45, 1, 0.84, 0.3]
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
      className="project-showcase-panel"
    >
      <div className="project-showcase-sticky">
        <div className="project-showcase-layout">
          <motion.div
            style={{ x: contentX, opacity: contentOpacity, scale: contentScale }}
            transition={{ duration: 0.4, ease: softEase }}
            className="project-showcase-copy"
          >
            <ProjectMeta project={project} />

            <h1 className="project-showcase-title">
              {project.title}
            </h1>

            <p className="project-showcase-category">
              {project.category}
            </p>

            <p className="project-showcase-description">
              {project.description}
            </p>

            <div className="project-showcase-block">
              <p className="project-showcase-label">
                Technologies
              </p>
              <TechPills items={project.techStack} />
            </div>

            <div className="project-showcase-block">
              <p className="project-showcase-label">
                Key Features
              </p>
              <FeatureGrid items={project.features} />
            </div>

            <div className="project-showcase-block">
              <p className="project-showcase-label">
                Impact
              </p>
              <ImpactStats items={project.impact} />
            </div>

            <div className="project-showcase-actions">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                className="reference-button"
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
                  className="reference-outline-button"
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
            className="project-showcase-visual"
          >
            <div className="project-year-badge">
              {project.year}
            </div>

            <div className="project-role-badge">
              {project.role}
            </div>

            <div className="project-laptop-wrap">
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
