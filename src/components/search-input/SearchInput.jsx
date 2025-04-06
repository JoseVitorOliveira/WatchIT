import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput({ category, keyword }) {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState(keyword || "");

  const goToSearch = useCallback(() => {
    if (searchKeyword.trim().length > 0) {
      navigate(`/${category}/search/${searchKeyword}`);
    }
  }, [searchKeyword, category, navigate]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  const placeholderText =
    category === "movies" ? "Search Movies..." : "Search TV Shows...";

  return (
    <div className="flex justify-center items-center mt-5 px-4">
      <input
        type="text"
        placeholder={placeholderText}
        className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyUp={handleKeyUp}
      />

      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
        onClick={goToSearch}
      >
        Search
      </button>
    </div>
  );
}
