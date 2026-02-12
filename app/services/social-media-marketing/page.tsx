import type { Metadata } from "next";
import SocialMediaHero from "@/components/services/social-media-marketing/social-media-hero";
import SocialMediaTechnologies from "@/components/services/social-media-marketing/social-media-technologies";
import SocialMediaServices from "@/components/services/social-media-marketing/social-media-services";
import SocialMediaBenefits from "@/components/services/social-media-marketing/social-media-benefits";
import SocialMediaCTA from "@/components/services/social-media-marketing/social-media-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online | GLOBEWICK",
  description: "Expert social media marketing services for Facebook, Instagram, LinkedIn, and more. Boost engagement, grow your audience, and drive real business results. Get a free quote today!",
  keywords: "social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, social media management, content creation, social media advertising",
  openGraph: {
    title: "Social Media Marketing Services | GLOBEWICK",
    description: "Expert social media marketing services to grow your brand online",
    type: "website",
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="min-h-screen">
      <SocialMediaHero />
      <SocialMediaTechnologies />
      <SocialMediaServices />
      <DevelopmentProcessSection/>
      <SocialMediaBenefits />
      <SocialMediaCTA />
    </main>
  );
}

