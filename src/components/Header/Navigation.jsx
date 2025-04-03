import { NavLink } from "react-router-dom";

const headerNav = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "Tv Series", path: "/tv-series" },
];

export default function Navigation() {
  return (
    <ul className="hidden md:flex space-x-4 lg:space-x-8">
      {headerNav.map((item) => (
        <NavItem key={item.name} name={item.name} path={item.path} />
      ))}
    </ul>
  );
}

function NavItem({ name, path }) {
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
