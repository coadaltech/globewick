'use client';

import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
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
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      title: 'Excellence',
      description: 'Quality is at the core of everything we do, ensuring exceptional results.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations.',
    },
    {
      title: 'Integrity',
      description: 'Transparent communication and ethical practices guide our operations.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl uppercase font-bold text-[#001f54] mb-6">
              About GLOBEWICK
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              GLOBEWICK is a leading technology solutions provider with over a decade of
              experience in delivering innovative software solutions. We specialize in
              transforming businesses through cutting-edge technology, helping them stay
              competitive in the digital landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively
              to create solutions that not only meet but exceed client expectations. We
              believe in building long-term partnerships and delivering value that drives
              measurable business outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Web Development', 'Mobile Apps', 'Cloud Services', 'AI/ML'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#001f54]/10 text-[#001f54] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Values */}
          <div className="animate-on-scroll opacity-0">
            {/* Stats */}
            

            {/* Values */}
            <div className="">
              <h3 className="text-2xl font-bold text-[#001f54] mb-6">Our Values</h3>
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="shrink-0 w-2 h-2 bg-[#28a745] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-[#001f54] mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
