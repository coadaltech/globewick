'use client';

import React, { useEffect, useRef, useState } from 'react';

const FrontendTechnologies: React.FC = () => {
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
      name: 'React',
      description: 'Build dynamic user interfaces with the most popular JavaScript library',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.65c-1.346 0-3.107.96-4.888 2.622-1.78 1.66-3.093 3.822-3.836 5.429-.378.82-.621 1.507-.733 2.052a2.215 2.215 0 0 0-.092.64c0 .24.06.455.16.64.1.186.24.35.41.49.17.14.36.25.57.32.21.07.43.11.66.11.23 0 .45-.04.66-.11.21-.07.4-.18.57-.32.17-.14.31-.304.41-.49.1-.185.16-.4.16-.64 0-.08-.01-.16-.03-.24a7.235 7.235 0 0 1 .063-.4c.112-.545.355-1.232.733-2.052.743-1.607 2.055-3.769 3.836-5.429 1.78-1.66 3.542-2.622 4.888-2.622.3 0 .58.07.84.21.26.14.48.34.64.6.16.26.24.55.24.87 0 .32-.08.61-.24.87-.16.26-.38.46-.64.6-.26.14-.54.21-.84.21zm-9.662 10.43c-.08.24-.14.5-.18.78-.04.28-.06.57-.06.87 0 .3.02.59.06.87.04.28.1.54.18.78.08.24.18.47.3.68.12.21.26.41.43.59.17.18.36.34.57.48.21.14.44.26.68.35.24.09.5.15.77.19.27.04.55.06.83.06.28 0 .56-.02.83-.06.27-.04.53-.1.77-.19.24-.09.47-.21.68-.35.21-.14.4-.3.57-.48.17-.18.31-.38.43-.59.12-.21.22-.44.3-.68a5.4 5.4 0 0 0 .18-.78c.04-.28.06-.57.06-.87 0-.3-.02-.59-.06-.87a5.4 5.4 0 0 0-.18-.78 5.1 5.1 0 0 0-.3-.68 5.1 5.1 0 0 0-.43-.59 5.1 5.1 0 0 0-.57-.48 5.1 5.1 0 0 0-.68-.35 5.4 5.4 0 0 0-.77-.19 5.4 5.4 0 0 0-.83-.06c-.28 0-.56.02-.83.06-.27.04-.53.1-.77.19-.24.09-.47.21-.68.35-.21.14-.4.3-.57.48-.17.18-.31.38-.43.59a5.1 5.1 0 0 0-.3.68zm13.548-10.65c.3 0 .58.07.84.21.26.14.48.34.64.6.16.26.24.55.24.87 0 .32-.08.61-.24.87-.16.26-.38.46-.64.6-.26.14-.54.21-.84.21-1.346 0-3.107.96-4.888 2.622-1.78 1.66-3.093 3.822-3.836 5.429-.378.82-.621 1.507-.733 2.052a2.215 2.215 0 0 0-.092.64c0 .24.06.455.16.64.1.186.24.35.41.49.17.14.36.25.57.32.21.07.43.11.66.11.23 0 .45-.04.66-.11.21-.07.4-.18.57-.32.17-.14.31-.304.41-.49.1-.185.16-.4.16-.64 0-.08-.01-.16-.03-.24a7.235 7.235 0 0 1 .063-.4c.112-.545.355-1.232.733-2.052.743-1.607 2.055-3.769 3.836-5.429 1.78-1.66 3.542-2.622 4.888-2.622z"/>
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Next.js',
      description: 'Server-side rendering and static site generation for optimal performance',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5714 4L22 20H13.4524L12 17.619L10.5476 20H2L11.5714 4ZM10.381 14.2381L12 10.9048L13.619 14.2381H10.381Z"/>
        </svg>
      ),
      color: 'from-gray-900 to-gray-700',
    },
    {
      name: 'Vue.js',
      description: 'Progressive framework for building user interfaces',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3.5L12 20.5L22 3.5H17L12 13L7 3.5H2Z"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript for scalable applications',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 7.903 7.903 0 0 0-1.01-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 5.536 5.536 0 0 1 1.77-.289zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.13 4.59 2.13 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6.01 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.13 4.59 2.13 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12.01 7 12z"/>
        </svg>
      ),
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Angular',
      description: 'Platform for building mobile and desktop web applications',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.93 12.645h4.134L11.996 7.74zM11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.134 19.5l-1.724-3.495h-1.724l-1.393 2.381-1.393-2.381H9.134L7.41 19.509l4.586 2.505 4.584-2.505zm-.862-5.505l-1.725-3.495-1.393 2.381-1.393-2.381-1.725 3.495h6.166z"/>
        </svg>
      ),
      color: 'from-red-600 to-red-400',
    },
  ];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f54] mb-4">
            Modern Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge frameworks and tools to build exceptional frontend experiences
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#001f54] mb-3 group-hover:text-[#28a745] transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
              
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#28a745] rounded-2xl transition-all duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendTechnologies;

