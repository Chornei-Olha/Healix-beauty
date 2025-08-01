'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import clsx from 'clsx';

const featuredPost = {
  title: "How to Maintain Healthy Skin After 40: A Doctor's Perspective",
  date: 'Mar 14, 2025',
  image: '/images/img_ds9swq920y1cwoe01qalf129vijpg.png',
  description:
    'Your skin changes with age — but it’s never too late to start caring for it. From hydration strategies to ingredients your dermatologist recommends, discover what matters most after 40.',
};

const posts = [
  {
    title: '3 reasons why the cream does not work - and it is not marketing',
    date: 'Feb 6, 2025',
    image: '/images/img_yq5s6edabipjifa.png',
    description:
      'Not all skincare failures are due to marketing hype. Learn the real science behind why some creams fall short — including ingredient mismatch, improper usage, and unrealistic expectations. Understanding these truths can help you make smarter choices for your skin.',
  },
  {
    title: 'The foundation of healthy skin.',
    date: 'Jan 3, 2025',
    image: '/images/img_pmbu8ybv1lj7ypj.png',
    description:
      'Healthy skin starts with the basics: hydration, barrier protection, and consistent care. In this article, we break down the essential routines and ingredients that support your skin’s long-term strength and radiance — regardless of age or skin type.',
  },
];

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allPosts = [featuredPost, ...posts];
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 8 },
    loop: true,
  });

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mt-[70px] sm:mt-[150px]">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium text-global-8 pb-2">
          Blog
        </h2>
        <div className="p-2">
          <Image
            src="/images/img_arrow_right_white_a700.svg"
            alt="View all"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
      </div>

      {isMobile ? (
        <div ref={sliderRef} className="keen-slider" style={{ minHeight: '380px' }}>
          {allPosts.map((post, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={clsx(
                  'keen-slider__slide relative bg-cover bg-center rounded-lg overflow-hidden transition-all duration-300 cursor-pointer',
                  'min-h-[380px]',
                  isActive && 'min-h-[460px]'
                )}
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundColor: 'lightgray',
                }}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={clsx(
                    'absolute inset-0 p-6 flex flex-col justify-between transition-all duration-300',
                    isActive ? 'bg-black/80 text-white' : 'bg-global-5 text-global-16'
                  )}
                >
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
                  >
                    Click
                  </Button>
                  <div className="space-y-4">
                    <p className="text-xs font-geist font-medium text-global-13">{post.date}</p>
                    <h3
                      className={clsx(
                        index === 0
                          ? 'text-3xl sm:text-5xl md:text-6xl leading-[40px] sm:leading-[70px]'
                          : 'text-2xl sm:text-3xl leading-10',
                        'font-geist font-medium'
                      )}
                    >
                      {post.title}
                    </h3>
                    {isActive && (
                      <p className="text-sm font-geist font-light leading-5">{post.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {/* Featured desktop */}
          <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[374px] sm:min-h-[500px] md:min-h-[756px] p-6 group"
            style={{ backgroundImage: `url(${featuredPost.image})` }}
          >
            <div className="absolute inset-0 bg-global-5 p-6 flex flex-col justify-between group-hover:bg-black/80 transition-all duration-300">
              <Button
                variant="secondary"
                size="xs"
                className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
              >
                Click
              </Button>
              <div className="space-y-4 text-global-16 group-hover:text-white transition-colors duration-300">
                <p className="text-xs font-geist font-medium text-global-13 group-hover:text-white">
                  {featuredPost.date}
                </p>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium leading-[70px]">
                  {featuredPost.title}
                </h3>
                <p className="text-sm font-geist font-light leading-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xl">
                  {featuredPost.description}
                </p>
              </div>
            </div>
          </div>

          {/* Posts desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {posts.map((post, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[374px] group"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <div className="absolute inset-0 bg-global-5 p-6 flex flex-col justify-between group-hover:bg-black/80 transition-all duration-300">
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
                  >
                    Click
                  </Button>
                  <div className="space-y-4 text-global-16 group-hover:text-white transition-colors duration-300">
                    <p className="text-xs font-geist font-medium text-global-13 group-hover:text-white">
                      {post.date}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-geist font-medium leading-10">
                      {post.title}
                    </h3>
                    <p className="text-sm font-geist font-light leading-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Blog;
