import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 text-center md:px-6">
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wide text-gray-900 font-semib old sm:text-base md:text-2xl/relaxed lg:text-4xl/relaxed xl:text-3xl/relaxed dark:text-gray-400">
              Get ready for
            </h3>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
              something thrilling!
            </h1>
            <h2 className="pt-4 text-sm tracking-tight text-gray-900 sm:text-xl md:text-lg md:mx-[100px] lg:text-2xl lg:mx-[250px]">
              We have landed a snazzy new brand name that totally vibes with our
              amazing services means we need a new web launch.
            </h2>
            <p className="text-[8px] mx-auto font-bold text-gray-900 md:text-[10px]/relaxed lg:text-[14px]/relaxed dark:text-gray-400">
              Peek at our spiffy new website transformation! Brace yourself for
              the grand reopening - it is going to be legendary!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
