import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      setFavoriteCount(favorites.length);
    };

    updateCount();

    const interval = setInterval(updateCount, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/30 backdrop-blur-md shadow-lg sticky top-0 z-50 px-6 py-4 flex justify-between items-center">

      <h1 className="logo-text text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        🍴 Gourmet Galaxy
      </h1>

      <div className="flex gap-4">

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          🏠 Home
        </Link>

        <Link
          to="/favorites"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
        >
          ❤️ Favorites ({favoriteCount})
        </Link>

      </div>

    </div>
  );
};

export default Navbar;