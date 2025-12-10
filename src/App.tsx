import { useState } from "react";

import { Route, BrowserRouter, Routes } from "react-router";
// Pages
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";

function App() {
  //todo: Routes
  //todo: 404 Page
  //todo: Login Page
  //todo: Recipe Page => Display recipe details component 
  //todo: API call w query parameter

  //todo: Hero section border prettier
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login/" element={<Login/>}/>
      <Route path="/recipe/:id" element={<Recipe/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
