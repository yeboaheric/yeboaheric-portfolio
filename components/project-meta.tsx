"use client";

import { CalendarDays, Clock3, Users2 } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { label: project.year, icon: CalendarDays },
    { label: project.duration, icon: Clock3 },
    { label: project.teamSize, icon: Users2 },
  ];

  return (
    <div className="project-meta">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <span key={item.label} className="inline-flex items-center gap-2">
            <Icon aria-hidden="true" size={16} strokeWidth={1.75} />
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
