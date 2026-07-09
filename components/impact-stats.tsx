"use client";

import type { Project } from "@/data/portfolio";

type ImpactStatsProps = {
  items: Project["impact"];
};

export function ImpactStats({ items }: ImpactStatsProps) {
  return (
    <div className="mt-5 grid gap-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border-t border-neutral-200 pt-4 sm:border-t-0 sm:pt-0">
          <p className="text-4xl font-medium tracking-[-0.05em] text-black sm:text-5xl">
            {item.value}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-neutral-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
