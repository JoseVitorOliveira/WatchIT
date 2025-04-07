import { useState, useEffect } from "react";
import tmdbApi from "../api/tmdb-api";
import apiConfig from "../api/api-config";

import { useParams } from "react-router-dom";
import Casts from "../components/casts/Casts";
import ContentList from "../components/content-section/ContentList";
import { category as categoryType } from "../api/tmdb-api";

export default function Details() {
  const { id } = useParams();

  const [content, setContent] = useState(null);

  const category = window.location.pathname.split("/")[1];

  const contentListCategory =
    category === "movies" ? categoryType.movie : categoryType.tv;

  useEffect(() => {
    const getDetail = async () => {
      const apiCategory = category === "movies" ? "movie" : "tv";
      const response = await tmdbApi.detail(apiCategory, id, { params: {} });
      setContent(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {content && (
        <div className="relative md:flex md:items-start md:gap-4 bg-dark-gray">
          <div
            style={{
              backgroundImage: `url(${apiConfig.largeImage(
                content.backdrop_path || content.poster_path
              )})`,
            }}
            className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-no-repeat bg-center z-0"
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
          </div>

          <div className="md:px-4 w-full relative z-10 md:flex md:mt-16 md:ml-4 lg:pl-32">
            <div
              className="w-[200px] h-[350px] lg:w-[350px] lg:h-[550px] rounded-4xl bg-cover bg-center hidden md:block md:flex-shrink-0 mt-26"
              style={{
                backgroundImage: `url(${apiConfig.largeImage(
                  content.backdrop_path || content.poster_path
                )})`,
              }}
            ></div>
            <main className="md:flex-1 md:w-full md:min-w-0">
              <section className="relative md:min-h-[50vh]">
                <div className="flex flex-col justify-center gap-6 px-4 py-16 md:py-0 md:pt-16">
                  <div className="mt-10 text-left">
                    <h1 className="text-white text-2xl md:text-5xl font-bold md:w-120">
                      {content.title || content.name}
                    </h1>
                    <span className="text-[10px] font-base text-white md:text-base">
                      (
                      {content.release_date?.slice(0, 4) ||
                        content.first_air_date?.slice(0, 4)}
                      )
                    </span>
                  </div>
                  <div className="">
                    {content.genres &&
                      content.genres.slice(0, 3).map((genre, index) => (
                        <span
                          key={index}
                          className="mr-2 text-[7.5px] px-3.5 py-1 border-2 bg-dark-gray border-white text-white font-semibold rounded-4xl md:text-sm"
                        >
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <p className="text-xs font-normal text-white md:text-base lg:w-3/4">
                    {content.overview}
                  </p>
                </div>
              </section>
              <section className="bg-dark-gray">
                <Casts category={category} id={id} />
              </section>
              <section className="px-4 pt-6 bg-dark-gray">
                <h1 className="text-white text-base font-bold md:text-lg">
                  Similar
                </h1>
                <ContentList
                  category={contentListCategory}
                  type={"similar"}
                  id={id}
                />
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
}
