'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '/pricePage' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
    setMenuOpen(false); // Закрыть мобильное меню
  };

  const scrollToCallbackForm = () => {
    const section = document.getElementById('footer');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`bg-global-12 ${className}`}>
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div className="flex-shrink-0 w-[170px] sm:w-[250px]">
            <a href="/">
              <Image
                src="/images/Logo.png"
                alt="AK Aesthetics Logo"
                width={1500}
                height={700}
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 mr-auto pl-[100px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-base font-medium font-urbanist text-global-4 hover:text-global-10 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="relative">
              <button
                onClick={scrollToCallbackForm}
                className="bg-global-12 border border-[#4541404c] rounded-[26px] px-4 py-2.5 hover:bg-global-10 transition-all duration-200"
              >
                <span className="text-base font-medium font-urbanist text-global-1">
                  Request a callback
                </span>
              </button>
            </div>
            <button className="bg-global-12 border border-[#4541404c] rounded-[26px] px-6 py-3 hover:bg-global-10 transition-all duration-200">
              <span className="text-base font-medium font-urbanist text-global-2">Book online</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-global-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-global-7`}>
          <div className="pt-4 space-y-5">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-center text-base font-medium font-urbanist text-global-4 hover:text-global-10 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={scrollToCallbackForm}
                className="w-full bg-global-12 border border-[#4541404c] rounded-[26px] px-4 py-3 text-base font-medium font-urbanist text-global-1 hover:bg-global-10 transition-all duration-200"
              >
                Request a callback
              </button>
              <button className="w-full bg-global-12 border border-[#4541404c] rounded-[26px] px-4 py-3 text-base font-medium font-urbanist text-global-2 hover:bg-global-10 transition-all duration-200">
                Book online
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
