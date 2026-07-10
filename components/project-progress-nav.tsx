"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type ProjectProgressNavProps = {
  activeIndex: number;
  count: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ProjectProgressNav({
  activeIndex,
  count,
  onSelect,
  onPrevious,
  onNext,
}: ProjectProgressNavProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="project-progress-wrap">
        <div className="project-progress-list">
          {Array.from({ length: count }).map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`project-progress-item ${isActive ? "is-active" : ""}`}
              />
            );
          })}
        </div>
      </div>

      <div className="project-arrow-controls">
        {[{ label: "Previous project", icon: ArrowLeft, action: onPrevious }, { label: "Next project", icon: ArrowRight, action: onNext }].map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              type="button"
              aria-label={item.label}
              onClick={item.action}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="project-arrow-button"
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
