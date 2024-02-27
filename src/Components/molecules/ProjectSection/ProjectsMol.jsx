import Project from "./Project";

function ProjectMolecules() {
  return (
    <div className="w-full">
      <Project
        imgSrc={"images/sayabafresh.png"}
        imgAlt={"SayaFresh Image"}
        title={"SayaFresh"}
        role={"Backend Developer"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget diam lacinia, sollicitudin tellus ac, sagittis quam. Pellentesque accumsan feugiat ligula vel vulputate. Nullam arcu mi, tristique ac mauris in, aliquam sollicitudin metus. Pellentesque vitae orci lorem. Fusce quis finibus justo. Nunc et elit magna. Aenean fermentum est ut porttitor egestas. Donec volutpat volutpat tellus non molestie."
        }
      />
      <Project
        imgSrc={"images/sayabafresh.png"}
        imgAlt={"SayaFresh Image"}
        title={"SayaFresh"}
        role={"Backend Developer"}
        desc={
          "An e-commerce application equipped with features that can simulate the flow of the buying and selling process."
        }
        tech={"Node.js, Express.js, MySQL, ORM (sequelize), Joi, JWT"}
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
