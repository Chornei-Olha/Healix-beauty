'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PopularServices from '../components/common/PopularServices';
import Services from '../components/common/Services';
import FooterHeading from '../components/common/FooterHeading';
import BottomQuote from '../components/common/BottomQuote';
import Blog from '../components/common/Blog';
import Testimonials from '../components/common/Testimonials';
import ZemitsSection from '../components/common/ZemitsSection';
import DoctorProfile from '../components/common/DoctorProfile';
import SkinSectionBlock from '../components/common/SkinPromoSection';
import HeroSection from '../components/common/HeroSection';
import Advantages from '../components/common/Advantages';
export default function HomePage(): JSX.Element {
  return (
    <div>
      <Header />
      <HeroSection />
      <SkinSectionBlock />
      <DoctorProfile />
      <PopularServices />
      <Services />
      <ZemitsSection />

      <Advantages />
      <Testimonials />
      <Blog />
      <BottomQuote />
      <Footer />
      <FooterHeading />
    </div>
  );
}
