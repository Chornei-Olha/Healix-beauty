'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import PopularServices from '../components/common/PopularServices';
import Services from '../components/common/Services';
import FooterHeading from '../components/common/FooterHeading';
import BottomQuote from '../components/common/BottomQuote';
import Blog from '../components/common/Blog';
import Testimonials from '../components/common/Testimonials';
import ZemitsSection from '../components/common/ZemitsSection';
export default function HomePage(): JSX.Element {
  return (
    <div>
      <Header />
      {/* Main Content Stack */}
      <div className="relative w-full bg-global-12 rounded-xl overflow-hidden">
        {/* Hero Section with Background */}
        <div className="relative w-full min-h-[1854px] overflow-x-auto">
          {/* Background Beauty Text */}
          <div className="absolute top-[404px] left-[-986px] z-0">
            <span className="text-[284px] font-manrope font-light leading-[388px] uppercase text-global-6">
              beauty
            </span>
          </div>
          {/* Main Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full pt-20 pb-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg">
                <p className="text-base font-montserrat font-medium leading-6 text-global-5 mb-8 lg:mb-12">
                  Welcome — I am Dr Anna Kononenko, a medical aesthetic doctor with over a decade of
                  experience in advanced skincare and facial aesthetics.
                  <br />
                  <br />I believe that every woman is inherently beautiful. My role is not to change
                  your face, but to help you see — and feel — that beauty more clearly.
                </p>
              </div>
            </div>
            {/* Right Content - Hero Image and Text */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-manrope font-normal leading-[87px] text-global-5 mb-8">
                  Your Skin, refined.
                </h1>
                <div className="relative -ml-8 sm:-ml-12 lg:-ml-[148px]">
                  <Image
                    src="/images/img_.png"
                    alt="Beauty treatment"
                    width={554}
                    height={728}
                    className="w-full max-w-[554px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Treatment Tags */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 px-4">
            <span className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-4 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]">
              Lip augmentation
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-8 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
                >
                  Lifting
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-6 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
                >
                  Anti aging
                </Button>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-global-8 text-global-10 text-sm font-urbanist font-medium px-4 py-2 rounded-2xl shadow-[0px_4px_8px_#888888ff]"
              >
                Bio revitalization & mesotherapy
              </Button>
            </div>
          </div>
        </div>
        {/* Statistics and Features Section */}
        <div className="px-4 sm:px-6 lg:px-14 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Statistics Cards */}
            <div className="space-y-6">
              {/* 97.3% Card */}
              <div className="bg-global-9 border border-[#dedede7f] rounded-lg p-5 shadow-[0px_4px_20px_#888888ff]">
                <div className="text-center mb-8">
                  <h3 className="text-5xl font-geist font-semibold text-global-8 leading-[63px]">
                    97.3%
                  </h3>
                </div>
                <p className="text-lg font-geist font-medium text-global-12 leading-7">
                  of clients reported visible skin improvement within 30 days
                  <br />
                  Block 2
                </p>
              </div>
              {/* Careful Approach Card */}
              <div className="bg-global-9 border border-[#dedede7f] rounded-lg p-9 shadow-[0px_4px_20px_#888888ff]">
                <h3 className="text-5xl font-geist font-medium text-global-8 leading-[63px] mb-8">
                  Careful approach
                </h3>
                <p className="text-lg font-geist font-medium text-global-12 leading-7">
                  Maximum results for your radiant, healthy complexion.
                </p>
              </div>
            </div>
            {/* Bonus Skincare Plan Card */}
            <div className="relative bg-global-3 border border-[#dedede7f] rounded-lg overflow-hidden shadow-[0px_4px_20px_#888888ff]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/img__0x0.png)' }}
              />
              <div className="relative bg-gradient-to-t from-global-3 to-transparent p-7 h-full flex flex-col justify-between min-h-[712px]">
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
                    Developed in partnership with dermatological researchers, our formulation
                    philosophy is built on clinical evidence that shows fewer, more concentrated
                    ingredients deliver superior results. Our minimalist approach is validated by
                    extensive testing across diverse skin types and conditions.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-global-12 text-global-2 text-xs font-manrope font-light uppercase px-8 py-2"
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
            {/* Your Skin Deserves Better Section */}
            <div className="space-y-6">
              <div
                className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[350px]"
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
                    {/* Benefit Tags */}
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
                        <EditText
                          placeholder="Even complextion"
                          className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg border-0"
                          size="sm"
                        />
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
                        <EditText
                          placeholder="Reduced sensitivity & redness"
                          className="bg-global-7 text-global-8 text-sm font-geist font-medium px-4 py-2 rounded-lg border-0"
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Your Skin Your Strength Card */}
              <div
                className="relative bg-cover bg-center rounded-lg overflow-hidden min-h-[240px] shadow-[0px_4px_20px_#888888ff]"
                style={{ backgroundImage: 'url(/images/img__2.png)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-global-3 to-transparent p-4 flex flex-col justify-between">
                  <h3 className="text-4xl font-geist font-medium text-global-14 leading-[47px]">
                    Your skin. Your strength.
                  </h3>
                  <div className="flex justify-end">
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
        </div>
      </div>
      {/* Real Results Section */}
      <div className="bg-global-6 rounded-xl px-4 sm:px-6 lg:px-14 py-16 mt-8">
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-geist font-semibold text-global-8 leading-[70px]">
              Real
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-geist font-semibold text-global-8 leading-[70px]">
              results
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium text-global-8 leading-[84px]">
              you
            </h2>
          </div>
        </div>
        {/* Doctor Profile Section */}
        <div className="relative">
          {/* Background Images */}
          <div className="absolute bottom-0 left-0 right-0">
            <Image
              src="/images/img_bg_158x1422.png"
              alt="Background"
              width={1422}
              height={158}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute bottom-0 left-3 right-3">
            <div className="bg-gradient-to-t from-[#ecebeb] to-transparent p-1.5">
              <Image
                src="/images/img_bg_76x1406.png"
                alt="Background overlay"
                width={1406}
                height={76}
                className="w-full h-auto ml-5"
              />
            </div>
          </div>
          {/* Doctor Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium text-global-8 leading-[84px] mb-2">
                  Dr. Anna Kononenko
                </h3>
                <p className="text-sm font-urbanist text-global-9">
                  Aesthetic Doctor & Skincare Specialist
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-urbanist text-global-1 leading-6">
                    I hold a medical degree from the National University of Pharmacy in Kharkiv,
                    Ukraine, and have over 10 years of hands-on experience in the field of aesthetic
                    medicine. My approach combines scientific precision with a deep understanding of
                    beauty and individuality. I continuously train in the latest techniques and
                    evidence-based methods to ensure each client receives the safest, most effective
                    care. Subtle, natural results — that is my signature style.
                  </p>
                </div>
                <div className="space-y-8">
                  {/* Experience Card */}
                  <div className="bg-global-12 rounded-[32px] p-3">
                    <div className="flex justify-end mb-6">
                      <Image
                        src="/images/img_vector_black_900_02.svg"
                        alt="Icon"
                        width={68}
                        height={16}
                        className="w-[68px] h-4"
                      />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-xl font-urbanist font-semibold text-global-4">
                        10+ Years of Experience
                      </h4>
                      <div className="relative">
                        <div className="absolute bottom-2 right-5">
                          <Image
                            src="/images/img_svg_1162762701_991.svg"
                            alt="Icon"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <p className="text-xs font-urbanist text-global-9 leading-6 pr-8">
                          My work in aesthetic medicine began in 2012, following my graduation from
                          the National University of Pharmacy in Kharkiv, Ukraine.
                          <br />
                          Over the years, I have developed a methodical, results-driven approach
                          that combines medical precision with an eye for natural proportion.
                          <br />
                          Each treatment I provide is guided by clinical reasoning, safety
                          protocols, and a clear understanding of facial structure and ageing
                          dynamics.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Education Card */}
                  <div className="bg-global-12 rounded-[32px] p-6 space-y-8">
                    <div className="flex justify-end">
                      <Image
                        src="/images/img_vector_black_900_02.svg"
                        alt="Icon"
                        width={68}
                        height={16}
                        className="w-[68px] h-4"
                      />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-2xl font-urbanist font-semibold text-global-4">
                        Ongoing Education & Clinical Excellence
                      </h4>
                      <p className="text-sm font-urbanist text-global-9 leading-6">
                        Aesthetics is an ever-evolving field — and I evolve with it. I invest in
                        continuous training with top European and UK educators to master the safest,
                        most advanced techniques in non-invasive skin care. From precision
                        injectables to regenerative treatments, I ensure my clients benefit from the
                        latest innovations — delivered with skill, care, and integrity.
                      </p>
                    </div>
                  </div>
                  {/* Client Stats Card */}
                  <div className="bg-global-13 rounded-xl p-6 shadow-[0px_4px_4px_#888888ff] space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-6xl font-urbanist font-semibold text-global-11">
                          360
                        </span>
                        <span className="text-5xl font-urbanist font-semibold text-global-11">
                          +
                        </span>
                      </div>
                      <p className="text-base font-urbanist font-semibold text-global-11 max-w-[200px]">
                        Clients trust my methods to support their skin at every stage of life.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/img_user_image_box.png"
                        alt="Client testimonials"
                        width={152}
                        height={64}
                        className="w-[152px] h-16 rounded-[32px]"
                      />
                      <Image
                        src="/images/img_vector_gray_800_01.svg"
                        alt="Arrow"
                        width={42}
                        height={20}
                        className="w-[42px] h-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/img__724x742.png"
                alt="Dr. Anna Kononenko"
                width={742}
                height={724}
                className="w-full max-w-[742px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <PopularServices />
      <Services />
      <ZemitsSection />
      <Testimonials />
      <Blog />
      <BottomQuote />
      <Footer />
      <FooterHeading />
    </div>
  );
}
