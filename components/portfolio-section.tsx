'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

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
      const cards = sectionRef.current.querySelectorAll('.portfolio-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [filter]);

  const portfolioItems = [
    {
      id: 1,
      title: 'Aachho - E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced shopping features and seamless user experience',
      image: '/aachho.webp',
      technologies: ['React', 'Node.js', 'E-commerce'],
      link: 'https://www.aachho.com/',
    },
    {
      id: 2,
      title: 'Harrods - Luxury Shopping',
      category: 'web',
      description: 'Premium luxury department store website with elegant design and international shopping experience',
      image: '/HARRODS.webp',
      technologies: ['E-commerce', 'Luxury Retail', 'International'],
      link: 'https://www.harrods.com/en-in',
    },
    {
      id: 3,
      title: 'Vrindavan Tours & Packages',
      category: 'web',
      description: 'Travel and tour booking platform for Vrindavan pilgrimage and spiritual journeys',
      image: '/VRINDAVAN.webp',
      technologies: ['Travel Booking', 'Tourism', 'Booking System'],
      link: 'https://www.vrindavantoursandpackages.com/',
    },
    {
      id: 4,
      title: 'Tresses by Nitin',
      category: 'web',
      description: 'Professional hair salon and beauty services website with booking and portfolio showcase',
      image: '/nitin.png',
      technologies: ['Beauty Services', 'Salon Booking', 'Portfolio'],
      link: 'https://tressesbynitin.com/',
    },
    {
      id: 5,
      title: 'George Medicines',
      category: 'web',
      description: 'Online pharmacy and medicine delivery platform with healthcare solutions',
      image: '/george.webp',
      technologies: ['Pharmacy', 'Medicine Delivery', 'Healthcare'],
      link: 'https://george-medicines.com/',
    },
    {
      id: 6,
      title: 'FIT Medical Weight Loss',
      category: 'web',
      description: 'Medical weight loss clinic website with treatment information and consultation booking',
      image: '/FIT.webp',
      technologies: ['Healthcare', 'Weight Loss', 'Medical Services'],
      link: 'https://www.fitmedicalweightloss.com/',
    },
  ];

  const categories = [
    { name: 'all', label: 'All Projects' },
    { name: 'web', label: 'Web Development' },
    { name: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#001f54] via-[#000d2b] to-[#001f54] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', right: '5%' }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-4 h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(40, 167, 69, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 167, 69, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4"
          >
            OUR WORK
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-green-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setFilter(category.name)}
              className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 ${
                filter === category.name
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                  : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div> */}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="portfolio-card opacity-0 group"
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden h-full flex flex-col">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Image/Icon */}
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-48 cursor-pointer rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg overflow-hidden relative`}
                >
                  {item.image.startsWith('/') ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">{item.image}</span>
                  )}
                </a>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-medium mb-3">
                      {item.category === 'web' ? 'Web' : 'Mobile'}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 rounded-lg text-gray-300 text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-green-400 hover:text-green-300 font-medium text-sm transition-colors  duration-300 group/link"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#28a745] to-[#20c997] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#28a745]/50 transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;

