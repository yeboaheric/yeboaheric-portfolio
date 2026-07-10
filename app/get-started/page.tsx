import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { GetStartedPage } from "@/components/get-started-page";
import { Header } from "@/components/header";
import { type NavItem } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Get Started | Eric Yeboah",
  description:
    "A full website requirements intake page for starting a new project with Eric Yeboah.",
};

const getStartedNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Get Started", href: "/get-started" },
];

export default function GetStartedRoute() {
  return (
    <div className="site-page get-started-route">
      <Header
        navigationItems={getStartedNavigation}
        brandHref="/"
        activeOverride="/get-started"
      />
      <GetStartedPage />
      <Footer navigationItems={getStartedNavigation} />
    </div>
  );
}
