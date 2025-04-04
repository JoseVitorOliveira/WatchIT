import React from "react";
import apiConfig from "../../api/api-config";
import { Link } from "react-router-dom";

export default function SlideItem({ item }) {
  const background = apiConfig.largeImage(
    item.backdrop_path || item.poster_path
  );

  return (
    <article
      className="relative w-full py-16 px-6 h-[55vh] md:min-h-screen font-display md:py-24 bg-no-repeat bg-top bg-[length:auto_100%] sm:bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-6 text-white md:text-7xl">
            {item.title}
          </h2>
          <p className="text-[10px] font-semibold mb-6 text-white md:text-base lg:text-lg">
            {item.overview}
          </p>
          <div>
            <Link
              to={`/movie/${item.id}`}
              className="bg-blue-600 text-xs font-bold text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white transition duration-300 md:text-lg"
            >
              More Info
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center flex-1">
          <img
            src={apiConfig.w500Image(item.poster_path)}
            alt={item.title}
            className="w-96 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </article>
  );
}
