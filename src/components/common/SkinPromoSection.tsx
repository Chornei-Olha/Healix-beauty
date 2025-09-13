'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import CountUp from 'react-countup';

const SkinSectionBlock = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 mb-6">
        {/* Bonus Skincare Plan – order 1 */}
        <div className="lg:col-span-3 relative bg-global-3 border border-[#dedede7f] rounded-lg overflow-hidden shadow-[0px_4px_20px_#888888ff] order-1 lg:order-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/img__0x0.webp)' }}
          />
          <div className=" absolute inset-0 bg-black/38 z-10" />

          <div className="relative bg-gradient-to-b from-[#090909]/40 to-[#090909]/40 p-7 h-full flex flex-col justify-between">
            <div className="flex justify-end">
              <Image
                src="/images/img_component_1_white_a700.svg"
                alt="Logo"
                width={134}
                height={32}
                className="w-[134px] h-8"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-5xl font-geist font-medium text-global-15 leading-[63px]">
                Bonus Skincare
                <br className="lg:hidden" />
                Plan
              </h3>
              <p className="text-lg font-geist font-medium text-global-15 leading-7">
                Developed in partnership with dermatological researchers, our formulation philosophy
                is built on clinical evidence that shows fewer, more concentrated ingredients
                deliver superior results. Our minimalist approach is validated by extensive testing
                across diverse skin types and conditions.
              </p>
              <div className="flex">
                {' '}
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full lg:w-[40%] bg-global-12 text-global-2 text-xs font-manrope font-light uppercase px-8 py-2 mx-auto lg:mx-0"
                >
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN – Statistics */}
        <div className="space-y-6 lg:col-span-2 flex flex-col h-full order-2 lg:order-none">
          {/* 97.3% Card */}
          <div className="flex-1 flex flex-col justify-between bg-global-9 border border-[#dedede7f] rounded-lg p-7 shadow-[0px_4px_20px_#888888ff]">
            <div className="text-center mb-8">
              <h3 className="text-left text-5xl font-geist font-semibold text-global-8 leading-[63px]">
                <CountUp end={97.3} duration={2} decimals={1} suffix="%" />
              </h3>
            </div>
            <p className="text-lg font-geist font-medium text-global-12 leading-7">
              of clients reported visible skin improvement within 30 days
            </p>
          </div>

          {/* Careful Approach Card */}
          <div className="flex-1 flex flex-col justify-between bg-global-9 border border-[#dedede7f] rounded-lg p-7 shadow-[0px_4px_20px_#888888ff] order-4 lg:order-none">
            <h3 className="text-4xl sm:text-5xl font-geist font-semibold text-global-8 leading-[63px] mb-5 sm:mb-8">
              Careful approach
            </h3>
            <p className="text-lg font-geist font-medium text-global-12 leading-7">
              Maximum results for your radiant, healthy complexion.
            </p>
          </div>
          {/* Mobile version of "Your skin. Your strength." */}
          <div className="block lg:hidden relative rounded-lg overflow-hidden h-[250px] shadow-[0px_4px_20px_#888888ff] order-3">
            {/* Фоновое видео */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/skin.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Затемнение + контент */}
            <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent flex flex-col justify-between p-5 z-10">
              <h3 className="text-4xl font-geist font-medium text-global-14 leading-[47px]">
                Your skin. Your strength.
              </h3>
              <div className="flex ml-auto">
                <Image
                  src="/images/img_vector.svg"
                  alt="Arrow"
                  width={134}
                  height={32}
                  className="w-[134px] h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6">
        {/* Desktop version of "Your skin. Your strength." */}
        <div className="hidden lg:block lg:col-span-2 relative rounded-lg overflow-hidden h-[350px] shadow-[0px_4px_20px_#888888ff]">
          {/* Фоновое видео */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/skin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Затемнение + контент */}
          <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent flex flex-col justify-between p-5 z-10">
            <h3 className="text-4xl font-geist font-medium text-global-14 leading-[47px]">
              Your skin. Your strength.
            </h3>
            <div className="flex ml-auto">
              <Image
                src="/images/img_vector.svg"
                alt="Arrow"
                width={134}
                height={32}
                className="w-[134px] h-8"
              />
            </div>
          </div>
        </div>

        {/* Your Skin Deserves Better – order 5 */}
        <div
          className="lg:col-span-3 relative bg-cover bg-center rounded-lg overflow-hidden h-[350px]"
          style={{ backgroundImage: 'url(/images/img__1.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent flex flex-col justify-between">
            <div className="flex justify-end p-6">
              <Image
                src="/images/img_component_1_white_a700.svg"
                alt="Logo"
                width={134}
                height={32}
                className="w-[134px] h-8"
              />
            </div>
            <div>
              <h3 className="p-6 text-3xl sm:text-5xl font-geist font-medium text-global-16 leading-[40px] sm:leading-[63px] mt-5 sm:mt-0 mb-8">
                Your skin deserves better.
              </h3>
              <div className="space-y-3 overflow-hidden pb-6">
                {/* Row 1 — left loop */}
                <div className="relative w-full overflow-hidden">
                  <div className="animate-marquee-left flex gap-4 w-max">
                    {[...Array(3)].flatMap((_, i) =>
                      [
                        'Smoother texture',
                        'Enhanced firmness',
                        'Long-lasting hydration',
                        'Smaller pores',
                        'Smoother texture',
                        'Enhanced firmness',
                        'Long-lasting hydration',
                        'Smaller pores',
                      ].map((text, j) => (
                        <span
                          key={`${i}-${j}`}
                          className="bg-global-7 text-global-8 text-xs sm:text-sm font-geist font-medium px-4 py-2 rounded-lg border border-global-8"
                        >
                          {text}
                        </span>
                      ))
                    )}
                  </div>
                </div>

                {/* Row 2 — right loop */}
                <div className="relative w-full overflow-hidden">
                  <div className="animate-marquee-right flex gap-4 w-max">
                    {[...Array(2)].flatMap((_, i) =>
                      [
                        'Improved clarity',
                        'Clearer skin',
                        'Stronger barrier',
                        'Natural radiance',
                        'Improved clarity',
                        'Clearer skin',
                        'Stronger barrier',
                        'Natural radiance',
                      ].map((text, j) => (
                        <span
                          key={`${i}-${j}`}
                          className="bg-global-7 text-global-8 text-xs sm:text-sm font-geist font-medium px-4 py-2 rounded-lg border border-global-8"
                        >
                          {text}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinSectionBlock;
