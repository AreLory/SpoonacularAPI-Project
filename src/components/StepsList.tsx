import Step from "./Step";

import type { IInstruction } from "../types/IRecipe";

export default function StepsList({name, steps}:IInstruction ) {

  if (!steps) {
    return <div className="text-3xl text-black">Loading...</div>;
  }

  

  return (
    <div className="bg-quaternary w-full h-fit p-2 mt-2 rounded-lg">
      <h6 className="w-full text-center text-xl font-extrabold">DIRECTIONS</h6>
      {steps.map(step=><Step key={step.number}  number={step.number} step={step.step}/>)}
    </div>
  );
}
