import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BriefcaseBusiness,
  Boxes,
  CheckCircle2,
  CircleDot,
  Clock3,
  Cloud,
  Code2,
  Database,
  Diamond,
  Eye,
  GraduationCap,
  Globe2,
  HardDrive,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  MessageCircle,
  MessageSquare,
  Monitor,
  MonitorSmartphone,
  Package,
  Server,
  ShieldCheck,
  Sparkles,
  SquareCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
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
  number: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceSuffix: string;
  accent: string;
  icon: LucideIcon;
  visualLabel: string;
  visualValue: string;
  visualMeta: string;
  included: string;
  features: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  plans?: Array<{
    name: string;
    price: string;
    description: string;
  }>;
  visualIcons: LucideIcon[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Get Started", href: "/get-started" },
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
    number: "01",
    title: "Web App Development",
    subtitle: "Modern Full-Stack Applications",
    description:
      "Custom web applications built with clean architecture, fast interfaces, and reliable deployment workflows for growing businesses.",
    price: "Custom",
    priceSuffix: "project",
    accent: "#111111",
    icon: MonitorSmartphone,
    visualLabel: "Applications Built",
    visualValue: "35+",
    visualMeta: "95/100 average score",
    included: "Full-stack build • Responsive UI • Deployment setup",
    features: [
      {
        title: "Responsive Framework",
        description: "Interfaces shaped for desktop, tablet, and mobile from the first layout pass.",
        icon: Monitor,
      },
      {
        title: "Scalable Architecture",
        description: "Reusable modules, clean data flow, and room for future product expansion.",
        icon: Layers3,
      },
      {
        title: "Secure Foundations",
        description: "Authentication-ready patterns, validation, and practical access control thinking.",
        icon: ShieldCheck,
      },
      {
        title: "Production Launch",
        description: "Deployment, performance checks, and polish before the product goes live.",
        icon: Cloud,
      },
    ],
    metrics: [
      { value: "95/100", label: "Performance" },
      { value: "3-6 wks", label: "Typical build" },
      { value: "100%", label: "Responsive" },
    ],
    plans: [
      { name: "Starter", price: "Custom", description: "Landing page or focused product build" },
      { name: "Growth", price: "Custom", description: "Multi-page app with integrations" },
      { name: "Scale", price: "Custom", description: "Dashboard, auth, and data workflows" },
    ],
    visualIcons: [Code2, Server, Cloud, ShieldCheck],
  },
  {
    number: "02",
    title: "Website Monitoring & Analytics",
    subtitle: "Real-time Performance Tracking",
    description:
      "Comprehensive website monitoring and analytics that tracks uptime, performance metrics, user behavior, and actionable optimization signals.",
    price: "GHS 20",
    priceSuffix: "month",
    accent: "#f59e0b",
    icon: Eye,
    visualLabel: "Sites Monitored",
    visualValue: "450+",
    visualMeta: "99.96% uptime",
    included: "5 Websites • Real-time Alerts",
    features: [
      {
        title: "Uptime Monitoring",
        description: "24/7 monitoring with fast alerts for downtime and performance issues.",
        icon: Activity,
      },
      {
        title: "Performance Analytics",
        description: "Insights on load times, engagement, and conversion patterns.",
        icon: LineChart,
      },
      {
        title: "Smart Alerts",
        description: "Custom notifications through SMS, email, and webhooks for critical events.",
        icon: AlertTriangle,
      },
      {
        title: "Goal Tracking",
        description: "Monitor conversions, form submissions, and business objectives.",
        icon: Target,
      },
    ],
    metrics: [
      { value: "30 sec", label: "Check frequency" },
      { value: "2 years", label: "Data retention" },
      { value: "<500ms", label: "Response time" },
    ],
    plans: [
      { name: "Starter", price: "GHS 20/mo", description: "2 Websites • Uptime monitoring" },
      { name: "Pro", price: "GHS 40/mo", description: "10 Websites • Performance monitoring" },
      { name: "Enterprise", price: "GHS 80/mo", description: "Unlimited sites • Custom dashboards" },
    ],
    visualIcons: [Activity, Eye, Target, LineChart, Clock3],
  },
  {
    number: "03",
    title: "PostgreSQL Database",
    subtitle: "Enterprise-Grade Database Hosting",
    description:
      "Reliable, scalable PostgreSQL database hosting with high availability, automated backups, and enterprise-level security for critical applications.",
    price: "GHS 100-300",
    priceSuffix: "month",
    accent: "#3b82f6",
    icon: Database,
    visualLabel: "Active Databases",
    visualValue: "1,200+",
    visualMeta: "+15% this month",
    included: "5GB Storage • Daily Backups",
    features: [
      {
        title: "Enterprise Security",
        description: "End-to-end encryption, SSL/TLS protocols, and advanced access controls.",
        icon: ShieldCheck,
      },
      {
        title: "High Performance",
        description: "SSD storage, optimized queries, and sub-millisecond response tuning.",
        icon: Zap,
      },
      {
        title: "99.9% Uptime SLA",
        description: "Guaranteed availability with automated failover and monitoring.",
        icon: Server,
      },
      {
        title: "Automated Backups",
        description: "Daily backups with point-in-time recovery and quick restoration.",
        icon: Clock3,
      },
    ],
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "<50ms", label: "Response time" },
      { value: "Up to 1TB", label: "Storage" },
    ],
    visualIcons: [HardDrive, Database, Layers3, LockKeyhole, Activity],
  },
  {
    number: "04",
    title: "SMS Service",
    subtitle: "Global SMS API Platform",
    description:
      "Powerful SMS API for sending transactional and marketing messages worldwide with strong delivery rates and comprehensive analytics.",
    price: "GHS 0.30-0.80",
    priceSuffix: "message",
    accent: "#10b981",
    icon: MessageSquare,
    visualLabel: "Messages Sent",
    visualValue: "2.5M+",
    visualMeta: "This month",
    included: "Global Coverage • Real-time Tracking",
    features: [
      {
        title: "Global Coverage",
        description: "Send SMS to 200+ countries with local phone number support.",
        icon: Globe2,
      },
      {
        title: "Instant Delivery",
        description: "Real-time message delivery with detailed status tracking.",
        icon: Zap,
      },
      {
        title: "Developer-First API",
        description: "RESTful API with SDKs, webhooks, and detailed documentation.",
        icon: ShieldCheck,
      },
      {
        title: "99%+ Delivery Rate",
        description: "Reliable delivery through multiple carrier routes and redundancy.",
        icon: CheckCircle2,
      },
    ],
    metrics: [
      { value: "99.2%", label: "Delivery rate" },
      { value: "200+", label: "Countries" },
      { value: "99.9%", label: "API uptime" },
    ],
    visualIcons: [MonitorSmartphone, MessageSquare, Globe2, BarChart3],
  },
  {
    number: "05",
    title: "Email Service",
    subtitle: "Professional Email Solutions",
    description:
      "Professional email hosting and transactional email API for communication, marketing campaigns, and business correspondence.",
    price: "GHS 50-150",
    priceSuffix: "month",
    accent: "#8b5cf6",
    icon: Mail,
    visualLabel: "Emails Delivered",
    visualValue: "850K+",
    visualMeta: "99.8% success rate",
    included: "Custom Domain • 10GB Storage",
    features: [
      {
        title: "Advanced Security",
        description: "Anti-spam protection, malware scanning, and encryption.",
        icon: ShieldCheck,
      },
      {
        title: "Fast Delivery",
        description: "Optimized infrastructure for instant email delivery.",
        icon: Zap,
      },
      {
        title: "Custom Domains",
        description: "Host emails on your domain with complete DNS control.",
        icon: Server,
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock technical support and monitoring.",
        icon: Clock3,
      },
    ],
    metrics: [
      { value: "98.5%", label: "Delivery rate" },
      { value: "<0.1%", label: "Spam score" },
      { value: "<2hrs", label: "Support response" },
    ],
    visualIcons: [Mail, Users, Monitor, Cloud],
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
