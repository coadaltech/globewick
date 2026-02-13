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
      title: 'Technical Excellence',
      description: 'We maintain the highest standards in code quality, architecture design, and engineering practices. Every solution is built for scalability and maintainability.',
    },
    {
      title: 'Agile Development',
      description: 'Following agile methodologies and DevOps best practices, we deliver iterative, high-quality software with continuous integration and deployment.',
    },
    {
      title: 'Cloud-First Approach',
      description: 'We design and build cloud-native applications leveraging AWS, Azure, and GCP to ensure scalability, reliability, and cost-efficiency.',
    },
    {
      title: 'Security & Compliance',
      description: 'Security is built into every layer of our solutions. We follow industry standards and best practices for data protection and compliance.',
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
              GLOBEWICK is a premier software development and technology consulting company 
              specializing in enterprise-grade solutions, cloud-native applications, and 
              AI-powered systems. With expertise across the full technology stack, we help 
              businesses accelerate their digital transformation journey.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of senior engineers, architects, and DevOps specialists leverages 
              modern frameworks, microservices architecture, and cloud platforms to build 
              scalable, secure, and high-performance applications. We follow agile methodologies, 
              implement CI/CD pipelines, and ensure code quality through comprehensive testing 
              and code reviews.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Full Stack Development', 'Cloud & DevOps', 'AI/ML Solutions', 'Microservices', 'API Development', 'Mobile Apps'].map((tech, index) => (
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
