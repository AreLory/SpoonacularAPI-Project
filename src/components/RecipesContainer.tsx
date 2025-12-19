import axios from "axios";
import { useEffect, useRef, useState } from "react";

// ** Interfeces
import type { IHomeRecipe } from "../types/IHome";
import type { IRecipesContainerProps } from "../types/IFilters";
// ** Components
import RecipeCard from "./RecipeCard";
import Loader from "./Loader";
// ** Function
import { buildQueryParams } from "../api/buildQueryParams";

export default function RecipesContainer({
  query,
  filters,
}: IRecipesContainerProps) {
  const [recipesList, setRecipesList] = useState<IHomeRecipe[]>();
  const apiKey = import.meta.env.VITE_API_KEY2;
  const scrollRef = useRef<HTMLDivElement>(null);

  async function getRecipe() {
    try {
      const queryParams = buildQueryParams(query, filters);
      console.log(queryParams)
      const resp = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?number=20&diet=vegetarian&${queryParams}&apiKey=${apiKey}`
      );
      setRecipesList(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    if (!query.trim()) return;

    const timeout = setTimeout(() => {
      getRecipe();
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, filters]);

  if (!recipesList) {
    return <Loader />;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center mt-10 w-full max-w-7xl"
      ref={scrollRef}
    >
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
