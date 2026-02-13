'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Server, 
  Layers, 
  ShoppingCart, 
  Smartphone, 
  Share2, 
  Search, 
  TrendingUp 
} from 'lucide-react';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    // DEVELOPMENT SERVICES
    // {
    //   icon: <Globe className="w-8 h-8" />,
    //   title: 'Frontend Development',
    //   description: 'Modern, responsive web applications built with React, Next.js, TypeScript, and cutting-edge UI frameworks. We create pixel-perfect interfaces with optimal performance.',
    //   features: ['React & Next.js', 'TypeScript & JavaScript', 'Tailwind CSS & Styled Components', 'Performance & SEO Optimization'],
    //   color: 'from-[#001f54] to-[#0056b3]',
    //   href: '/services/frontend-development',
    // },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Scalable, secure APIs and microservices using Node.js, Python, Go, and cloud-native architectures. Enterprise-grade backend solutions with high availability.',
      features: ['REST & GraphQL APIs', 'Microservices Architecture', 'Database Design & Optimization', 'Cloud Deployment'],
      color: 'from-[#28a745] to-[#218838]',
      href: '/services/backend-development',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'End-to-end application development from concept to deployment. Complete software solutions with modern tech stacks and DevOps integration.',
      features: ['MERN & MEAN Stack', 'Next.js Full Stack', 'Serverless Architecture', 'CI/CD Pipeline Setup'],
      color: 'from-[#001f54] to-[#003a8c]',
      href: '/services/fullstack-development',
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Development',
      description: 'Enterprise e-commerce platforms with advanced features, payment gateways, inventory management, and multi-vendor capabilities.',
      features: ['Custom E-commerce Solutions', 'Payment Gateway Integration', 'Inventory & Order Management', 'Mobile Commerce Apps'],
      color: 'from-[#28a745] to-[#20c997]',
      href: '/services/e-commerce-development',
    },
   
    // DIGITAL SERVICES
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & Digital Marketing',
      description: 'Data-driven SEO strategies and digital marketing campaigns to increase visibility, traffic, and conversions for your business.',
      features: ['Technical SEO Audit', 'Content Strategy & Optimization', 'Link Building & Outreach', 'Analytics & Reporting'],
      color: 'from-[#28a745] to-[#218838]',
      href: '/services/seo-services',
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media management and advertising campaigns to build brand awareness and engage your target audience effectively.',
      features: ['Content Strategy & Creation', 'Social Media Advertising', 'Community Management', 'Performance Analytics'],
      color: 'from-[#001f54] to-[#003a8c]',
      href: '/services/social-media-marketing',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'E-commerce Growth',
      description: 'Conversion optimization, marketing automation, and growth strategies to scale your online business and maximize revenue.',
      features: ['Conversion Rate Optimization', 'Email Marketing Automation', 'PPC & Paid Advertising', 'Customer Retention Strategies'],
      color: 'from-[#001f54] to-[#0056b3]',
      href: '/services/e-commerce-growth',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#001f54] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f54] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href || '/services'}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#001f54] mb-4 group-hover:text-[#28a745] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="group/btn flex items-center space-x-2 text-[#001f54] font-semibold hover:text-[#28a745] transition-colors duration-300">
                  <span>Learn More</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[#28a745] rounded-2xl transition-all duration-500 pointer-events-none`} />
            </Link>
          ))}
        </div>


        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href={"/services"}>
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#28a745] to-[#218838] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View All Services
            </button>
            </Link>
            <Link href={"/contact"}>
            <button className="cursor-pointer px-8 py-3.5 bg-white text-[#001f54] font-semibold rounded-full shadow-lg border-2 border-[#001f54] hover:bg-[#001f54] hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
            </Link>

          </div>
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
}