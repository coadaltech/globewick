'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group animate-fadeInUp"
          aria-label="Scroll to top"
        >
          <div className="relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-[#28a745]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#28a745]/20 hover:border-[#28a745] hover:scale-110 hover:shadow-2xl hover:shadow-[#28a745]/50">
            {/* Pulsing ring effect on hover */}
            <div className="absolute inset-0 rounded-full bg-[#28a745] opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
            
            {/* Arrow icon */}
            <ChevronUp className="w-6 h-6 text-[#28a745] transition-all duration-300 group-hover:text-[#28a745] group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </div>
        </button>
      )}
    </>
  );
}

