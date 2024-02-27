import PropTypes from "prop-types";

function NavItem({ name }) {
  return (
    <li className="list-none text-xl font-semibold md:text-2xl lg:text-3xl text-black hover:text-gray-300">
      {name}
    </li>
  );
}

NavItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
};

export default NavItem;
