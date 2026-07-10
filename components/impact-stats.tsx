"use client";

import type { Project } from "@/data/portfolio";

type ImpactStatsProps = {
  items: Project["impact"];
};

export function ImpactStats({ items }: ImpactStatsProps) {
  return (
    <div className="impact-stats">
      {items.map((item) => (
        <div key={item.label}>
          <p className="impact-value">
            {item.value}
          </p>
          <p className="impact-label">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
