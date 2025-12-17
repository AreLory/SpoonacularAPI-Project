import img from "../assets/images/piatto-vegetariano-3.jpg";
import { useState } from "react";
// ** Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipesContainer from "../components/RecipesContainer";

import type { IFilters } from "../types/IFilters";


export default function Home() {
  const [query, setQuery] = useState('') 
  const [filters, setFilters ]= useState<IFilters>({})
  
  const updateFilter = <K extends keyof IFilters>(
    key: K,
    value: IFilters[K]
  ) => {
    setFilters((prev:any) => ({
      ...prev,
      [key]: value,
    }));
  };
  
  return (
    <>
      <Navbar query={query} onInputChange={setQuery} filters={filters} onFilterChange={updateFilter}/>
      <div className="px-4 mt-2 flex flex-col items-center justify-center">
        <Hero backgroundImage={img} />
        <RecipesContainer query={query} filters={filters}/>
      </div>
    </>
  );
}
