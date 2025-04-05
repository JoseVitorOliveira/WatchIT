import { Tv } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" className="inline-flex">
      <div className="text-white flex items-center gap-1 transition-all duration-300 hover:text-blue-400 hover:scale-105">
        <Tv
          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-inherit"
          strokeWidth={2.5}
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-none text-inherit">
          WatchIT
        </h1>
      </div>
    </NavLink>
  );
}
