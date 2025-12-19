import type { IBannerProps } from "../types/IBannerProps";

export default function Banner({
  image,
  title,
  preparationMinutes,
  cookingMinutes,
  readyInMinutes,
}: IBannerProps) {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <div className="relative flex flex-col items-center rounded-lg md:rounded-xl bg-secondary pt-32 sm:pt-40 md:pt-48 px-3 sm:px-4">
        <div
          className="
  absolute -top-20 sm:-top-24 md:-top-32
  flex justify-center w-full px-4
"
        >
          <div className="bg-secondary rounded-full w-40 sm:w-48 md:w-56 lg:w-64 aspect-square flex items-center justify-center shadow-lg border-4 border-tiertiary">
            <img
              className="w-[90%] aspect-square rounded-full object-cover"
              src={image}
              alt="recipe-img"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-quaternary text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold p-2 sm:p-3 md:p-4 text-center">
            {title}
          </h2>

          <div className="w-full px-2 sm:px-3 md:px-4 mb-4 mt-2 rounded-lg">
            <div className="grid grid-cols-3 grid-rows-2 gap-px text-xs sm:text-sm md:text-base">
              <div className="text-primary bg-quaternary rounded-tl-lg text-center border-b border-b-quaternary font-semibold p-2">
                Preparation
              </div>
              <div className="text-primary bg-quaternary text-center border-b border-b-quaternary font-semibold p-2">
                Cooking
              </div>
              <div className="text-primary bg-quaternary rounded-tr-lg text-center border-b border-b-quaternary font-semibold p-2">
                Total
              </div>

              <div className="bg-tiertiary rounded-bl-lg text-center p-2">
                {preparationMinutes ? `${preparationMinutes} min` : "/"}
              </div>
              <div className="bg-tiertiary text-center p-2">
                {cookingMinutes ? `${cookingMinutes} min` : "/"}
              </div>
              <div className="bg-tiertiary rounded-br-lg text-center p-2">
                {readyInMinutes ? `${readyInMinutes} min` : "/"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
