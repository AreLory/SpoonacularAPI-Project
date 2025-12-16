import type { IStep } from "../types/IRecipe"

export default function Step({number, step}: IStep) {
  return (
    <div className= 'border-t border-primary p-3 '>
      <h3 className='font-bold text-sm md:text-lg w-full text-center '>Step {number}</h3>
      <p className='w-full text-center'>{step}</p>
    </div>
  )
}
