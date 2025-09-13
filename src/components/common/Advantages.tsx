import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Advantages() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[70px] sm:mt-[100px]">
      <div className="gap-7">
        {/* Заголовок */}
        <div className="flex flex-col sm:flex-row font-geist justify-between">
          <div className="max-w-4xl flex flex-col justify-between gap-5">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-6">ADVANTAGES</h2>

            {/* Текст */}
            <p>
              <strong>Modern Technologies:</strong> combines RGB, UV and PL technologies with
              artificial intelligence, creating 3D images for deep skin analysis.
            </p>
            <p>
              <strong>Accurate diagnosis:</strong> A Professional Analyser provides detailed
              information about the skin’s condition, allowing you to identify problem areas and
              choose optimal care.
            </p>
            <p>
              <strong>Proactive Care:</strong> Regular skin analysis is not just about monitoring
              changes; it’s about being in control. It allows you to adjust care programs to achieve
              the best results, making you feel proactive and in charge of your skin’s health.
            </p>
            <div className="flex flex-col sm:flex-row gap-7 pt-7">
              <div className="shadow-md overflow-hidden">
                <Image
                  src="/images/112.webp"
                  alt="Zemits Skin Analysis"
                  width={1400}
                  height={1300}
                  className="w-full h-full"
                />
              </div>
              <div className="shadow-md overflow-hidden">
                <Image
                  src="/images/113.webp"
                  alt="Skin Analysis Details"
                  width={1400}
                  height={1300}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Блок с изображениями */}
          <div className="shadow-md overflow-hidden rounded-2xl">
            <Image
              src="/images/111.webp"
              alt="AI Skin Analysis"
              width={1788}
              height={2836}
              className="w-full h-auto max-h-[709px]"
            />
          </div>
        </div>

        {/* Кнопка */}
        <div className=" flex justify-center items-center flex-col sm:flex-row mt-[30px] sm:mt-[70px] gap-5">
          <Link href="/files/Zemits Ultranexx Lite.pdf" download>
            <Button
              variant="primary"
              size="lg"
              className="w-[70vw] sm:w-[25vw] bg-button-1 text-global-16 text-base font-urbanist font-medium border-t border-[#4d3d3133] px-8 py-4"
            >
              Zemits Ultranexx Lite{' '}
            </Button>
          </Link>
          <Link href="/files/Zemits Light Expert PRO.pdf" download>
            <Button
              variant="primary"
              size="lg"
              className="w-[70vw] sm:w-[25vw] bg-button-1 text-global-16 text-base font-urbanist font-medium border-t border-[#4d3d3133] px-8 py-4"
            >
              Zemits Light Expert PRO{' '}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
