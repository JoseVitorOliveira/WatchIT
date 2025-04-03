import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const headerNav = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "Tv Series", path: "/tv-series" },
];

export default function Navigation() {
  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4 lg:space-x-8">
        {headerNav.map((item) => (
          <NavItem key={item.name} name={item.name} path={item.path} />
        ))}
      </ul>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
        <ul className="flex justify-around items-center h-16">
          {headerNav.map((item) => (
            <MobileNavItem key={item.name} name={item.name} path={item.path} />
          ))}
        </ul>
      </div>
    </>
  );
}
