// components/UltranexxLite.tsx
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function UltranexxLite() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[70px] sm:mt-[100px]">
      <div className="flex flex-col gap-6">
        {/* Верхний блок */}
        <div className="space-y-12 w-full min-h-[700px] bg-[url('/images/small-bg.webp')] bg-cover bg-no-repeat rounded-2xl p-8 md:p-12 text-white">
          {/* <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            Care
          </span> */}
          <h2 className="text-3xl md:text-5xl font-medium font-guest mt-10">
            Zemits Ultranexx Lite
          </h2>
          <p className="text-xl sm:text-3xl mb-8 max-w-2xl font-medium font-guest">
            Introducing non-surgical high intensity focused ultrasound technology for smas-lifting
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Image
              src="/images/012.webp"
              alt="Ultrasound face procedure"
              width={984}
              height={984}
              className="rounded-xl w-[286px] h-auto"
            />
            <Image
              src="/images/011.webp"
              alt="Ultrasound treatment"
              width={984}
              height={984}
              className="rounded-xl w-[286px] h-auto"
            />
          </div>
        </div>

        {/* Нижний блок */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src="/images/left-01.webp"
              alt="Ultrasound treatment"
              width={984}
              height={984}
              className="rounded-xl w-[668px] h-auto"
            />
          </div>

          <div>
            <Image
              src="/images/right-01.webp"
              alt="Ultrasound treatment"
              width={984}
              height={984}
              className="rounded-xl w-[668px] h-auto"
            />
          </div>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center mt-[30px] sm:mt-[70px]">
          <Link href="/files/Zemits VeraFace Skin Analysis.pdf" download>
            <Button
              variant="primary"
              size="lg"
              className="w-[70vw] sm:w-[30vw] bg-button-1 text-global-16 text-base font-urbanist font-medium border-t border-[#4d3d3133] px-8 py-4"
            >
              Zemits VeraFace Skin Analysis{' '}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
