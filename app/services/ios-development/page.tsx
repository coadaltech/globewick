import type { Metadata } from "next";
import IOSHero from "@/components/services/ios-development/ios-hero";
import IOSTechnologies from "@/components/services/ios-development/ios-technologies";
import IOSServices from "@/components/services/ios-development/ios-services";
import IOSBenefits from "@/components/services/ios-development/ios-benefits";
import IOSCTA from "@/components/services/ios-development/ios-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "iOS Development Services | Native iPhone & iPad Apps | GLOBEWICK",
  description: "Expert iOS app development services using Swift, SwiftUI, and UIKit. Build native iPhone and iPad applications with App Store submission. Get a free quote today!",
  keywords: "iOS development, iPhone app development, iPad app development, Swift, SwiftUI, iOS app development, native iOS apps",
  openGraph: {
    title: "iOS Development Services | GLOBEWICK",
    description: "Expert iOS app development services using Swift and SwiftUI",
    type: "website",
  },
};

export default function IOSDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <IOSHero />
      <IOSTechnologies />
      <IOSServices />
      <DevelopmentProcessSection/>
      <IOSBenefits />
      <IOSCTA />
    </main>
  );
}

