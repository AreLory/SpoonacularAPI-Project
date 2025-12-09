import React, { useState } from "react";
import { Link } from "react-router";

const RecipeCard = ({image, title, id}: {image:string, title:string, id:string}) => {
  
  const recipeData = {
    image: image,
    title: title,
    id: id,
  };

  return (
    <div className="max-w-sm mx-auto p-4 flex flex-col items-center justify-center">
  <div className="bg-secondary rounded-lg shadow-lg overflow-hidden h-[340px] w-[250px]">
    
    <div className="h-48">
      <img
        src={recipeData.image}
        alt="Recipe"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="min-h-[140px] p-4"> 
      
      <div className="min-h-[100px] flex justify-center items-center text-center px-2">
        <h3 className="text-xl font-semibold text-quaternary">
          {recipeData.title}
        </h3>
      </div>

      <div className="h-fit flex justify-center min-h-[40px]">
        <Link
          className="bg-tiertiary rounded-lg w-24 h-8 flex items-center justify-center text-white font-bold hover:border-2 hover:border-quaternary hover:text-quaternary"
          to={`/recipe/${recipeData.id}`}
        >
          Let's cook!
        </Link>
      </div>

    </div>
  </div>
</div>

  );
};

export default RecipeCard;