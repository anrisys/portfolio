import SkillItem from "../../atoms/AboutSection/SkillItem";

function Skills() {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "MongoDB",
    "ORM (Sequelize)",
    "ODM (Mongoose)",
    "Git",
    "Github",
    "Wordpress",
    "Figma",
  ];

  return (
    <div className="flex flex-wrap justify-left">
      {skill.map((item, index) => (
        <SkillItem key={index} skillName={item} />
      ))}
    </div>
  );
}

export default Skills;
