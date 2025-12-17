import { useState } from "react";

import { Route, BrowserRouter, Routes } from "react-router";
// Pages
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
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
      <Route path="/login/" element={<Login/>}/>
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
