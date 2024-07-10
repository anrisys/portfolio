import { Link } from "react-scroll";
import { useResponsiveOffest } from "../molecules/HeaderSection";

function Hero() {
  const offset = useResponsiveOffest();
  return (
    <section className="bg-white dark:bg-gray-900" name="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi👋
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span className="text-blue-600 dark:text-blue-500">
              I&apos;m Anris Y. Simorangkir
            </span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Freelance Full Stack Developer focused on backend development.
          </p>
          <Link
            spy={true}
            isDynamic={true}
            offset={offset}
            to="projects"
            smooth="true"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 cursor-pointer"
          >
            My Projects
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            spy={true}
            isDynamic={true}
            offset={offset}
            to="contact"
            smooth="true"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer"
          >
            Contact me
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="mx-auto rounded-[40%] w-[25vw] h-auto object-contain border-[0.25rem] bg-[#1d4ed8]"
            src="images/anrisys.png"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
