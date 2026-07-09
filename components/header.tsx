"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { fadeUp, softEase, staggerContainer, viewportOnce } from "@/components/motion-tokens";
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

  const currentActiveHref = activeOverride ?? activeHref;
  const isItemActive = (href: string) =>
    href === currentActiveHref || (!href.startsWith("#") && pathname === href);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -24, filter: "blur(10px)" }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: softEase }}
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-all duration-300 ${
        isScrolled
          ? "border-b border-neutral-200/95 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 ${
          isScrolled ? "py-3" : "py-4"
        } transition-all duration-300`}
      >
        <Link
          href={brandHref}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-xs font-bold tracking-[0.16em] text-black"
          aria-label="Eric Yeboah home"
        >
          YOE
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isItemActive(item.href)
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black hover:bg-neutral-100 focus-ring"
            aria-label={theme === "dark" ? "Switch theme to light mode" : "Switch theme to dark mode"}
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" size={17} strokeWidth={1.75} />
            ) : (
              <Moon aria-hidden="true" size={17} strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black hover:bg-neutral-100 focus-ring md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X aria-hidden="true" size={18} strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" size={18} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: softEase }}
            className="border-t border-neutral-200 bg-white px-5 py-4 md:hidden"
          >
            <motion.div
              className="mx-auto grid max-w-7xl gap-2"
              variants={staggerContainer}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              viewport={viewportOnce}
            >
              {navigationItems.map((item) => (
                <motion.div key={item.href} variants={fadeUp(0, 12)}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isItemActive(item.href)
                        ? "bg-black text-white"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
