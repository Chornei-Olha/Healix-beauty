'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden lg:pb-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-0">
        {/* Left (Text) */}
        <div className="order-2 lg:order-1 w-full md:w-1/3 lg:w-1/3 self-start pt-0 lg:pt-[50px] ">
          <h1 className="text-[60px] sm:text-[86px] lg:text-[86px] justify-start font-manrope font-regular leading-none sm:leading-tight text-[#3F3F3F] mt-10 lg:mb-10">
            Your Skin,
            <br className="block sm:hidden lg:block" />
            refined.
          </h1>
        </div>
        {/* Main Image */}
        <div className="order-3 sm:order-2 w-full sm:w-2/3 md:w-3/5 lg:w-2/5 ml-12 sm:ml-0">
          <Image
            src="/images/Anna2.webp"
            alt="Beauty treatment"
            width={554}
            height={728}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        {/* Right (Text) */}
        <div className="order-1 lg:order-3 w-full lg:w-1/3 self-start pt-[20px] sm:pt-[20px] lg:pt-[100px]">
          <div className="flex flex-col gap-6 lg:gap-12 justify-start">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 sm:justify-end font-urbanist">
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[13px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Lip augmentation
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[12px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Lifting
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[12px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Anti aging
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[12px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Bio revitalization & mesotherapy
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-medium text-[#3F3F3F] font-montserrat leading-[1.25]">
              Welcome — I’m Dr Anna Kononenko, a medical aesthetic doctor with over a decade of
              experience in advanced skincare and facial aesthetics.
              <br />
              <br />I believe that every woman is inherently beautiful. My role is not to change
              your face, but to help you see — and feel — that beauty more clearly.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile CTA Button */}
      <div className="md:hidden absolute bottom-[90px] left-1/2 transform -translate-x-1/2 w-[70%] z-[999]">
        <button className="w-full bg-white text-black text-base font-medium py-4 rounded-full shadow-md z-[999]">
          Book online
        </button>
      </div>
      {/* Background Text */}
      <div className="absolute bottom-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
        <span className="text-[80px] sm:text-[140px] md:text-200px] lg:text-[284px] font-manrope font-extralight uppercase text-[#171411] leading-none whitespace-nowrap overflow-hidden">
          BEAUTY BEAUTY
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          src="/images/BG2.webp"
          alt="Background"
          width={1422}
          height={158}
          className="w-full h-[150px] sm:h-[431px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
