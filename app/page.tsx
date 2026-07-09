"use client";

import { useState } from "react";
import { ArrowDown, BadgeCheck, Code2, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ApproachSection } from "@/components/approach-section";
import { ButtonLink } from "@/components/button-link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IntroLoader } from "@/components/intro-loader";
import { fadeUp, scaleIn, softEase, staggerContainer } from "@/components/motion-tokens";
import { ProjectRow } from "@/components/project-row";
import { SkillsSection } from "@/components/skills-section";
import { Timeline } from "@/components/timeline";
import {
  education,
  experience,
  projects,
  services,
} from "@/data/portfolio";

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroLoader onComplete={() => setIntroComplete(true)} />
      <motion.div
        className="bg-white text-black"
        initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
        animate={
          introComplete || reduceMotion
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 14, filter: "blur(8px)" }
        }
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: softEase }}
      >
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="px-5 pb-20 pt-20 sm:px-6 sm:pb-28 lg:px-8">
      <motion.div
        className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col items-center justify-center text-center"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={staggerContainer}
      >
        <motion.div
          variants={scaleIn(0.02)}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-black text-sm font-semibold tracking-[0.2em] sm:h-24 sm:w-24"
        >
          AY
        </motion.div>

        <div className="mt-10 max-w-5xl overflow-hidden">
          <motion.h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-black sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={fadeUp(0.08, 44)}
              >
                Eric Yeboah
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={fadeUp(0.14, 44)}
              >
                Creative Engineer
              </motion.span>
            </span>
          </motion.h1>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scaleX: 0, transformOrigin: "center" },
            show: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.55, delay: 0.22, ease: softEase },
            },
          }}
          className="mt-8 h-px w-full max-w-2xl bg-neutral-200"
        />

        <motion.p
          variants={fadeUp(0.28, 22)}
          className="mt-8 max-w-2xl text-balance text-base leading-8 text-neutral-600 sm:text-lg"
        >
          Crafting digital experiences with clean code and minimal aesthetics.
          Based in Accra, working globally.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
        >
          <motion.div variants={fadeUp(0.34, 18)}>
            <ButtonLink href="#projects">View Projects</ButtonLink>
          </motion.div>
          <motion.div variants={fadeUp(0.4, 18)}>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          variants={fadeUp(0.46, 18)}
          className={`mt-16 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 transition hover:border-black hover:text-black ${
            reduceMotion ? "" : "scroll-indicator-gentle"
          }`}
        >
          Scroll
          <ArrowDown aria-hidden="true" size={14} strokeWidth={1.75} />
        </motion.a>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-t border-neutral-200 px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="corner-lines h-fit p-8 sm:p-10">
          <h2 className="section-title-xl">About Me</h2>
          <p className="section-accent mt-7">
            Hello there
          </p>
          <div className="mt-8 grid gap-5 text-base leading-8 text-neutral-600">
            <p>
              I am Eric Yeboah, a full-stack minded creative engineer based in Accra, Ghana.
              I build digital products that feel clear, useful, and carefully composed.
            </p>
            <p>
              My work sits between minimal design and clean code, with a focus on interfaces
              that help people move through information without friction.
            </p>
            <p>
              I enjoy turning rough ideas into structured websites, product screens, and
              systems that can grow without becoming noisy.
            </p>
          </div>
          <div className="about-approach mt-10 border-t border-neutral-200 pt-8">
            <ApproachSection compact />
          </div>
        </div>

        <div className="grid content-start gap-10">
          <Timeline title="Experience" items={experience} />
          <Timeline title="Education" items={education} />
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="border-t border-neutral-200 px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 max-w-3xl">
          <h2 className="section-title-xl">
            Portfolio
          </h2>
          <p className="section-accent mt-7">
            Selected Projects
          </p>
        </div>
        <div>
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
        <motion.a
          variants={fadeUp(0.06, 18)}
          href="/projects"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          className="group mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 text-sm font-semibold text-black transition hover:border-black hover:bg-neutral-50"
        >
          View All Projects
          <motion.span whileHover={reduceMotion ? undefined : { x: 2, y: -2 }} transition={{ duration: 0.2 }}>
            <ArrowDown aria-hidden="true" size={16} strokeWidth={1.75} className="rotate-[-135deg]" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="border-t border-neutral-200 bg-neutral-50 px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="section-title-xl">
            Services
          </h2>
          <p className="section-accent mt-7">
            Focused support for digital launches.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={service.title}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex((current) => (current === index ? null : current))}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex((current) => (current === index ? null : current))}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group rounded-[2rem] border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-900/70 hover:bg-neutral-50 focus-within:border-neutral-900/70 focus-within:bg-neutral-50"
                tabIndex={0}
              >
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-600 transition-colors duration-300 group-hover:border-neutral-900/70 group-hover:text-black group-focus-within:border-neutral-900/70 group-focus-within:text-black"
                >
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                </motion.div>
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-0.5 group-focus-within:translate-x-0.5">
                      {service.title}
                    </h3>
                    <motion.span
                      aria-hidden="true"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scaleX: isActive ? 1 : 0.6,
                              backgroundColor: isActive ? "#050505" : "#e5e5e5",
                            }
                      }
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="h-px w-10 origin-left bg-neutral-200"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="border-t border-neutral-200 px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="corner-lines h-fit p-8 sm:p-10">
          <h2 className="section-title-xl">Contact</h2>
          <p className="section-accent mt-7">
            Let&apos;s collaborate
          </p>
          <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
            Available for thoughtful websites, product interfaces, and clean digital systems.
          </p>
          <motion.a
            href="mailto:oseiyeboaheric@outlook.com"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="mt-8 flex w-fit items-center gap-3 rounded-full border border-neutral-200 px-4 py-3 text-sm font-medium text-black transition hover:border-black"
          >
            <Mail aria-hidden="true" size={17} strokeWidth={1.75} />
            oseiyeboaheric@outlook.com
          </motion.a>
          <div className="mt-5 flex gap-3">
            <motion.a
              href="https://github.com/yeboaheric"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-neutral-100"
              aria-label="GitHub"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yeboah-osei-eric-329b57296/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-neutral-100"
              aria-label="LinkedIn"
            >
              <BadgeCheck aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
          </div>
        </div>

        <form
          action="mailto:oseiyeboaheric@outlook.com"
          method="post"
          encType="text/plain"
          className="rounded-[2rem] border border-neutral-200 p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-field">
              <span>Name</span>
              <input name="name" required />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Message</span>
              <textarea name="message" rows={7} required />
            </label>
          </div>
          <motion.button
            type="submit"
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            whileHover={reduceMotion ? undefined : { y: -1 }}
            className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Send Message
            <Send aria-hidden="true" size={16} strokeWidth={1.75} />
          </motion.button>
        </form>
      </div>
    </section>
  );
}
