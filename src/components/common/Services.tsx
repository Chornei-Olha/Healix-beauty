'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import service1 from '/public/images/service1.webp';
import service2 from '/public/images/service2.webp';
import service3 from '/public/images/service3.webp';
import service4 from '/public/images/service4.webp';
import service5 from '/public/images/service5.webp';
import service6 from '/public/images/service6.webp';
import service7 from '/public/images/service7.webp';
import service8 from '/public/images/service8.webp';
import service9 from '/public/images/service9.webp';

const Services = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Tear trough augmentation',
      description: 'Filler treatment to smooth under-eye hollows and brighten tired eyes',
      image: service1,
    },
    {
      id: 2,
      title: 'Lip augmentation',
      description: 'Filler treatment to enhance volume, shape and definition of the lips',
      image: service2,
    },
    {
      id: 3,
      title: 'Cheekbones,chin and jawline augmentation',
      description: 'Dermal fillers to define facial contours and enhance structural balance',
      image: service3,
    },
    {
      id: 4,
      title: 'Lifting treatment and collagen stimulation of the ligaments',
      description: 'Non-invasive treatment to tighten skin and activate deep collagen production',
      image: service4,
    },
    {
      id: 5,
      title: 'Anti-aging ',
      description: 'Targeted treatments to smooth wrinkles, restore firmness, and rejuvenate skin',
      image: service5,
    },
    {
      id: 6,
      title: 'Hair treatment',
      description:
        'Stimulating therapy to strengthen hair, reduce shedding, and support healthy growth',
      image: service6,
    },
    {
      id: 7,
      title: 'Blanching therapy',
      description: 'smoothing the wrinkles all over the face or Venus rings on the neck',
      image: service7,
    },
    {
      id: 8,
      title: 'Fat-dissolving',
      description: 'Non-surgical injections to reduce localised fat and contour targeted areas',
      image: service8,
    },
    {
      id: 9,
      title: 'Bio revitalization & mesotherapy',
      description: 'Microinjections to deeply hydrate, nourish, and improve skin tone and texture',
      image: service9,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleServices = isMobile && !showAll ? services.slice(0, 4) : services;

  return (
    <section className="pt-[83px] container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center uppercase font-extralight mb-5 text-[24px] md:text-[40px] leading-[29.28px] md:leading-[48.8px] font-manrope text-[#090909]">
        Services <span className="italic font-manrope font-extralight ">Healix beauty</span>
      </h2>
      <p className="text-center text-[#090909] font-manrope text-sm font-extralight leading-[23.94px] mb-10">
        We create beauty together with you and with care. For all services, we carefully select
        products that are safe for you and the environment.
      </p>

      {/* Grid */}
      <div className="mt-0 sm:mt-9 grid gap-0 md:gap-[23px] grid-cols-1 md:grid-cols-3 auto-rows-[200px]">
        {visibleServices.map((service, idx) => {
          const baseClass = 'relative overflow-hidden shadow-md rounded-[20px] w-full group';

          const layout = [
            'md:col-span-1 md:row-span-2',
            'md:col-start-2 md:row-start-1',
            'md:col-start-3 md:row-start-1',
            'md:col-start-2 md:row-start-2',
            'md:col-start-3 md:row-start-2',
            'md:col-span-1 md:row-span-2',
            'md:col-start-2 md:row-start-3',
            'md:col-start-3 md:row-start-3',
            'md:col-start-2 md:col-span-2 md:row-start-4 h-[180px] md:h-[240px]',
          ];

          const isFirstMobileCard = isMobile && !showAll && idx === 0;
          const isSecondMobileCard = isMobile && !showAll && idx === 1;

          const card = (
            // <div
            //   key={service.id}
            //   className={`${baseClass} ${layout[idx] ?? ''} ${
            //     isFirstMobileCard
            //       ? 'h-[180px] md:h-full mb-[200px]'
            //       : isSecondMobileCard
            //         ? 'mt-[0px] h-[180px] md:h-full'
            //         : 'h-[180px] md:h-full'
            //   }`}
            // >
            <div
              key={service.id}
              onClick={() => {
                const anchor = service.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]+/g, '');
                router.push(`/pricePage#${anchor}`);
              }}
              className={`${baseClass} ${layout[idx] ?? ''} cursor-pointer ${
                isFirstMobileCard
                  ? 'h-[180px] md:h-full mb-[200px]'
                  : isSecondMobileCard
                    ? 'mt-[0px] h-[180px] md:h-full'
                    : 'h-[180px] md:h-full'
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#090909] to-[#090909]/64 text-white flex flex-col py-4 md:py-7 pl-4 md:pl-7 transition-colors group-hover:from-black/60 group-hover:to-black/90">
                <div>
                  <h3 className="uppercase font-manrope font-extralight text-[20px] md:text-[28px]  leading-[28px]">
                    {service.title}
                  </h3>
                  <p className="font-manrope font-extralight text-[12px] md:text-[14px]  leading-[20px] md:leading-[24px] mt-1">
                    {service.description}
                  </p>
                </div>
                <Image
                  src="/images/img_arrow_right.svg"
                  alt="Arrow"
                  width={32}
                  height={32}
                  className="w-8 h-8 mt-auto"
                />
              </div>
            </div>
          );

          return isFirstMobileCard ? (
            <div key={service.id} className="pb-[64px]">
              {card}
            </div>
          ) : (
            card
          );
        })}
      </div>

      {/* Button */}
      {isMobile && (
        <div className="text-center mt-[21.73px] md:mt-[55.8px]">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="w-full md:max-w-[200px] px-[61.5px] py-[13px] bg-[#090909] text-white uppercase font-manrope font-extralight text-[14px] md:text-[12px]  leading-[16.8px] md:leading-[14.4px] hover:bg-[#837ba68a] transition-colors"
            >
              More
            </button>
          ) : (
            <button
              onClick={() => router.push('/pricePage')}
              className="w-full md:max-w-[200px] px-[61.5px] py-[13px] bg-[#090909] text-white uppercase font-manrope font-extralight text-[14px] md:text-[12px]  leading-[16.8px] md:leading-[14.4px] hover:bg-[#837ba68a] transition-colors"
            >
              PRICE
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Services;
