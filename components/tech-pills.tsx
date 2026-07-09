"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTechByName } from "@/data/portfolio";

type TechPillsProps = {
  items: string[];
};

export function TechPills({ items }: TechPillsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((item) => {
        const tech = getTechByName(item);
        const accent = tech?.color ?? "#050505";

        return (
          <motion.span
            key={item}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_10px_24px_rgba(0,0,0,0.03)]"
            style={{
              borderColor: `${accent}66`,
              color: accent,
            }}
          >
            {tech ? (
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="h-4 w-4 grayscale transition duration-200 hover:grayscale-0"
              />
            ) : null}
            <span className="text-neutral-900">{item}</span>
          </motion.span>
        );
      })}
    </div>
  );
}
