"use client";

import type { CSSProperties } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import { fadeUp, softEase, staggerContainer } from "@/components/motion-tokens";
import { services, type Service } from "@/data/portfolio";

type AccentStyle = CSSProperties & {
  "--service-accent": string;
};

export function ServicesShowcasePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="services" className="services-page">
      <section className="services-hero">
        <motion.div
          className="services-hero-inner"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp(0.02, 34)}
            className="services-hero-title"
          >
            Professional
            <span className="block">Infrastructure Services</span>
          </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0, transformOrigin: "center" },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.65, delay: 0.12, ease: softEase },
              },
            }}
            className="services-hero-divider"
          />
          <motion.p
            variants={fadeUp(0.16, 22)}
            className="services-hero-copy"
          >
            Reliable, scalable infrastructure solutions designed to power your applications
            with enterprise-grade security and performance.
          </motion.p>
          <motion.div
            variants={fadeUp(0.24, 18)}
            className="services-hero-actions"
          >
            <ButtonLink href="#service-01">
              Explore Services
            </ButtonLink>
            <ButtonLink href="/get-started" variant="secondary">
              Get Custom Quote
            </ButtonLink>
          </motion.div>
        </motion.div>
      </section>

      <div className="services-list">
        {services.map((service, index) => (
          <ServicePanel key={service.title} service={service} index={index} />
        ))}
      </div>

      <section className="services-custom-cta">
        <motion.div
          className="services-custom-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 36, filter: "blur(12px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: softEase }}
        >
          <h2>
            Need Something Custom?
          </h2>
          <p>
            I also provide custom development services, API integrations, and consulting for
            your specific needs. Let&apos;s discuss how I can help scale your business.
          </p>
          <div className="services-custom-actions">
            <ButtonLink href="/get-started">
              Get Custom Quote
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View My Work
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ServicePanel({ service, index }: { service: Service; index: number }) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;
  const visualFirst = index % 2 === 1;

  return (
    <motion.section
      id={`service-${service.number}`}
      style={{ "--service-accent": service.accent } as AccentStyle}
      className="service-panel"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 90,
              scale: 0.94,
              filter: "blur(18px)",
              borderRadius: 56,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              borderRadius: 0,
            }
      }
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.8, ease: softEase }}
    >
      <div className={`service-visual-column ${visualFirst ? "lg:order-1" : "lg:order-2"}`}>
        <ServiceVisual service={service} />
      </div>

      <motion.div
        className={`service-copy-column ${visualFirst ? "lg:order-2" : "lg:order-1"}`}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.32 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp(0, 18)} className="service-kicker">
          <div
            className="service-icon-block"
            style={{ backgroundColor: service.accent }}
          >
            <Icon aria-hidden="true" size={52} strokeWidth={1.75} />
          </div>
          <span className="service-number">Service {service.number}</span>
          <span className="service-available">
            <BadgeCheck aria-hidden="true" size={16} strokeWidth={1.75} />
            Available Now
          </span>
        </motion.div>

        <motion.div variants={fadeUp(0.04, 24)} className="service-intro">
          <h2>
            {service.title}
          </h2>
          <p className="service-subtitle">
            {service.subtitle}
          </p>
          <p className="service-description">
            {service.description}
          </p>
        </motion.div>

        <motion.div variants={fadeUp(0.08, 20)} className="service-features-block">
          <h3>Key Features</h3>
          <div className="service-features-grid">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="service-feature"
                >
                  <FeatureIcon aria-hidden="true" size={28} strokeWidth={1.75} className="mt-1 text-neutral-600" />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp(0.12, 20)} className="service-metrics-block">
          <h3>Performance Metrics</h3>
          <div className="service-metrics-grid">
            {service.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="service-metric-value">{metric.value}</p>
                <p className="service-metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.16, 24)}
          className="service-pricing"
        >
          <div>
            <p className="service-price">
              {service.price}
              <span>/{service.priceSuffix}</span>
            </p>
            <p className="service-included">{service.included}</p>
          </div>

          {service.plans ? (
            <div className="service-plans">
              <h4>Available Plans</h4>
              <div className="service-plan-grid">
                {service.plans.map((plan) => (
                  <div key={plan.name} className="service-plan">
                    <p className="font-semibold text-black">{plan.name}</p>
                    <p className="mt-2 text-2xl font-light tracking-[-0.04em]">{plan.price}</p>
                    <p className="mt-2 text-sm leading-5 text-neutral-500">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="service-actions">
            <motion.a
              href="/get-started"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="service-primary-action"
              style={{ backgroundColor: service.accent }}
            >
              Get Started
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="reference-outline-button"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function ServiceVisual({ service }: { service: Service }) {
  const reduceMotion = useReducedMotion();
  const MainIcon = service.icon;
  const positions = [
    "left-[24%] top-[24%]",
    "left-[50%] top-[43%]",
    "right-[17%] top-[38%]",
    "left-[32%] bottom-[27%]",
    "right-[20%] bottom-[33%]",
  ];

  return (
    <motion.div
      className="service-visual"
      initial={reduceMotion ? false : { opacity: 0, x: -42, scale: 0.94, filter: "blur(14px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: softEase }}
    >
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="service-visual-surface"
      >
        <span className="absolute left-6 top-6 z-10 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
          Available Now
        </span>
        <span
          className="absolute right-3 top-3 z-10 rounded-full border border-neutral-200 bg-white px-4 py-3 text-base font-semibold shadow-[0_14px_28px_rgba(0,0,0,0.12)] sm:-right-6 sm:-top-6 sm:px-5 sm:py-4 sm:text-lg"
          style={{ color: service.accent }}
        >
          {service.price}/{service.priceSuffix}
        </span>

        {service.visualIcons.map((Icon, iconIndex) => (
          <motion.div
            key={`${service.title}-${iconIndex}`}
            className={`absolute ${positions[iconIndex] ?? positions[0]} text-neutral-400`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.7, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: iconIndex === 1 ? 1.45 : 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.12 + iconIndex * 0.08, ease: softEase }}
          >
            <Icon aria-hidden="true" size={iconIndex === 1 ? 44 : 30} strokeWidth={1.75} />
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-x-6 bottom-6 rounded-xl border border-neutral-100 bg-white p-6"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.35, ease: softEase }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-lg text-neutral-600">{service.visualLabel}</p>
              <p className="mt-2 text-3xl font-light tracking-[-0.04em] text-black">{service.visualValue}</p>
            </div>
            <p className="text-base text-neutral-500">{service.visualMeta}</p>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.4rem] border border-neutral-200 bg-white/55 text-neutral-300"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.18, ease: softEase }}
        >
          <MainIcon size={54} strokeWidth={1.75} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
