'use client';

import React, { useEffect, useRef } from 'react';

const SEOBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      const cards = sectionRef.current.querySelectorAll('.benefit-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'Higher Rankings',
      description: 'Achieve top positions on Google and other search engines',
      icon: '📈',
      stat: '#1',
    },
    {
      title: 'More Organic Traffic',
      description: 'Attract qualified visitors without paying for ads',
      icon: '🚀',
      stat: '+250%',
    },
    {
      title: 'Better ROI',
      description: 'Get more value compared to paid advertising campaigns',
      icon: '💰',
      stat: '300%',
    },
    {
      title: 'Long-term Results',
      description: 'Build sustainable organic growth that lasts',
      icon: '⏰',
      stat: '24/7',
    },
    {
      title: 'Credibility',
      description: 'Higher rankings build trust and authority in your industry',
      icon: '⭐',
      stat: '100%',
    },
    {
      title: 'Cost Effective',
      description: 'Lower cost per acquisition compared to paid ads',
      icon: '💵',
      stat: '-70%',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#001f54] via-[#001a47] to-[#001f54] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#20c997] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Our SEO Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the benefits of professional SEO optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card opacity-0 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-[#28a745] group-hover:scale-110 transition-transform duration-300">
                  {benefit.stat}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#28a745] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 10px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default SEOBenefits;

