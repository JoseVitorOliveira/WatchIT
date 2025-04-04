import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import tmdbApi, { movieType } from "../../api/tmdb-api";
import SlideItem from "./SlideItem";

export default function Slide() {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params: { page: 1 },
        });

        if (!response || !response.results) {
          console.error("Invalid API response:", response);
          return;
        }

        setMovieItems(response.results.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="mb-12">
      {movieItems.length > 0 ? (
        <Swiper
          key={movieItems.length}
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          loop={movieItems.length >= 5}
        >
          {movieItems.map((item) => (
            <SwiperSlide key={item.id}>
              <SlideItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-center h-64 text-gray-500">
          No movies available
        </div>
      )}
    </section>
  );
}
