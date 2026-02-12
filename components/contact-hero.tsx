'use client';

import React, { useEffect, useRef } from 'react';

const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-16 bg-gradient-to-br from-[#001f54] via-[#001f54] to-[#001a47] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#28a745 1px, transparent 1px),
                            linear-gradient(90deg, #28a745 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Animated Dots */}
      {Array.from({ length: 20 }).map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-[#28a745] opacity-20 animate-pulse"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        );
      })}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 animate-on-scroll opacity-0">
            <span className="bg-[#28a745]/20 text-[#28a745] px-6 py-2 rounded-full text-sm font-semibold border border-[#28a745]/30">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-on-scroll opacity-0">
            Let's Build Something
            <span className="block text-[#28a745]">Amazing Together</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed animate-on-scroll opacity-0">
            Have a project in mind? We'd love to hear from you.
            <br className="hidden md:block" />
            Send us a message and we'll respond as soon as possible.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 animate-on-scroll opacity-0">
            {[
              { number: '24/7', label: 'Support' },
              { number: '< 24h', label: 'Response' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#28a745] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

