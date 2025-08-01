'use client';

import Image from 'next/image';
import { useRef } from 'react';

import service1 from '/public/images/popular1.webp';
import service2 from '/public/images/popular2.webp';
import service3 from '/public/images/popular3.webp';
import service4 from '/public/images/popular4.webp';

const PopularServices = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const services = [
    { id: 1, title: 'Lorem ipsum', video: '/videos/video1.mp4' },
    { id: 2, title: 'Lorem ipsum', video: '/videos/video2.mp4' },
    { id: 3, title: 'Lorem ipsum', video: '/videos/video3.mp4' },
    { id: 4, title: 'Lorem ipsum', video: '/videos/video4.mp4' },
    { id: 5, title: 'Lorem ipsum', video: '/videos/video5.mp4' },
    { id: 6, title: 'Lorem ipsum', video: '/videos/video6.mp4' },
  ];

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 384; // 360px + 24px (gap)
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#F4F0EB66]/40 pt-10 pb-2 md:pt-[150px] px-4">
      <h2 className="text-center text-[24px] md:text-[40px] font-manrope font-extralight leading-[24.28px] md:leading-[48.8px] uppercase text-[#090909]">
        Popular <span className="italic font-inter">Services</span>
      </h2>

      <div className="mt-8 md:mt-14 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth will-change-transform"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-full md:w-[360px] bg-white/40 px-3 md:px-4 pt-3 md:pt-4 pb-0 md:pb-6 text-center"
            >
              <h3 className="font-manrope text-[14px] md:text-[18px] font-extralight leading-[14px] md:leading-[18px] uppercase">
                {service.title}
              </h3>
              <div className="relative mt-[13.73px] md:mt-10 w-full h-[249px] md:h-[436px]">
                <video
                  src={service.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                />
              </div>
              <button className="mt-[56.27px] md:mt-6 w-full bg-[#090909] text-white py-[10px] md:py-[12.5px] text-[12px] font-manrope font-extralight leading-[14.4px] uppercase hover:bg-[#837ba68a]">
                Book now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 md:gap-4 mt-8">
        <button
          className="w-10 h-10 md:w-14 md:h-14 border border-[#c5c2be] text-[#c5c2be] rounded-full hover:border-[#4d3d31] hover:text-[#4d3d31]"
          onClick={() => scrollSlider('left')}
        >
          ◀
        </button>
        <button
          className="w-10 h-10 md:w-14 md:h-14 border border-[#c5c2be] text-[#c5c2be] rounded-full hover:border-[#4d3d31] hover:text-[#4d3d31]"
          onClick={() => scrollSlider('right')}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default PopularServices;
