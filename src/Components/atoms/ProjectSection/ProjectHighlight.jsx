import PropTypes from "prop-types";

function ProjectHighlight({ highlight }) {
  return (
    <p className="mb-6 font-semibold text-gray-500 md:text-lg dark:text-gray-400">
      Highlight: {highlight}
    </p>
  );
}

ProjectHighlight.propTypes = {
  highlight: PropTypes.string,
};

export default ProjectHighlight;
