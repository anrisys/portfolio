import { Link, animateScroll as scroll } from "react-scroll";

function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <Link
      to="top"
      className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider"
      onClick={scrollToTop}
    >
      anrisys
    </Link>
  );
}

export default Logo;
