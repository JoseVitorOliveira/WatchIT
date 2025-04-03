import { NavLink } from "react-router-dom";

export default function MobileNavItem({ name, path }) {
  return (
    <li className="flex-1">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex font-display font-bold flex-col items-center justify-center h-full transition-colors
           ${isActive ? "text-white" : "text-gray-400 hover:text-blue-400"}`
        }
      >
        {({ isActive }) => (
          <>
            {name}
            <div
              className={`mt-1 w-8 h-1 rounded-sm transition-all duration-300
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
