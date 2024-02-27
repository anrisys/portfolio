import PropTypes from "prop-types";
import ProjectTitle from "../../atoms/ProjectSection/ProjectTitle";
import ProjectGithub from "../../atoms/ProjectSection/ProjectGithub";
import ProjectRole from "../../atoms/ProjectSection/ProjectRole";
import ProjectDetails from "../../atoms/ProjectSection/ProjectDetail";
import ProjectTech from "../../atoms/ProjectSection/ProjectTech";

function ProjectDescription({ title, role, description, tech }) {
  return (
    <div className="w-3/4">
      <div className="flex items-center justify-left">
        <ProjectTitle title={title} />
        <ProjectGithub />
      </div>
      <div>
        <ProjectRole role={role} />
      </div>
      <div>
        <ProjectDetails description={description} />
      </div>
      <div>
        <ProjectTech tech={tech} />
      </div>
    </div>
  );
}

ProjectDescription.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  tech: PropTypes.string,
};

export default ProjectDescription;
