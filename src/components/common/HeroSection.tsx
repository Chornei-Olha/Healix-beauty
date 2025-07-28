'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-global-12 rounded-xl overflow-hidden">
      {/* Hero Section with Background */}
      <div className="relative  container min-h-[1054px] overflow-x-auto">
        {/* Background Beauty Text */}
        <div className="absolute top-[404px] left-[-986px] z-0">
          <span className="text-[284px] font-manrope font-light leading-[388px] uppercase text-global-6">
            beauty
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full pt-20 pb-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-montserrat font-medium leading-6 text-global-5 mb-8 lg:mb-12">
                Welcome — I am Dr Anna Kononenko, a medical aesthetic doctor with over a decade of
                experience in advanced skincare and facial aesthetics.
                <br />
                <br />I believe that every woman is inherently beautiful. My role is not to change
                your face, but to help you see — and feel — that beauty more clearly.
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image and Text */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-manrope font-normal leading-[87px] text-global-5 mb-8">
                Your Skin, refined.
              </h1>
              <div className="relative -ml-8 sm:-ml-12 lg:-ml-[148px]">
                <Image
                  src="/images/img_.png"
                  alt="Beauty treatment"
                  width={554}
                  height={728}
                  className="w-full max-w-[554px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Tags */}
        <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
          <span className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-4 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]">
            Lip augmentation
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Button
                variant="secondary"
                size="sm"
                className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-8 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
              >
                Lifting
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-6 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
              >
                Anti aging
              </Button>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-4 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
            >
              Bio revitalization & mesotherapy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
