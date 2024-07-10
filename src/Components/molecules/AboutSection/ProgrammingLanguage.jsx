import { SkillItem, SkillsetTitle } from "../../atoms/AboutSection";

function ProgrammingLanguage() {
  const language = ["JavaScript", "TypeScript", "PHP", "SQL", "HTML", "CSS"];

  return (
    <>
      <SkillsetTitle skillsetTitle={"Programming Language"} />
      <div className="flex gap-3 flex-wrap">
        {language.map((lang, index) => (
          <SkillItem key={index} skillName={lang} />
        ))}
      </div>
    </>
  );
}

export default ProgrammingLanguage;
