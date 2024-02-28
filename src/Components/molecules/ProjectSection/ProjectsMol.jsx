import Project from "./Project";

function ProjectMolecules() {
  return (
    <div className="w-full">
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
        imgSrc={"images/sayabafresh.png"}
        imgAlt={"SayaFresh Image"}
        title={"SayaFresh"}
        role={"Backend Developer"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget diam lacinia, sollicitudin tellus ac, sagittis quam. Pellentesque accumsan feugiat ligula vel vulputate. Nullam arcu mi, tristique ac mauris in, aliquam sollicitudin metus. Pellentesque vitae orci lorem. Fusce quis finibus justo. Nunc et elit magna. Aenean fermentum est ut porttitor egestas. Donec volutpat volutpat tellus non molestie."
        }
      />
    </div>
  );
}

export default ProjectMolecules;
