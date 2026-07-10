"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { softEase } from "@/components/motion-tokens";
import { navigation, type NavItem } from "@/data/portfolio";

type HeaderProps = {
  navigationItems?: NavItem[];
  brandHref?: string;
  activeOverride?: string;
};

export function Header({
  navigationItems = navigation,
  brandHref = "#home",
  activeOverride,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const compactHeight = 60;
  const expandedHeight =
    compactHeight +
    16 +
    navigationItems.length * 36 +
    Math.max(navigationItems.length - 1, 0) * 10 +
    20;
  const menuEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

  const menuListVariants = {
    closed: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.035,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.14,
        staggerChildren: reduceMotion ? 0 : 0.065,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 8,
      scale: 0.98,
      filter: "blur(4px)",
      transition: { duration: reduceMotion ? 0 : 0.16, ease: menuEase },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0 : 0.28, ease: menuEase },
    },
  };

  useEffect(() => {
    const sectionIds = navigationItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.replace("#", ""));

    if (sectionIds.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navigationItems]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const resolvedTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(resolvedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.body.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const currentActiveHref = activeOverride ?? activeHref;
  const isItemActive = (href: string) =>
    href === currentActiveHref || (!href.startsWith("#") && pathname === href);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -24, filter: "blur(10px)" }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: softEase }}
      className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
    >
      <motion.div
        className={`site-header-inner ${isOpen ? "is-open" : ""}`}
        initial={false}
        animate={{
          height: isOpen ? expandedHeight : compactHeight,
          borderRadius: isOpen ? "1.5rem" : "1.25rem",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.4,
          ease: menuEase,
          delay: reduceMotion ? 0 : isOpen ? 0 : 0.08,
        }}
      >
        <nav className="site-header-bar" aria-label="Primary navigation">
          <Link href={brandHref} className="site-logo" aria-label="Yeboah Eric home">
            Yeboah Eric
          </Link>

          <div className="site-header-controls">
            <button
              type="button"
              className="site-theme-toggle focus-ring"
              aria-label={theme === "dark" ? "Switch theme to light mode" : "Switch theme to dark mode"}
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" size={16} strokeWidth={1.75} />
              ) : (
                <Moon aria-hidden="true" size={16} strokeWidth={1.75} />
              )}
            </button>

            <button
              type="button"
              className="site-header-menu-toggle focus-ring"
              aria-expanded={isOpen}
              aria-controls="header-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsOpen((current) => !current)}
            >
              <motion.span className="site-header-menu-mark" aria-hidden="true" initial={false}>
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-start"
                  animate={
                    isOpen
                      ? {
                          x: 0,
                          y: 0,
                          width: "1rem",
                          height: "2px",
                          borderRadius: "999px",
                          rotate: 45,
                          opacity: 1,
                        }
                      : {
                          x: "-0.5rem",
                          y: 0,
                          width: "0.28rem",
                          height: "0.28rem",
                          borderRadius: "999px",
                          rotate: 0,
                          opacity: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.38,
                    ease: menuEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.02 : 0,
                  }}
                />
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-middle"
                  animate={
                    isOpen
                      ? {
                          x: 0,
                          y: "0.56rem",
                          opacity: 0,
                          scale: 0.55,
                        }
                      : {
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.36,
                    ease: menuEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.05 : 0.06,
                  }}
                />
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-end"
                  animate={
                    isOpen
                      ? {
                          x: 0,
                          y: 0,
                          width: "1rem",
                          height: "2px",
                          borderRadius: "999px",
                          rotate: -45,
                          opacity: 1,
                        }
                      : {
                          x: "0.5rem",
                          y: 0,
                          width: "0.28rem",
                          height: "0.28rem",
                          borderRadius: "999px",
                          rotate: 0,
                          opacity: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.38,
                    ease: menuEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.02 : 0,
                  }}
                />
              </motion.span>
            </button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id="header-navigation"
              className="site-header-panel"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.18,
                ease: menuEase,
                delay: reduceMotion ? 0 : 0.1,
              }}
            >
              <motion.nav
                className="site-header-menu-links"
                aria-label="Expanded navigation"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuListVariants}
              >
                {navigationItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`site-header-menu-link ${isItemActive(item.href) ? "is-active" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
