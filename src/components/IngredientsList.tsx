import noImg from '../assets/images/noImg.png'

import type { IIngredient } from "../types/IRecipe";

import Loader from './Loader';

export default function IngredientList({servings, ingredients}: {servings:number, ingredients: IIngredient[]}) {

  if (!ingredients) {
    return <Loader/>;
  }
  

  return (
    <div className="bg-secondary h-fit w-full md:w-auto md:min-w-[320px] lg:min-w-[400px] flex justify-center p-3 sm:p-4 rounded-lg md:rounded-xl">
      <div className="flex flex-col w-full sm:max-w-xs md:max-w-sm justify-center">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-1">Ingredients</h1>
        <h3 className="text-center text-sm sm:text-base mb-3">for {servings} servings</h3>
        <div className="flex flex-col gap-2">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="border border-quaternary rounded-full flex items-center p-1 sm:p-2 hover:bg-tiertiary/30 transition"
            >
              <div className="flex-none flex items-center justify-center p-1">
                <img
                  className="border border-quaternary rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover"
                  src={ingredient.image === 'no.jpg' ? noImg :`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`} 
                  alt={ingredient.name || 'No Image'}
                />
              </div>

              <div className="flex-1 text-xs sm:text-sm md:text-base text-center h-8 sm:h-10 flex flex-col justify-center px-2 sm:px-3">
                <h3 className="font-extrabold line-clamp-1">
                  {ingredient.name.toUpperCase()}
                </h3>
                <p className="text-xs">
                  {ingredient.measures.metric.amount.toFixed()}
                  {ingredient.measures.metric.unitShort}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
