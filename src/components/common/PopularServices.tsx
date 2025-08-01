'use client';

import { useRef, useEffect, useState } from 'react';

const services = [
  { id: 1, title: 'Sculpted glow', video: '/videos/video1.mp4' },
  { id: 2, title: 'Cell revival', video: '/videos/video2.mp4' },
  { id: 3, title: 'Facial detox', video: '/videos/video3.mp4' },
  { id: 4, title: 'Lift & firm', video: '/videos/video4.mp4' },
  { id: 5, title: 'Deep hydration', video: '/videos/video5.mp4' },
  { id: 6, title: 'Skin clarity', video: '/videos/video6.mp4' },
];

const PopularServices = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = Number(visibleEntry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      },
      {
        root: sliderRef.current,
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#F4F0EB66]/40 pt-10 pb-2 md:pt-[150px] px-4">
      <h2 className="text-center text-[24px] md:text-[40px] font-manrope font-extralight leading-[24.28px] md:leading-[48.8px] uppercase text-[#090909]">
        Popular <span className="italic font-inter">Services</span>
      </h2>

      <div className="mt-8 md:mt-14 relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth will-change-transform snap-x snap-mandatory z-20"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex-shrink-0 w-full min-w-full md:w-[360px] bg-white/40 pt-3 md:pt-4 pb-0 md:pb-6 text-center snap-start relative h-screen md:h-auto"
            >
              <h3 className="font-manrope text-[14px] md:text-[18px] font-extralight leading-[14px] md:leading-[18px] uppercase">
                {service.title}
              </h3>

              <div className="relative mt-[13.73px] md:mt-10 w-full h-[80vh] md:h-[436px] rounded-md overflow-hidden">
                <video
                  src={service.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                />
              </div>

              <button className="mt-6 w-full bg-[#090909] text-white py-[12px] text-[12px] font-manrope font-extralight leading-[14.4px] uppercase hover:bg-[#837ba68a]">
                Book now
              </button>
            </div>
          ))}
        </div>

        {/* Dots — only on mobile */}
        <div className="my-1 flex justify-center gap-2 md:hidden">
          {services.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-[#090909]' : 'bg-[#c5c2be]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrows — only on desktop */}
      <div className="hidden md:flex justify-center gap-4 mt-8">
        <button
          className="w-14 h-14 border border-[#c5c2be] text-[#c5c2be] rounded-full hover:border-[#4d3d31] hover:text-[#4d3d31]"
          onClick={() => scrollSlider('left')}
        >
          ◀
        </button>
        <button
          className="w-14 h-14 border border-[#c5c2be] text-[#c5c2be] rounded-full hover:border-[#4d3d31] hover:text-[#4d3d31]"
          onClick={() => scrollSlider('right')}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default PopularServices;
