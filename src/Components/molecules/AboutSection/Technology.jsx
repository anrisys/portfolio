import { SkillItem, SkillsetTitle } from "../../atoms/AboutSection";

function Technology() {
  const tech = [
    "RESTful API",
    "Alibaba Cloud",
    "MySQL",
    "Node.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Github",
    "Tailwind",
    "Sequelize",
    "Github",
    "Figma",
    "Wordpress",
  ];

  return (
    <>
      <SkillsetTitle skillsetTitle={"Technology"} />
      <div className="flex gap-3 flex-wrap">
        {tech.map((lang, index) => (
          <SkillItem key={index} skillName={lang} />
        ))}
      </div>
    </>
  );
}

export default Technology;
