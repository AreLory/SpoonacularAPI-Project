import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import axios from "axios";


//!Ricorda di togliere
import { fakeRecipe, fakeIngredients } from '../fakeRecipe';
// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IngredientList from '../components/IngredientsList';

interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  extendedIngredients: any[];
  summary: string;
}

export default function Recipe() {
//   const params = useParams();
//   const {id} = params;

//   const [recipe, setRecipe] = useState<Recipe|null>(null);
//   const apiKey = import.meta.env.VITE_API_KEY;

//   useEffect(() => {
//   async function fetchRecipeDetails(recipeId: string | undefined){
//     const resp = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
//     setRecipe(resp.data);
//   } fetchRecipeDetails(id);
// }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

// const {
//     title,
//     image,
//     servings,
//     readyInMinutes,
//     extendedIngredients,
//     summary,
//   } = recipe



  const {
    id,
    title,
    image,
    servings,
    readyInMinutes,
    summary,
  } = fakeRecipe
// {ingredient.name.toUpperCase()} | {ingredient.measures.metric.amount.toFixed()} {ingredient.measures.metric.unitShort}
  

  return (
    <div className='text-amber-50'>
      <Navbar />
      <Hero backgroundImage={image}
      title1={title}
      subtitle={`Pronto in ${readyInMinutes} minuti`}/>
      <div className='border-4 border-amber-600 flex justify-center md:justify-end'>
      <IngredientList key={id}/>
      </div>
    </div>
  )
}
