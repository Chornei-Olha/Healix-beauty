'use client';

import React from 'react';
import Image from 'next/image';

const Hero_2 = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white h-[100vh] sm:h-[1000px]"
      style={{
        backgroundImage: `url('./images/background4.webp')`,
      }}
    >
      {/* Overlay */}
      <div className=" absolute inset-0 bg-black/50 z-0" />

      <div className="container relative z-10 w-full mx-auto px-4 md:px-16 h-full flex flex-col justify-start">
        {/* Breadcrumbs */}
        <p className="absolute top-[92px] md:top-[573px] left-[20px] md:left-[60px] uppercase text-xs font-normal font-[Manrope] flex gap-2">
          <span>Home Page</span>
          <span>/</span>
          <span className="italic text-white/40">Current Price List</span>
        </p>

        {/* Blur Image (Desktop only) */}
        <div className="hidden md:block absolute top-[700px] right-0 w-1/2">
          <img src="/images/OverlayBlur4.svg" alt="Beauty" className="w-full" />
        </div>

        {/* Title */}
        <h2 className="absolute text-white font-[Manrope] text-[40px] md:text-[74px] font-extralight leading-[49px] md:leading-[81px] uppercase top-[200px] md:top-[624px]">
          Price <span className="italic font-inter">Healix beauty</span>
        </h2>

        {/* Text */}
        <p className="absolute text-white font-[Manrope] text-[16px] font-extralight leading-[26px] top-[344px] md:top-[708px] max-w-xl">
          Our treatment plans are individually tailored — based on your skin condition, long-term
          goals and clinical priorities. <br />
          Every procedure is selected with precision and purpose — not quantity, but quality. <br />
          Below you’ll find indicative pricing for consultations, aesthetic treatments, and advanced
          skin therapies.
          <br />
          For a full quote and personalised plan, please book a consultation.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero_2;
