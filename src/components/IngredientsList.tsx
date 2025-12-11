import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

interface UnitValue{
  unit: string,
  value:number
}

interface Amount {
  metric:UnitValue,
  us: UnitValue
}

interface OneIngredient {
  amount: Amount
  image: string;
  name: string;
}

export default function IngredientList() {
  const params = useParams();
  const { id } = params;

  const [ingredients, setIngredients] = useState<OneIngredient[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchIngredients(recipeId: string | undefined) {
      const resp = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${apiKey}`
      );
      setIngredients(resp.data.ingredients);
    }
    fetchIngredients(id);
  }, [id]);

  if (!ingredients) {
    return <div>Loading...</div>;
  }
  console.log(ingredients)
  return (
    <div className="bg-tiertiary w-full md:w-[400px] flex justify-center">
      <div className=" flex flex-col w-[280px] md:w-[340px] justify-center">
        <h1 className="text-2xl md:text-4xl text-center">Ingredients</h1>
        <div className="flex flex-col gap-2">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="border border-quaternary rounded-full flex items-center p-1"
            >
              {ingredient.image?<div className="flex-none flex items-center justify-center p-1">
                <img
                  className="border border-quaternary rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
                  src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
              </div> : <></>}

              <div className="flex-1 text-sm text-center h-10 flex flex-col justify-center px-3">
                <h3 className="font-extrabold">
                  {ingredient.name.toUpperCase()}
                </h3>
                <p>
                  {ingredient.amount.metric.value.toFixed()}{" "}
                  {ingredient.amount.metric.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
