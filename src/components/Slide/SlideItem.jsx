import React from "react";
import apiConfig from "../../api/api-config";
import { Link } from "react-router-dom";

// isActive controls the fade-in animations
export default function SlideItem({ item, isActive }) {
  const background = apiConfig.largeImage(
    item.backdrop_path || item.poster_path
  );

  return (
    <article
      className="relative w-full py-16 px-6 h-[50vh] md:h-[65vh] lg:min-h-screen md:py-24 bg-no-repeat bg-top bg-[length:auto_100%] sm:bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 p-6">
          <h2
            className={`text-3xl font-bold mb-6 text-white md:text-7xl ${
              isActive
                ? "opacity-0 animate-fade-down animation-delay-0"
                : "opacity-0"
            }`}
          >
            {item.title}
          </h2>

          <p
            className={`text-[11px] font-semibold mb-6 text-white md:text-base lg:text-lg ${
              isActive
                ? "opacity-0 animate-fade-down animation-delay-200"
                : "opacity-0"
            }`}
          >
            {item.overview}
          </p>

          <div
            className={`${
              isActive
                ? "opacity-0 animate-fade-down animation-delay-400"
                : "opacity-0"
            }`}
          >
            <Link
              to={`/movies/${item.id}`}
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

      <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent"></div>
    </article>
  );
}
