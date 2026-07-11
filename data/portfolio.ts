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
import { GithubMarkIcon, LinkedinMarkIcon } from "@/components/social-icons";

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
    title: "Adwoa Fosua Guesthouse - Aduman",
    category: "Hospitality Guesthouse Website",
    year: "2026",
    duration: "1 months",
    teamSize: "1 developer",
    role: "Lead Developer",
    description:
      "A refined hospitality website for Adwoa Fosua Guesthouse in Aduman, designed to present rooms, services, and location details with a calm, booking-first experience.",
    screenshot: "/projects/adwoa-fosua-guesthouse-home.png",
    liveUrl: "https://fosuaguesthouse.com/#",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      {
        title: "Responsive Stay Experience",
        description: "A polished layout that keeps guesthouse browsing clear and elegant across mobile, tablet, and desktop.",
        icon: Monitor,
      },
      {
        title: "Room Discovery",
        description: "Structured sections for rooms, amenities, and property highlights that help guests compare options quickly.",
        icon: Package,
      },
      {
        title: "Service Highlights",
        description: "A calm presentation of services, gallery moments, and location details to build trust before enquiry.",
        icon: Users,
      },
      {
        title: "Reservation Journey",
        description: "Clear call-to-action paths for room reservations and direct booking intent without friction.",
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
    title: "Adwoa Fosua Guesthouse Management System",
    category: "Hospitality Operations Dashboard",
    year: "2026",
    duration: "6 months",
    teamSize: "2 contributors",
    role: "Product Designer & Frontend Lead",
    description:
      "An internal management system for Adwoa Fosua Guesthouse, built to monitor reservations, room status, revenue, staff activity, and daily hotel operations from one dashboard.",
    screenshot: "/projects/adwoa-fosua-management-dashboard.png",
    liveUrl: "https://fosuaguesthouse.com/#",
    repoUrl: "https://github.com/yeboaheric",
    techStack: ["Python", "Django", "Render", "Docker"],
    features: [
      {
        title: "Reservation Oversight",
        description: "A central dashboard for bookings, occupancy, arrivals, departures, and pending balances.",
        icon: Users,
      },
      {
        title: "Guest & Room Records",
        description: "Structured management views for rooms, guest profiles, front desk activity, and service tracking.",
        icon: MessageCircle,
      },
      {
        title: "Responsive Admin Workspace",
        description: "A clear operational interface tuned for desktop-heavy workflows while remaining usable across devices.",
        icon: Monitor,
      },
      {
        title: "Operational Search",
        description: "Fast lookup across guests, rooms, bookings, and payments to reduce manual friction for staff.",
        icon: ShieldCheck,
      },
    ],
    impact: [
      { value: "12", label: "Rooms tracked" },
      { value: "26", label: "Guest records" },
      { value: "GHS 10,382", label: "Monthly revenue" },
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
  { label: "GitHub", href: "https://github.com/yeboaheric", icon: GithubMarkIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yeboah-osei-eric-329b57296/",
    icon: LinkedinMarkIcon,
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
