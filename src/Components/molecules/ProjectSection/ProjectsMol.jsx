import Project from "./Project";
import { SectionTitle } from "../../atoms/General";

function ProjectMolecules() {
  return (
    <div className="flex-col py-8 lg:py-16">
      <SectionTitle title={"Projects"} />
      <Project
        imgSrc={"images/sayabafresh.png"}
        imgAlt={"SayabaFresh Image"}
        title={"SayabaFresh"}
        role={"Backend Developer"}
        desc={
          "An e-commerce application equipped with features that can simulate the flow of the buying and selling process."
        }
        tech={"Node.js, Express.js, MySQL, ORM (sequelize), Joi, JWT"}
      />
      <Project
        imgSrc={"images/anty-bullying.png"}
        imgAlt={"Anty-bullying Image"}
        title={"Anty-bullying"}
        role={"Backend Developer"}
        desc={
          "A web-app application where student can report bullying cases that they experience with every report made anonymous. This prototype is built to fight against school bullying."
        }
        tech={"Node.js, Express.js, MongoDB, ODM (mongoose), Joi, JWT"}
      />
      <Project
        imgSrc={"images/portfolio_screenshoot.png"}
        imgAlt={"Portfolio"}
        title={"Portfolio"}
        role={"Web Developer"}
        desc={
          "A web which aims to showcase the owner skills and to connect owner with potential bussiness partner"
        }
        tech={
          "Atomic Structure Architecture, React.js, Tailwind CSS, Flowbite, React Scroll, React rooter dom, Yup,"
        }
      />
    </div>
  );
}

export default ProjectMolecules;
