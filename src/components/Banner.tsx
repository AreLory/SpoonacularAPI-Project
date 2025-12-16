export default function Banner({
  image,
  title,
  preparationMinutes,
  cookingMinutes,
  readyInMinutes,
}: {
  image: string;
  title: string;
  preparationMinutes: number;
  cookingMinutes: number;
  readyInMinutes: number;
}) {
  return (
    <div className="mt-[100px]">
      <div className="relative flex flex-col items-center rounded-xl bg-secondary pt-[200px]">
        <div
          className="
  absolute -top-[20vw] sm:-top-[140px]
  flex justify-center w-full
"
        >
          <div className=" bg-secondary rounded-full w-[60vw] max-w-[360px] aspect-square flex items-center justify-center">
            <img
              className=" w-[90%] aspect-square rounded-full object-cover"
              src={image}
              alt="recipe-img"
            />
          </div>
        </div>

        {/* CONTENUTO */}
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-quaternary text-xl md:text-4xl font-bold p-4">
            {title}
          </h2>

          <div className="w-full px-4 mb-4 mt-2 rounded-lg">
            <div className="grid grid-cols-3 grid-rows-2 gap-px">
              <div className="bg-quaternary rounded-tl-lg text-center border-b border-b-quaternary">
                Preparation
              </div>
              <div className="bg-quaternary text-center border-b border-b-quaternary">
                Cooking
              </div>
              <div className="bg-quaternary rounded-tr-lg text-center border-b border-b-quaternary">
                Total
              </div>

              <div className="bg-tiertiary rounded-bl-lg text-center">
                {preparationMinutes ? `${preparationMinutes} min` : "/"}
              </div>
              <div className="bg-tiertiary text-center">
                {cookingMinutes ? `${cookingMinutes} min` : "/"}
              </div>
              <div className="bg-tiertiary rounded-br-lg text-center">
                {readyInMinutes ? `${readyInMinutes} min` : "/"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
