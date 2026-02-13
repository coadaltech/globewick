'use client';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Logo from './logo';
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

const Header: React.FC = () => {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    // { label: 'Contact', href: '/contact' },
  ];

  const servicesData = [
    {
      category: 'DEVELOPMENT',
      services: [
        {
          name: 'Frontend Development',
          description: 'Build stunning, responsive web applications with modern frameworks.',
          icon: <Globe className="w-6 h-6" />,
          color: 'from-[#001f54] to-[#0056b3]',
          href: '/services/frontend-development'
        },
        {
          name: 'Backend Development',
          description: 'Create scalable, secure server-side applications and APIs.',
          icon: <Server className="w-6 h-6" />,
          color: 'from-[#28a745] to-[#218838]',
          href: '/services/backend-development'
        },
        {
          name: 'Full Stack Development',
          description: 'End-to-end web application development with seamless integration.',
          icon: <Layers className="w-6 h-6" />,
          color: 'from-[#001f54] to-[#003a8c]',
          href: '/services/fullstack-development'
        },
        {
          name: 'E-commerce Development',
          description: 'Build powerful online stores with payment integration.',
          icon: <ShoppingCart className="w-6 h-6" />,
          color: 'from-[#28a745] to-[#20c997]',
          href: '/services/e-commerce-development'
        }
      ]
    },
    {
      category: 'MOBILE DEVELOPMENT',
      services: [
        {
          name: 'iOS Development',
          description: 'Native iOS app development using Swift and SwiftUI.',
          icon: <Smartphone className="w-6 h-6" />,
          color: 'from-[#001f54] to-[#002d72]',
          href: '/services/ios-development'
        },
        {
          name: 'Android Development',
          description: 'Native Android app development using Kotlin and Jetpack.',
          icon: <Smartphone className="w-6 h-6" />,
          color: 'from-[#28a745] to-[#1e7e34]',
          href: '/services/android-development'
        }
      ]
    },
    {
      category: 'MARKETING',
      services: [
        {
          name: 'Social Media Marketing',
          description: 'Grow your brand on social media with strategic content.',
          icon: <Share2 className="w-6 h-6" />,
          color: 'from-[#001f54] to-[#003a8c]',
          href: '/services/social-media-marketing'
        },
        {
          name: 'SEO Services',
          description: 'Improve your search engine rankings with proven strategies.',
          icon: <Search className="w-6 h-6" />,
          color: 'from-[#28a745] to-[#218838]',
          href: '/services/seo-services'
        },
        {
          name: 'E-commerce Growth',
          description: 'Accelerate your online store growth with optimization.',
          icon: <TrendingUp className="w-6 h-6" />,
          color: 'from-[#001f54] to-[#0056b3]',
          href: '/services/e-commerce-growth'
        }
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/95'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            {isScrolled ? <Logo variant="dark" /> : <Logo variant="light" />}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    item.hasDropdown ? (
      <div
        key={item.label}
        ref={servicesDropdownRef}
        className="relative"
        onMouseEnter={() => setIsServicesDropdownOpen(true)}
        onMouseLeave={() => setIsServicesDropdownOpen(false)}
      >
        <div className="flex items-center gap-1">
          <Link
            href={item.href}
            className={`font-medium transition-colors duration-200 relative group ${
              isServicesPage || isServicesDropdownOpen
                ? "text-[#28a745]"
                : isScrolled
                ? "text-[#001f54] hover:text-[#28a745]"
                : "text-[#001f54] hover:text-[#28a745]"
            }`}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#28a745] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsServicesDropdownOpen(!isServicesDropdownOpen);
            }}
            className={`p-1 transition-colors duration-200 ${
              isServicesDropdownOpen
                ? "text-[#28a745]"
                : "text-[#001f54] hover:text-[#28a745]"
            }`}
            aria-label="Toggle services dropdown"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isServicesDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Services Dropdown */}
        {isServicesDropdownOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-6xl animate-fadeIn z-[60]">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(40, 167, 69, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 31, 84, 0.2) 0%, transparent 50%)'
              }}></div>
              
              <div className="relative p-8">
                {/* View All Services Link */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <Link
                    href="/services"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="inline-flex items-center gap-2 text-[#001f54] hover:text-[#28a745] transition-colors duration-300 font-semibold group"
                  >
                    <span>View All Services</span>
                    <svg 
                      className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {servicesData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                      <h3 className="text-[#001f54] font-bold text-lg mb-6 uppercase tracking-wider">
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-200"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-[#001f54] font-semibold mb-1 group-hover:text-[#28a745] transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ) : (
      <a
        key={item.label}
        href={item.href}
        className={`font-medium transition-colors duration-200 relative group ${
          isServicesPage
            ? "text-[#28a745]"
            : isScrolled
            ? "text-[#001f54] hover:text-[#28a745]"
            : "text-[#001f54] hover:text-[#28a745]"
        }`}
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#28a745] transition-all duration-300 group-hover:w-full"></span>
      </a>
    )
  ))}

<Link 
                href="/contact"
                style={{
                  display: 'block',
                  margin: '16px',
                  padding: '12px 24px',
                  textAlign: 'center',
                  color: '#ffffff',
                  fontWeight: '600',
                  background: 'linear-gradient(90deg, #28a745, #001f54)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(40, 167, 69, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Let’s Talk
              </Link>
  
</div>






          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden focus:outline-none ${
              isScrolled ? 'text-[#001f54]' : 'text-[#001f54]'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <div className="flex flex-col space-y-4 mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#001f54] font-medium py-2">
                        {item.label}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        }}
                        className="p-2 text-[#001f54] hover:text-[#28a745] transition-colors duration-200"
                        aria-label="Toggle services dropdown"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isServicesDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {isServicesDropdownOpen && (
                      <div className="pl-4 bg-gray-50 rounded-lg p-4 max-h-[60vh] overflow-y-auto">
                        {/* View All Services Link */}
                        <Link
                          href="/services"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesDropdownOpen(false);
                          }}
                          className="flex items-center gap-2 text-[#001f54] font-semibold hover:text-[#28a745] transition-colors duration-200 mb-3 pb-3 border-b border-gray-200"
                        >
                          <span>View All Services</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        
                        <div className="space-y-4">
                          {servicesData.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-2">
                              <h4 className="text-[#001f54] font-bold text-sm uppercase tracking-wider">
                                {category.category}
                              </h4>
                              {category.services.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  href="/services"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsServicesDropdownOpen(false);
                                  }}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200"
                                >
                                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${service.color} text-white shrink-0`}>
                                    {service.icon}
                                  </div>
                                  <span className="text-[#001f54] font-medium text-sm">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#001f54] font-medium hover:text-[#28a745] transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#28a745] text-white px-6 py-2 rounded-lg hover:bg-[#218838] transition-all duration-300 text-center font-semibold"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
