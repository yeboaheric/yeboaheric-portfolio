"use client";

import { useId, useState } from "react";
import {
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  FolderOpen,
  Globe,
  Mail,
  MessageCircle,
  Palette,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { softEase } from "@/components/motion-tokens";
import type { LucideIcon } from "lucide-react";

type FieldBase = {
  label: string;
  required?: boolean;
};

type InputField = FieldBase & {
  type: "input";
  inputType?: string;
  placeholder: string;
};

type TextareaField = FieldBase & {
  type: "textarea";
  placeholder: string;
  rows?: number;
};

type SelectField = FieldBase & {
  type: "select";
  placeholder: string;
  options: string[];
};

type CheckboxGridField = FieldBase & {
  type: "checkbox-grid";
  options: string[];
  columns?: 1 | 2;
};

type Field = InputField | TextareaField | SelectField | CheckboxGridField;

type RequirementsSection = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  fields: Field[];
};

const benefits = [
  {
    title: "Custom Design",
    description: "Tailored to your brand",
  },
  {
    title: "Performance First",
    description: "Blazing fast & SEO ready",
  },
  {
    title: "Ongoing Support",
    description: "I'm here when you need me",
  },
];

const introFields: Field[] = [
  { type: "input", label: "Full Name", placeholder: "John Doe", required: true },
  { type: "input", label: "Email Address", placeholder: "john@example.com", required: true, inputType: "email" },
  { type: "input", label: "WhatsApp Number", placeholder: "+233 24 123 4567", required: true, inputType: "tel" },
  { type: "input", label: "Your Role/Position (Optional)", placeholder: "CEO, Marketing Manager, etc." },
];

const requirementsSections: RequirementsSection[] = [
  {
    id: "business-overview",
    title: "Business Overview",
    subtitle: "Tell me about your vision",
    icon: Code2,
    fields: [
      { type: "input", label: "Company Name", placeholder: "Your company name", required: true },
      { type: "input", label: "Tagline or Slogan", placeholder: "Brief catchphrase (optional)" },
      { type: "textarea", label: "Business Description", placeholder: "What does your business do?", required: true, rows: 5 },
      { type: "textarea", label: "Target Audience", placeholder: "Who are your ideal customers?", required: true, rows: 5 },
      { type: "textarea", label: "Website Goals", placeholder: "What should the website achieve?", required: true, rows: 5 },
      { type: "input", label: "Current Website", placeholder: "https://example.com (if any)", inputType: "url" },
      { type: "input", label: "Google Drive Link", placeholder: "Link to your assets/images/content (optional)", inputType: "url" },
      { type: "textarea", label: "Websites You Admire", placeholder: "Share websites you love and why...", rows: 4 },
      { type: "textarea", label: "Websites You Dislike", placeholder: "What websites do you dislike and why? This helps me avoid those elements...", rows: 4 },
    ],
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    subtitle: "Let's capture your brand essence",
    icon: Palette,
    fields: [
      { type: "input", label: "Brand Colors", placeholder: "#FF5733, #333333 (hex codes or names)" },
      { type: "input", label: "Font Preferences", placeholder: "Helvetica, Arial, etc." },
      { type: "textarea", label: "Desired Look & Feel", placeholder: "Modern, elegant, playful, minimalist?", rows: 5 },
      { type: "textarea", label: "Existing Visual Assets", placeholder: "Logo, images, videos you have", rows: 5 },
      {
        type: "checkbox-grid",
        label: "What Content Assets Do You Have?",
        options: [
          "Company Logo (SVG/PNG)",
          "Product Images",
          "Team Photos",
          "Brand Guidelines",
          "Written Content/Copy",
          "Videos",
          "Customer Testimonials",
          "Case Studies",
          "None yet - need help creating",
        ],
        columns: 2,
      },
      { type: "textarea", label: "Elements to Avoid", placeholder: "Colors, styles, or features you don't want", rows: 4 },
    ],
  },
  {
    id: "pages-content",
    title: "Pages & Content",
    subtitle: "Structuring your website",
    icon: Globe,
    fields: [
      {
        type: "checkbox-grid",
        label: "Required Pages",
        options: [
          "Home",
          "About",
          "Services / Products",
          "Portfolio / Gallery",
          "Blog / News",
          "Contact",
          "Testimonials / Reviews",
          "FAQ",
          "Other (specify below)",
        ],
        columns: 2,
      },
      {
        type: "select",
        label: "Content Provision",
        placeholder: "Select an option",
        options: [
          "I'll provide all content",
          "I need help writing content",
          "Mix of both",
        ],
      },
      { type: "textarea", label: "Homepage Must-Haves", placeholder: "Hero banner, features, testimonials...", rows: 4 },
    ],
  },
  {
    id: "features-functionality",
    title: "Features & Functionality",
    subtitle: "Making your website work for you",
    icon: Zap,
    fields: [
      {
        type: "checkbox-grid",
        label: "Core Features",
        options: [
          "E-commerce with checkout",
          "Booking system",
          "Payment integration",
          "Contact forms",
          "Newsletter signup",
          "Live chat support",
          "Multi-language",
          "User accounts",
        ],
        columns: 2,
      },
      { type: "textarea", label: "Custom Features", placeholder: "Describe any unique requirements", rows: 4 },
      {
        type: "select",
        label: "Product filtering/search?",
        placeholder: "Select an option",
        options: ["Yes", "No", "Not sure yet"],
      },
      {
        type: "select",
        label: "Automated emails needed?",
        placeholder: "Select an option",
        options: ["Yes", "No", "Not sure yet"],
      },
    ],
  },
  {
    id: "technical-details",
    title: "Technical Details",
    subtitle: "The backbone of your website",
    icon: Code2,
    fields: [
      { type: "input", label: "Domain Name", placeholder: "yourwebsite.com" },
      { type: "input", label: "Domain Registrar", placeholder: "GoDaddy, Namecheap, etc." },
      { type: "input", label: "Hosting Provider", placeholder: "If already set up" },
      {
        type: "select",
        label: "Analytics Preference",
        placeholder: "Select an option",
        options: ["Google Analytics", "Plausible", "Simple Analytics", "Not needed yet"],
      },
      { type: "textarea", label: "SEO Keywords", placeholder: "Keywords for search optimization", rows: 4 },
    ],
  },
  {
    id: "timeline-support",
    title: "Timeline & Support",
    subtitle: "When do we begin?",
    icon: Send,
    fields: [
      { type: "input", label: "Target Launch Date", placeholder: "mm / dd / yyyy" },
      { type: "textarea", label: "Important Deadlines", placeholder: "Any specific dates to work around?", rows: 4 },
      { type: "textarea", label: "Content Ready By", placeholder: "When can you provide all materials?", rows: 4 },
      {
        type: "select",
        label: "Post-Launch Support",
        placeholder: "Select an option",
        options: ["Yes, ongoing maintenance", "Only launch support", "Not needed", "Let's discuss"],
      },
    ],
  },
];

