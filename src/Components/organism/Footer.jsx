import { Link } from "react-scroll";
import { useResponsiveOffest } from "../molecules/HeaderSection";

function Footer() {
  const offset = useResponsiveOffest();

  return (
    <footer className="p-2 bg-white border-gray-200 dark:border-gray-600 md:p-4 lg:p-6 border">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Anris Y Simorangkir
        </a> */}
        <Link
          to="home"
          smooth="true"
          offset={offset}
          className="flex justify-center cursor-pointer items-center text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-700"
        >
          Anris Y Simorangkir
        </Link>
        <p className="my-1 text-gray-400 dark:text-gray-400">
          Freelance Full Stack Developer focused on backend development
        </p>
        <ul className="flex flex-wrap justify-center items-center my-2 text-gray-900 dark:text-white">
          {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li> */}
          <Link
            to="home"
            smooth="true"
            offset={offset}
            className="mr-4 hover:text-blue-700 md:mr-6 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth="true"
            offset={offset}
            className="mr-4 hover:text-blue-700 md:mr-6 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth="true"
            offset={offset}
            className="mr-4 hover:text-blue-700 md:mr-6 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth="true"
            offset={offset}
            className="mr-4 hover:text-blue-700 md:mr-6 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
        {/* <NavList /> */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:text-blue-700">
            Anris Y Simorangkir
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
