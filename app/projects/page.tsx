import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsShowcasePage } from "@/components/projects-showcase-page";
import { type NavItem } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Eric Yeboah",
  description:
    "Interactive case studies for Eric Yeboah's portfolio projects, presented as minimalist editorial showcases.",
};

const projectsPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Get Started", href: "/get-started" },
];

export default function ProjectsPage() {
  return (
    <div className="site-page projects-route">
      <Header
        navigationItems={projectsPageNavigation}
        brandHref="/"
        activeOverride="/projects"
      />
      <main>
        <ProjectsShowcasePage />
      </main>
      <Footer navigationItems={projectsPageNavigation} />
    </div>
  );
}
