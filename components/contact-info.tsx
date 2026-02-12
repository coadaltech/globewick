'use client';

import React from 'react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'contact@globewick.com',
      link: 'mailto:contact@globewick.com',
      description: 'Send us an email anytime',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri 9am-6pm EST',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: '123 Tech Street, Innovation City',
      link: '#',
      description: 'Visit our office',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#001f54] mb-4">
          Contact Information
        </h3>
        <p className="text-gray-600 mb-8">
          We're here to help! Reach out to us through any of these channels, and we'll
          respond as soon as possible.
        </p>
      </div>

      {contactDetails.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          className="group flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex-shrink-0 w-14 h-14 bg-[#001f54] rounded-xl flex items-center justify-center text-[#28a745] group-hover:bg-[#28a745] group-hover:text-white transition-all duration-300">
            {contact.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#001f54] mb-1 group-hover:text-[#28a745] transition-colors duration-300">
              {contact.title}
            </h4>
            <p className="text-gray-600 font-medium">{contact.value}</p>
            <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
          </div>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#28a745] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ))}

      {/* Social Media */}
      <div className="pt-6">
        <h4 className="font-semibold text-[#001f54] mb-4">Follow Us</h4>
        <div className="flex gap-4">
          {[
            { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
            { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
            { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 bg-[#001f54] rounded-lg flex items-center justify-center text-white hover:bg-[#28a745] transition-all duration-300 transform hover:scale-110"
              aria-label={social.name}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

