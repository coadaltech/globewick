"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface LogoProps {
  variant?: "dark" | "light";
}

const Logo: React.FC<LogoProps> = ({ variant = "dark" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Default white, scroll pe dark
  const logoSrc = scrolled
    ? "/image.png"
    : "/image.png";

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-20  h-20 flex items-center justify-center transition-all duration-300">
        <Link href={"/"}>
        <img
            src={logoSrc}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
