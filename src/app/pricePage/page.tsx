'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Hero_2 from '../../components/common/Hero_2';
import ServicesTable from '../../components/common/ServicesTable';
import Blog from '../../components/common/Blog';
import BottomQuote from '../../components/common/BottomQuote';
import Footer from '../../components/common/Footer';
import FooterHeading from '../../components/common/FooterHeading';

const PricePage = () => {
  return (
    <div>
      <Header />
      <Hero_2 />
      <section className="py-[50px] md:py-[79.1px] bg-[#f4f0ea]">
        <div className="flex flex-col">
          <h2 className="container mx-auto text-center font-manrope uppercase text-[24px] md:text-[40px] font-extralight leading-[29.28px] md:leading-[48.8px] text-[#090909] mb-[30px] md:mb-[53px]">
            Current price list
          </h2>
          <div className="w-full h-[154px] overflow-hidden relative mb-[53px]">
            <Image
              src="/images/pic18.webp"
              alt="back"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <ServicesTable />
      <Blog />
      <BottomQuote />
      <Footer />
      <FooterHeading />
    </div>
  );
};

export default PricePage;
