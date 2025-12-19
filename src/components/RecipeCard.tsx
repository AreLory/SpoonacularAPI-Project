import { Link } from "react-router";

import type { IHomeRecipe } from "../types/IHome";

const RecipeCard = ({ image, title, id }: IHomeRecipe) => {
  return (
    <div className="w-full max-w-xs px-2 sm:px-1 py-2">
      <div
        className="
    bg-secondary rounded-lg shadow-lg overflow-hidden w-full 
    group hover:shadow-xl transition-shadow duration-300
  "
      >
        <div className="h-40 sm:h-48 w-full overflow-hidden">
          <img
            src={image}
            alt="Recipe"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative h-24 sm:h-[120px] p-3 sm:p-4 overflow-hidden">
          <div
            className="p-2 sm:p-4
          absolute inset-0
          flex items-center justify-center text-center
          transition-all duration-300
          group-hover:-translate-y-full
          group-hover:opacity-0
        "
          >
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-quaternary line-clamp-3">{title}</h3>
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
            bg-tiertiary rounded-lg px-4 sm:px-6 py-2
            flex items-center justify-center
            text-white font-semibold text-sm
            hover:border-2 hover:border-quaternary
            hover:text-quaternary transition-all
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
