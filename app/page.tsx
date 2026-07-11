"use client";

import { useState } from "react";
import { ArrowDown, BadgeCheck, Code2, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ApproachSection } from "@/components/approach-section";
import { ButtonLink } from "@/components/button-link";
import { FeaturedProjectsDeck } from "@/components/featured-projects-deck";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IntroLoader } from "@/components/intro-loader";
import { fadeUp, scaleIn, softEase, staggerContainer } from "@/components/motion-tokens";
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
        className="site-page"
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
    <section id="home" className="home-hero">
      <motion.div
        className="home-hero-inner"
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={staggerContainer}
      >
        <motion.div
          variants={scaleIn(0.02)}
          className="hero-monogram"
        >
          AY
        </motion.div>

        <div className="hero-title-wrap">
          <motion.h1 className="hero-title">
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
          className="hero-divider"
        />

        <motion.p
          variants={fadeUp(0.28, 22)}
          className="hero-subtitle"
        >
          Crafting digital experiences with clean code and minimal aesthetics.
          Based in Accra, working globally.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="hero-actions"
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
          className={`hero-scroll ${
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
    <section id="about" className="reference-section about-section">
      <div className="reference-container">
        <h2 className="reference-section-title">About Me</h2>
        <div className="about-layout">
        <div className="corner-lines about-copy">
          <h3 className="about-greeting">
            Hello there
          </h3>
          <div className="about-paragraphs">
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
          <div className="about-approach">
            <ApproachSection compact />
          </div>
        </div>

        <div className="about-timelines">
          <Timeline title="Experience" items={experience} />
          <Timeline title="Education" items={education} />
        </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="projects-section featured-work-section">
      <div className="featured-work-intro">
        <h2 className="featured-work-title">
          <span>Selected</span>
          <span>Projects</span>
        </h2>
      </div>
      <FeaturedProjectsDeck projects={projects} />
      <div className="reference-container featured-work-footer">
        <motion.a
          variants={fadeUp(0.06, 18)}
          href="/projects"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          className="reference-outline-button group"
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
  const iconMorphTransition = {
    duration: reduceMotion ? 0 : 0.42,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  return (
    <section id="services" className="reference-section services-home-section">
      <div className="reference-container">
        <div className="services-home-heading">
          <h2 className="reference-section-title">Services</h2>
          <p className="services-home-accent">
            Focused support for digital launches.
          </p>
        </div>
        <div className="services-home-grid">
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
                className="service-card group"
                tabIndex={0}
              >
                <motion.div
                  className="service-card-icon-wrap"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: isActive ? [1, 0.84, 1.06, 1] : 1,
                          rotate: isActive ? [0, -8, 4, 0] : 0,
                        }
                  }
                  transition={iconMorphTransition}
                >
                  <motion.span
                    aria-hidden="true"
                    className="morph-icon-pulse"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: isActive ? [0, 0.18, 0] : 0,
                            scale: isActive ? [0.65, 1.18, 1] : 0.65,
                          }
                    }
                    transition={iconMorphTransition}
                  />
                  <motion.span
                    aria-hidden="true"
                    className="morph-icon-glyph"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: isActive ? [1, 0.58, 1] : 1,
                            scale: isActive ? [1, 0.72, 1] : 1,
                          }
                    }
                    transition={iconMorphTransition}
                  >
                    <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                  </motion.span>
                  <motion.span
                    aria-hidden="true"
                    className="morph-icon-dash"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: isActive ? [0, 1, 0] : 0,
                            scaleX: isActive ? [0.2, 1, 0.2] : 0.2,
                            y: isActive ? [6, 8, 6] : 6,
                          }
                    }
                    transition={iconMorphTransition}
                  />
                </motion.div>
                <div className="service-card-heading">
                  <div className="flex items-center gap-3">
                    <h3 className="service-card-title">
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
                      className="service-card-line"
                    />
                  </div>
                </div>
                <p className="service-card-description">{service.description}</p>
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
    <section id="contact" className="reference-section contact-section">
      <div className="reference-container">
        <h2 className="reference-section-title contact-title">Get In Touch</h2>
        <div className="contact-layout">
        <div className="corner-lines contact-copy">
          <h3 className="contact-heading">
            Let&apos;s collaborate
          </h3>
          <p className="contact-description">
            Available for thoughtful websites, product interfaces, and clean digital systems.
          </p>
          <motion.a
            href="mailto:oseiyeboaheric@outlook.com"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="contact-email"
          >
            <Mail aria-hidden="true" size={17} strokeWidth={1.75} />
            oseiyeboaheric@outlook.com
          </motion.a>
          <div className="contact-socials">
            <motion.a
              href="https://github.com/yeboaheric"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="contact-social"
              aria-label="GitHub"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yeboah-osei-eric-329b57296/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="contact-social"
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
          className="contact-form"
        >
          <h3 className="contact-form-title">Send me a message</h3>
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
            className="contact-submit"
          >
            Send Message
            <Send aria-hidden="true" size={16} strokeWidth={1.75} />
          </motion.button>
        </form>
        </div>
      </div>
    </section>
  );
}
