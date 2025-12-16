export default function Banner({
  image,
  title,
  preparationMinutes,
  cookingMinutes,
  readyInMinutes
}: {
  image: string;
  title: string;
  preparationMinutes:number
  cookingMinutes:number
  readyInMinutes:number
}) {
  return (
    
        <div className=" p-4 mt-[100px]">
          <div className="flex flex-col justify-center rounded-xl bg-secondary">
            <div className="flex justify-center ">
							<div className="flex justify-center p-[20px] size-[540px] bg-secondary rounded-full relative bottom-[100px]">
								<img className="size-[500px]  rounded-full object-cover  border-quaternary" src={image} alt="recipe-img" />
							</div>
              
						</div>
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="text-quaternary text-xl md:text-4xl font-bold p-4">
                {title}
              </h2>
              <div className="w-full h-fit px-4 mb-4 mt-2 rounded-lg">
            <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
              <div className="bg-quaternary rounded-tl-lg text-center border-b border-b-quaternary">Preparation</div>
              <div className="bg-quaternary text-center border-b border-b-quaternary">Cooking</div>
              <div className="bg-quaternary rounded-tr-lg text-center border-b border-b-quaternary">Total</div>
  
              <div className="bg-tiertiary rounded-bl-lg text-center ">{preparationMinutes? `${preparationMinutes} min` : '/'}</div>
              <div className="bg-tiertiary text-center ">{cookingMinutes? `${cookingMinutes} min` : '/'} </div>
              <div className="bg-tiertiary rounded-br-lg text-center ">{readyInMinutes? `${readyInMinutes} min` : '/'}</div>
            </div>
          </div>
            </div>
          </div>
        </div>
  );
}
