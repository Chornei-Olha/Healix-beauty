'use client';

import React from 'react';
import Image from 'next/image';

const Hero_2 = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white h-[600px] sm:h-[700px] md:h-[100vh]"
      style={{
        backgroundImage: `url('./images/background4.webp')`,
      }}
    >
      {/* Overlay */}
      <div className=" absolute inset-0 bg-black/50 z-0" />

      <div className="container relative z-10 w-full mx-auto px-4 md:px-16 h-full flex flex-col justify-start">
        {/* Breadcrumbs */}
        <p className="absolute top-[25%] sm:top-[40%] md:top-[55%] left-[20px] md:left-[60px] uppercase text-xs font-extralight font-manrope flex gap-2">
          <span>Home Page</span>
          <span>/</span>
          <span className="italic text-white/40">Current Price List</span>
        </p>

        {/* Blur Image (Desktop only) */}
        <div className="hidden md:block absolute top-[20px] right-0 w-1/2">
          <img src="/images/OverlayBlur4.svg" alt="Beauty" className="w-full" />
        </div>

        {/* Title */}
        <h2 className="absolute text-white font-manrope text-[45px] md:text-[74px] font-extralight leading-[49px] md:leading-[81px] uppercase top-[35%] sm:top-[50%] md:top-[65%]">
          Price <span className="italic font-manrope font-extralight">Healix beauty</span>
        </h2>

        {/* Text */}
        <p className="absolute text-white font-manrope font-extralight text-[16px]  leading-[21px] top-[55%] sm:top-[60%] md:top-[75%]">
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
