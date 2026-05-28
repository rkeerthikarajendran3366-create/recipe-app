const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search delicious recipes..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20 outline-none placeholder:text-gray-300"
    />
  );
};

export default SearchBar;