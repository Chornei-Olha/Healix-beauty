'use client';

const FooterHeading = () => {
  return (
    <div className="bg-footer-1 relative w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 flex justify-left pointer-events-none">
        <h2 className="text-[80px] sm:text-[220px] leading-none font-geist font-medium text-global-8 opacity-50 whitespace-nowrap">
          AK Aesthetics
        </h2>
      </div>
      {/* Заглушка высоты, чтобы родитель не схлопывался */}
      <div className="h-[180px] sm:h-[370px]"></div>
    </div>
  );
};

export default FooterHeading;
