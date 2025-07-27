'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

const featuredPost = {
  title: "How to Maintain Healthy Skin After 40: A Doctor's Perspective",
  date: 'Mar 14, 2025',
  image: '/images/img_ds9swq920y1cwoe01qalf129vijpg.png',
};

const posts = [
  {
    title: '3 reasons why the cream does not work - and it is not marketing',
    date: 'Feb 6, 2025',
    image: '/images/img_yq5s6edabipjifa.png',
  },
  {
    title: 'The foundation of healthy skin.',
    date: 'Jan 3, 2025',
    image: '/images/img_pmbu8ybv1lj7ypj.png',
  },
];

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Массив для мобильного слайдера — объединяем featured + посты
  const allPosts = [featuredPost, ...posts];

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 8,
    },
    loop: true,
  });

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
        <div ref={sliderRef} className="keen-slider">
          {allPosts.map((post, index) => (
            <div
              key={index}
              className="keen-slider__slide number-slide relative bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${post.image})`,
                minHeight: index === 0 ? '374px' : '300px',
                backgroundColor: 'lightgray', // для проверки, что блоки видны
              }}
            >
              <div className="absolute inset-0 bg-global-5 p-6 flex flex-col justify-between">
                <Button
                  variant="secondary"
                  size="xs"
                  className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
                >
                  Care
                </Button>
                <div className="space-y-4">
                  <p className="text-xs font-geist font-medium text-global-13">{post.date}</p>
                  <h3
                    className={`${
                      index === 0
                        ? 'text-3xl sm:text-5xl md:text-6xl leading-[40px] sm:leading-[70px]'
                        : 'text-2xl sm:text-3xl leading-10'
                    } font-geist font-medium text-global-16`}
                  >
                    {post.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Featured */}
          <div
            className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[374px] sm:min-h-[500px] md:min-h-[756px] p-6"
            style={{
              backgroundImage: `url(${featuredPost.image})`,
            }}
          >
            <div className="absolute inset-0 bg-global-5 p-6 flex flex-col justify-between">
              <Button
                variant="secondary"
                size="xs"
                className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
              >
                Care
              </Button>
              <div className="space-y-4">
                <p className="text-xs font-geist font-medium text-global-13">{featuredPost.date}</p>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium text-global-16 leading-[70px]">
                  {featuredPost.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {posts.map((post, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[374px]"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <div className="absolute inset-0 bg-global-5 p-6 flex flex-col justify-between">
                  <Button
                    variant="secondary"
                    size="xs"
                    className="bg-global-7 text-global-8 text-xs font-geist font-medium px-3 py-1 rounded-lg w-fit"
                  >
                    Care
                  </Button>
                  <div className="space-y-4">
                    <p className="text-xs font-geist font-medium text-global-13">{post.date}</p>
                    <h3 className="text-2xl sm:text-3xl font-geist font-medium text-global-16 leading-10">
                      {post.title}
                    </h3>
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
