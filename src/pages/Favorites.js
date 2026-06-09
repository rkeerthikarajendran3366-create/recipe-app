import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (meal) => meal.idMeal !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    window.dispatchEvent(
      new Event("favoritesUpdated")
    );
  };

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-center mb-8">
        ❤️ My Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          No favorite recipes yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {favorites.map((meal) => (
            <div
              key={meal.idMeal}
              className="relative"
            >
              <RecipeCard
                meal={meal}
                showFavoriteButton={false}
              />

              <button
                onClick={() =>
                  removeFavorite(meal.idMeal)
                }
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold mt-3"
              >
                ❌ Remove Favorite
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Favorites;