import ContentSection from "../components/content-section/ContentSection";
import { category, movieType, tvType } from "../api/tmdb-api";
import Slide from "../components/Slide/Slide";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Slide />
        <ContentSection
          title={"Top Rated Movies"}
          category={category.movie}
          type={movieType.top_rated}
          link={"/movies"}
        />
        <ContentSection
          title={"Trending Movies"}
          category={category.movie}
          type={movieType.popular}
          link={"/movies"}
        />
        <ContentSection
          title={"Top Rated TV"}
          category={category.tv}
          type={tvType.top_rated}
          link={"/tv-series"}
        />
        <ContentSection
          title={"Trending TV"}
          category={category.tv}
          type={tvType.popular}
          link={"/tv-series"}
        />
      </main>
    </>
  );
}
