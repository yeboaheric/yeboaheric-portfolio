import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Boxes,
  CircleDot,
  Code2,
  Diamond,
  GraduationCap,
  Layers3,
  Mail,
  MessageCircle,
  Monitor,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  Sparkles,
  SquareCheck,
  Users,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  place: string;
  description: string;
};

export type Project = {
  title: string;
  category: string;
  year: string;
  duration: string;
  teamSize: string;
  role: string;
  description: string;
  screenshot: string;
  liveUrl: string;
  repoUrl?: string;
  techStack: string[];
  features: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  impact: Array<{
    value: string;
    label: string;
  }>;
};

export type TechItem = {
  name: string;
  icon: string;
  category: string;
  color: string;
  url: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Get Started", href: "#contact" },
];

export const experience: TimelineItem[] = [
  {
    date: "2025 - Present",
    title: "Creative Engineer",
    place: "Independent",
    description:
      "Designing and building clean web experiences for small businesses, products, and personal brands.",
  },
  {
    date: "2024 - 2025",
    title: "Frontend Developer",
    place: "Project-based work",
    description:
      "Built responsive interfaces, landing pages, and reusable UI sections with a focus on clarity and speed.",
  },
];

export const education: TimelineItem[] = [
  {
    date: "2022 - 2026",
    title: "Ghana Communications Technology University",
    place: "Self-directed learning",
    description:
      "Studying full-stack development through practical projects, documentation, and consistent iteration.",
  },
  {
    date: "2023 - 2024",
    title: "Web Design Foundations",
    place: "Independent practice",
    description:
      "Focused on HTML, CSS, JavaScript fundamentals, layout systems, and interface craft.",
  },
];

