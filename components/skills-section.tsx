"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { techStack } from "@/data/portfolio";

type TechPillStyle = CSSProperties & {
  "--tech-color": string;
};

const marqueeRows = [
  techStack.slice(0, 6),
  techStack.slice(6, 12),
  techStack.slice(12, 18),
  techStack.slice(18),
];

export function SkillsSection() {
  return (
    <section id="skills" className="reference-section skills-section">
      <div className="reference-container skills-reference-layout">
        <h2 className="reference-section-title skills-reference-title">Tech Stack</h2>
        <p className="skills-reference-copy">
          I work with a variety of modern technologies to build robust and performant applications.
          My core expertise lies in JavaScript frameworks with a focus on React and its ecosystem.
        </p>
      </div>

      <div className="skills-marquee-shell" aria-label="Technology stack">
        {marqueeRows.map((row, rowIndex) => {
          const repeatedRow = [...row, ...row];

          return (
            <div
              className={`tech-marquee-row ${rowIndex % 2 === 0 ? "moves-right" : "moves-left"}`}
              key={`tech-row-${rowIndex}`}
            >
              <div className="tech-marquee-track">
                {[0, 1].map((segmentIndex) => (
                  <div
                    className="tech-marquee-segment"
                    aria-hidden={segmentIndex === 1 ? "true" : undefined}
                    key={`segment-${segmentIndex}`}
                  >
                    {repeatedRow.map((item, itemIndex) => (
                      <a
                        className={`tech-marquee-pill ${item.color === "#000000" ? "is-monochrome" : ""}`}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ "--tech-color": item.color } as TechPillStyle}
                        key={`${segmentIndex}-${item.name}-${itemIndex}`}
                        tabIndex={segmentIndex === 1 ? -1 : undefined}
                      >
                        <Image src={item.icon} alt="" width={34} height={34} />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
