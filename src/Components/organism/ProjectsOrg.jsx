import SectionTitle from "../atoms/General/SectionTitle";
import ProjectMolecules from "../molecules/ProjectSection/ProjectsMol";

function ProjectsOrg() {
  return (
    <div className="flex justify-center flex-col" id="projects">
      <SectionTitle title={"Projects"} />
      <ProjectMolecules />
    </div>
  );
}

export default ProjectsOrg;
