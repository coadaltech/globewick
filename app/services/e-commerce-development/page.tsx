import type { Metadata } from "next";
import ECommerceHero from "@/components/services/e-commerce-development/e-commerce-hero";
import ECommerceTechnologies from "@/components/services/e-commerce-development/e-commerce-technologies";
import ECommerceServices from "@/components/services/e-commerce-development/e-commerce-services";
import ECommerceBenefits from "@/components/services/e-commerce-development/e-commerce-benefits";
import ECommerceCTA from "@/components/services/e-commerce-development/e-commerce-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Online Store Solutions | GLOBEWICK",
  description: "Expert e-commerce development services using Shopify, WooCommerce, Magento, and custom solutions. Build powerful online stores with payment integration and inventory management. Get a free quote today!",
  keywords: "e-commerce development, online store, Shopify development, WooCommerce, Magento, e-commerce solutions, online shopping",
  openGraph: {
    title: "E-Commerce Development Services | GLOBEWICK",
    description: "Expert e-commerce development services for online stores",
    type: "website",
  },
};

export default function ECommerceDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <ECommerceHero />
      <ECommerceTechnologies />
      <ECommerceServices />
      <DevelopmentProcessSection/>
      <ECommerceBenefits />
      <ECommerceCTA />
    </main>
  );
}

