import NavItem from "../../atoms/HeaderSection/NavItem";
import { Link } from "react-scroll";

function NavList() {
  return (
    <div className="flex space-x-10 px-5 ">
      <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>
        <NavItem link={"about"} name={"About"} />
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
        <NavItem link={"projects"} name={"Projects"} />
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>
        <NavItem link={"contact"} name={"Contact"} />
      </Link>
    </div>
  );
}

export default NavList;
