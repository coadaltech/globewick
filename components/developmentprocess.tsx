'use client';

import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Pencil, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  ArrowRight,
  CheckCircle2,
  Circle
} from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, understand your goals, and create a comprehensive roadmap for success.',
    details: ['Requirement Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
    color: '#28a745',
    delay: 0
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design & Prototype',
    description: 'Our designers craft intuitive interfaces and engaging user experiences that align with your brand.',
    details: ['UI/UX Design', 'Wireframing', 'Interactive Prototype', 'Design System'],
    color: '#20c997',
    delay: 0.2
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'Expert developers bring your vision to life using cutting-edge technologies and best practices.',
    details: ['Clean Code', 'Agile Methodology', 'Version Control', 'Code Reviews'],
    color: '#17a2b8',
    delay: 0.4
  },
  {
    number: '04',
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.',
    details: ['Unit Testing', 'Integration Tests', 'Performance Testing', 'Security Audit'],
    color: '#6610f2',
    delay: 0.6
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    description: 'Smooth launch with minimal downtime, ensuring your product reaches users seamlessly.',
    details: ['Cloud Deployment', 'CI/CD Pipeline', 'Monitoring Setup', 'Go-Live Support'],
    color: '#fd7e14',
    delay: 0.8
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Ongoing support and updates to keep your product running smoothly and evolving with your needs.',
    details: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Feature Enhancement'],
    color: '#e83e8c',
    delay: 1.0
  }
];

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto progress animation
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeStep > 0) {
      setCompletedSteps((prev) => {
        const lastStep = (activeStep - 1 + processSteps.length) % processSteps.length;
        if (!prev.includes(lastStep)) {
          return [...prev, lastStep];
        }
        return prev;
      });
    }
  }, [activeStep]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000d2b] to-[#001f54] overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#28a745] rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#28a745] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div> */}

      {/* Connecting Lines Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#28a745" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#28a745]/10 border border-[#28a745]/30 mb-6 backdrop-blur-xl">
            <Circle className="w-4 h-4 text-[#28a745] fill-[#28a745]" />
            <span className="text-[#28a745] text-sm font-semibold tracking-wide">OUR PROCESS</span>
          </div>
          
          <h2 className="text-[46px] font-bold text-white mb-6 leading-tight">
            How We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-[#20c997]"> Build </span>
            Your
            <br />
             Success
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A proven methodology that transforms ideas into exceptional digital products
          </p>
        </div>

        {/* Process Timeline - Unique Vertical Design */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#28a745]/30 to-transparent hidden lg:block" />

          {/* Progress Indicator */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#28a745] to-[#20c997] transition-all duration-1000 hidden lg:block"
            style={{ height: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
          />

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = completedSteps.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    animation: `fadeInScale 0.8s ease-out ${step.delay}s both`
                  }}
                >
                  <div className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                    {/* Content Card */}
                    <div 
                      className={`flex-1 cursor-pointer transition-all duration-500 ${
                        isLeft ? 'lg:text-right' : 'lg:text-left'
                      } text-center`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl sm:p-8 p-4 border transition-all duration-500 overflow-hidden ${
                        isActive 
                          ? 'border-[#28a745] shadow-2xl shadow-[#28a745]/30 scale-105' 
                          : 'border-white/10 hover:border-[#28a745]/50'
                      }`}>
                        {/* Active Glow */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#28a745]/10 to-transparent animate-pulse" />
                        )}

                        {/* Number Badge */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#28a745] text-white scale-110' 
                            : 'bg-[#28a745]/10 text-[#28a745]'
                        }`}>
                          <span className="text-2xl font-bold">{step.number}</span>
                        </div>

                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                          isActive ? 'text-[#28a745]' : 'text-white'
                        }`}>
                          {step.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <ul className={`space-y-2 ${isLeft ? 'lg:items-end' : 'lg:items-start'} flex flex-col items-center`}>
                          {step.details.map((detail, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-300"
                              style={{
                                animation: isActive ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none'
                              }}
                            >
                              <CheckCircle2 className={`w-4 h-4 transition-colors ${
                                isActive ? 'text-[#28a745]' : 'text-gray-500'
                              }`} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Hover Arrow */}
                        <div className={`mt-6 inline-flex items-center gap-2 text-[#28a745] font-semibold group-hover:gap-3 transition-all ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <span>Explore</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Center Icon Circle */}
                    <div 
                      className="relative z-20 cursor-pointer"
                      onClick={() => setActiveStep(index)}
                    >
                      <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-[#28a745] scale-125 shadow-2xl shadow-[#28a745]/50' 
                          : isCompleted
                            ? 'bg-[#28a745]/30'
                            : 'bg-white/10 hover:bg-white/20'
                      }`}>
                        {/* Pulsing Ring */}
                        {isActive && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-[#28a745] animate-ping opacity-75" />
                            <div className="absolute inset-0 rounded-full bg-[#28a745] animate-pulse" />
                          </>
                        )}
                        
                        {isCompleted ? (
                          <CheckCircle2 className="w-10 h-10 text-white relative z-10" />
                        ) : (
                          <Icon className={`w-10 h-10 relative z-10 transition-colors ${
                            isActive ? 'text-white' : 'text-[#28a745]'
                          }`} />
                        )}
                      </div>

                      {/* Connecting Dots */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-[#28a745]/50 to-transparent hidden lg:block" />
                      )}
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Dots - Mobile */}
        <div className="flex justify-center gap-2 mt-12 lg:hidden">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-[#28a745] w-8' 
                  : completedSteps.includes(index)
                    ? 'bg-[#28a745]/50'
                    : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href={"/contact"}>
          <button className="group px-10 py-4 cursor-pointer bg-gradient-to-r from-[#28a745] to-[#20c997] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#28a745]/50 transition-all duration-500 transform hover:scale-105 inline-flex items-center gap-3">
            <span>Start Your Project</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}