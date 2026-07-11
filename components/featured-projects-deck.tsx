"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { getTechByName, type Project } from "@/data/portfolio";

type FeaturedProjectsDeckProps = {
  projects: Project[];
};

type FeaturedProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function FeaturedProjectsDeck({ projects }: FeaturedProjectsDeckProps) {
  return (
    <div className="featured-projects-deck">
      {projects.map((project, index) => (
        <FeaturedProjectCard
          key={project.title}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project, index, total }: FeaturedProjectCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.56, 1], [1, 0.98, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.56, 1], [0, -10, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.56, 1], [1, 0.62, 0.15]);
  const rotateX = useTransform(scrollYProgress, [0, 0.18, 1], [2.5, 0, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);
  const activeStyle = reduceMotion
    ? undefined
    : {
        scale,
        y,
        opacity,
        rotateX,
      };

  return (
    <div ref={wrapperRef} className="featured-project-wrapper">
      <motion.article
        style={activeStyle}
        className="featured-project-card"
      >
        <div className="featured-project-copy">
          <div className="featured-project-top">
            <p className="featured-project-kicker">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className="featured-project-tech" aria-label={`${project.title} technology stack`}>
            {project.techStack.map((item) => {
              const tech = getTechByName(item);

              return (
                <span key={item}>
                  {tech ? <img src={tech.icon} alt="" aria-hidden="true" /> : null}
                  {item}
                </span>
              );
            })}
          </div>

          <div className="featured-project-impact">
            {project.impact.slice(0, 2).map((metric) => (
              <div key={`${project.title}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="featured-project-link">
            View Case Study
            <ArrowRight aria-hidden="true" size={15} strokeWidth={1.8} />
          </a>
        </div>

        <div className="featured-project-visual">
          <div className="featured-project-screen">
            <motion.img
              style={reduceMotion ? undefined : { scale: imageScale }}
              src={project.screenshot}
              alt={`${project.title} screenshot`}
            />
          </div>
          <span className="featured-project-count">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </motion.article>
    </div>
  );
}
