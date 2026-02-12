'use client';

import React, { useEffect, useRef, useState } from 'react';

const ECommerceTechnologies: React.FC = () => {
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

  const technologies = [
    {
      name: 'Shopify',
      description: 'Custom Shopify store development and theme customization',
      icon: '🛍️',
      color: 'from-green-600 to-green-400',
    },
    {
      name: 'WooCommerce',
      description: 'WordPress-based e-commerce solutions with full customization',
      icon: '🛒',
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'Magento',
      description: 'Enterprise-level e-commerce platform for large-scale stores',
      icon: '🏪',
      color: 'from-orange-600 to-orange-400',
    },
    {
      name: 'Custom Solutions',
      description: 'Bespoke e-commerce platforms built from scratch',
      icon: '⚙️',
      color: 'from-purple-600 to-purple-400',
    },
    {
      name: 'Payment Gateways',
      description: 'Stripe, PayPal, Razorpay integration for seamless payments',
      icon: '💳',
      color: 'from-indigo-600 to-indigo-400',
    },
    {
      name: 'Mobile Commerce',
      description: 'Mobile-optimized shopping experiences and PWA support',
      icon: '📱',
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
            E-Commerce Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage leading e-commerce platforms and payment solutions to build your online store
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg text-4xl`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#001f54] mb-3 group-hover:text-[#28a745] transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerceTechnologies;

