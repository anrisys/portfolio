import PropTypes from "prop-types";

function ProjectTech({ tech }) {
  return (
    <div className=" text-[#0A2E3B] text-left md:text-l lg:text-xl">
      <p className="leading-relaxed font-semibold">Highlight: {tech}</p>
    </div>
  );
}

ProjectTech.propTypes = {
  tech: PropTypes.string,
};

export default ProjectTech;
