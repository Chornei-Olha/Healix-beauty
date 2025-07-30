'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  const menuLinks = [
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Reviews', href: '/reviews' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'X / Twitter', href: '#' },
    { label: 'Tiktok', href: '#' },
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Payment Methods', href: '/payment' },
  ];

  return (
    <footer className={`bg-footer-1 border-t border-[#dedede] ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Background Text */}
        <div className="relative overflow-hidden mb-8 sm:mb-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[369px] font-geist font-normal text-global-8 whitespace-nowrap">
              AK Aestheticsx beauty
            </span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Menu Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-sm font-medium font-geist text-global-12">Menu</h3>
            <ul className="space-y-3 sm:space-y-4">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-2xl sm:text-3xl font-medium font-geist text-global-8 hover:text-global-10 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 sm:pt-6">
              <p className="text-sm font-manrope font-light text-global-1 leading-relaxed">
                1 Sea View Rd, Parkstone, Poole
                <br />
                BH12 3LP
                <br />
                Office 9
              </p>
            </div>
          </div>

          {/* Socials Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-sm font-medium font-geist text-global-12">Socials</h3>
            <ul className="space-y-3 sm:space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-2xl sm:text-3xl font-medium font-geist text-global-8 hover:text-global-10 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-medium font-geist text-global-8">
                Stay essential.
              </h3>
              <p className="text-sm font-medium font-geist text-global-12 leading-relaxed">
                Join our community for science-based skincare advice,
                <br />
                and exclusive access to limited-time offers. We respect your
                <br />
                inbox as much as your skin - no excessive communication.
              </p>
            </div>

            {/* Email Subscription Form */}
            <div className="space-y-4">
              <form
                onSubmit={handleEmailSubmit}
                className="flex items-center bg-global-12 rounded-lg p-1.5"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-3 py-2 text-base font-medium font-geist text-footer-1 placeholder-footer-1 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-global-7 rounded-lg p-2 hover:bg-global-8 transition-colors duration-200 shadow-[0px_4px_5px_#888888ff]"
                  aria-label="Subscribe to newsletter"
                >
                  <Image
                    src="/images/img_arrow_right_white_a700.svg"
                    alt="Submit"
                    width={34}
                    height={34}
                    className="w-[34px] h-[34px]"
                  />
                </button>
              </form>

              <div className="flex items-center space-x-2">
                <Image
                  src="/images/img_mask_group.svg"
                  alt="Privacy"
                  width={12}
                  height={12}
                  className="w-3 h-3 rounded-sm"
                />
                <p className="text-xs font-medium font-geist text-global-12">
                  By subscribing you agree to the Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Phone */}
        <div className="mb-6 sm:mb-8">
          <a
            href="tel:+447555906085"
            className="text-2xl sm:text-3xl font-medium font-geist text-global-10 hover:text-global-8 transition-colors duration-200"
          >
            +447555906085
          </a>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-[#dedede] pt-5 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium font-geist text-global-12 hover:text-global-8 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm font-medium font-geist text-global-12">© 2025 Healix beauty™</p>
          </div>
        </div>
        <div className="mt-[30px]">
          {' '}
          <p className="text-sm text-gray-500">
            Created by{' '}
            <Link
              href="https://impuls-studio.com.ua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Impuls Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
