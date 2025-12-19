import type { IStep } from "../types/IRecipe"

export default function Step({number, step}: IStep) {
  return (
    <div className='border-t border-primary p-2 sm:p-3 md:p-4'>
      <h3 className='font-bold text-xs sm:text-sm md:text-base w-full text-center mb-1'>Step {number}</h3>
      <p className='w-full text-center text-xs sm:text-sm leading-relaxed'>{step}</p>
    </div>
  )
}
