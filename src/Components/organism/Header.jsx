import { useState } from "react";
import NavList from "../molecules/HeaderSection/NavList";
import { Link } from "react-scroll";
import {
  SocialMediaList,
  useResponsiveOffest,
} from "../molecules/HeaderSection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const offset = useResponsiveOffest();
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0  bg-white dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            spy={true}
            isDynamic={true}
            offset={offset}
            to="home"
            smooth="true"
            className="flex self-center items-center space-x-3 rtl:space-x-reverse cursor-pointer hover:text-blue-700"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              anrisys
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <SocialMediaList />
            <button
              onClick={handleMenuToggle}
              type="button"
              className="inline-flex self-center items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <NavList />
          </div>
        </div>
      </nav>
    </header>
  );
}
