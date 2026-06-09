import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealDetails } from "../services/api";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);

  const addToFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some(
      (item) => item.idMeal === meal.idMeal
    );

    if (exists) {
      toast.info("Recipe already in favorites ❤️");
      return;
    }

    favorites.push(meal);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    window.dispatchEvent(
      new Event("favoritesUpdated")
    );

    toast.success("Added to Favorites ❤️");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMealDetails(id);
      setMeal(data);
    };

    fetchData();
  }, [id]);

  if (!meal) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="p-5 max-w-5xl mx-auto">

      <div className="mb-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          ← Back
        </button>
      </div>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />

      <h1 className="text-4xl font-bold text-center mt-5">
        {meal.strMeal}
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Category: {meal.strCategory}
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Instructions
        </h2>

        <p className="leading-8">
          {meal.strInstructions}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={addToFavorites}
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-lg"
        >
          ❤️ Add to Favorites
        </button>

        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg"
        >
          ▶ Watch on YouTube
        </a>

      </div>

    </div>
  );
};

export default RecipeDetails;