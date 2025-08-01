'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: 'I have had treatments before, but this is the first time I have felt really understood. Dr Anna did not impose anything - she just focused on what would suit my skin. The changes are already noticeable, but I see them every morning.',
    name: 'Kai Tanaka',
    role: 'frequent traveler',
    avatar: '/images/testimonials1.webp',
  },
  {
    text: 'I had never tried aesthetic treatments before, so I was nervous. Dr Anna explained everything in a way that made me feel calm and in control. And honestly — the glow is real.',
    name: 'Jennifer Thompson',
    role: 'formerly used 2-step routine',
    avatar: '/images/testimonials2.webp',
  },
  {
    text: 'My skin went through a lot after — dryness, dullness, all of it. After two sessions here, I stopped using filters on my photos. It is not about looking younger — it is about looking well.',
    name: 'Sarah Mitchell',
    role: 'combination skin',
    avatar: '/images/testimonials3.webp',
  },
  {
    text: 'You can tell she knows what she is doing. From consultation to treatment, everything is precise, clean and respectful. The kind of place where you feel safe, not rushed.',
    name: 'Diane Lawson',
    role: 'Skin regeneration',
    avatar: '/images/testimonials4.webp',
  },
  {
    text: 'At 52, I wanted something that looked natural — not done. Dr Anna delivered exactly that. No swelling, no pressure, just calm, professional care and a visible difference.',
    name: 'Aisha Rodriguez',
    role: 'Skin rejuvenation',
    avatar: '/images/testimonials5.webp',
  },
  {
    text: 'I was not expecting such a personal approach. Everything felt very thought-through. My skin feels firmer, but not tight or fake. It is just me — only fresher.',
    name: 'Michelle Kaplan',
    role: 'sensitive skin',
    avatar: '/images/testimonials6.webp',
  },
];

const Testimonials = () => {
  return (
    <div id="reviews" className="w-full container mx-auto px-4 sm:px-6 lg:px-8 mt-[70px]">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[70px] sm:text-[100px] md:text-[250px] font-geist font-medium text-global-8 leading-tight">
          What they
        </h2>
        <h2 className="text-[70px] sm:text-[100px] md:text-[250px] font-geist font-medium text-global-8 leading-tight">
          are saying
        </h2>
      </div>

      {/* Swiper for mobile, Grid for desktop */}
      <div className="md:hidden mt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-global-12 rounded-lg p-6 space-y-6">
                <p className="text-sm font-geist font-medium text-global-7 leading-7">
                  {testimonial.text}
                </p>

                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/img_component_1_blue_gray_900.svg"
                      alt="Star"
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={38}
                    height={38}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <p className="text-base font-geist font-medium text-global-7">
                      {testimonial.name}
                    </p>
                    <p className="text-xs font-geist font-medium text-global-12">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for md+ */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-global-12 rounded-lg p-6 space-y-6">
            <p className="text-sm sm:text-lg font-geist font-medium text-global-7 leading-7">
              {testimonial.text}
            </p>

            {/* Star Rating */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/img_component_1_blue_gray_900.svg"
                  alt="Star"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
              ))}
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-2">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={38}
                height={38}
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <p className="text-base font-geist font-medium text-global-7">{testimonial.name}</p>
                <p className="text-xs font-geist font-medium text-global-12">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
