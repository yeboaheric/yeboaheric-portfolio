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
    <div className={compact ? "approach-section is-compact" : "approach-section"}>
      <h3 className="approach-title">
        My approach
      </h3>
      <div className={compact ? "approach-grid approach-grid-compact" : "approach-grid"}>
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
                  ? "approach-item group"
                  : "approach-item group"
              }
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.25 }}
              tabIndex={0}
            >
              <div className="approach-topline">
                <span className="approach-step">
                  {step}
                </span>
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="approach-icon"
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="approach-item-title">
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
                    <div className="approach-meaning">
                      <p>
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
