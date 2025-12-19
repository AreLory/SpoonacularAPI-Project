import Step from "./Step";

import type { IInstruction } from "../types/IRecipe";

export default function StepsList({name, steps}:IInstruction ) {

  if (!steps) {
    return <div className="text-xl sm:text-2xl md:text-3xl text-black">Loading...</div>;
  }

  

  return (
    <div className="bg-secondary w-full h-fit p-2 sm:p-3 md:p-4 mt-2 rounded-lg text-mywhite">
      <h6 className="w-full text-center text-lg sm:text-xl md:text-2xl font-extrabold mb-3">DIRECTIONS</h6>
      <div className="space-y-2">
        {steps.map(step=><Step key={step.number}  number={step.number} step={step.step}/>)}
      </div>
    </div>
  );
}
