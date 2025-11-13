'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

const ZemitsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  bg-global-12 rounded-xl space-y-16 pt-12">
      {/* Text Block */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-geist font-semibold text-global-4 leading-tight">
          Zemits SkyFrax Pro - fractional skin rejuvenation without injections
        </h2>
        <p className="text-base font-urbanist text-global-9 leading-7 max-w-5xl">
          Zemits SkyFrax Pro is a state-of-the-art fractional RF platform that combines
          microneedling and radiofrequency energy for deep skin renewal.
          <br />
          The procedure stimulates collagen production, improves texture, reduces wrinkles, enlarged
          pores and post-acne.
        </p>
      </div>

      {/* Cards & Images */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Benefits Card */}
        <div className="bg-global-10 rounded-[40px] p-5 sm:p-10 space-y-8 order-2 lg:order-1">
          <h3 className="text-2xl font-urbanist font-semibold text-global-4">Benefits:</h3>
          <p className="text-base font-urbanist text-global-9 leading-7">
            No surgery
            <br />- Minimal recovery time
            <br />- Tangible results after 1-2 treatments
            <br />- Suitable for face, neck, décolleté
          </p>
          <div className="border-t border-[#0a0a0a19] pt-4">
            <div className="flex items-center justify-between">
              <div className="bg-global-4 rounded-[30px] w-[120px] sm:w-[164px] h-[50px] sm:h-[62px] flex justify-center items-center">
                {' '}
                <Image
                  src="/images/logo_w.webp"
                  alt="Arrow"
                  width={96}
                  height={26}
                  className="w-24 h-6"
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl sm:text-5xl font-urbanist font-semibold text-global-4">
                  250+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Images */}
        <div className="space-y-1 order-1 lg:order-2">
          <Image
            src="/images/benefits1.webp"
            alt="Treatment feature"
            width={1408}
            height={1414}
            className="w-full h-auto rounded-[40px]"
          />
        </div>
        <div className="space-y-1 order-3 lg:order-3">
          <Image
            src="/images/benefits2.webp"
            alt="Benefits"
            width={1410}
            height={1414}
            className="w-full h-auto rounded-[40px]"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
        <Button
          variant="primary"
          size="lg"
          className="w-[70vw] sm:w-[25vw] bg-button-1 text-global-16 text-base font-urbanist font-medium border-t border-[#4d3d3133] px-8 py-4"
        >
          Book online
        </Button>
      </div>
    </div>
  );
};

export default ZemitsSection;
