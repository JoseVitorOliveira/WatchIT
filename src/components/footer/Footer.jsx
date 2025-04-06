import Logo from "../Header/Logo";
import footerBg from "../../assets/posters-bg.jpg";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "TV Shows", link: "/tv-series" },
    { name: "About Us", link: "/" },
    { name: "Contact Us", link: "/" },
  ],
  [
    { name: "Privacy Policy", link: "/" },
    { name: "Terms of Service", link: "/" },
    { name: "Help", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Blog", link: "/" },
  ],
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})` }}
      className="relative px-1.5 py-8 pb-24 bg-cover bg-no-repeat justify-center items-center flex flex-col text-white font-bold text-sm md:text-lg lg:text-xl gap-2"
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative z-10 flex items-center justify-center gap-2">
        <Logo />
      </div>
      <div className="relative z-10 flex justify-between w-full mx-auto mt-4 px-4 md:px-16 lg:flex-col lg:items-center lg:justify-center lg:gap-8">
        {FOOTER_LINKS.map((column, index) => (
          <ul key={index} className="flex flex-col gap-2 lg:flex-row lg:gap-12">
            {column.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-sm whitespace-nowrap hover:underline hover:text-blue-400 md:text-base lg:text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
}
