'use client';

const FooterHeading = () => {
  return (
    <div className="bg-footer-1 relative w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 flex justify-left pointer-events-none">
        <h2 className="text-[300px] leading-none font-geist font-medium text-global-8 opacity-50 whitespace-nowrap">
          Healix beauty
        </h2>
      </div>
      {/* Заглушка высоты, чтобы родитель не схлопывался */}
      <div className="h-[370px]"></div>
    </div>
  );
};

export default FooterHeading;
