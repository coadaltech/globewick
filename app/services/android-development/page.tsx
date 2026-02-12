import type { Metadata } from "next";
import AndroidHero from "@/components/services/android-development/android-hero";
import AndroidTechnologies from "@/components/services/android-development/android-technologies";
import AndroidServices from "@/components/services/android-development/android-services";
import AndroidBenefits from "@/components/services/android-development/android-benefits";
import AndroidCTA from "@/components/services/android-development/android-cta";
import DevelopmentProcessSection from "@/components/services/developmwntprocesssection";

export const metadata: Metadata = {
  title: "Android Development Services | Native Android Apps | GLOBEWICK",
  description: "Expert Android app development services using Kotlin, Jetpack Compose, and Material Design. Build native Android applications with Google Play Store submission. Get a free quote today!",
  keywords: "Android development, Android app development, Kotlin, Jetpack Compose, Android SDK, native Android apps, Material Design",
  openGraph: {
    title: "Android Development Services | GLOBEWICK",
    description: "Expert Android app development services using Kotlin and Jetpack Compose",
    type: "website",
  },
};

export default function AndroidDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <AndroidHero />
      <AndroidTechnologies />
      <AndroidServices />
      <DevelopmentProcessSection/>
      <AndroidBenefits />
      <AndroidCTA />
    </main>
  );
}

