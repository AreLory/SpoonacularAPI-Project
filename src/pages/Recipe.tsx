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
import type { IFilters } from "../types/IFilters";

export default function Recipe() {
  const params = useParams();
  const { id } = params;

  const [query, setQuery] = useState("");
  const [filters, setFilters ]= useState<IFilters>({})
    
    const updateFilters = <K extends keyof IFilters>(
      key: K,
      value: IFilters[K]
    ) => {
      setFilters((prev:any) => ({
        ...prev,
        [key]: value,
      }));
    };



  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY2;
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
      <Navbar query={query} onInputChange={setQuery} filters={filters} onFilterChange={updateFilters} />
      <div className="text-amber-50 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6">
        {/* Sezione ricetta */}

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 h-fit mt-3 md:mt-8 w-full max-w-7xl">
          <div className="bg-tiertiary w-full h-fit flex flex-col justify-center md:pr-4 lg:pr-8 rounded-lg md:rounded-xl overflow-hidden">
            <Banner
              key={""}
              image={image}
              readyInMinutes={readyInMinutes}
              cookingMinutes={cookingMinutes}
              preparationMinutes={preparationMinutes}
              title={title}
            />
            <div className="flex flex-col bg-primary w-full h-fit p-3 sm:p-4 md:p-6 mt-2 rounded-lg">
              <h6 className="w-full text-center text-lg sm:text-xl font-extrabold mb-3">
                SUMMARY
              </h6>
              <div className="text-sm sm:text-base leading-relaxed"
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
        <p className="text-xl sm:text-2xl text-mywhite w-full text-center mt-6 md:mt-8 font-semibold">
          Other recipes
        </p>
        <RecipesContainer query={query} filters={filters} />
      </div>
    </>
  );
}
