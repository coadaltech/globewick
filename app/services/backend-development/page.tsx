import type { Metadata } from "next";
import BackendHero from "@/components/services/backend/backend-hero";
import BackendTechnologies from "@/components/services/backend/backend-technologies";
import BackendServices from "@/components/services/backend/backend-services";
import BackendBenefits from "@/components/services/backend/backend-benefits";
import BackendCTA from "@/components/services/backend/backend-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "Backend Development Services | Scalable APIs & Server Solutions | GLOBEWICK",
  description: "Expert backend development services using Node.js, Python, Django, and modern frameworks. Build scalable APIs, microservices, and robust server infrastructure. Get a free quote today!",
  keywords: "backend development, API development, Node.js, Python, Django, microservices, server development, database design",
  openGraph: {
    title: "Backend Development Services | GLOBEWICK",
    description: "Expert backend development services using modern frameworks",
    type: "website",
  },
};

export default function BackendDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <BackendHero />
      <BackendTechnologies />
      <BackendServices />
      <DevelopmentProcessSection/>
      <BackendBenefits />
      <BackendCTA />
    </main>
  );
}
