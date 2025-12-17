import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import DOMPuirfy from "dompurify";

// ** Components
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import IngredientList from "../components/IngredientsList";
import StepsList from "../components/StepsList";
import RecipesContainer from "../components/RecipesContainer";
import Loader from "../components/Loader";

// ** Interfaces
import type { IRecipe } from "../types/IRecipe";

export default function Recipe() {
  const params = useParams();
  const { id } = params;

  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  async function fetchRecipeDetails(recipeId: string | undefined) {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    );
    setRecipe(resp.data);
  }

  useEffect(() => {
    fetchRecipeDetails(id);
  }, [id]);

  if (!recipe) {
    return <Loader />;
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
  }: IRecipe = recipe;

  const stripHtml = (html: any) => html.replace(/<[^>]*>/g, "");

  return (
    <>
      <Navbar value={query} onChange={setQuery} />
      <div className="text-amber-50 flex flex-col items-center justify-center px-6">
        {/* Sezione ricetta */}

        <div className=" flex justify-start md:justify-end flex-col md:flex-row h-fit mt-3 md:mt-12">
          <div className="bg-tiertiary w-full h-fit flex flex-col justify-center pr-8">
            <Banner
              key={""}
              image={image}
              readyInMinutes={readyInMinutes}
              cookingMinutes={cookingMinutes}
              preparationMinutes={preparationMinutes}
              title={title}
            />
            <div className="flex flex-col bg-primary w-full h-fit p-4 mt-2 rounded-lg">
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
            {analyzedInstructions.map((instuction) => (
              <StepsList
                key={instuction.name}
                name={instuction.name}
                steps={instuction.steps}
              />
            ))}
          </div>
          {/* Ingredients List */}
          <IngredientList
            key={"id"}
            servings={servings}
            ingredients={extendedIngredients}
          />
        </div>
        <p className="text-2xl text-mywhite w-full text-center mt-4">
          Other recipes
        </p>
        <RecipesContainer query={query} />
      </div>
    </>
  );
}
