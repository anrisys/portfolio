// import Logo from "../atoms/HeaderSection/Logo";
// import NavList from "../molecules/HeaderSection/NavList";
// import { Link } from "react-scroll";
import { useState } from "react";
// import { BurgerMenu } from "../../assets/icons";
import NavItem from "../atoms/HeaderSection/NavItem";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [showNavList, setShownNavList] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(true);

  const toggleBurgerMenu = () => {
    setShownNavList(!showNavList);
    setShowBurgerMenu(!showBurgerMenu);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <div
      className="px-4 sm:px-6 lg:px-8 bg-white flex justify-between items-center py-4 sticky leading-6 top-0 left-0 right-0 z-10"
      id="top"
    >
      <Link
        to="top"
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider"
        onClick={scrollToTop}
      >
        anrisys
      </Link>
      <div className="flex">
        <div
          className={`${
            showBurgerMenu ? "block" : "hidden"
          } md:hidden lg:hidden`}
          onClick={toggleBurgerMenu}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* <BurgerMenu onClick={toggleNavList} /> */}
        <div
          className={`flex space-x-10 px-5 ${
            showNavList ? "flex-col" : "hidden"
          } md:flex`}
        >
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>
            <NavItem link={"about"} name={"About"} />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <NavItem link={"projects"} name={"Projects"} />
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <NavItem link={"contact"} name={"Contact"} />
          </Link>
        </div>
        <div
          onClick={toggleBurgerMenu}
          className={`${showBurgerMenu ? "hidden" : "block"}`}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
