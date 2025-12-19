import { waapi, stagger, splitText } from "animejs";

export default function NotFound() {
  const { chars } = splitText("h2", { words: false, chars: true });

  waapi.animate(chars, {
    translate: `0 -1rem`,
    delay: stagger(100),
    duration: 600,
    loop: true,
    alternate: true,
    ease: "inOut(2)",
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center  border-quaternary border-x-2 h-[50vh] w-[90vw]  rounded-xl p-8">
        <h2 className="text-5xl md:text-9xl text-quaternary font-extrabold">404</h2>
        <p className="text-mywhite text-2xl md:text-5xl p-4">Page not found</p>
        <p className="text-mywhite text-xl md:text-3xl p-4">Go back home page and try again</p>
        <a className="bg-secondary p-4 rounded-xl text-mywhite hover:scale-110 transition hover:bg-primary" 
        type="button" href="/">
        
          Back Home
        
        </a>
      </div>
    </div>
  );
}
