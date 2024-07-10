import PropTypes from "prop-types";

function SectionTitle({ title }) {
  return (
    <h2 className="text-center mb-4 tracking-tight text-4xl font-extrabold dark:text-white">
      {title}
    </h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
