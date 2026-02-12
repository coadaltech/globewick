import type { Metadata } from "next";
import FrontendHero from "@/components/services/frontend-hero";
import FrontendTechnologies from "@/components/services/frontend-technologies";
import FrontendServices from "@/components/services/frontend-services";
import FrontendBenefits from "@/components/services/frontend-benefits";
import FrontendCTA from "@/components/services/frontend-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "Frontend Development Services | Modern Web Applications | GLOBEWICK",
  description: "Expert frontend development services using React, Next.js, Vue.js, and modern frameworks. Build responsive, fast, and SEO-optimized web applications. Get a free quote today!",
  keywords: "frontend development, React development, Next.js, Vue.js, web development, responsive design, UI/UX development",
  openGraph: {
    title: "Frontend Development Services | GLOBEWICK",
    description: "Expert frontend development services using modern frameworks",
    type: "website",
  },
};

export default function FrontendDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <FrontendHero />
      <FrontendTechnologies />
      <FrontendServices />
      <DevelopmentProcessSection/>
      <FrontendBenefits />
      <FrontendCTA />
    </main>
  );
}
