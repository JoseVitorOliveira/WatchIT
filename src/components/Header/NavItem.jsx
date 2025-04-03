import { NavLink } from "react-router-dom";

export default function NavItem({ name, path }) {
  return (
    <li className="relative group">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `font-bold text-xl lg:text-2xl relative pb-2 block transition-colors
           ${isActive ? "text-white" : "text-gray-300 hover:text-blue-400"}`
        }
      >
        {({ isActive }) => (
          <>
            {name}
            <div
              className={`absolute bottom-0 left-0 w-full h-1 rounded-sm transition-all duration-300
              ${
                isActive
                  ? "bg-blue-500 scale-x-100"
                  : "bg-blue-400 scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </>
        )}
      </NavLink>
    </li>
  );
}
