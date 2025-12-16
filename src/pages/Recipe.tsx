import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import DOMPuirfy from "dompurify";

// Components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import IngredientList from "../components/IngredientsList";
import StepsList from "../components/StepsList";

// Interfaces
import type { IRecipe } from "../types/IRecipe";

// import { example } from "../fakeRecipe";

export default function Recipe() {
  const params = useParams();
  const { id } = params;

  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchRecipeDetails(recipeId: string | undefined) {
      const resp = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );
      setRecipe(resp.data);
    }
    fetchRecipeDetails(id);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const {
    title,
    image,
    servings,
    readyInMinutes,
    preparationMinutes,
    cookingMinutes,
    analyzedInstructions,
    extendedIngredients,
    summary,
  }:IRecipe = recipe;
  console.log(recipe)
  const stripHtml = (html: any) => html.replace(/<[^>]*>/g, "");

  return (
    <div className="text-amber-50">
      <Navbar />
      {/* Sezione ricetta */}
     
      <div className=" flex justify-start md:justify-end flex-col md:flex-row h-fit mt-3 md:mt-0">
        <div className="bg-tiertiary w-full h-fit flex flex-col justify-center p-2">
           <Banner key={''} image={image} readyInMinutes={readyInMinutes} cookingMinutes={cookingMinutes} preparationMinutes={preparationMinutes} title={title}/>
          <div className="flex flex-col bg-primary w-full h-fit p-2 mt-2 rounded-lg">
            <h6 className="w-full text-center text-xl font-extrabold">
              SUMMARY
            </h6>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPuirfy.sanitize(stripHtml(summary)),
              }}
            />
          </div>
          
          {/* Step by step */}
            {analyzedInstructions.map(instuction=><StepsList key={instuction.name} name={instuction.name} steps={instuction.steps}/>)}  

        </div>
        {/* Ingredients List */}
        <IngredientList key={id} servings={servings} ingredients={extendedIngredients}/>
      </div>
    </div>
  );
}
