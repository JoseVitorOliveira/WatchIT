import { Link } from "react-router-dom";
import MovieList from "./ContentList";

export default function ContentSection({ title, category, type, link }) {
  return (
    <section className="px-5 bg-dark-gray font-bold text-white pb-2">
      <div className="flex justify-between items-center pb-2 pt-2 md:pb-4">
        <p className="text-sm md:text-xl lg:text-2xl">{title}</p>
        <Link to={link}>
          <button className="text-[10px] border-white border-2 px-3 py-0.5 rounded-2xl md:text-sm lg:text-lg">
            View more
          </button>
        </Link>
      </div>
      <MovieList category={category} type={type} />
    </section>
  );
}
