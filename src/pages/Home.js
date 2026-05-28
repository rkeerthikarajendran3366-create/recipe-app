import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

import {
  getMeals,
  searchMeals,
  filterByCategory,
} from "../services/api";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] =
  useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("");

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {

  setLoading(true);

  const data = await getMeals();

  setMeals(data);

  setLoading(false);
};
   

  useEffect(() => {
    const fetchSearch = async () => {
      if (search === "") {
        fetchMeals();
      } else {
        const data =
          await searchMeals(search);

        setMeals(data || []);
      }
    };

    fetchSearch();
  }, [search]);

  useEffect(() => {
    const fetchCategory = async () => {
      if (category === "") {
        fetchMeals();
      } else {
        const data =
          await filterByCategory(category);

        setMeals(data || []);
      }
    };

    fetchCategory();
  }, [category]);
if (loading) {
  return (
    <h1 className="text-white text-4xl text-center mt-20 animate-pulse">

      Loading Delicious Recipes 🍔

    </h1>
  );
}
  return (
   <div className="p-8 max-w-7xl mx-auto">

  <div className="text-center mb-10">

    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">

      Discover Delicious Recipes 🍕
    </h1>

    <p className="text-gray-300 mt-4 text-lg">

      Search, explore and cook amazing meals from around the world 🌎

    </p>

  </div>

    <div className="flex flex-col md:flex-row gap-4 mb-10">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter setCategory={setCategory} />

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {meals.length > 0 ? (

  meals.map((meal) => (
    <RecipeCard
      key={meal.idMeal}
      meal={meal}
    />
  ))

) : (

  <h1 className="text-white text-3xl">

    No recipes found 😢

  </h1>

)}
          

      </div>

    </div>
  );
};

export default Home;