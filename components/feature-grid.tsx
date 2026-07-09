"use client";

import type { Project } from "@/data/portfolio";

type FeatureGridProps = {
  items: Project["features"];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500">
                <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
