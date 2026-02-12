"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CTA() {
  const [inView, setInView] = useState(false);

  // Simple mount animation trigger
  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <div className="  relative pb-16 bg-gradient-to-b from-[#001f54] via-[#000d2b] to-[#001f54] overflow-hidden">
      {/* CTA */}
      <div
        className={`text-center mt-20 transition-all duration-1000 max-w-[1480px] mx-auto ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready To Start Your Project?
          </h3>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative
            technology solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
            <button className="group cursor-pointer px-8 py-2  bg-gradient-to-r from-[#28a745] to-[#20c997] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#28a745]/50 transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center gap-3">
              <span>Get Started</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>

            <Link href={"/contact"}>
            <button className=" cursor-pointer px-8 py-2 bg-white/5 backdrop-blur-xl border-2 border-[#28a745]/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-[#28a745] transition-all duration-500 transform hover:scale-105">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
