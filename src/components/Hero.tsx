import Banner from "./Banner";

export default function Hero({
  backgroundImage,
}: {
  backgroundImage?: string;
}) {
  return (
    <div className="flex w-full justify-center px-4">
      <div
        className="flex flex-col md:flex-row border-x-2 border-quaternary w-full max-w-[1280px] rounded-xl p-4 md:p-8 gap-6">
        <div className="flex flex-col justify-center text-center md:text-left md:mr-14 md:ml-14">
          <h3
            className=" text-quaternary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
            Here hundreds <br />
            of Vegetarian Recipes <br />
            for you
          </h3>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <img
            className=" w-full max-w-md md:max-w-lg lg:max-w-xl h-48 sm:h-64 md:h-96 object-cover object-right rounded-xl"
            src={backgroundImage}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
