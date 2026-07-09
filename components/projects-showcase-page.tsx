"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectProgressNav } from "@/components/project-progress-nav";
import { ProjectShowcaseSection } from "@/components/project-showcase-section";
import { projects } from "@/data/portfolio";

export function ProjectsShowcasePage() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = sectionRefs.current.filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const nextIndex = elements.findIndex((element) => element === visible.target);
        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      {
        rootMargin: "-28% 0px -28% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [projects.length]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    sectionRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative overflow-x-clip">
      <ProjectProgressNav
        count={projects.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
        onPrevious={() => scrollToIndex(activeIndex - 1)}
        onNext={() => scrollToIndex(activeIndex + 1)}
      />

      {projects.map((project, index) => (
        <ProjectShowcaseSection
          key={project.title}
          project={project}
          index={index}
          total={projects.length}
          sectionRef={(node) => {
            sectionRefs.current[index] = node;
          }}
        />
      ))}
    </div>
  );
}
