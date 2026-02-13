"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
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
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#001f54] via-[#001f54] to-[#001a47] pt-20 sm:pt-20 pb-8 sm:pb-0"
    >
      {/* Animated Tech Background - Network Lines & Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#28a745" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#28a745" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#28a745" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Animated connecting lines */}
          {Array.from({ length: 15 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
              />
            );
          })}
        </svg>

        {/* Animated Glowing Dots */}
        {Array.from({ length: 30 }).map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const size = Math.random() * 6 + 2;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#28a745] opacity-30 animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: `0 0 ${size * 2}px #28a745`,
              }}
            />
          );
        })}

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#28a745]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#28a745]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content - Centered */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6 md:mb-8 animate-on-scroll opacity-0">
            <span className="bg-[#28a745]/20 backdrop-blur-sm text-[#28a745] px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm font-semibold border border-[#28a745]/30 inline-block">
              ✨ Innovation Driven Technology Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight animate-on-scroll opacity-0 px-1">
            <span className="block sm:inline">
              <span>Transforming </span>
              <span className="text-[#28a745]">Technology</span>
            </span>
            <span className="block sm:inline sm:ml-2">Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto animate-on-scroll opacity-0 px-2 sm:px-0">
            We transform your business vision into reality with{' '}
            <span className="text-[#28a745] font-semibold">cutting-edge technology</span>,{' '}
            <span className="text-[#28a745] font-semibold">innovative solutions</span>, and{' '}
            <span className="text-[#28a745] font-semibold">pixel-perfect execution</span>.
            <br className="hidden sm:block" />
            <span className="block sm:inline">From web applications to enterprise software solutions.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-12 md:mb-16 animate-on-scroll opacity-0 px-2 sm:px-0">
            <Link
              href={"/contact"}
              className="group relative w-full sm:w-auto bg-gradient-to-r from-[#28a745] via-[#20c997] to-[#28a745] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-[#28a745]/30 hover:shadow-[#28a745]/50 flex items-center justify-center gap-2 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#28a745] via-[#20c997] to-[#28a745] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="whitespace-nowrap relative z-10">Talk To Consultant</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#services"
              className="group relative w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-white/10 hover:shadow-white/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300 blur-sm"></div>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="whitespace-nowrap relative z-10">Watch Our Work</span>
            </a>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

