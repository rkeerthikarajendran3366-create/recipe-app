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
        window.dispatchEvent(new Event("storage"));
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
                            <RecipeCard meal={meal} />

                            <button
                                onClick={() =>
                                    removeFavorite(meal.idMeal)
                                }
                                className="bg-red-500 text-white px-4 py-2 rounded mt-2 w-full"
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