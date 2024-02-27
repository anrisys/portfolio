import PropTypes from "prop-types";

function SectionSubtitle({ subtitle }) {
  return <h2>{subtitle}</h2>;
}

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default SectionSubtitle;
