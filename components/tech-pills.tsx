"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getTechByName } from "@/data/portfolio";

type TechPillsProps = {
  items: string[];
};

export function TechPills({ items }: TechPillsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="tech-pills">
      {items.map((item) => {
        const tech = getTechByName(item);
        const accent = tech?.color ?? "#050505";

        return (
          <motion.span
            key={item}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.2 }}
            className="tech-pill"
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
