"use client";

import type { Project } from "@/data/portfolio";

type FeatureGridProps = {
  items: Project["features"];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="feature-grid">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="feature-card"
          >
            <div className="feature-card-inner">
              <div className="feature-card-icon">
                <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <h3>
                  {item.title}
                </h3>
                <p>
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
