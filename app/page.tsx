import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
// import Services from '@/components/services';
import AboutSection from '@/components/abouussection';
// import Process from '@/components/process';
// import ContactUsSection from '@/components/Contactussection';
import ServicesSection from '@/components/servicessection';
import DevelopmentProcess from '@/components/developmentprocess';
import PortfolioSection from '@/components/portfolio-section';
import ContactUs from '@/components/contactus';
import AllServicesSection from '@/components/allservicessection';
// import CTA from '@/components/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      {/* <Services /> */}
      <AllServicesSection/>
      <AboutSection />
      {/* <CTA/> */}
      {/* <Process /> */}
      <DevelopmentProcess/>
      <PortfolioSection />
      {/* <ContactUsSection /> */}
      <ContactUs/>
    </main>
  );
}
