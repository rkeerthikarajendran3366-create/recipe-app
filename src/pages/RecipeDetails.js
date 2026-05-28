import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getMealDetails } from "../services/api";

const RecipeDetails = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

 useEffect(() => {

  const fetchData = async () => {

    const data = await getMealDetails(id);

    setMeal(data);
  };

  fetchData();

}, [id]);



  if (!meal) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5">

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-md mx-auto rounded-lg"
      />

      <h1 className="text-4xl font-bold text-center mt-5">
        {meal.strMeal}
      </h1>

      <p className="text-center text-gray-500 mt-2">
        {meal.strCategory}
      </p>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">
          Instructions
        </h2>

        <p className="mt-2 leading-8">
          {meal.strInstructions}
        </p>
      </div>

      <a
        href={meal.strYoutube}
        target="_blank"
        rel="noreferrer"
        className="bg-red-500 text-white px-5 py-3 inline-block mt-5 rounded-lg"
      >
        Watch on YouTube ▶
      </a>

    </div>
  );
};

export default RecipeDetails;