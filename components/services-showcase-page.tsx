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
    <div id="services" className="services-page bg-[#fbfbfa] text-black">
      <section className="px-5 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <motion.div
          className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col items-center justify-center text-center"
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp(0.02, 34)}
            className="max-w-6xl text-balance text-5xl font-light leading-[0.92] tracking-[-0.06em] text-black sm:text-7xl lg:text-[7.5rem]"
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
            className="mt-8 h-px w-full max-w-5xl bg-black"
          />
          <motion.p
            variants={fadeUp(0.16, 22)}
            className="mt-5 max-w-4xl text-balance text-lg leading-9 text-neutral-600 sm:text-2xl"
          >
            Reliable, scalable infrastructure solutions designed to power your applications
            with enterprise-grade security and performance.
          </motion.p>
          <motion.div
            variants={fadeUp(0.24, 18)}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
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

      <div className="grid gap-10 px-5 pb-24 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <ServicePanel key={service.title} service={service} index={index} />
        ))}
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-28 text-center sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 36, filter: "blur(12px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: softEase }}
        >
          <h2 className="text-balance text-4xl font-light tracking-[-0.05em] text-black sm:text-5xl">
            Need Something Custom?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-neutral-600">
            I also provide custom development services, API integrations, and consulting for
            your specific needs. Let&apos;s discuss how I can help scale your business.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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
      className="mx-auto grid min-h-[92svh] w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20"
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
      <div className={visualFirst ? "lg:order-1" : "lg:order-2"}>
        <ServiceVisual service={service} />
      </div>

      <motion.div
        className={visualFirst ? "lg:order-2" : "lg:order-1"}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.32 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp(0, 18)} className="flex flex-wrap items-center gap-5">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-[1.4rem] text-white shadow-[0_18px_42px_rgba(0,0,0,0.08)]"
            style={{ backgroundColor: service.accent }}
          >
            <Icon aria-hidden="true" size={52} strokeWidth={1.75} />
          </div>
          <span className="text-lg text-neutral-500">Service {service.number}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            <BadgeCheck aria-hidden="true" size={16} strokeWidth={1.75} />
            Available Now
          </span>
        </motion.div>

        <motion.div variants={fadeUp(0.04, 24)} className="mt-8">
          <h2 className="text-balance text-4xl font-light leading-[0.95] tracking-[-0.06em] text-black sm:text-6xl">
            {service.title}
          </h2>
          <p className="mt-5 text-2xl leading-tight text-neutral-600 sm:text-3xl">
            {service.subtitle}
          </p>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-600">
            {service.description}
          </p>
        </motion.div>

        <motion.div variants={fadeUp(0.08, 20)} className="mt-12">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Key Features</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="grid grid-cols-[2rem_1fr] gap-5 rounded-[1.25rem] bg-neutral-100/80 p-6"
                >
                  <FeatureIcon aria-hidden="true" size={28} strokeWidth={1.75} className="mt-1 text-neutral-600" />
                  <div>
                    <h4 className="text-lg font-semibold tracking-[-0.02em] text-black">{feature.title}</h4>
                    <p className="mt-2 text-base leading-6 text-neutral-600">{feature.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp(0.12, 20)} className="mt-12">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Performance Metrics</h3>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {service.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-light tracking-[-0.04em] text-black sm:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm text-neutral-500 sm:text-base">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.16, 24)}
          className="mt-12 rounded-[1.5rem] bg-neutral-100/80 p-8 sm:p-10"
        >
          <div>
            <p className="text-4xl font-light tracking-[-0.05em] text-black">
              {service.price}
              <span className="text-lg text-neutral-500">/{service.priceSuffix}</span>
            </p>
            <p className="mt-4 text-lg text-neutral-600">{service.included}</p>
          </div>

          {service.plans ? (
            <div className="mt-8">
              <h4 className="text-lg font-semibold tracking-[-0.02em]">Available Plans</h4>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.plans.map((plan) => (
                  <div key={plan.name} className="rounded-xl border border-neutral-200 bg-white p-5">
                    <p className="font-semibold text-black">{plan.name}</p>
                    <p className="mt-2 text-2xl font-light tracking-[-0.04em]">{plan.price}</p>
                    <p className="mt-2 text-sm leading-5 text-neutral-500">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="/get-started"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 text-base font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
              style={{ backgroundColor: service.accent }}
            >
              Get Started
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.75} />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-7 text-base font-semibold text-black shadow-[0_8px_22px_rgba(0,0,0,0.05)] transition hover:border-neutral-300"
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
      className="relative mx-auto min-h-[34rem] w-full max-w-[42rem]"
      initial={reduceMotion ? false : { opacity: 0, x: -42, scale: 0.94, filter: "blur(14px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: softEase }}
    >
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative min-h-[34rem] overflow-visible rounded-[1.5rem] border border-neutral-200 bg-neutral-50 shadow-[0_32px_70px_rgba(0,0,0,0.12)]"
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
