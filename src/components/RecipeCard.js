import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeCard = ({
  meal,
  showFavoriteButton = true,
}) => {

  const addToFavorites = () => {

    let favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    const exists = favorites.some(
      (item) => item.idMeal === meal.idMeal
    );

    if (exists) {
      toast.info(
        "Already in Favorites ❤️"
      );
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

    toast.success(
      "Added to Favorites ❤️"
    );
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:scale-105 transition duration-300">

      <Link to={`/recipe/${meal.idMeal}`}>

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-2xl font-bold text-white">
            {meal.strMeal}
          </h2>

          <p className="text-gray-300 mt-2">
            {meal.strCategory}
          </p>

        </div>

      </Link>

      {showFavoriteButton && (
        <button
          onClick={addToFavorites}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white w-full py-3 font-bold"
        >
          ❤️ Add to Favorites
        </button>
      )}

    </div>
  );
};

export default RecipeCard;