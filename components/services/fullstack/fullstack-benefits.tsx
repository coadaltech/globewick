'use client';

import React, { useEffect, useRef } from 'react';

const FullstackBenefits: React.FC = () => {
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
      title: 'Unified Development',
      description: 'Single team handles both frontend and backend for seamless integration',
      icon: '🔗',
      stat: '100%',
    },
    {
      title: 'Faster Time to Market',
      description: 'Complete solutions delivered faster with integrated development approach',
      icon: '⚡',
      stat: '50%',
    },
    {
      title: 'Cost Effective',
      description: 'One team for everything reduces costs and improves efficiency',
      icon: '💰',
      stat: '-30%',
    },
    {
      title: 'Better Integration',
      description: 'Frontend and backend designed together for optimal performance',
      icon: '🎯',
      stat: '100%',
    },
    {
      title: 'Scalable Architecture',
      description: 'End-to-end solutions designed to scale with your business',
      icon: '📈',
      stat: '10x',
    },
    {
      title: 'Single Point of Contact',
      description: 'One team manages your entire application from start to finish',
      icon: '🤝',
      stat: '24/7',
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
            Why Choose Our Full Stack Development
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the advantage of complete end-to-end development solutions
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

export default FullstackBenefits;

