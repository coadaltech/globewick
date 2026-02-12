'use client';

import React, { useEffect, useRef, useState } from 'react';

const ECommerceGrowthTechnologies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.tech-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const strategies = [
    {
      name: 'Conversion Optimization',
      description: 'Improve your website to convert more visitors into customers',
      icon: '🎯',
      color: 'from-green-600 to-green-400',
    },
    {
      name: 'Email Marketing',
      description: 'Automated email campaigns to nurture leads and drive repeat sales',
      icon: '📧',
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'Retargeting Campaigns',
      description: 'Re-engage visitors who didn\'t complete their purchase',
      icon: '🔄',
      color: 'from-purple-600 to-purple-400',
    },
    {
      name: 'Product Recommendations',
      description: 'AI-powered product suggestions to increase average order value',
      icon: '🤖',
      color: 'from-orange-600 to-orange-400',
    },
    {
      name: 'Abandoned Cart Recovery',
      description: 'Recover lost sales with automated cart abandonment emails',
      icon: '🛒',
      color: 'from-red-600 to-red-400',
    },
    {
      name: 'Customer Retention',
      description: 'Build loyalty programs and strategies to keep customers coming back',
      icon: '💎',
      color: 'from-pink-600 to-pink-400',
    },
  ];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f54] mb-4">
            E-Commerce Growth Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven strategies to accelerate your online store's growth and revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${strategy.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg text-4xl`}>
                {strategy.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#001f54] mb-3 group-hover:text-[#28a745] transition-colors duration-300">
                {strategy.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerceGrowthTechnologies;

