import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    // <div className="sticky top-0 z-20 bg-[#FFFDF8] px-5 py-3">
    <div className="bg-[#FFFDF8] px-5 py-3">
      <button
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          shadow-sm
          transition
          hover:shadow-md
        "
      >
        <FiSearch className="text-xl text-gray-500" />

        <span className="text-gray-500">
          Search food & drinks
        </span>
      </button>
    </div>
  );
}

export default SearchBar;