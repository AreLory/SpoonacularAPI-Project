import { Link } from "react-router";

import type { IHomeRecipe } from "../types/IHome";

const RecipeCard = ({ image, title, id }: IHomeRecipe) => {
  return (
    <div className="max-w-sm mx-auto p-4 flex flex-col items-center justify-center">
      <div
        className="
    bg-secondary rounded-lg shadow-lg overflow-hidden w-[250px] 
    group
  "
      >
        <div className="h-48">
          <img
            src={image}
            alt="Recipe"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[120px] p-4 overflow-hidden">
          <div
            className="p-4
          absolute inset-0
          flex items-center justify-center text-center
          transition-all duration-300
          group-hover:-translate-y-full
          group-hover:opacity-0
        "
          >
            <h3 className="text-xl font-semibold text-quaternary">{title}</h3>
          </div>
          <div
            className="
          absolute inset-0
          flex items-center justify-center
          translate-y-full opacity-0
          transition-all duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <Link
              className="
            bg-tiertiary rounded-lg w-28 h-10
            flex items-center justify-center
            text-white font-bold
            hover:border-2 hover:border-quaternary
            hover:text-quaternary
          "
              to={`/recipe/${id}`}
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
