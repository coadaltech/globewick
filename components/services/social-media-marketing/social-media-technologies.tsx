'use client';

import React, { useEffect, useRef, useState } from 'react';

const SocialMediaTechnologies: React.FC = () => {
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

  const platforms = [
    {
      name: 'Facebook',
      description: 'Reach billions of users with targeted Facebook advertising and organic content',
      icon: '📘',
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'Instagram',
      description: 'Visual storytelling and influencer partnerships for brand awareness',
      icon: '📷',
      color: 'from-pink-600 to-purple-400',
    },
    {
      name: 'LinkedIn',
      description: 'B2B marketing and professional networking for business growth',
      icon: '💼',
      color: 'from-blue-700 to-blue-500',
    },
    {
      name: 'Twitter/X',
      description: 'Real-time engagement and trending conversations',
      icon: '🐦',
      color: 'from-gray-800 to-gray-600',
    },
    {
      name: 'YouTube',
      description: 'Video marketing and content creation for maximum engagement',
      icon: '📺',
      color: 'from-red-600 to-red-400',
    },
    {
      name: 'TikTok',
      description: 'Short-form video content for Gen Z and millennial audiences',
      icon: '🎵',
      color: 'from-gray-900 to-gray-700',
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
            Social Media Platforms We Manage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help you reach your audience across all major social media platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${platform.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg text-4xl`}>
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#001f54] mb-3 group-hover:text-[#28a745] transition-colors duration-300">
                {platform.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaTechnologies;

