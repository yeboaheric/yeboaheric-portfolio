"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const reduceMotion = useReducedMotion();
  const className =
    variant === "primary"
      ? "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-ring"
      : "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-black transition hover:border-black focus-ring";

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.22 }}
      className="w-full sm:w-auto"
    >
      <Link href={href} className={className}>
      {children}
      {variant === "primary" ? (
        <motion.span
          className="inline-flex"
          animate={undefined}
          whileHover={reduceMotion ? undefined : { x: 2, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
        </motion.span>
      ) : null}
      </Link>
    </motion.div>
  );
}
