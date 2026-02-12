import type { Metadata } from "next";
import SEOHero from "@/components/services/seo-services/seo-hero";
import SEOTechnologies from "@/components/services/seo-services/seo-technologies";
import SEOServices from "@/components/services/seo-services/seo-services";
import SEOBenefits from "@/components/services/seo-services/seo-benefits";
import SEOCTA from "@/components/services/seo-services/seo-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization | GLOBEWICK",
  description: "Expert SEO services to improve your search engine rankings. On-page SEO, off-page SEO, technical SEO, and local SEO solutions. Get a free SEO audit today!",
  keywords: "SEO services, search engine optimization, on-page SEO, off-page SEO, technical SEO, local SEO, keyword research, link building",
  openGraph: {
    title: "SEO Services | GLOBEWICK",
    description: "Expert SEO services to improve your search engine rankings",
    type: "website",
  },
};

export default function SEOServicesPage() {
  return (
    <main className="min-h-screen">
      <SEOHero />
      <SEOTechnologies />
      <SEOServices />
      <DevelopmentProcessSection/>
      <SEOBenefits />
      <SEOCTA />
    </main>
  );
}

