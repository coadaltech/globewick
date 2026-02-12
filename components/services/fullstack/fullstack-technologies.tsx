'use client';

import React, { useEffect, useRef, useState } from 'react';

const FullstackTechnologies: React.FC = () => {
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
      name: 'MERN Stack',
      description: 'MongoDB, Express, React, Node.js - Complete JavaScript solution',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'MEAN Stack',
      description: 'MongoDB, Express, Angular, Node.js - Enterprise-grade stack',
      icon: '🅰️',
      color: 'from-red-600 to-red-400',
    },
    {
      name: 'Next.js Full Stack',
      description: 'React framework with built-in API routes and server-side rendering',
      icon: '▲',
      color: 'from-gray-900 to-gray-700',
    },
    {
      name: 'Python Django',
      description: 'Full-featured Python framework for rapid full-stack development',
      icon: '🐍',
      color: 'from-green-700 to-green-500',
    },
    {
      name: 'Ruby on Rails',
      description: 'Convention over configuration for fast development cycles',
      icon: '💎',
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'Laravel + Vue',
      description: 'PHP backend with modern Vue.js frontend integration',
      icon: '🔧',
      color: 'from-orange-600 to-red-500',
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
            Full Stack Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage complete technology stacks to build end-to-end web applications
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

export default FullstackTechnologies;

