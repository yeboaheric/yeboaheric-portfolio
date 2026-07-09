"use client";

import Link from "next/link";
import { BadgeCheck, Code2, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { navigation, type NavItem } from "@/data/portfolio";

type FooterProps = {
  navigationItems?: NavItem[];
};

export function Footer({ navigationItems = navigation }: FooterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="bg-black px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xs font-bold tracking-[0.16em]">
            YOE
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
            Eric Yeboah crafts minimal digital experiences from Accra for clients and collaborators worldwide.
          </p>
          <p className="mt-8 text-sm text-neutral-500">© 2025 YOE. All rights reserved.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Navigation
          </h2>
          <div className="mt-5 grid gap-3">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Contact
          </h2>
          <div className="mt-5 grid gap-3 text-sm text-neutral-300">
            <a href="mailto:oseiyeboaheric@outlook.com" className="inline-flex items-center gap-2 hover:text-white">
              <Mail aria-hidden="true" size={16} strokeWidth={1.75} />
              oseiyeboaheric@outlook.com
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" size={16} strokeWidth={1.75} />
              Accra, Ghana
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <motion.a
              href="https://github.com/yeboaheric"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black"
              aria-label="GitHub"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yeboah-osei-eric-329b57296/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black"
              aria-label="LinkedIn"
            >
              <BadgeCheck aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
