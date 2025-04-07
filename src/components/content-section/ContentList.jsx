import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbApi, { category } from "../../api/tmdb-api";
import MovieCard from "./ContentCard";
import ContentCardSkeleton from "./ContentCardSkeleton";

export default function ContentList(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      let response = null;
      const params = {};

      try {
        if (props.type !== "similar") {
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getMoviesList(props.type, { params });
              break;
            default:
              response = await tmdbApi.getTvList(props.type, { params });
          }
        } else {
          response = await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.results);
      } catch (err) {
        console.error("Erro ao carregar lista:", err);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [props.category, props.id, props.type]);

  return (
    <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
      {loading
        ? [...Array(7)].map((_, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <ContentCardSkeleton />
            </SwiperSlide>
          ))
        : items.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
