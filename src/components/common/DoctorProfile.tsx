'use client';

import Image from 'next/image';

const DoctorProfile = () => {
  return (
    <div className="relative bg-global-6 rounded-xl py-16 mt-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Background Images */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Image
            src="/images/BG.webp"
            alt="Background"
            width={1422}
            height={158}
            className="w-full h-auto z-10"
          />
        </div>
        <div className="hidden lg:block absolute mx-auto bottom-0 translate-x-1/3 z-[-1]">
          <Image
            src="/images/Anna.webp"
            alt="Dr. Anna Kononenko"
            width={742}
            height={724}
            className="max-w-[742px] h-auto"
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="flex flex-col justify-between space-y-16">
            {/* Top: Heading and intro */}
            <div className="space-y-6 sm:pb-[100px]">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-geist font-medium text-global-8 leading-snug">
                Dr. Anna Kononenko
              </h3>
              <p className="text-sm font-urbanist text-global-9">
                Aesthetic Doctor & Skincare Specialist
              </p>
              <p className="text-sm font-urbanist text-global-1 leading-6 max-w-md">
                I hold a medical degree from the National University of Pharmacy in Kharkiv,
                Ukraine, and have over 10 years of hands-on experience in the field of aesthetic
                medicine. My approach combines scientific precision with a deep understanding of
                beauty and individuality. I continuously train in the latest techniques and
                evidence-based methods to ensure each client receives the safest, most effective
                care. Subtle, natural results — that is my signature style.
              </p>
            </div>

            {/* Bottom: Experience Card */}
            <div className="hidden lg:block mt-12 max-w-sm">
              <div className="bg-global-12 rounded-[32px] p-6 space-y-6">
                <div className="flex justify-end">
                  <Image
                    src="/images/img_vector_black_900_02.svg"
                    alt="Icon"
                    width={68}
                    height={16}
                    className="w-[68px] h-4"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-urbanist font-semibold text-global-4">
                    10+ Years of Experience
                  </h4>
                  <p className="text-xs font-urbanist text-global-9 leading-6 pr-2">
                    My work in aesthetic medicine began in 2012, following my graduation from the
                    National University of Pharmacy in Kharkiv, Ukraine. Over the years, I have
                    developed a methodical, results-driven approach that combines medical precision
                    with an eye for natural proportion. Each treatment I provide is guided by
                    clinical reasoning, safety protocols, and a clear understanding of facial
                    structure and ageing dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative flex flex-col justify-between items-end">
            {/* Top-right: Education Card */}
            <div className="hidden lg:block max-w-sm self-end">
              <div className="bg-global-12 rounded-[32px] p-6 space-y-6">
                <div className="flex justify-end">
                  <Image
                    src="/images/img_vector_black_900_02.svg"
                    alt="Icon"
                    width={68}
                    height={16}
                    className="w-[68px] h-4"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-urbanist font-semibold text-global-4">
                    Ongoing Education & Clinical Excellence
                  </h4>
                  <p className="text-sm font-urbanist text-global-9 leading-6">
                    Aesthetics is an ever-evolving field — and I evolve with it. I invest in
                    continuous training with top European and UK educators to master the safest,
                    most advanced techniques in non-invasive skin care. From precision injectables
                    to regenerative treatments, I ensure my clients benefit from the latest
                    innovations — delivered with skill, care, and integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-right: Client Stats Card */}
            <div className="hidden lg:block max-w-md self-end mt-12">
              <div className="bg-global-13 rounded-xl p-6 shadow-[0px_4px_4px_#888888ff] space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-urbanist font-semibold text-global-11">360</span>
                    <span className="text-5xl font-urbanist font-semibold text-global-11">+</span>
                  </div>
                  <p className="text-base font-urbanist font-semibold text-global-11 max-w-[200px]">
                    Clients trust my methods to support their skin at every stage of life.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/user-box.webp"
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

          {/* Mobile content block */}
          <div className="lg:hidden">
            <Image
              src="/images/img__724x742.png"
              alt="Dr. Anna Kononenko"
              width={742}
              height={724}
              className="w-full h-auto mx-auto mb-8"
            />

            <div className="space-y-8">
              {/* Cards reused */}
              {/* Education */}
              <div className="bg-global-12 rounded-[32px] p-6 space-y-6">
                <div className="flex justify-end">
                  <Image
                    src="/images/img_vector_black_900_02.svg"
                    alt="Icon"
                    width={68}
                    height={16}
                    className="w-[68px] h-4"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-urbanist font-semibold text-global-4">
                    Ongoing Education & Clinical Excellence
                  </h4>
                  <p className="text-sm font-urbanist text-global-9 leading-6">
                    Aesthetics is an ever-evolving field — and I evolve with it.  I invest in
                    continuous training with top European and UK educators to master the safest,
                    most advanced techniques in non-invasive skin care.\nFrom precision injectables
                    to regenerative treatments, I ensure my clients benefit from the latest
                    innovations — delivered with skill, care, and integrity.{' '}
                  </p>
                </div>
              </div>

              {/* Client Stats */}
              <div className="bg-global-13 rounded-xl p-6 shadow-[0px_4px_4px_#888888ff] space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl font-urbanist font-semibold text-global-11">360</span>
                    <span className="text-4xl font-urbanist font-semibold text-global-11">+</span>
                  </div>
                  <p className="text-base font-urbanist font-semibold text-global-11 max-w-[200px]">
                    Clients trust my methods to support their skin at every stage of life.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/user-box.webp"
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

              {/* Experience */}
              <div className="bg-global-12 rounded-[32px] p-6 space-y-6">
                <div className="flex justify-end">
                  <Image
                    src="/images/img_vector_black_900_02.svg"
                    alt="Icon"
                    width={68}
                    height={16}
                    className="w-[68px] h-4"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-urbanist font-semibold text-global-4">
                    10+ Years of Experience
                  </h4>
                  <p className="text-xs font-urbanist text-global-9 leading-6 pr-2">
                    My work in aesthetic medicine began in 2012, following my graduation from the
                    National University of Pharmacy in Kharkiv, Ukraine. Over the years, I’ve
                    developed a methodical, results-driven approach that combines medical precision
                    with an eye for natural proportion. Each treatment I provide is guided by
                    clinical reasoning, safety protocols, and a clear understanding of facial
                    structure and ageing dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
