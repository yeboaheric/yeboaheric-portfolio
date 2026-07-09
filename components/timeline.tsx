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
    <section>
      <h3 className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {Icon ? <Icon aria-hidden="true" size={17} strokeWidth={1.75} /> : null}
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <article key={`${item.title}-${item.date}`} className="relative pl-7">
            <span className="timeline-track absolute left-0 top-2 h-full w-px bg-neutral-200" aria-hidden="true" />
            <span className="timeline-dot absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full bg-black" aria-hidden="true" />
            <div className="rounded-3xl border border-neutral-200 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                {item.date}
              </p>
              <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-base font-semibold text-black">{item.title}</h4>
                <p className="text-sm text-neutral-500">{item.place}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-black underline underline-offset-4 transition hover:text-neutral-600"
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
