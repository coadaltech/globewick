import type { Metadata } from "next";
import FullstackHero from "@/components/services/fullstack/fullstack-hero";
import FullstackTechnologies from "@/components/services/fullstack/fullstack-technologies";
import FullstackServices from "@/components/services/fullstack/fullstack-services";
import FullstackBenefits from "@/components/services/fullstack/fullstack-benefits";
import FullstackCTA from "@/components/services/fullstack/fullstack-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "Full Stack Development Services | End-to-End Web Applications | GLOBEWICK",
  description: "Expert full stack development services using MERN, MEAN, Next.js, and modern stacks. Build complete web applications from frontend to backend. Get a free quote today!",
  keywords: "full stack development, MERN stack, MEAN stack, Next.js, web application development, full stack developer",
  openGraph: {
    title: "Full Stack Development Services | GLOBEWICK",
    description: "Expert full stack development services using modern technology stacks",
    type: "website",
  },
};

export default function FullstackDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <FullstackHero />
      <FullstackTechnologies />
      <FullstackServices />
      <DevelopmentProcessSection/>
      <FullstackBenefits />
      <FullstackCTA />
    </main>
  );
}

