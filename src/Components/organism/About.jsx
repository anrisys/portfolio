import { SectionTitle } from "../atoms/General";
import {
  Brief,
  ProgrammingLanguage,
  Technology,
} from "../molecules/AboutSection";

function About() {
  return (
    <div name="about">
      <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <SectionTitle title={"About me"} />
        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2">
          <div>
            <Brief />
          </div>
          <div>
            <ProgrammingLanguage />
            <Technology />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
