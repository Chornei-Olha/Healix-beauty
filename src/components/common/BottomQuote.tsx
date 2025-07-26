'use client';

import Image from 'next/image';

const BottomQuote = () => {
  return (
    <div className="py-12 overflow-x-auto">
      <div className="flex items-center justify-center space-x-4 min-w-[1950px]">
        <p className="text-2xl sm:text-3xl font-geist font-medium text-global-3">
          Beauty begins where balance is restored.
        </p>
        <Image
          src="/images/img_vector_black_900_02.svg"
          alt="Decorative element"
          width={668}
          height={148}
          className="w-[668px] h-[148px]"
        />
        <p className="text-2xl sm:text-3xl font-geist font-medium text-global-3">
          Beauty begins where balance is restored.
        </p>
      </div>
    </div>
  );
};

export default BottomQuote;