export function GetStartedPage() {
  const reduceMotion = useReducedMotion();
  const [openSection, setOpenSection] = useState(requirementsSections[0].id);

  return (
    <div className="get-started-page bg-white text-black">
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-6xl pb-14 pt-4">
          <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-black sm:text-base">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <Code2 size={28} strokeWidth={2.1} />
            </span>
            <span>LET&apos;S CREATE MAGIC</span>
          </div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: softEase }}
            className="mt-10 max-w-5xl text-balance text-[3.5rem] font-light leading-[0.92] tracking-[-0.06em] text-black sm:text-[4.7rem] lg:text-[5.9rem]"
          >
            Your Dream Website
            <span className="block font-medium">Starts Here</span>
          </motion.h1>

          <p className="mt-8 max-w-4xl text-balance text-lg leading-[1.6] text-neutral-600 sm:text-[1.35rem]">
            Every great website begins with a vision. I&apos;m here to transform your ideas into a
            stunning digital reality. Fill out this comprehensive form, and I&apos;ll craft a website that
            not only looks beautiful but delivers results.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-5">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check size={24} strokeWidth={2.2} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-black sm:text-[1.75rem]">
                    {benefit.title}
                  </h2>
                  <p className="mt-1 text-base text-neutral-600 sm:text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] sm:p-10 lg:p-12">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-[2.25rem]">
            Quick Questions? Direct Message
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-[1.65] text-neutral-600 sm:text-[1.15rem]">
            Not sure about something? Have specific requirements? You can use our comprehensive form or reach out directly:
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-3 text-lg font-semibold text-black sm:text-[1.35rem]">
                <FolderOpen size={24} strokeWidth={1.9} />
                Fill Out Full Requirements
              </p>
              <a
                href="#intro-form"
                className="mt-5 inline-flex min-h-[4.25rem] w-full items-center justify-center gap-3 rounded-full bg-black px-8 text-lg font-semibold text-white transition hover:bg-neutral-800 sm:text-xl"
              >
                Get Started Form
                <Send size={22} strokeWidth={1.8} />
              </a>
              <p className="mt-4 text-sm text-neutral-500 sm:text-base">
                Comprehensive form for detailed project requirements
              </p>
            </div>

            <div>
              <p className="inline-flex items-center gap-3 text-lg font-semibold text-black sm:text-[1.35rem]">
                <MessageCircle size={24} strokeWidth={1.9} />
                Or Reach Out Directly:
              </p>
              <div className="mt-6 grid gap-4 text-base text-black sm:text-lg">
                <a href="mailto:alvinyeboah5@gmail.com" className="inline-flex items-center gap-4 hover:text-neutral-700">
                  <Mail size={24} strokeWidth={1.8} />
                  alvinyeboah5@gmail.com
                </a>
                <a href="https://wa.me/233241234567" className="inline-flex items-center gap-4 hover:text-neutral-700">
                  <MessageCircle size={24} strokeWidth={1.8} />
                  WhatsApp Chat
                </a>
                <a href="https://drive.google.com" className="inline-flex items-center gap-4 hover:text-neutral-700">
                  <Globe size={24} strokeWidth={1.8} />
                  Share Files via Drive
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-neutral-100 px-6 py-6 text-sm text-neutral-600 sm:px-8 sm:text-base">
            Pro Tip: Use the Get Started form for the best results - include your budget range, timeline, and specific features you need!
          </div>
        </section>

        <form id="intro-form" className="mx-auto mt-12 max-w-6xl space-y-10">
          <FormShell rounded="3xl">
            <div className="grid gap-8 sm:gap-10">
              {introFields.map((field) => (
                <FieldRenderer key={field.label} field={field} />
              ))}
            </div>
          </FormShell>

          <div className="space-y-8">
            {requirementsSections.map((section) => (
              <AccordionSection
                key={section.id}
                section={section}
                open={openSection === section.id}
                onToggle={() =>
                  setOpenSection((current) => (current === section.id ? "" : section.id))
                }
              />
            ))}
          </div>

          <section className="rounded-[1.8rem] border-[3px] border-black bg-white px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.04em] text-black sm:text-[2.4rem]">
                  Ready to begin?
                </h2>
                <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
                  Submit your requirements and let&apos;s create something amazing together
                </p>
              </div>
              <button
                type="submit"
                className="inline-flex min-h-[4.25rem] items-center justify-center gap-3 rounded-full bg-black px-9 text-lg font-semibold text-white transition hover:bg-neutral-800 sm:min-w-[18rem] sm:text-xl"
              >
                Submit Requirements
                <Send size={22} strokeWidth={1.8} />
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}

