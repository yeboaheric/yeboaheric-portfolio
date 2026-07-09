"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { softEase } from "@/components/motion-tokens";

const INTRO_STORAGE_KEY = "portfolio-intro-seen";
const INTRO_NAME = "Yeboah Eric.";
const INTRO_CHARS = Array.from(INTRO_NAME);

type IntroLoaderProps = {
  onComplete: () => void;
};

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
        setIsVisible(false);
        onComplete();
        return;
      }
    } catch (error) {
      // Keep the intro available when session storage cannot be read.
    }

    const timer = window.setTimeout(() => {
      enterPortfolio();
    }, reduceMotion ? 700 : 3600);

    return () => window.clearTimeout(timer);
    // `enterPortfolio` intentionally reads current state and is guarded internally.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete, reduceMotion]);

  const enterPortfolio = () => {
    if (isEntering) return;

    setIsEntering(true);

    window.setTimeout(
      () => {
        try {
          sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
        } catch (error) {
          // Private browsing modes can reject session storage writes.
        }

        setIsVisible(false);
        onComplete();
      },
      reduceMotion ? 80 : 860
    );
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[9999] grid place-items-center bg-background text-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.1 : 0.52, ease: softEase } }}
        >
          <motion.button
            type="button"
            aria-label="Enter Yeboah Eric portfolio"
            className="grid perspective-[900px] place-items-center bg-transparent p-8 text-center text-primary outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[0.9rem] focus-visible:outline-current"
            animate={
              isEntering
                ? {
                    opacity: 0,
                    rotateX: 180,
                    scale: 0.985,
                    y: -12,
                    filter: "blur(8px)",
                    transition: { duration: reduceMotion ? 0.08 : 0.86, ease: softEase },
                  }
                : {
                    opacity: 1,
                    rotateX: 0,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
            }
            whileHover={
              isEntering || reduceMotion
                ? undefined
                : {
                    opacity: 0.86,
                    y: -4,
                    rotateX: 3,
                    transition: { duration: 0.32, ease: softEase },
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            onClick={enterPortfolio}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return;
              event.preventDefault();
              enterPortfolio();
            }}
          >
            <span className="inline-flex min-h-[1em] whitespace-nowrap text-[3.25rem] font-bold leading-[0.95] tracking-[0] sm:text-[5rem] lg:text-[7rem]">
              <span className="sr-only">{INTRO_NAME}</span>
              {INTRO_CHARS.map((character, index) => (
                <motion.span
                  aria-hidden="true"
                  className={character === " " ? "inline-block w-[0.32em]" : "inline-block"}
                  initial={reduceMotion ? false : { opacity: 0, y: "0.32em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.07,
                    delay: reduceMotion ? 0 : 0.18 + index * 0.082,
                    ease: "linear",
                  }}
                  key={`${character}-${index}`}
                >
                  {character}
                </motion.span>
              ))}
              <motion.span
                aria-hidden="true"
                className="ml-[0.12em] inline-block h-[0.82em] w-[0.06em] translate-y-[0.08em] bg-current"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: reduceMotion ? 0 : 1.16,
                  duration: reduceMotion ? 0.01 : 0.9,
                  ease: "linear",
                  repeat: Infinity,
                  times: [0, 0.02, 0.5, 0.52],
                }}
              />
            </span>
            <motion.span
              className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.52, delay: reduceMotion ? 0 : 1.32, ease: softEase }}
            >
              Enter Portfolio
            </motion.span>
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
