import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { movieType, tvType } from "../../api/tmdb-api";
import SearchInput from "../search-input/SearchInput";
import ContentCard from "../content-section/ContentCard";
import ContentCardSkeleton from "../content-section/ContentCardSkeleton";
import headerBg from "../../assets/posters-bg.jpg";

export default function ContentGrid({ category }) {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { keyword } = useParams();
  const apiCategory = category === "movies" ? "movie" : "tv";

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      setError(false);
      let response = null;
      const params = { page: 1 };

      try {
        if (keyword === undefined) {
          switch (apiCategory) {
            case "movie":
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
              break;
            case "tv":
              response = await tmdbApi.getTvList(tvType.popular, { params });
              break;
            default:
              break;
          }
        } else {
          params.query = keyword;
          response = await tmdbApi.search(apiCategory, { params });
        }

        const results = response.results || [];
        setAllItems(results);
        setItems(results.slice(0, 15));
        setPage(1);
        setTotalPage(response.total_pages);
      } catch (err) {
        console.error("Error fetching content grid:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, [keyword, category, apiCategory]);

  if (error) {
    return (
      <ErrorPage message="Failed to load content. Please try again later." />
    );
  }

  const loadMore = async () => {
    const currentCount = items.length;
    const nextItems = allItems.slice(currentCount, currentCount + 5);

    if (nextItems.length === 5 || (nextItems.length > 0 && page >= totalPage)) {
      setItems((prev) => [...prev, ...nextItems]);
    } else if (page < totalPage) {
      const nextPage = page + 1;
      const params = { page: nextPage, ...(keyword ? { query: keyword } : {}) };

      let response = null;
      if (keyword === undefined) {
        switch (apiCategory) {
          case "movie":
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        response = await tmdbApi.search(category, { params });
      }

      const newResults = response.results || [];
      const nextSlice = newResults.slice(0, 5 - nextItems.length);

      setAllItems((prev) => [...prev, ...newResults]);
      setItems((prev) => [...prev, ...nextItems, ...nextSlice]);
      setPage(nextPage);
    }
  };

  const mappedCategory = category === "movies" ? "movie" : "tv";

  return (
    <section className="pb-8">
      <div
        className="relative px-1.5 py-8 pb-24 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent"></div>
      </div>

      <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
        {category === "movies"
          ? "Movies"
          : category === "tv-series"
          ? "TV Series"
          : "Search Results"}
      </h1>

      <div className="mb-10">
        <SearchInput category={category} keyword={keyword} />
      </div>

      <div className="grid place-items-center gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <ContentCardSkeleton key={idx} />
            ))
          : items.map((item, index) => (
              <ContentCard key={index} category={mappedCategory} item={item} />
            ))}
      </div>

      {!loading && (items.length < allItems.length || page < totalPage) ? (
        <div className="movie-grid__loadmore mt-4 text-center pt-6 pb-10">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
            onClick={loadMore}
          >
            Load more
          </button>
        </div>
      ) : null}
    </section>
  );
}
