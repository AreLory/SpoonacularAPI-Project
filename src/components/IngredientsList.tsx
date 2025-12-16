import noImg from '../assets/images/noImg.png'

import type { IIngredient } from "../types/IRecipe";

export default function IngredientList({servings, ingredients}: {servings:number, ingredients: IIngredient[]}) {

  if (!ingredients) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="bg-tiertiary w-full md:w-[450px] flex justify-center">
      <div className=" flex flex-col w-[280px] md:w-[340px] justify-center">
        <h1 className="text-2xl md:text-4xl text-center">Ingredients</h1>
        <h3 className="text-center">for {servings} servings</h3>
        <div className="flex flex-col gap-2">
          {ingredients.map((ingredient) => (
            <div
              className="border border-quaternary rounded-full flex items-center p-1"
            >
              <div className="flex-none flex items-center justify-center p-1">
                <img
                  className="border border-quaternary rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
                  src={ingredient.image === 'no.jpg' ? noImg :`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`} 
                  alt={ingredient.name || 'No Image'}
                />
              </div>

              <div className="flex-1 text-sm text-center h-10 flex flex-col justify-center px-3">
                <h3 className="font-extrabold">
                  {ingredient.name.toUpperCase()}
                </h3>
                <p>
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