function AccordionSection({
  section,
  open,
  onToggle,
}: {
  section: RequirementsSection;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = section.icon;
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden rounded-[1.7rem] border border-black/90 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8 sm:py-7"
        aria-expanded={open}
      >
        <div className="flex min-w-0 items-center gap-5">
          <span
            className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
              open ? "bg-black text-white" : "bg-neutral-100 text-black"
            }`}
          >
            <Icon size={24} strokeWidth={1.9} />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl font-medium tracking-[-0.03em] text-black sm:text-[1.7rem]">
              {section.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 sm:text-base">{section.subtitle}</p>
          </div>
        </div>
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
            open ? "bg-black text-white" : "bg-neutral-100 text-black"
          }`}
        >
          {open ? <ChevronUp size={22} strokeWidth={2} /> : <ChevronDown size={22} strokeWidth={2} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: softEase }}
            className="overflow-hidden border-t border-neutral-200"
          >
            <div className="p-6 sm:p-8">
              <div className="grid gap-8">
                {section.fields.map((field) => (
                  <FieldRenderer key={`${section.id}-${field.label}`} field={field} />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function FormShell({
  children,
  rounded,
}: {
  children: React.ReactNode;
  rounded: "3xl";
}) {
  return (
    <section className={`rounded-[2.2rem] border border-black/90 bg-white p-6 sm:p-8 lg:p-12`}>
      {children}
    </section>
  );
}

function FieldRenderer({ field }: { field: Field }) {
  const id = useId();

  if (field.type === "textarea") {
    return (
      <label htmlFor={id} className="grid gap-4">
        <FieldLabel label={field.label} required={field.required} />
        <textarea
          id={id}
          rows={field.rows ?? 4}
          placeholder={field.placeholder}
          className="get-started-textarea"
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label htmlFor={id} className="grid gap-4">
        <FieldLabel label={field.label} required={field.required} />
        <div className="relative">
          <select id={id} defaultValue="" className="get-started-select">
            <option value="" disabled>
              {field.placeholder}
            </option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            size={20}
            strokeWidth={1.7}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />
        </div>
      </label>
    );
  }

  if (field.type === "checkbox-grid") {
    const columns = field.columns === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";

    return (
      <fieldset className="grid gap-4">
        <legend className="text-base font-semibold tracking-[-0.02em] text-black sm:text-[1.05rem]">
          {field.label}
        </legend>
        <div className={`grid gap-4 ${columns}`}>
          {field.options.map((option) => {
            const optionId = `${id}-${option.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <label
                key={option}
                htmlFor={optionId}
                className="get-started-checkline"
              >
                <input id={optionId} type="checkbox" className="get-started-checkbox" />
                <span className="text-base text-black sm:text-[1.05rem]">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  return (
    <label htmlFor={id} className="grid gap-4">
      <FieldLabel label={field.label} required={field.required} />
      <div className="relative">
        <input
          id={id}
          type={field.inputType ?? "text"}
          placeholder={field.placeholder}
          className="get-started-input"
        />
        {field.label === "Target Launch Date" ? (
          <Calendar
            aria-hidden="true"
            size={20}
            strokeWidth={1.7}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500"
          />
        ) : null}
      </div>
    </label>
  );
}

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="text-base font-semibold tracking-[-0.02em] text-black sm:text-[1.05rem]">
      {label}
      {required ? <span className="ml-2 text-red-500">*</span> : null}
    </span>
  );
}
