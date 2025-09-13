'use client';

import Image from 'next/image';

const BottomQuote = () => {
  return (
    <div className="py-12 justify-center overflow-hidden">
      <div className="flex items-center justify-center space-x-4">
        <p className="hidden md:block text-2xl sm:text-3xl font-geist font-medium text-global-3 whitespace-nowrap">
          Beauty begins where balance is restored.
        </p>
        <Image
          src="/images/Logo.png"
          alt="Decorative element"
          width={668}
          height={148}
          className="w-[200px] sm:w-[900px] h-auto sm:h-auto"
        />
        <p className="hidden md:block text-2xl sm:text-3xl font-geist font-medium text-global-3 whitespace-nowrap">
          Beauty begins where balance is restored.
        </p>
      </div>
    </div>
  );
};

export default BottomQuote;
