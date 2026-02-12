import type { Metadata } from "next";
import ECommerceGrowthHero from "@/components/services/e-commerce-growth/e-commerce-growth-hero";
import ECommerceGrowthTechnologies from "@/components/services/e-commerce-growth/e-commerce-growth-technologies";
import ECommerceGrowthServices from "@/components/services/e-commerce-growth/e-commerce-growth-services";
import ECommerceGrowthBenefits from "@/components/services/e-commerce-growth/e-commerce-growth-benefits";
import ECommerceGrowthCTA from "@/components/services/e-commerce-growth/e-commerce-growth-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "E-Commerce Growth Services | Scale Your Online Store | GLOBEWICK",
  description: "Expert e-commerce growth services including conversion optimization, email marketing, paid advertising, and customer retention strategies. Drive revenue and scale your online business. Get a free quote today!",
  keywords: "e-commerce growth, conversion optimization, email marketing, e-commerce marketing, online store growth, customer retention, abandoned cart recovery",
  openGraph: {
    title: "E-Commerce Growth Services | GLOBEWICK",
    description: "Expert e-commerce growth services to scale your online store",
    type: "website",
  },
};

export default function ECommerceGrowthPage() {
  return (
    <main className="min-h-screen">
      <ECommerceGrowthHero />
      <ECommerceGrowthTechnologies />
      <ECommerceGrowthServices />
      <DevelopmentProcessSection/>
      <ECommerceGrowthBenefits />
      <ECommerceGrowthCTA />
    </main>
  );
}

