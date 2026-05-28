const Filter = ({ setCategory }) => {
  return (
    <select
      onChange={(e) =>
        setCategory(e.target.value)
      }
      className="p-4 rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/20"
    >
      <option className="text-black">
        All Categories
      </option>

      <option
        value="Seafood"
        className="text-black"
      >
        Seafood
      </option>

      <option
        value="Chicken"
        className="text-black"
      >
        Chicken
      </option>

      <option
        value="Dessert"
        className="text-black"
      >
        Dessert
      </option>

      <option
        value="Vegetarian"
        className="text-black"
      >
        Vegetarian
      </option>
    </select>
  );
};

export default Filter;