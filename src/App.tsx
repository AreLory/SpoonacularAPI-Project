import { Route, HashRouter, Routes } from "react-router";
// Pages
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
