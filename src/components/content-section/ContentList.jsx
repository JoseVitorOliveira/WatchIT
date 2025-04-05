import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import tmdbApi, { category } from "../../api/tmdb-api";
import MovieCard from "./ContentCard";

export default function ContentList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

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
    };
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div className="bg-dark-gray font-bold text-white pt-5 pb-12">
      <div>
        <Swiper grabCursor={true} spaceBetween={15} slidesPerView={"auto"}>
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto"
              style={{
                marginRight: "15px",
              }}
            >
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
