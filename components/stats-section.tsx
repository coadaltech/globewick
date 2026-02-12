'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatsSection: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const stats: StatItem[] = [
    { value: '500', label: 'Clients Worldwide', suffix: '+' },
    { value: '98', label: 'Success Rate', suffix: '%' },
    { value: '24', label: 'Support Available', suffix: '/7', prefix: '' },
    { value: '15', label: 'Years Experience', suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCounterAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    stats.forEach((stat, index) => {
      const numericValue = parseInt(stat.value);
      if (isNaN(numericValue)) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [index]: Math.floor(current),
        }));
      }, duration / steps);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, #001f54 1px, transparent 1px),
                              linear-gradient(45deg, #001f54 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Diagonal Wave */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="#001f54"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.value);
            const displayValue = isNaN(numericValue)
              ? stat.value
              : counters[index] !== undefined
              ? counters[index]
              : 0;

            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300 px-2 sm:px-0"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#001f54] mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                  {stat.prefix}
                  {displayValue}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium leading-tight px-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

