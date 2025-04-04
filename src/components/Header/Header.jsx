import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex w-full fixed top-0 left-0 z-50 py-8 px-4 md:px-8 lg:px-12">
      <div className="flex w-full max-w-7xl mx-auto justify-center md:justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
