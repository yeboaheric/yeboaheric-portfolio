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
      <div className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="pointer-events-auto flex flex-col gap-3">
          {Array.from({ length: count }).map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`w-3 rounded-full transition ${
                  isActive ? "h-12 bg-black" : "h-9 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none fixed left-[max(5rem,8vw)] top-[34vh] z-40 hidden xl:flex xl:flex-col xl:gap-4">
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
              className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-black shadow-[0_12px_28px_rgba(0,0,0,0.04)] transition hover:border-black"
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
