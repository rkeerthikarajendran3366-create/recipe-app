import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;