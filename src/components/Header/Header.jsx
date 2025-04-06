import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the user has scrolled down more than 100px to change the header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex w-full fixed top-0 left-0 z-50 py-8 px-4 md:px-8 lg:px-12 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent border-t border-gray-800"
      }`}
    >
      <div className="flex w-full max-w-7xl mx-auto justify-center md:justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
