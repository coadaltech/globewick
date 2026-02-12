'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const ECommerceGrowthHero: React.FC = () => {
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#001f54] via-[#001f54] to-[#001a47] pt-32 pb-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 animate-float">
          <code className="text-green-400 text-sm">Sales</code>
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-float-delay">
          <code className="text-blue-400 text-sm">Revenue</code>
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-float-delay-2">
          <code className="text-purple-400 text-sm">Growth</code>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-4 h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(40, 167, 69, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 167, 69, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#28a745]/20 border border-[#28a745]/30 text-[#28a745] text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.047A5 5 0 0115 5.5v3.5a5 5 0 01-3.7 4.853v1.147a2 2 0 01-2.6 1.9L6.5 14.5a2 2 0 01-1.9-2.6l.5-2.5A5 5 0 0111.3 1.047zM9.5 3a3 3 0 00-3 3v3a3 3 0 003 3h1v-1.5a.5.5 0 011 0V12h1a3 3 0 003-3V6a3 3 0 00-3-3h-5z" clipRule="evenodd" />
              </svg>
              E-Commerce Growth Solutions
            </span>
          </div>

          <h1 className="animate-on-scroll opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Scale Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-[#20c997] mt-2">
              Online Business
            </span>
          </h1>

          <p className="animate-on-scroll opacity-0 text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accelerate your e-commerce growth with data-driven strategies, conversion optimization, and marketing solutions that drive sales and revenue.
          </p>

          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#28a745] to-[#20c997] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#28a745]/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#20c997] to-[#28a745] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="#technologies"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </div>

          <div className="animate-on-scroll opacity-0 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Stores Optimized' },
              { value: '+180%', label: 'Revenue Growth' },
              { value: '45%', label: 'Conversion Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#28a745] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
};

export default ECommerceGrowthHero;

