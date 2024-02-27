import PropTypes from "prop-types";
import ProjectImage from "../../atoms/ProjectSection/ProjectImage";
import ProjectDesc from "./ProjectDescription";

function Project({ imgSrc, imgAlt, title, role, desc, tech }) {
  return (
    <div className="flex items-center py-3">
      <ProjectImage src={imgSrc} alt={imgAlt} />
      <ProjectDesc title={title} role={role} description={desc} tech={tech} />
    </div>
  );
}

Project.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.string,
};

export default Project;
