import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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

        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </BrowserRouter>
  );
}

export default App;