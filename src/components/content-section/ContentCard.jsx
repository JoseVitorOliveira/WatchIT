import { Link } from "react-router-dom";
import apiConfig from "../../api/api-config";
import { Play } from "lucide-react";

export default function ContentCard({ item }) {
  const link = "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="group">
        <div
          className="relative bg-cover bg-no-repeat bg-center h-[215px] md:h-[340px] w-[130px] md:w-[210px] rounded-3xl overflow-hidden transition-all duration-300 ease-in-out"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="text-blue-400 w-8 h-8 md:w-12 md:h-12" />
          </div>
        </div>
        <div className="w-32 md:w-52">
          <h3 className="text-white text-xs font-bold pt-2 md:text-sm lg:text-lg break-words max-w-full group-hover:text-blue-400 transition-colors duration-300">
            {item.title || item.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
