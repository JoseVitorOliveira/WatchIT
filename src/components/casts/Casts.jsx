import { useState, useEffect } from "react";
import tmdbApi from "../../api/tmdb-api";
import apiConfig from "../../api/api-config";

export default function Casts({ category, id }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const apiCategory = category === "movies" ? "movie" : "tv";
      const response = await tmdbApi.credits(apiCategory, id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);

  return (
    <div className="px-4">
      <h1 className="text-white text-base font-bold mb-4 md:text-lg">Casts</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-9 gap-3 lg:gap-0">
        {casts.map((cast) => (
          <div key={cast.id}>
            <img
              src={apiConfig.w500Image(cast.profile_path)}
              alt={cast.name}
              className="w-24 h-40 mb-2"
            />
            <h3 className="text-white text-[9px] font-semibold md:text-xs">
              {cast.name}
            </h3>
            <p className="text-gray-400 text-[9px] md:text-xs w-24">
              {cast.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
