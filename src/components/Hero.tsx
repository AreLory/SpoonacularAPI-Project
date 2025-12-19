export default function Hero({
  backgroundImage,
}: {
  backgroundImage?: string;
}) {
  return (
    <div className="flex w-full justify-center px-2 sm:px-4">
      <div
        className="flex flex-col md:flex-row border-x-0 md:border-x-2 border-quaternary w-full max-w-7xl rounded-lg md:rounded-xl p-3 sm:p-4 md:p-8 gap-4 md:gap-6">
        <div className="flex flex-col justify-center text-center md:text-left md:mr-6 lg:mr-14 md:ml-6 lg:ml-14 order-2 md:order-1">
          <h3
            className="text-quaternary text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
            Here hundreds <br className="hidden sm:block" />
            of Vegetarian Recipes <br className="hidden sm:block" />
            for you
          </h3>
        </div>

        <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-40 sm:h-52 md:h-72 lg:h-96 object-cover object-right rounded-lg md:rounded-xl"
            src={backgroundImage}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
