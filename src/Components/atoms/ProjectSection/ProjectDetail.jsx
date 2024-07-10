import PropTypes from "prop-types";

function ProjectDetails({ description }) {
  return (
    <div className="text-[#0A2E3B] md:text-l lg:text-xl md:pl-5 lg:pl-5">
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}

ProjectDetails.propTypes = {
  description: PropTypes.string,
};

export default ProjectDetails;
