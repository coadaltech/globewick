'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Award,
  Globe,
  Heart,
  Zap,
  ArrowRight,
  Play
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', icon: Target },
  { value: 200, suffix: '+', label: 'Happy Clients', icon: Heart },
  { value: 15, suffix: '+', label: 'Years Experience', icon: Award },
  { value: 50, suffix: '+', label: 'Team Members', icon: Users }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your growth is our mission. We measure our success by the success of our clients.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparency, honesty, and ethical practices are the foundation of everything we do.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality in every project we undertake.'
  }
];

const milestones = [
  { year: '2010', title: 'Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2015', title: 'Global Expansion', description: 'Opened offices in 5 countries across 3 continents' },
  { year: '2020', title: '500+ Projects', description: 'Reached major milestone in successful deliveries' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as top innovator in tech solutions' }
];

function Shield(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function AboutUsSection() {
  const [inView, setInView] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters(prev => ({ ...prev, [index]: stat.value }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [index]: Math.floor(current) }));
          }
        }, 25);
      });
    }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative pb-20 pt-38 bg-gradient-to-b from-[#001f54] via-[#000d2b] to-[#001f54] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#28a745] rounded-full opacity-5 blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#28a745] rounded-full opacity-5 blur-3xl translate-x-1/2" />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #28a745 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`inline-block transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#28a745]/10 border border-[#28a745]/30 mb-6 backdrop-blur-xl">
              <Globe className="w-4 h-4 text-[#28a745]" />
              <span className="text-[#28a745] text-sm font-semibold tracking-wide">ABOUT GLOBEWICK</span>
            </div>
          </div>
          
          <h2 className={`text-[46px] font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Building The Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-[#20c997]">
              One Innovation At A Time
            </span>
          </h2>
          
          <p className={`text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We are a team of passionate innovators, designers, and developers dedicated to 
            transforming ideas into powerful digital solutions. Since 2010, we've been helping 
            businesses worldwide achieve their digital ambitions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Story & Mission */}
          <div className={`transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-10 border border-white/10 overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#28a745] to-transparent" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#28a745]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#28a745]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in an ever-evolving digital landscape. We believe in 
                  creating lasting partnerships built on trust, transparency, and exceptional results.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#28a745]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#28a745]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Customer-Centric</h4>
                      <p className="text-gray-400 text-sm">Your success is our top priority in every decision we make</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#28a745]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#28a745]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Innovation Driven</h4>
                      <p className="text-gray-400 text-sm">We stay ahead of technology trends to deliver cutting-edge solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#28a745]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#28a745]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Quality Focused</h4>
                      <p className="text-gray-400 text-sm">Excellence in execution and attention to detail in every project</p>
                    </div>
                  </div>
                </div>

                <button className="group mt-8 px-6 py-3 bg-[#28a745]/10 border border-[#28a745]/30 text-[#28a745] rounded-xl font-semibold hover:bg-[#28a745] hover:text-white transition-all duration-300 flex items-center gap-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#28a745]/5 to-transparent rounded-tl-full" />
            </div>
          </div>

          {/* Right: Stats & Video */}
          <div className={`space-y-6 transition-all duration-1000 delay-700 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Video/Image Placeholder */}
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 aspect-video group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#28a745]/20 to-[#001f54] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#28a745] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#28a745]/50">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-semibold">Watch Our Story</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#28a745]/50 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-[#28a745] mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold text-[#28a745] mb-1">
                      {counters[index] || 0}{stat.suffix}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core <span className="text-[#28a745]">Values</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isActive = activeValue === index;
              
              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 ${
                    isActive 
                      ? 'border-[#28a745] shadow-xl shadow-[#28a745]/20 scale-105' 
                      : 'border-white/10 hover:border-[#28a745]/30'
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#28a745]/10 to-transparent rounded-2xl animate-pulse" />
                  )}
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 ${
                      isActive ? 'bg-[#28a745] scale-110' : 'bg-[#28a745]/10'
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors ${
                        isActive ? 'text-white' : 'text-[#28a745]'
                      }`} />
                    </div>
                    
                    <h4 className={`text-xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-[#28a745]' : 'text-white'
                    }`}>
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-1100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="text-[#28a745]">Journey</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#28a745]/50 via-[#28a745] to-[#28a745]/50 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                      <div className="inline-block bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#28a745]/50 transition-all duration-300 hover:scale-105">
                        <div className="text-5xl font-bold text-[#28a745] mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="relative z-10 w-4 h-4 rounded-full bg-[#28a745] border-4 border-[#001f54] shadow-lg shadow-[#28a745]/50 flex-shrink-0" />

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready To Start Your Project?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>

              <button className="group px-8 py-2 bg-gradient-to-r from-[#28a745] to-[#20c997] text-white rounded-full font-bold text-lg cursor-pointer  transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center gap-3">
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <Link href={"/contact"}>
              <button className="px-8 py-2 bg-white/5 backdrop-blur-xl border-2 border-[#28a745]/30 cursor-pointer text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-[#28a745] transition-all duration-500 transform hover:scale-105">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}