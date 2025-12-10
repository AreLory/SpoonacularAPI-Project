import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import axios from "axios";

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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

const fakeRecipe = {
    id: 12345,
    title: "Piatto che di sicuro non ha cucinato Giorgia",
    image: "/src/assets/images/piatto-vegetariano-2.jpg",
    servings: 4,
    readyInMinutes: 30,
    extendedIngredients: [],
    summary: "<p>This is a <strong>fake</strong> recipe summary for demonstration purposes.</p>",
  };

  const {
    id,
    title,
    image,
    servings,
    readyInMinutes,
    extendedIngredients,
    summary,
  } = fakeRecipe

  return (
    <div className='text-amber-50'>
      <Navbar />
      <Hero backgroundImage={image}
      title1={title}
      subtitle={`Pronto in ${readyInMinutes} minuti`}/>
      
      <p className='text-amber-50'>The id is: {id}</p>
      <p>and recipeId is: {id}</p>
      <p>Title is: {title}</p>
      <p>Image is: {image}</p>
      <p>Servings: {servings}</p>
      <p>Ready in minutes: {readyInMinutes}</p>
      < div dangerouslySetInnerHTML={{ __html: summary }}></div>
    </div>
  )
}
