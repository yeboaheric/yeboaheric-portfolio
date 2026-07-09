"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Feather,
  RefreshCw,
  Settings2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type ApproachItem = {
  title: string;
  meaning: string;
  icon: LucideIcon;
};

const approaches: ApproachItem[] = [
  {
    title: "Simplicity",
    icon: Feather,
    meaning:
      "I strip away the unnecessary so every interface feels intuitive and effortless to use — clarity over clutter, always.",
  },
  {
    title: "Functionality",
    icon: Settings2,
    meaning:
      "Every feature is built to work reliably and solve a real problem — form always follows purpose.",
  },
  {
    title: "Elegance",
    icon: Sparkles,
    meaning:
      "Thoughtful details and refined visuals turn a working product into a delightful experience.",
  },
  {
    title: "Adaptability",
    icon: RefreshCw,
    meaning:
      "My solutions scale and respond — across devices, use cases, and evolving requirements — without breaking.",
  },
];

type ApproachSectionProps = {
  compact?: boolean;
};

export function ApproachSection({ compact = false }: ApproachSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <h3 className={compact ? "text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl" : "text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl"}>
        My approach
      </h3>
      <div className={compact ? "approach-grid-compact mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" : "mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4"}>
        {approaches.map((approach, index) => {
          const Icon = approach.icon;
          const isActive = activeIndex === index;
          const step = String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={approach.title}
              layout
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex((current) => (current === index ? null : current))}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex((current) => (current === index ? null : current))}
              className={
                compact
                  ? "group rounded-[1.25rem] border border-neutral-200 bg-white p-4 text-left transition-colors duration-300 hover:bg-neutral-50/60 focus-within:bg-neutral-50/60"
                  : "group rounded-[1.75rem] border border-transparent px-0 py-4 text-left transition-colors duration-300 hover:border-neutral-200 hover:bg-neutral-50/60 hover:px-5 focus-within:border-neutral-200 focus-within:bg-neutral-50/60 focus-within:px-5"
              }
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.25 }}
              tabIndex={0}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-6xl font-light leading-none tracking-[-0.08em] text-neutral-300 sm:text-7xl">
                  {step}
                </span>
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-500"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </motion.div>
              </div>
              <h4 className="mt-8 text-[2rem] font-semibold tracking-[-0.05em] text-black">
                {approach.title}
              </h4>

              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    key="meaning"
                    initial={reduceMotion ? false : { height: 0, opacity: 0, y: -8 }}
                    animate={reduceMotion ? undefined : { height: "auto", opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 border-t border-neutral-200 pt-4">
                      <p className="max-w-[22rem] text-base leading-8 text-neutral-600">
                        {approach.meaning}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
