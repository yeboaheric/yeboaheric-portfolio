"use client";

import { ChevronRight } from "lucide-react";
import type { TimelineItem } from "@/data/portfolio";
import { timelineLabels } from "@/data/portfolio";

type TimelineProps = {
  title: string;
  items: TimelineItem[];
};

export function Timeline({ title, items }: TimelineProps) {
  const Icon = timelineLabels[title as keyof typeof timelineLabels];

  return (
    <section className="timeline-section">
      <h3 className="timeline-heading">
        {Icon ? <Icon aria-hidden="true" size={17} strokeWidth={1.75} /> : null}
        {title}
      </h3>
      <div className="timeline-list">
        {items.map((item) => (
          <article key={`${item.title}-${item.date}`} className="timeline-item">
            <span className="timeline-track" aria-hidden="true" />
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-date">
                {item.date}
              </p>
              <div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-place">{item.place}</p>
              </div>
              <p className="timeline-description">{item.description}</p>
              <a
                href="#contact"
                className="timeline-link group"
              >
                Show details
                <span className="inline-flex transition duration-200 group-hover:translate-x-0.5">
                  <ChevronRight aria-hidden="true" size={15} strokeWidth={1.75} />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
