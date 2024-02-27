import SectionTitle from "../atoms/General/SectionTitle";
import Brief from "../molecules/AboutSection/BriefAbout";
import Skillset from "../molecules/AboutSection/Skillset";

function About() {
  return (
    <div className="py-10" id="about">
      <SectionTitle title={"ABOUT ME"} />
      <div className="flex justify-between">
        <Brief />
        <Skillset />
      </div>
    </div>
  );
}

export default About;
