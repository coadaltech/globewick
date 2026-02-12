import React from 'react';
import ContactHero from '@/components/contact-hero';
import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';
import ContactUs from '@/components/contactus';
import StatsSection from '@/components/stats-section';
import ContactMap from '@/components/contact-map';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <StatsSection />
      
      <section className="">
        <div className="">
          <div className="">
            <ContactUs/>
            
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
