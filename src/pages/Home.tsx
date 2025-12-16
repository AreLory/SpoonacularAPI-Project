import img from '../assets/images/piatto-vegetariano-3.jpg'

// ** Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipesContainer from '../components/RecipesContainer';

export default function Home() {
  

  return (
    <div className="px-4 flex flex-col items-center justify-center">
      <Navbar /> 
      <Hero backgroundImage={img}/>
      <RecipesContainer />
    </div>

    
  );
}
