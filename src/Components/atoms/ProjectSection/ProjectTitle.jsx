import PropTypes from "prop-types";

function ProjectTitle({ title }) {
  return (
    <h2 className="mb-1 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      {title}
    </h2>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string,
};

export default ProjectTitle;
