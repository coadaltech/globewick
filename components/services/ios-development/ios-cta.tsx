'use client';

import React from 'react';
import Link from 'next/link';

const IOSCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto bg-gradient-to-br from-[#001f54] to-[#001a47] rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28a745] rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20c997] rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#28a745] to-[#20c997] mt-2">
                iOS Application?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss your iOS app idea and create a stunning native application for iPhone and iPad
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#28a745] to-[#20c997] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#28a745]/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#20c997] to-[#28a745] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#28a745]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#28a745]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#28a745]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOSCTA;

