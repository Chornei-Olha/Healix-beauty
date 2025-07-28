'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden lg:pb-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* Left (Text) */}
        <div className="order-2 sm:order-1 w-full lg:w-1/3 self-start pt-0 sm:pt-[120px] ">
          <h1 className="text-[70px] sm:text-[86px] lg:text-[96px] justify-start font-manrope font-normal leading-tight text-[#3F3F3F] mb-6 lg:mb-10">
            Your Skin,
            <br className="block sm:hidden lg:block" />
            refined.
          </h1>
        </div>
        {/* Main Image */}
        <div className="order-3 sm:order-2 w-full lg:w-1/3">
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
        <div className="order-1 sm:order-3 w-full lg:w-1/3 self-start pt-[40px] sm:pt-[100px]">
          <div className="flex flex-col gap-6 lg:gap-12 justify-start">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 justify-end">
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[10px] sm:text-sm font-medium px-10 py-3 rounded-2xl">
                Lip augmentation
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[10px] sm:text-sm font-medium px-10 py-3 rounded-2xl">
                Lifting
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[10px] sm:text-sm font-medium px-10 py-3 rounded-2xl">
                Anti aging
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[10px] sm:text-sm font-medium px-10 py-3 rounded-2xl">
                Bio revitalization & mesotherapy
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-medium text-[#3F3F3F] font-montserrat leading-[1.6]">
              Welcome — I’m Dr Anna Kononenko, a medical aesthetic doctor with over a decade of
              experience in advanced skincare and facial aesthetics.
              <br />
              <br />I believe that every woman is inherently beautiful. My role is not to change
              your face, but to help you see — and feel — that beauty more clearly.
            </p>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%]">
          <button className="w-full bg-white text-black text-base font-medium py-4 rounded-full shadow-md z-50">
            Book online
          </button>
        </div>
      </div>
      {/* Background Text */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        <span className="text-[100px] sm:text-[100px] md:text-[284px] lg:text-[284px/80 font-light uppercase text-[#171411] leading-none whitespace-nowrap overflow-hidden">
          BEAUTY BEAUTy
        </span>
      </div>
      s
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          src="/images/BG2.webp"
          alt="Background"
          width={1422}
          height={158}
          className="w-full h-[431px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
