import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServicesShowcasePage } from "@/components/services-showcase-page";
import { type NavItem } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services | Eric Yeboah",
  description:
    "Professional infrastructure and digital services from Eric Yeboah, including web apps, monitoring, databases, SMS, and email systems.",
};

const servicesPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Get Started", href: "/get-started" },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fbfbfa] text-black">
      <Header
        navigationItems={servicesPageNavigation}
        brandHref="/"
        activeOverride="/services"
      />
      <main>
        <ServicesShowcasePage />
      </main>
      <Footer navigationItems={servicesPageNavigation} />
    </div>
  );
}