export const projects: Project[] = [
  {
    title: "Yaarnies Camera Store",
    category: "Modern Photography E-commerce",
    year: "2024",
    duration: "4 months",
    teamSize: "2 developers",
    role: "Lead Developer",
    description:
      "A modern e-commerce platform for photography enthusiasts, featuring instant cameras, digital cameras, and content creation accessories.",
    screenshot: "/projects/yaarnies-camera-store.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      {
        title: "Responsive Framework",
        description: "Pixel-precise layouts across desktop, tablet, and mobile shopping journeys.",
        icon: Monitor,
      },
      {
        title: "Smart Inventory",
        description: "Structured catalog management for featured drops, stock states, and variants.",
        icon: Package,
      },
      {
        title: "Social Commerce",
        description: "Product storytelling built around discovery, sharing, and repeat engagement.",
        icon: Users,
      },
      {
        title: "Secure Checkout",
        description: "A clean purchase flow designed for trust, speed, and low-friction conversion.",
        icon: ShieldCheck,
      },
    ],
    impact: [
      { value: "+65%", label: "User engagement" },
      { value: "+120%", label: "Revenue growth" },
      { value: "95/100", label: "Performance score" },
    ],
  },
  {
    title: "SkillExchange",
    category: "Community Skill Marketplace",
    year: "2025",
    duration: "3 months",
    teamSize: "3 contributors",
    role: "Product Designer & Frontend Lead",
    description:
      "A community product concept for discovering people, trading knowledge, and arranging skill sessions.",
    screenshot: "/projects/skillexchange.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    features: [
      {
        title: "User Discovery",
        description: "Member profiles, expertise filters, and clearer matching between learners and mentors.",
        icon: Users,
      },
      {
        title: "Messaging Flow",
        description: "Lightweight communication patterns for scheduling, introductions, and session follow-up.",
        icon: MessageCircle,
      },
      {
        title: "Responsive Platform",
        description: "A flexible browsing experience tuned for mobile-first communities and frequent return visits.",
        icon: Monitor,
      },
      {
        title: "Data-backed Search",
        description: "Structured filtering and fast retrieval for skills, availability, and location signals.",
        icon: ShieldCheck,
      },
    ],
    impact: [
      { value: "3x", label: "Faster discovery" },
      { value: "+42%", label: "Message starts" },
      { value: "88%", label: "Mobile task completion" },
    ],
  },
  {
    title: "Adwoa Fosua Guesthouse SaaS",
    category: "Hospitality Operations Dashboard",
    year: "2025",
    duration: "5 months",
    teamSize: "2 developers",
    role: "Lead Developer",
    description:
      "A lightweight operations dashboard concept for bookings, guest records, and internal visibility.",
    screenshot: "/projects/adwoa-fosua-saas.svg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      {
        title: "Booking Control",
        description: "At-a-glance room visibility, reservation handling, and occupancy tracking from one place.",
        icon: Package,
      },
      {
        title: "Reusable Modules",
        description: "Scalable admin sections built to support reporting, staff workflows, and future service layers.",
        icon: Boxes,
      },
      {
        title: "Guest Messaging",
        description: "Clearer communication touchpoints for confirmations, updates, and hospitality support tasks.",
        icon: MessageCircle,
      },
      {
        title: "Payment-ready Structure",
        description: "Prepared flows for secure transactions, reconciliation, and future finance integrations.",
        icon: ShieldCheck,
      },
    ],
    impact: [
      { value: "-38%", label: "Admin time" },
      { value: "+54%", label: "Booking clarity" },
      { value: "99.2%", label: "Record accuracy" },
    ],
  },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "/tech/react.svg", category: "Frontend", color: "#61DAFB", url: "https://react.dev" },
  { name: "Next.js", icon: "/tech/nextjs.svg", category: "Framework", color: "#000000", url: "https://nextjs.org" },
  { name: "TypeScript", icon: "/tech/typescript.svg", category: "Language", color: "#3178C6", url: "https://www.typescriptlang.org" },
  { name: "JavaScript", icon: "/tech/javascript.svg", category: "Language", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: "/tech/python.svg", category: "Language", color: "#3776AB", url: "https://www.python.org" },
  { name: "Node.js", icon: "/tech/nodejs.svg", category: "Runtime", color: "#5FA04E", url: "https://nodejs.org" },
  { name: "Django", icon: "/tech/django.svg", category: "Framework", color: "#092E20", url: "https://www.djangoproject.com" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg", category: "Styling", color: "#06B6D4", url: "https://tailwindcss.com" },
  { name: "Supabase", icon: "/tech/supabase.svg", category: "Backend", color: "#3FCF8E", url: "https://supabase.com" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", category: "Database", color: "#4169E1", url: "https://www.postgresql.org" },
  { name: "Git", icon: "/tech/git.svg", category: "Version control", color: "#F05032", url: "https://git-scm.com" },
  { name: "GitHub", icon: "/tech/github.svg", category: "Collaboration", color: "#181717", url: "https://github.com" },
  { name: "Figma", icon: "/tech/figma.svg", category: "Design", color: "#F24E1E", url: "https://figma.com" },
  { name: "Photoshop", icon: "/tech/photoshop.svg", category: "Image editing", color: "#31A8FF", url: "https://www.adobe.com/products/photoshop.html" },
  { name: "Canva", icon: "/tech/canva.svg", category: "Design", color: "#00C4CC", url: "https://www.canva.com" },
  { name: "Illustrator", icon: "/tech/illustrator.svg", category: "Vector design", color: "#FF9A00", url: "https://www.adobe.com/products/illustrator.html" },
  { name: "Premiere Pro", icon: "/tech/premiere-pro.svg", category: "Video editing", color: "#9999FF", url: "https://www.adobe.com/products/premiere.html" },
  { name: "Affinity", icon: "/tech/affinity.svg", category: "Creative suite", color: "#7E4DD2", url: "https://affinity.serif.com" },
  { name: "Final Cut Pro", icon: "/tech/final-cut-pro.svg", category: "Video editing", color: "#5AC8FA", url: "https://www.apple.com/final-cut-pro/" },
  { name: "Framer Motion", icon: "/tech/framer.svg", category: "Motion", color: "#0055FF", url: "https://motion.dev" },
  { name: "Render", icon: "/tech/render.svg", category: "Deployment", color: "#000000", url: "https://render.com" },
  { name: "Vercel", icon: "/tech/vercel.svg", category: "Deployment", color: "#000000", url: "https://vercel.com" },
  { name: "Cloudflare", icon: "/tech/cloudflare.svg", category: "Edge", color: "#F38020", url: "https://www.cloudflare.com" },
];

export function getTechByName(name: string) {
  return techStack.find((item) => item.name === name);
}

export const services: Service[] = [
  {
    title: "Websites",
    description: "Minimal marketing and portfolio sites with clear structure and strong responsive behavior.",
    icon: MonitorSmartphone,
  },
  {
    title: "Interfaces",
    description: "Reusable UI systems for product pages, dashboards, forms, and service flows.",
    icon: Layers3,
  },
  {
    title: "Polish",
    description: "Refining spacing, hierarchy, accessibility, and interaction states for cleaner launches.",
    icon: Sparkles,
  },
];

export const socialLinks = [
  { label: "Email", href: "mailto:oseiyeboaheric@outlook.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/yeboaheric", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yeboah-osei-eric-329b57296/",
    icon: SquareCheck,
  },
];

export const principles = [
  { number: "01", title: "Simplicity", icon: CircleDot },
  { number: "02", title: "Functionality", icon: SquareCheck },
  { number: "03", title: "Elegance", icon: Diamond },
];

export const timelineLabels = {
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
} as const;
