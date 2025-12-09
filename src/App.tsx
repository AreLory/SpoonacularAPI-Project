import { useState } from "react";

import { Route, BrowserRouter, Routes } from "react-router";
// Pages
import Home from "./pages/Home";


function App() {
  //todo: Routes
  //todo: Home Page
  //todo: chiamata API per immagine e titolo della ricetta in home page
  //todo: API call w query parameter
  //todo: components
  





  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
