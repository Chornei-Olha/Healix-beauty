'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-0">
        {/* Left (Text) */}
        <div className="px-4 sm:px-6 lg:px-8 order-1 lg:order-1 w-full lg:w-1/3 self-start pt-0 lg:pt-[50px] ">
          <h1 className="text-[60px] sm:text-[86px] lg:text-[86px] justify-start font-manrope font-regular leading-none sm:leading-tight text-[#3F3F3F] mt-10 lg:mb-10">
            Your Skin,
            <br className="block sm:hidden lg:block" />
            refined.
          </h1>
        </div>
        {/* Main Image */}
        <div className="relative order-2 sm:order-2">
          <div className="px-4 sm:px-6 lg:px-8 sm:ml-0 w-[auto] sm:h-[auto] lg:h-[auto] ">
            {' '}
            <Image
              src="/images/Anna2.webp"
              alt="Beauty treatment"
              width={554}
              height={728}
              className="w-[auto] h-[auto] object-contain"
              priority
            />
          </div>
          {/* Mobile CTA Button */}
          <div className="sm:hidden absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[70%] z-[999]">
            <button className="w-full bg-white text-black text-base font-medium py-4 rounded-full shadow-md z-[999]">
              Book online
            </button>
          </div>
          {/* Background Text */}
          <div className="block lg:hidden container overflow-hidden absolute bottom-0 lg:bottom-[-30px] transform z-20">
            <span
              className="text-[90px] sm:text-[200px] md:text-[184px] lg:text-[284px] font-manrope font-extralight uppercase text-[#171411] leading-none whitespace-nowrap"
              style={{ fontWeight: 100 }}
            >
              BEAUTY BEAUTY
            </span>
          </div>
          <div className="block lg:hidden absolute w-full bottom-0 z-30">
            <Image
              src="/images/BG2.webp"
              alt="Background"
              width={1422}
              height={558}
              className="w-full h-[150px] sm:h-[431px]"
            />
          </div>
        </div>

        {/* Right (Text) */}
        <div className="container px-4 sm:px-6 lg:px-8 order-3 lg:order-3 w-full lg:w-1/3 self-start pt-[20px] sm:pt-[20px] lg:pt-[100px]">
          <div className="flex flex-col gap-6 lg:gap-12 justify-start">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 sm:justify-start lg:justify-end font-urbanist">
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[13px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Lip augmentation
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[13px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Lifting
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[13px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Anti aging
              </span>
              <span className="bg-[#F2F2F2] text-[#3F3F3F] text-[13px] sm:text-sm font-medium px-4 sm:px-6 py-3 rounded-2xl">
                Bio revitalization & mesotherapy
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-medium text-[#3F3F3F] font-montserrat leading-[1.25]">
              Welcome — I’m Dr Anna Kononenko, a medical aesthetic doctor with over a decade of
              experience in advanced skincare and facial aesthetics.
              <br />I believe that every woman is inherently beautiful. My role is not to change
              your face, but to help you see — and feel — that beauty more clearly.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div className="w-full overflow-hidden absolute bottom-0 lg:bottom-[-30px] md:left-1/2 transform md:-translate-x-1/2 z-20">
          <span
            className="text-[90px] sm:text-[200px] md:text-[184px] lg:text-[284px] font-manrope font-extralight uppercase text-[#171411] leading-none whitespace-nowrap"
            style={{ fontWeight: 100 }}
          >
            BEAUTY BEAUTY
          </span>
        </div>
        <div className=" w-full lg:bottom-0 absolute z-30">
          {' '}
          <Image
            src="/images/BG2.webp"
            alt="Background"
            width={1422}
            height={558}
            className="w-full h-[150px] sm:h-[431px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
