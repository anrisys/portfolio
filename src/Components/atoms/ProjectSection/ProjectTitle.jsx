import PropTypes from "prop-types";

function ProjectTitle({ title }) {
  return (
    <h3 className="text-[#0A2E3B] text-left font-semibold text-xl md:text-2xl lg:text-3xl pb-1 pr-2">
      {title}
    </h3>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string,
};

export default ProjectTitle;
