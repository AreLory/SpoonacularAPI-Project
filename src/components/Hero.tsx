import Banner from "./Banner";

export default function Hero({backgroundImage, beforeTitle, title1, title2, subtitle}: {backgroundImage?: string, beforeTitle?:string, title1?: string,title2?: string, subtitle?: string}) {
  return (
    <div className="flex w-full justify-center mt-10">
      <div className="grid grid-cols-3 grid-rows-4 gap-1 border-2 border-quaternary w-full min-w-[360px] min-h-[200px] max-w-[1280px] max-h-[720px] aspect-[16/9] mx-auto rounded-xl">
        <div className="col-span-2 row-span-4">
            <img className="rounded-l-xl object-cover w-full h-full" 
            src={backgroundImage} alt="hero-img" 
            />
        </div>
        <div className="col-start-3 row-span-4 flex items-center justify-center ">
            <Banner beforeTitle={beforeTitle} title1={title1} title2={title2} subtitle={subtitle}/>
        </div>
      </div>
    </div>
  );
}
