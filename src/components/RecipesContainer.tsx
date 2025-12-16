import axios from "axios";
import { useEffect, useState } from "react";

// ** Interfeces
import type { IHomeRecipe } from "../types/IHome";

// ** Components
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";

export default function RecipesContainer() {
  const [recipesList, setRecipesList] = useState<IHomeRecipe[]>();
  const apiKey = import.meta.env.VITE_API_KEY2;

  async function getRecipe() {
    try {
      const resp = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=20&diet=vegetarian&apiKey=${apiKey}`
      );
      console.log(resp.data.results);
      setRecipesList(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipesList) {
    return <Loader/>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center mt-10 w-full max-w-[1280px]">
      {recipesList.map((recipe: any) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          id={recipe.id}
        />
      ))}
    </div>
  );
}
