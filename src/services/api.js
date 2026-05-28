import axios from "axios";

const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

export const getMeals = async () => {
  const response = await axios.get(
    `${BASE_URL}/search.php?s=`
  );

  return response.data.meals;
};

export const searchMeals = async (
  query
) => {
  const response = await axios.get(
    `${BASE_URL}/search.php?s=${query}`
  );

  return response.data.meals;
};

export const filterByCategory =
  async (category) => {
    const response = await axios.get(
      `${BASE_URL}/filter.php?c=${category}`
    );

    return response.data.meals;
  };

export const getMealDetails =
  async (id) => {
    const response = await axios.get(
      `${BASE_URL}/lookup.php?i=${id}`
    );

    return response.data.meals[0];
  };