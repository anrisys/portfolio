import PropTypes from "prop-types";

function ProjectDetails({ description }) {
  return (
    <div className="text-[#0A2E3B] text-left text-s md:text-l lg:text-xl">
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}

ProjectDetails.propTypes = {
  description: PropTypes.string,
};

export default ProjectDetails;
