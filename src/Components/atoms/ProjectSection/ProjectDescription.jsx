import PropTypes from "prop-types";

function ProjectDescription({ description }) {
  return (
    <p className="mb-1 font-light text-gray-500 md:text-lg dark:text-gray-400">
      {description}
    </p>
  );
}

ProjectDescription.propTypes = {
  description: PropTypes.string,
};

export default ProjectDescription;
