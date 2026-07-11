"use client";

import { useRef, useState } from "react";
import { ArrowDown, Mail, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ApproachSection } from "@/components/approach-section";
import { ButtonLink } from "@/components/button-link";
import { FeaturedProjectsDeck } from "@/components/featured-projects-deck";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IntroLoader } from "@/components/intro-loader";
import { fadeUp, scaleIn, softEase, staggerContainer } from "@/components/motion-tokens";
import { GithubMarkIcon, LinkedinMarkIcon } from "@/components/social-icons";
import { SkillsSection } from "@/components/skills-section";
import { Timeline } from "@/components/timeline";
import {
  education,
  experience,
  projects,
  services,
} from "@/data/portfolio";

const HERO_FACTS = [
  "A typical cumulus cloud weighs around a million tonnes, yet it floats because it's slightly less dense than the surrounding air.",
  "Venus is the only planet in the solar system that spins clockwise.",
  "A single rotation of Venus takes longer than its entire trip around the Sun.",
  "Sudan has more pyramids than Egypt — roughly 255 compared to Egypt's 138.",
  "The Eiffel Tower grows about 6 inches taller in summer as its iron expands in the heat.",
  "Measured from base to peak, Hawaii's Mauna Kea is taller than Mount Everest — most of it is just underwater.",
  "Humans have mapped the Moon in more detail than the ocean floor; we've explored less than 0.001% of the seabed.",
  "The oldest cat on record lived to 38 years old.",
  "Scotland's official national animal is the unicorn.",
  "Australia's diameter is actually larger than the Moon's.",
  "Africa is so vast it stretches across all four hemispheres at once.",
  "Laid end to end, all of Earth's bacteria would stretch further than 10 billion light-years.",
  "A tie worn too tightly can reduce blood flow to the brain by up to 7.5%.",
  "Every color of Froot Loops is actually the same flavor.",
  "A thunderstorm nicknamed Hector forms over northern Australia almost every single afternoon at 3pm.",
  "Most household dust is made up of shed human skin cells.",
  "The Milky Way galaxy is home to more than 200 billion stars.",
  "On the distant exoplanet HD 189733b, fierce winds blow molten glass sideways through the atmosphere.",
  "Some planets drift through space without ever orbiting a star — they're called rogue planets.",
  "The largest known volcano in the solar system sits on Mars and is roughly 373 miles wide.",
  "Earth's atmosphere currently holds more carbon dioxide than at any point in the last 800,000 years.",
  "A total solar eclipse can last a maximum of about seven and a half minutes.",
  "The oldest dog on record lived to be 29.5 years old.",
  "Some caves are so enormous they generate their own weather, complete with clouds and wind.",
  "Waterfalls exist underwater, caused by differences in temperature and salinity between ocean layers.",
];

function shuffleFacts(facts: string[]) {
  const next = [...facts];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

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
  const [isMonogramHovered, setIsMonogramHovered] = useState(false);
  const [activeFact, setActiveFact] = useState(HERO_FACTS[0]);
  const glyphEase: [number, number, number, number] = [0.65, 0, 0.35, 1];
  const slashEase: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
  const glyphDuration = reduceMotion ? 0 : 0.6;
  const slashDelay = reduceMotion ? 0 : 0.09;
  const factQueueRef = useRef<string[]>(shuffleFacts(HERO_FACTS));
  const lastFactRef = useRef<string | null>(null);

  const getNextFact = () => {
    if (factQueueRef.current.length === 0) {
      const reshuffled = shuffleFacts(HERO_FACTS);

      if (
        lastFactRef.current &&
        reshuffled.length > 1 &&
        reshuffled[0] === lastFactRef.current
      ) {
        [reshuffled[0], reshuffled[1]] = [reshuffled[1], reshuffled[0]];
      }

      factQueueRef.current = reshuffled;
    }

    const nextFact = factQueueRef.current.shift() ?? HERO_FACTS[0];
    lastFactRef.current = nextFact;
    return nextFact;
  };

  const handleMonogramEnter = () => {
    setActiveFact(getNextFact());
    setIsMonogramHovered(true);
  };

  const handleMonogramLeave = () => {
    setIsMonogramHovered(false);
  };

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
          className="hero-monogram-anchor"
          onHoverStart={handleMonogramEnter}
          onHoverEnd={handleMonogramLeave}
        >
          <div className="hero-monogram">
            <span className="hero-monogram-content" aria-hidden="true">
              <span className="hero-glyph-slot">
                <motion.span
                  className="hero-glyph-char hero-glyph-base"
                  animate={{
                    opacity: isMonogramHovered ? 0 : 1,
                    scale: isMonogramHovered ? 0.85 : 1,
                    rotate: isMonogramHovered ? 8 : 0,
                  }}
                  transition={{ duration: glyphDuration, ease: glyphEase }}
                >
                  Y
                </motion.span>
                <motion.span
                  className="hero-glyph-char hero-glyph-target"
                  animate={{
                    opacity: isMonogramHovered ? 1 : 0,
                    scale: isMonogramHovered ? 1 : 0.85,
                    rotate: isMonogramHovered ? 0 : -8,
                  }}
                  transition={{ duration: glyphDuration, ease: glyphEase }}
                >
                  {"<"}
                </motion.span>
              </span>

              <span className="hero-glyph-slot hero-glyph-slot-middle">
                <motion.span
                  className="hero-glyph-char hero-glyph-target"
                  animate={{
                    opacity: isMonogramHovered ? 1 : 0,
                    scale: isMonogramHovered ? [0, 1.1, 1] : 0,
                    y: isMonogramHovered ? [4, -1, 0] : 4,
                  }}
                  transition={{
                    duration: glyphDuration,
                    delay: slashDelay,
                    ease: slashEase,
                  }}
                >
                  /
                </motion.span>
              </span>

              <span className="hero-glyph-slot">
                <motion.span
                  className="hero-glyph-char hero-glyph-base"
                  animate={{
                    opacity: isMonogramHovered ? 0 : 1,
                    scale: isMonogramHovered ? 0.85 : 1,
                    rotate: isMonogramHovered ? -8 : 0,
                  }}
                  transition={{ duration: glyphDuration, ease: glyphEase }}
                >
                  E
                </motion.span>
                <motion.span
                  className="hero-glyph-char hero-glyph-target"
                  animate={{
                    opacity: isMonogramHovered ? 1 : 0,
                    scale: isMonogramHovered ? 1 : 0.85,
                    rotate: isMonogramHovered ? 0 : 8,
                  }}
                  transition={{ duration: glyphDuration, ease: glyphEase }}
                >
                  {">"}
                </motion.span>
              </span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            {isMonogramHovered ? (
              <motion.div
                key={activeFact}
                className="hero-fact-popout"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.95, y: -6 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.97, y: -4 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.34,
                  ease: glyphEase,
                }}
              >
                <span className="hero-fact-label">// did you know</span>
                <p className="hero-fact-text">{activeFact}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <div className="hero-title-wrap">
          <motion.h1 className="hero-title">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={fadeUp(0.08, 44)}
              >
                Yeboah Eric
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block hero-title-role"
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
              I am Yeboah Eric, a full-stack minded creative engineer based in Accra, Ghana.
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
              <GithubMarkIcon aria-hidden="true" size={17} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yeboah-osei-eric-329b57296/"
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="contact-social"
              aria-label="LinkedIn"
            >
              <LinkedinMarkIcon aria-hidden="true" size={17} />
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
