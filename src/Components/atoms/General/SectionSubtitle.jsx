import PropTypes from "prop-types";

function SectionSubtitle({ subtitle }) {
  <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
    {subtitle}
  </p>;
}

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default SectionSubtitle;
