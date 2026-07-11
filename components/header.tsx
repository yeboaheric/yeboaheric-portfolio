"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ensureBackgroundAudioSession,
  subscribeBackgroundAudio,
  toggleBackgroundAudio,
} from "@/components/background-audio";
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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const compactHeight = 60;
  const expandedHeight =
    compactHeight +
    16 +
    navigationItems.length * 36 +
    Math.max(navigationItems.length - 1, 0) * 10 +
    20;
  const expandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const morphEase: [number, number, number, number] = [0.65, 0, 0.35, 1];

  const menuListVariants = {
    closed: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.04,
        staggerChildren: reduceMotion ? 0 : 0.08,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.3,
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 16,
      scale: 0.985,
      filter: "blur(6px)",
      transition: { duration: reduceMotion ? 0 : 0.28, ease: expandEase },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0 : 0.42, ease: expandEase },
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

  useEffect(() => {
    const unsubscribe = subscribeBackgroundAudio((state) => {
      setIsMusicPlaying(state.isPlaying);
    });

    void ensureBackgroundAudioSession();

    return unsubscribe;
  }, []);

  const currentActiveHref = activeOverride ?? activeHref;
  const isItemActive = (href: string) =>
    href === currentActiveHref || (!href.startsWith("#") && pathname === href);
  const edgeControlStyle = {
    position: "absolute" as const,
    top: "calc(var(--site-header-offset) + 0.875rem)",
    zIndex: 70,
    width: "2rem",
    height: "2rem",
    border: "0",
    background: "transparent",
    color: "var(--color-primary)",
    boxShadow: "none",
    pointerEvents: "auto" as const,
  };
  const musicBars = isMusicPlaying ? [5, 5, 5, 5, 5] : [7, 11, 16, 11, 7];
  const themeToggleContent = (
    <span
      aria-hidden="true"
      style={{
        position: "relative",
        display: "inline-flex",
        width: "1rem",
        height: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center",
        }}
        animate={
          theme === "dark"
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 0, scale: 0.52, rotate: -90 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: morphEase }}
      >
        <Sun aria-hidden="true" size={16} strokeWidth={1.75} />
      </motion.span>
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center",
        }}
        animate={
          theme === "dark"
            ? { opacity: 0, scale: 0.52, rotate: 90 }
            : { opacity: 1, scale: 1, rotate: 0 }
        }
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: morphEase }}
      >
        <Moon aria-hidden="true" size={16} strokeWidth={1.75} />
      </motion.span>
    </span>
  );
  const musicToggleContent = (
    <motion.span
      className="site-music-icon"
      aria-hidden="true"
      style={{
        position: "relative",
        display: "inline-flex",
        width: "1rem",
        height: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={
        reduceMotion
          ? { scale: 1, rotate: 0 }
          : {
              scale: [1, 0.86, 1.08, 1],
              rotate: [0, isMusicPlaying ? 3 : -3, 0],
            }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span
        className="site-music-bars"
        style={{
          position: "static",
          display: "inline-flex",
          width: "1rem",
          height: "1rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.0625rem",
          color: "currentColor",
        }}
      >
        {musicBars.map((height, bar) => (
          <motion.span
            key={bar}
            style={{
              display: "block",
              width: "0.15625rem",
              borderRadius: "999px",
              background: "currentColor",
              animation: "none",
              transformOrigin: "center",
            }}
            initial={false}
            animate={{
              height,
              opacity: isMusicPlaying ? 0.94 : 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
              delay: reduceMotion ? 0 : Math.abs(bar - 2) * 0.025,
            }}
          />
        ))}
      </span>
    </motion.span>
  );

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -24, filter: "blur(10px)" }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: softEase }}
      className={`site-header ${isScrolled ? "is-scrolled" : ""}`}
    >
      <button
        type="button"
        className="site-theme-toggle focus-ring"
        aria-label={theme === "dark" ? "Switch theme to light mode" : "Switch theme to dark mode"}
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        style={{
          ...edgeControlStyle,
          left: "var(--page-gutter)",
        }}
      >
        {themeToggleContent}
      </button>

      <motion.div
        className={`site-header-inner ${isOpen ? "is-open" : ""}`}
        initial={false}
        animate={{
          height: isOpen ? expandedHeight : compactHeight,
          borderRadius: isOpen ? "1.5rem" : "1.25rem",
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.62,
          ease: expandEase,
          delay: reduceMotion ? 0 : isOpen ? 0 : 0.22,
        }}
      >
        <nav className="site-header-bar" aria-label="Primary navigation">
          <div className="site-header-controls site-header-brand-group">
            <Link href={brandHref} className="site-logo" aria-label="Yeboah Eric home">
              Yeboah Eric
            </Link>
          </div>

          <div className="site-header-controls">
            <button
              type="button"
              className="site-header-menu-toggle focus-ring"
              aria-expanded={isOpen}
              aria-controls="header-navigation"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsOpen((current) => !current)}
            >
              <motion.span
                className="site-header-menu-mark"
                aria-hidden="true"
                initial={false}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: "1.375rem",
                  height: "1.375rem",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "visible",
                }}
              >
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-start"
                  style={{
                    position: "absolute",
                    top: "calc(50% - 2px)",
                    left: "calc(50% - 2px)",
                    transformOrigin: "center",
                  }}
                  animate={
                    isOpen
                      ? {
                          x: -7,
                          y: 1,
                          width: "1.125rem",
                          height: "2px",
                          borderRadius: "999px",
                          rotate: 45,
                          opacity: 1,
                        }
                      : {
                          x: -7,
                          y: 0,
                          width: "0.25rem",
                          height: "0.25rem",
                          borderRadius: "999px",
                          rotate: 0,
                          opacity: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.58,
                    ease: morphEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.02 : 0,
                  }}
                />
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-middle"
                  style={{
                    position: "absolute",
                    top: "calc(50% - 2px)",
                    left: "calc(50% - 2px)",
                    transformOrigin: "center",
                  }}
                  animate={
                    isOpen
                      ? {
                          x: 0,
                          y: 10,
                          opacity: 0,
                          scale: 0.45,
                        }
                      : {
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.62,
                    ease: morphEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.06 : 0.02,
                  }}
                />
                <motion.span
                  className="site-header-menu-dot site-header-menu-dot-end"
                  style={{
                    position: "absolute",
                    top: "calc(50% - 2px)",
                    left: "calc(50% - 2px)",
                    transformOrigin: "center",
                  }}
                  animate={
                    isOpen
                      ? {
                          x: -7,
                          y: 1,
                          width: "1.125rem",
                          height: "2px",
                          borderRadius: "999px",
                          rotate: -45,
                          opacity: 1,
                        }
                      : {
                          x: 7,
                          y: 0,
                          width: "0.25rem",
                          height: "0.25rem",
                          borderRadius: "999px",
                          rotate: 0,
                          opacity: 1,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.58,
                    ease: morphEase,
                    delay: reduceMotion ? 0 : isOpen ? 0.02 : 0,
                  }}
                />
              </motion.span>
            </button>
          </div>
        </nav>

        <motion.div
          id="header-navigation"
          className="site-header-panel"
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{
            duration: reduceMotion ? 0 : isOpen ? 0.32 : 0.18,
            ease: expandEase,
            delay: reduceMotion ? 0 : isOpen ? 0.18 : 0,
          }}
        >
          <motion.nav
            className="site-header-menu-links"
            aria-label="Expanded navigation"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuListVariants}
          >
            {navigationItems.map((item) => (
              <motion.div key={item.href} variants={menuItemVariants}>
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
      </motion.div>

      <button
        type="button"
        className={`site-theme-toggle site-music-toggle focus-ring ${isMusicPlaying ? "is-playing" : ""}`}
        aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isMusicPlaying}
        onClick={() => {
          void toggleBackgroundAudio();
        }}
        style={{
          ...edgeControlStyle,
          right: "var(--page-gutter)",
        }}
      >
        {musicToggleContent}
      </button>
    </motion.header>
  );
}
