'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const SkinSectionBlock = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 mb-10">
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
                Bonus Skincare Plan
              </h3>
              <p className="text-lg font-geist font-medium text-global-15 leading-7">
                Developed in partnership with dermatological researchers, our formulation philosophy
                is built on clinical evidence that shows fewer, more concentrated ingredients
                deliver superior results. Our minimalist approach is validated by extensive testing
                across diverse skin types and conditions.
              </p>
              <Button
                variant="secondary"
                size="md"
                className="bg-global-12 text-global-2 text-xs font-manrope font-light uppercase px-8 py-2"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN – Statistics */}
        <div className="space-y-6 lg:col-span-2 flex flex-col h-full order-2 lg:order-none">
          {/* 97.3% Card */}
          <div className="flex-1 flex flex-col justify-between bg-global-9 border border-[#dedede7f] rounded-lg p-12 shadow-[0px_4px_20px_#888888ff]">
            <div className="text-center mb-8">
              <h3 className="text-left text-5xl font-geist font-semibold text-global-8 leading-[63px]">
                97.3%
              </h3>
            </div>
            <p className="text-lg font-geist font-medium text-global-12 leading-7">
              of clients reported visible skin improvement within 30 days
            </p>
          </div>

          {/* Careful Approach Card */}
          <div className="flex-1 flex flex-col justify-between bg-global-9 border border-[#dedede7f] rounded-lg p-12 shadow-[0px_4px_20px_#888888ff] order-4 lg:order-none">
            <h3 className="text-5xl font-geist font-medium text-global-8 leading-[63px] mb-8">
              Careful approach
            </h3>
            <p className="text-lg font-geist font-medium text-global-12 leading-7">
              Maximum results for your radiant, healthy complexion.
            </p>
          </div>
          {/* Mobile version of "Your skin. Your strength." */}
          <div
            className="block lg:hidden relative bg-cover bg-center rounded-lg overflow-hidden min-h-[350px] shadow-[0px_4px_20px_#888888ff] order-3"
            style={{ backgroundImage: 'url(/images/img__2.png)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent flex flex-col justify-between p-5">
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
        <div
          className="hidden lg:block lg:col-span-2 relative bg-cover bg-center rounded-lg overflow-hidden min-h-[350px] shadow-[0px_4px_20px_#888888ff]"
          style={{ backgroundImage: 'url(/images/img__2.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent flex flex-col justify-between p-5">
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
          className="lg:col-span-3 relative bg-cover bg-center rounded-lg overflow-hidden min-h-[350px]"
          style={{ backgroundImage: 'url(/images/img__1.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent p-6 flex flex-col justify-between">
            <div className="flex justify-end">
              <Image
                src="/images/img_component_1_white_a700.svg"
                alt="Logo"
                width={134}
                height={32}
                className="w-[134px] h-8"
              />
            </div>
            <div>
              <h3 className="text-5xl font-geist font-medium text-global-16 leading-[63px] mb-8">
                Your skin deserves better.
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Smoother texture
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Enhanced firmness
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Long-lasting hydration
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Smaller pores
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-6 py-2 rounded-lg"
                  >
                    Improved clarity
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Clearer skin
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Stronger barrier
                  </Button>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg"
                  >
                    Natural radiance
                  </Button>
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
