import axios from "axios";
import { useEffect, useState } from "react";
// ** Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipesList, setRecipesList] = useState<any[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  // async function getRecipe() {
  //   try {
  //     const resp = await axios.get(
  //       `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${apiKey}`
  //     );
  //     console.log(resp.data.results)
  //     setRecipesList(resp.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getRecipe();
  // }, []);

  return (
    <div className="px-4">
      <Navbar /> 
      <Hero
        backgroundImage="\src\assets\images\piatto-vegetariano-2.jpg"
        beforeTitle="Hundreds of"
        title1="Vegetarian"
        title2="Recipes"
        subtitle="for you"
      />
      {/* Spacer */}
      <div className="h-6"></div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-10">
        {recipesList.map((recipe: any) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
        <RecipeCard
            key={'ok'}
            title={'Titolo di esempio'}
            image={"/src/assets/images/piatto-vegetariano-2.jpg"}
            id={'12345'}
          />
      </div>
      {/* Spacer */}
      <div className="h-20"></div> 
    </div>
  );
}
