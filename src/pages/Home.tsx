import img from "../assets/images/piatto-vegetariano-3.jpg";
import { useState } from "react";
// ** Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipesContainer from "../components/RecipesContainer";


export default function Home() {

  const [query, setQuery] = useState('') 

  return (
    <>
      <Navbar value={query} onChange={setQuery} />
      <div className="px-4 mt-2 flex flex-col items-center justify-center">
        <Hero backgroundImage={img} />
        <RecipesContainer query={query}/>
      </div>
    </>
  );
}
