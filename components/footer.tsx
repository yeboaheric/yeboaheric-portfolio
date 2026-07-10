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
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <div className="site-footer-logo">Yeboah Eric</div>
          <p className="site-footer-summary">
            Eric Yeboah crafts minimal digital experiences from Accra for clients and collaborators worldwide.
          </p>
          <p className="site-footer-copy">© 2025 Yeboah Eric. All rights reserved.</p>
        </div>

        <div>
          <h2 className="site-footer-heading">Navigation</h2>
          <div className="site-footer-list">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="site-footer-heading">Contact</h2>
          <div className="site-footer-list">
            <a href="mailto:oseiyeboaheric@outlook.com" className="site-footer-contact">
              <Mail aria-hidden="true" size={16} strokeWidth={1.75} />
              oseiyeboaheric@outlook.com
            </a>
            <p className="site-footer-contact">
              <MapPin aria-hidden="true" size={16} strokeWidth={1.75} />
              Accra, Ghana
            </p>
          </div>
          <div className="site-footer-socials">
            <motion.a
              href="https://github.com/yeboaheric"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="site-footer-social"
              aria-label="GitHub"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yeboah-osei-eric-329b57296/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="site-footer-social"
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
