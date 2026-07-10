"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { techStack } from "@/data/portfolio";

type OrbitStyle = CSSProperties & {
  "--orbit-angle": string;
  "--orbit-radius": string;
};

export function SkillsSection() {
  return (
    <section id="skills" className="reference-section skills-section">
      <div className="reference-container skills-reference-layout">
        <h2 className="reference-section-title skills-reference-title">Tech Stack</h2>
        <p className="skills-reference-copy">
          I work with a variety of modern technologies to build robust and performant applications.
          My core expertise lies in JavaScript frameworks with a focus on React and its ecosystem.
        </p>

        <div className="tech-orbit" aria-label="Technology stack">
          <div className="tech-orbit-track">
            {techStack.map((item, index) => {
              const ring = index % 3;
              const ringCount = ring === 0 ? 8 : ring === 1 ? 8 : 7;
              const position = Math.floor(index / 3);
              const angle = (position * 360) / ringCount + ring * 14;
              const radius = ring === 0 ? 72 : ring === 1 ? 126 : 178;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="tech-orbit-item"
                  title={item.name}
                  aria-label={item.name}
                  style={
                    {
                      "--orbit-angle": `${angle}deg`,
                      "--orbit-radius": `${radius}px`,
                    } as OrbitStyle
                  }
                >
                  <Image src={item.icon} alt={`${item.name} logo`} width={28} height={28} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
