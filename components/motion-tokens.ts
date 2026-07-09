import type { Transition, Variants } from "framer-motion";

export const softEase = [0.22, 1, 0.36, 1] as const;

export const springSoft: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.9,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export function fadeUp(delay = 0, y = 28): Variants {
  return {
    hidden: {
      opacity: 0,
      y,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay,
        ease: softEase,
      },
    },
  };
}

export function fadeSide(x: number, delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      x,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        delay,
        ease: softEase,
      },
    },
  };
}

export function scaleIn(delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      scale: 0.96,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        delay,
        ease: softEase,
      },
    },
  };
}
