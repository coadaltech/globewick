'use client';

import { useState } from 'react';

export default function DevelopmentProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business goals, target audience, and project requirements through comprehensive research and strategic planning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      details: [
        'Requirement Analysis',
        'Market Research',
        'Competitor Analysis',
        'Project Roadmap',
      ],
      color: 'from-[#28a745] to-[#218838]',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates intuitive, visually stunning interfaces with user experience at the forefront, bringing your vision to life.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      details: [
        'UI/UX Design',
        'Wireframing',
        'Interactive Prototypes',
        'Design System',
      ],
      color: 'from-[#001f54] to-[#003a8c]',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Using cutting-edge technologies and best practices, our developers build robust, scalable solutions tailored to your needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      details: [
        'Frontend Development',
        'Backend Architecture',
        'API Integration',
        'Database Design',
      ],
      color: 'from-[#28a745] to-[#20c997]',
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your product is bug-free, performs optimally, and delivers an exceptional user experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        'Functional Testing',
        'Performance Testing',
        'Security Audit',
        'Cross-browser Testing',
      ],
      color: 'from-[#001f54] to-[#0056b3]',
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We handle the entire deployment process, ensuring a smooth launch with minimal downtime and maximum efficiency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      details: [
        'Server Configuration',
        'Cloud Deployment',
        'CI/CD Pipeline',
        'Production Launch',
      ],
      color: 'from-[#28a745] to-[#1e7e34]',
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Our commitment continues post-launch with ongoing support, updates, and optimizations to keep your product running smoothly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      details: [
        '24/7 Support',
        'Bug Fixes',
        'Feature Updates',
        'Performance Monitoring',
      ],
      color: 'from-[#001f54] to-[#002d72]',
    },
  ];

  const methodologies = [
    {
      title: 'Agile Development',
      description: 'Iterative approach with flexibility and continuous improvement',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'DevOps Integration',
      description: 'Streamlined deployment and continuous delivery pipeline',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing at every stage of development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20  bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#001f54] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f54] mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional frontend solutions
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#28a745] via-[#001f54] to-[#28a745] transform -translate-y-1/2" />
            
            {/* Timeline Steps */}
            <div className="relative grid grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Number Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                        activeStep === index
                          ? `bg-gradient-to-br ${step.color} shadow-xl scale-125`
                          : 'bg-white border-4 border-gray-200 hover:border-[#28a745]'
                      }`}
                    >
                      <span
                        className={`text-xl font-bold transition-colors duration-300 ${
                          activeStep === index ? 'text-white' : 'text-[#001f54]'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Step Title */}
                    <div className="mt-6 text-center">
                      <h4
                        className={`text-sm font-bold mb-2 transition-colors duration-300 ${
                          activeStep === index ? 'text-[#28a745]' : 'text-[#001f54]'
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-start space-x-6">
              <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${processSteps[activeStep].color} flex items-center justify-center text-white shadow-lg`}>
                {processSteps[activeStep].icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#001f54]">
                    {processSteps[activeStep].title}
                  </h3>
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#28a745] to-[#218838] bg-clip-text text-transparent">
                    {processSteps[activeStep].number}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${processSteps[activeStep].color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#001f54] mb-2">
                    {step.title}
                  </h3>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center text-[#28a745] mb-3`}>
                    {step.icon}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       

        {/* CTA Section */}
        <div className="mt-16 text-center">
         
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#28a745] to-[#218838] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-white text-[#001f54] font-semibold rounded-xl shadow-lg border-2 border-[#001f54] hover:bg-[#001f54] hover:text-white transition-all duration-300">
              Schedule a Call
            </button>
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