"use client";

import type { CSSProperties } from "react";
import { techStack } from "@/data/portfolio";

const capabilities = [
  "NextJs Custom Websites",
  "Full Stack Applications",
  "Web Design",
  "Product Design",
];

const languages = ["TypeScript", "JavaScript", "Python", "HTML", "CSS"];

const tech = [
  "React",
  "Next.js",
  "Node.js",
  "Django",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Figma",
  "Photoshop",
  "Canva",
  "Illustrator",
  "Premiere Pro",
  "Affinity",
  "Final Cut Pro",
  "Framer Motion",
  "Render",
  "Vercel",
  "Cloudflare",
];

const marqueeRows = [
  ["React", "Next.js", "TypeScript", "JavaScript", "Python"],
  ["Node.js", "Django", "Tailwind CSS", "Supabase", "PostgreSQL", "Git"],
  ["GitHub", "Figma", "Photoshop", "Canva", "Illustrator", "Premiere Pro"],
  ["Affinity", "Final Cut Pro", "Framer Motion", "Render", "Vercel", "Cloudflare"],
];

function getTechItem(name: string) {
  return techStack.find((item) => item.name === name);
}

function SkillList({ items }: { items: string[] }) {
  return (
    <ul className="skills-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SkillPill({ name }: { name: string }) {
  const item = getTechItem(name);

  if (!item) {
    return null;
  }

  return (
    <a
      className="skill-pill"
      href={item.url}
      target="_blank"
      rel="noreferrer"
      style={{ "--skill-color": item.color } as CSSProperties}
    >
      <span>{item.name}</span>
      <img src={item.icon} alt={`${item.name} logo`} loading="lazy" />
    </a>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section border-t border-border px-5 sm:px-6 lg:px-8">
      <div className="skills-shell">
        <div className="skills-content">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-groups" aria-label="Skill groups">
            <div className="skills-group">
              <h3 className="skills-group-title">Capabilities</h3>
              <SkillList items={capabilities} />
            </div>
            <div className="skills-group">
              <h3 className="skills-group-title">Languages</h3>
              <SkillList items={languages} />
            </div>
            <div className="skills-group skills-group-wide">
              <h3 className="skills-group-title">Tech</h3>
              <ul className="skills-list skills-list-columns">
                {tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="skills-marquee-panel" aria-label="Animated technology stack">
          <div className="skills-marquee">
            {marqueeRows.map((row, index) => {
              const repeated = [...row, ...row];
              const direction = index % 2 === 0 ? "right" : "left";

              return (
                <div className="skills-marquee-row" data-direction={direction} key={row.join("-")}>
                  <div className="skills-marquee-track">
                    {repeated.map((item, itemIndex) => (
                      <SkillPill key={`${item}-${itemIndex}`} name={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
