import { Route, BrowserRouter, Routes } from "react-router";
// Pages
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";

function App() {
  //todo: Finish Routes 
  //todo: Loader Gif
  //todo: Login Page
  //todo: Sidebar w queries parameter 
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
